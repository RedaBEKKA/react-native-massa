import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../../../styles/GlobalStyle";
import { H6, Txt } from "../../../../components/TextsComponents";
// import { CheckBox } from "react-native-elements";
import CheckBox from "../../../../components/CheckBox/useCheckBox";
import GetQuestions from "../../Hooks/getQuestions";
import { SecondaryButton } from "../../../../components/Buttons";
import data from "./data/QuizData";
import Spinner from "../../../../components/Spinner";

const Questions = ({ navigateTo, navigation }) => {
  const { width } = useWindowDimensions();
  const { sendData, getData, loading, setloading } = GetQuestions();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return (mounted = false);
  }, []);
  const allQuestions = data;
  const CustW = width <= 800 ? "90%" : width <= 1500 ? "60%" : "44%";

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState([]);
  const [CurrentID, setCurrentID] = useState([]);
  const [Arr, setArr] = useState([]);
  const [Response, setReponses] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(allQuestions[currentQuestionIndex]?.possible_answers.length).fill(
      false
    )
  );
  const StyleRow = {
    alignSelf: "center",
    flexDirection: width <= 800 ? "row" : "row",
  };
  const StyleColumn = {
    alignSelf: "center",
  };
  const handleOnChange = (position, option) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    let filter = currentOptionSelected.includes(option);
    if (filter) {
      let itemsCopy = [...currentOptionSelected];
      var index = currentOptionSelected.indexOf(option);
      itemsCopy.splice(index, 1); // to delete one item from the new array
      setCurrentOptionSelected(itemsCopy);
      setReponses([...itemsCopy, itemsCopy]);
    } else {
      setCurrentOptionSelected([...currentOptionSelected, option]);
      setReponses([...Response, option]);
    }
  };
  const NextQuestion = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // laseQuest
      return;
    } else if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      return;
    }
  };
  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
          alignItems: "center",
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Txt>
            Question {currentQuestionIndex + 1}/{allQuestions.length}
          </Txt>
        </View>

        {/* Question */}

        {allQuestions[currentQuestionIndex]?.question ? (
          <H6 style={{ textAlign: "center" }}>
            {allQuestions[currentQuestionIndex]?.question}
          </H6>
        ) : (
          <View>
            <Txt>no question passer</Txt>
          </View>
        )}
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View
        style={
          allQuestions[currentQuestionIndex]?.possible_answers.length == 2
            ? StyleRow
            : StyleColumn
        }
      >
        {allQuestions[currentQuestionIndex]?.question ? ( //  if there is no answers
          allQuestions[currentQuestionIndex]?.possible_answers.map(
            (option, index) => (
              <View
                style={{
                  marginRight: 20,
                  flexDirection: "row",
                }}
                key={index}
              >
                {/* reponse */}
                <View
                  style={
                    allQuestions[currentQuestionIndex]?.possible_answers
                      .length == 2
                      ? styles.BoxResponse
                      : styles.BoxResponseWidht
                  }
                >
                  <CheckBox
                    onPress={() => {
                      handleOnChange(index, option);
                    }}
                    title={option}
                    checked={checkedState[index]}
                    index={index}
                  />
                </View>
              </View>
            )
          )
        ) : (
          <></>
        )}
      </View>
    );
  };

  useEffect(() => {
    let filterId = CurrentID.includes(allQuestions[currentQuestionIndex]?._id);
    if (filterId) {
      let itemsCopy = [...CurrentID];
      var index = CurrentID.indexOf(allQuestions[currentQuestionIndex]?._id);
      itemsCopy.splice(index, 1);
      setCurrentID(itemsCopy);
    } else {
      setCurrentID([allQuestions[currentQuestionIndex]?._id]);
    }
    if (currentQuestionIndex !== 0) {
      setCheckedState(
        new Array(
          allQuestions[currentQuestionIndex]?.possible_answers.length
        ).fill(false)
      );
      setArr([
        ...Arr,
        { question_id: CurrentID, answers: currentOptionSelected },
      ]);
      setCurrentOptionSelected([]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex > allQuestions.length - 1) {
      setloading(true);

      // just for test screen
      setTimeout(() => {
        setloading(false)
        navigation.navigate("Message");
      }, 5000);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex > allQuestions.length - 1) {
      sendData(Arr, navigation);
    }
  }, [loading]);
  const StepFromBac = (currentQuestionIndex * 100) / allQuestions.length;

  return (
    <>
      {loading ? (
        <View
          style={{
            position: "absolute",
            top: 300,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Spinner size={25}></Spinner>
        </View>
      ) : (
        <>
          <View style={[styles.QuizContainer, { width: CustW }]}>
            {/* ProgressBar */}
            <ProgressBar
              style={[styles.ProgressBar, { width: "95%" }]}
              progress={StepFromBac / 100}
              color={colors.green2}
            />
            {/* renderQuestion */}
            {renderQuestion()}
            {/* renderOptions */}
            {renderOptions()}
          </View>

          <View
            style={[
              styles.ButtonsBox,
              {
                width: width <= 800 ? "95%" : width <= 1500 ? "55%" : "22%",
                marginTop: width <= 800 ? 0 : 20,
              },
            ]}
          >
            <SecondaryButton style={{ width: "48%" }} onPress={navigateTo}>
              Quitter
            </SecondaryButton>

            {currentQuestionIndex == allQuestions.length - 1 ? (
              <SecondaryButton
                style={{ width: "48%" }}
                onPress={() => {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                }}
              >
                Envoyer
              </SecondaryButton>
            ) : (
              <SecondaryButton style={{ width: "48%" }} onPress={NextQuestion}>
                Suivant
              </SecondaryButton>
            )}
          </View>
        </>
      )}
    </>
  );
};

export default Questions;

const styles = StyleSheet.create({
  QuizContainer: {
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    marginTop: 10,
    marginTop: 30,
    flexDirection: "column",
    position: "relative",
  },
  ProgressBar: {
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "#D5CBCA",
    height: 13,
    marginTop: 10,
  },
  Reponses: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#ccc",
  },
  BoxResponse: {
    flexDirection: "row",
    alignItems: "center",
    height: 67,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 15,
    marginLeft: 10,
  },
  BoxResponseWidht:{
    flexDirection: "row",
    alignItems: "center",
    height: 67,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 15,
    marginLeft: 10,
    width:350,
    marginTop:10
  },
  ButtonsBox: {
    marginBottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
