import React, { useState, useEffect } from "react";
import { FlatList, Platform, useWindowDimensions } from "react-native";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { useSelector } from "react-redux";
import SwiperItemFavourite from "./SwiperItemFavourite";
import { ENDPOINT_TRAILS, ENDPOINT_WORKSHOP, TOKEN } from "@env";

const FavouriteSwiper = ({ type, endpoint, navigation, showStateBar, ids }) => {
  const userInfo = useSelector((state) => state.userInfo);

  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);

  const [loader, setLoader] = useState(true);

  const getData = async () => {
    setLoader(true);
    ids.map((id) => {
      let isTrail = id.includes("T000");
      if (true) {
        axios
          .post(`${ENDPOINT_TRAILS}/${id}`, {
            access_token: TOKEN,
          })
          .then((res) => {
            setData(res.data);
            // console.log("Arr", Arr);
            // console.log("res.data", res.data);

            setLoader(false);
          });
      } else {
        // axios
        //   .post(`${ENDPOINT_WORKSHOP}/${id}`, {
        //     access_token: TOKEN,
        //   })
        //   .then((res) => {
        //     setData2(res.data);
        //     // console.log("res.data", res.data);
        //     setLoader(false);
        //   });
      }
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
    }
    return (mounted = false);
  }, []);
  const { width } = useWindowDimensions();

  // 3 Loader item to show
  if (loader) {
    return width >= 1300 ? (
      // Check if the user is in the main screen
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={false}
        numColumns={2}
        style={{ marginTop: 15, paddingLeft: 10 }}
        data={[0, 1, 2]}
        renderItem={() => <LoaderItem SwiperItem={true} />}
        keyExtractor={(item) => item}
      />
    ) : (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={true}
        numColumns={1}
        style={{ marginTop: 15, paddingLeft: 10 }}
        data={[0, 1, 2]}
        keyExtractor={(item) => item}
        renderItem={() => <LoaderItem />}
      />
    );
  }

  // FLATLIST WITH DATA
  // add CONDITION FOR FLAT LIST WITH 2 COL

  if (width >= 1300 && Data) {
    return (
      <FlatList
        key={"#"}
        keyExtractor={(item) => "#" + item.ressourceTitle}
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={false}
        numColumns={2}
        style={{ height: "100%", width: "100%", paddingLeft: 10 }}
        data={Data}
        renderItem={(props) => (
          <>
            <SwiperItemFavourite
              {...props}
              type={type}
              navigation={navigation}
              SwiperItem={true}
              showStateBar={showStateBar === true ? true : false}
            />
          </>
        )}
      />
    );
  } else {
    return (
      <>
        <FlatList
          key={"_"}
          keyExtractor={(item) => "_" + item.ressourceTitle}
          showsHorizontalScrollIndicator={Platform.OS === "web"}
          horizontal={true}
          numColumns={1}
          style={{ width: "100%", paddingLeft: 10 }}
          data={[...Data, ...Data2]}
          renderItem={(props) => (
            <SwiperItemFavourite
              {...props}
              type={type}
              navigation={navigation}
            />
          )}
        />
      </>
    );
  }
};

export default FavouriteSwiper;

// axios
//   .post(`${endpoint}/${id}`, {
//     access_token: TOKEN,
//   })
//   .then((res) => {
//     console.log("res", res.data);
//     setData((prevState) => [...prevState, res.data]);
//   });
