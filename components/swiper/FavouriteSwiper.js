import React, { useState, useEffect } from "react";
import { FlatList, Platform, useWindowDimensions } from "react-native";
import axios from "axios";
import LoaderItem from "./LoaderItem";
import { TOKEN } from "@env";
import { useSelector } from "react-redux";
import SwiperItemFavourite from "./SwiperItemFavourite";

const FavouriteSwiper = ({ type, endpoint, navigation, showStateBar }) => {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const userInfo = useSelector((state) => state.userInfo);
  const getData = async () => {
    setLoader(true);
    userInfo?.favourite.map((id) => {
      axios
        .post(`${endpoint}/${id}`, {
          access_token: TOKEN,
        })
        .then((res) => {
          //   setData(...Data, res.data);
          //   setData(prev => ({...prev, Data: res.data}));
          // console.log('res.data', res.data)

          setData((prevState) => [...prevState, res.data]);
        });
    });

    // const Response = await axios.post(endpoint, { access_token: TOKEN });
    // let Response2 = Response.data.slice(0, 3);
    //setData(userInfo.favourite);
    // setData2(Response2);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getData();
      // console.log(Data, "data");
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
          data={Data}
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
