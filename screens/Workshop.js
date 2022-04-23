import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackHeader from "../components/BackHeader";
import { colors } from "../styles/GlobalStyle";

import { TOKEN, ENDPOINT_WORKSHOPS } from "@env";
import Spinner from "../components/Spinner";
import axios from "axios";
import WorkshopVideo from "../components/videos/WorkshopVideo";

const Workshop = ({ navigation, route }) => {
  let { id } = route.params;

  const [loader, setLoader] = useState(true);

  const [data, setData] = useState(null);
  const getData = async () => {
    setLoader(true);
    const payload = { access_token: TOKEN };
    const Response = await axios.post(`${ENDPOINT_WORKSHOPS}/${id}`, payload);

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

  if (loader) {
    return (
      <View style={styles.loadingContainer}>
        <Spinner size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackHeader navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WorkshopVideo data={data[0]} />
      </View>
    </View>
  );
};

export default Workshop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  },
  loadingContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
