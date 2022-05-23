import React, { useState, useEffect } from "react";
import { FlatList, Platform } from "react-native";
import SwiperItem from "./SwiperItem";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { ENDPOINT_TRAILS,ENDPOINT_WORKSHOP,TOKEN } from "@env";

// import Data from "./Data";

const SwiperR = ({
  type,
  navigation,
  showStateBar,
  ids,
}) => {
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);
  const [loader, setLoader] = useState(true);

  const getDataRéalisées = async () => {
    setLoader(true);
    ids.map((id) => {
      let isTrail = id.includes("T000");
      if (!isTrail) {
        axios
          .post(`${ENDPOINT_TRAILS}/${id}`, {
            access_token: TOKEN,
          })
          .then((res) => {
            setData(res.data);
            // console.log("Arr", Arr);
            console.log("res.data", res.data);

            setLoader(false)

          });
      } else {
        axios
          .post(`${ENDPOINT_WORKSHOP}/${id}`, {
            access_token: TOKEN,
          })
          .then((res) => {
            setData2(res.data);
            console.log("res.data", res.data);
            setLoader(false)


          });
      }
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getDataRéalisées();
    }
    return (mounted = false);
  }, []);

  // 3 Loader item to show
  if (loader) {
    return (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal
        style={{ marginTop: 15 }}
        data={[0, 1, 2]}
        keyExtractor={(item) => item}
        renderItem={() => <LoaderItem />}
      />
    );
  }

  // FLATLIST WITH DATA
  return (
    <FlatList
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      horizontal
      style={{ marginTop: 15 }}
      data={[...Data,...Data2]}
      keyExtractor={(item) => item.ressourceTitle}
      renderItem={(props) => (
        <SwiperItem
          {...props}
          type={type}
          navigation={navigation}
          showStateBar={showStateBar === true ? true : false}
        />
      )}
    />
  );
};

export default SwiperR;

