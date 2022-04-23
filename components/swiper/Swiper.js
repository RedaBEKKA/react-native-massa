import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Platform, Text } from "react-native";
import SwiperItem from "./SwiperItem";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { TOKEN } from "@env";
// import Data from "./Data";

const Swiper = ({ type, endpoint, navigation, showStateBar }) => {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(endpoint, {
      access_token: TOKEN,
    });
    setData(Response.data);

    setLoader(false);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
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
      data={Data}
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

export default Swiper;

const styles = StyleSheet.create({});
