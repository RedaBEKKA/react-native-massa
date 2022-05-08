import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../../../styles/GlobalStyle";
import data from "./data/QuizData";
import { H6, Txt } from "../../../../components/TextsComponents";
// import { CheckBox } from "react-native-elements";
import CheckBox from "../../../../components/CheckBox/useCheckBox";

const Questions = () => {
  const { width } = useWindowDimensions();
  const allQuestions = data;
  const ReponsesS2 = {
    flexDirection: width <= 800 ? "row" : "column",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 20,
  };
  const BoxResponse = {
    flexDirection: "row",
    alignItems: "center",
    height: 67,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 15,
    justifyContent: "center",
    width: width <= 800 ? "48%" : "100%",
  };
  const CustW = width <= 800 ? "90%" : width <= 1500 ? "60%" : "44%";

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);

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
            Question {currentQuestionIndex + 1}/{allQuestions.length}{" "}
          </Txt>
        </View>

        {/* Question */}
        <H6 style={{ textAlign: "center" }}>
          {allQuestions[currentQuestionIndex]?.question}
        </H6>
      </View>
    );
  };
  const CustW2 = width <= 800 ? "90%" : width <= 1500 ? "50%" : "100%";

  const [state, setState] = useState([]);

  const onchecked = (ItemSelected, index) => {
    let newIdata = allQuestions[currentQuestionIndex]?.possible_answers.map(
      (item, ind) => {
        if (ind == index) {
          return {
            ...item,
            // selected: !item.selected,
            // ItemSelected,
          };
        }
        // return {
        //   ...item,
        //   selected: false,
        //   ItemSelected: false,
        // };
      }
    );
    setState(newIdata);
  };
  console.log("state", state);

  const renderOptions = () => {
    return (
      <View style={{ alignSelf: "center" }}>
        {allQuestions[currentQuestionIndex]?.possible_answers.map(
          (option, index) => (
            <View
              style={{
                width: 350,
                marginRight: 15,
              }}
              key={index}
            >
              {/* reponse */}
              <View style={[styles.Reponses, { width: CustW2 }]}>
                <View style={styles.BoxResponse}>
                  <CheckBox
                    onPress={() => {
                      onchecked(option, index);
                    }}
                    title={option}
                    isChecked={state.length>0 ? true : false}
                  />
                </View>
              </View>
            </View>
          )
        )}
      </View>
    );
  };
  return (
    <View style={[styles.QuizContainer, { width: CustW }]}>
      {/* ProgressBar */}
      <ProgressBar
        style={[styles.ProgressBar, { width: "90%" }]}
        progress={0.21}
        color={colors.green2}
      />
      {/* renderQuestion */}
      {renderQuestion()}
      {/* renderOptions */}
      {renderOptions()}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  QuizContainer: {
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    paddingLeft: 0,
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
  },
  BoxResponse: {
    flexDirection: "row",
    alignItems: "center",
    height: 67,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 15,
  },
});

// const techResponse = (index) => {
//   setIsCheck(true);
//   setTimeout(() => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   }, 3000);
// };

// const scrollHandeler = () => {
//   if (dataSourceCords.length) {
//     // Ref.scrollTo({
//     //   x: dataSourceCords[val],
//     //   y: 0,
//     //   animated: true,
//     //   behavior: "smooth",
//     //   block: "start",
//     // });
//     Ref.current.scrollToIndex({ animated: true, index: val });
//   } else {
//     alert("error");
//   }
// };

{
  /* <FlatList
style={{}}
data={data}
ref={Ref}
keyExtractor={(item) => item.key}
contentContainerStyle={{ paddingLeft: _spacing }}
showsHorizontalScrollIndicator={false}
horizontal
getItemLayout={getItemLayout}
renderItem={({ item, index}) => {
  return <RenderQustions item={item} index={index} />;
}}
/> */
}

// const ItemView = (item, key) => {
//   return (
//     <View
//       key={key}
//       onLayout={(event) => {
//         const layout = event.nativeEvent.layout;
//         dataSourceCords[key] = layout.x;
//         setdataSourceCords(dataSourceCords);
//       }}
//     >
//       <Text style={{ marginLeft: 10 }}>{item.question}</Text>
//     </View>
//   );
// };

// <ScrollView
// style={{ width: 400 }}
// horizontal
// showsHorizontalScrollIndicator={false}
// ref={Ref}
// >
// {data.map(ItemView)}

// <RenderQustions
//   data={data}
//   dataSourceCords={dataSourceCords}
//   setdataSourceCords={setdataSourceCords}
// />
// </ScrollView>
// <FlatList
// style={{}}
// data={data}
// ref={ref}
// keyExtractor={(item) => item.key}
// contentContainerStyle={{ paddingLeft: _spacing }}
// showsHorizontalScrollIndicator={false}
// horizontal
// renderItem={({ item, index: fIndex }) => {
//   return <RenderQustions item={item} />;
// }}
// />
{
  /* cas 2 reponse */
}
{
  /* <View style={[ReponsesS2, { width: CustW2 }]}>
      <TouchableOpacity style={BoxResponse}>
        <Txt>Oui</Txt>
      </TouchableOpacity>
      <TouchableOpacity style={BoxResponse}>
        <Txt>Non</Txt>
      </TouchableOpacity>
    </View> */
}

{
  /* <View style={styles.BoxResponse}>
          <CheckBox
            onPress={() => {
              setChecked2(!checked2);
            }}
            title="Réponse 2"
            isChecked={checked2}
          />
        </View>
        <View style={styles.BoxResponse}>
          <CheckBox
            onPress={() => {
              setChecked3(!checked3);
            }}
            title="Réponse 3"
            isChecked={checked3}
          />
        </View>
        <View style={styles.BoxResponse}>
          <CheckBox
            onPress={() => {
              setChecked4(!checked4);
            }}
            title="Réponse 4"
            isChecked={checked4}
          />
        </View> */
}
