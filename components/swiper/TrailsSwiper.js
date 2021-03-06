import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Platform,
  Text,
  useWindowDimensions,
} from "react-native";
import SwiperItemMySpace from "./SwiperItemMySpace";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { TOKEN } from "@env";
import DimensionsHook from "../../hooks/DimensionsHook";

const TrailsSwiper = ({ type, endpoint, navigation, showStateBar }) => {
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);
  const [loader, setLoader] = useState(true);
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(endpoint, { access_token: TOKEN });
    let Response2 = Response.data.slice(0, 3);
    setData(Response.data);
    setData2(Response2);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
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
    // console.log("isDesktop", isDesktop);
    return width >= 1300 ? (
      // Check if the user is in the main screen
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={false}
        numColumns={2}
        style={{ marginTop: 15, paddingLeft: 10 }}
        data={[0, 1, 2]}
        renderItem={() => <LoaderItem SwiperItem={true} />}
        keyExtractor={(item) => item.ressourceTitle}
      />
    ) : (
      <FlatList
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={true}
        numColumns={1}
        style={{ marginTop: 15, paddingLeft: 10 }}
        data={[0, 1, 2]}
        keyExtractor={(item) => item.ressourceTitle}
        renderItem={() => <LoaderItem />}
      />
    );
  }

  // FLATLIST WITH DATA
  // add CONDITION FOR FLAT LIST WITH 2 COL

  if (width >= 1300 && Data2 && Data) {
    return (
      <FlatList
        key={"#"}
        keyExtractor={(item) => "#" + item.ressourceTitle}
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={false}
        numColumns={2}
        style={{ height: "100%", width: "100%", paddingLeft: 10 }}
        data={Data2}
        renderItem={(props) => (
          <SwiperItemMySpace
            {...props}
            type={type}
            navigation={navigation}
            SwiperItem={true}
            showStateBar={showStateBar === true ? true : false}
          />
        )}
      />
    );
  } else {
    return (
      <FlatList
        key={"_"}
        keyExtractor={(item) => "_" + item.ressourceTitle}
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        horizontal={true}
        numColumns={1}
        style={{ width: "100%", paddingLeft: 10 }}
        data={Data}
        renderItem={(props) => (
          <SwiperItemMySpace {...props} type={type} navigation={navigation} />
        )}
      />
    );
  }
};

export default TrailsSwiper;
