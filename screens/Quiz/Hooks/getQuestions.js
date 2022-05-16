import { useEffect, useState } from "react";
import { TOKEN, ENDPOINT_QUESTIONS, ENDPOINT_ANSWERS } from "@env";
import axios from "axios";

export default function GetQuestions() {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loading, setloading] = useState(false);

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(ENDPOINT_QUESTIONS, {
      access_token: TOKEN,
    });
    setData(Response.data);
    setLoader(false);
  };

  const sendData = async (Arr, nav) => {
    let body = JSON.stringify({
      access_token: TOKEN,
      result: Arr,
    });
    console.log("body", body);
    try {
      if (TOKEN) {
        await axios
          .post(ENDPOINT_ANSWERS, body)
          .then((res) => {
            if (res.status == 201) {
              let Data = res.data;

              console.log("dataStatus--------------------", Data);
              nav.navigate("Message");
              setloading(false)
            }
          })
          .catch((err) => {
            console.log("--- error", err);
          });
      }
    } catch (error) {
      console.log("---  failed post ", error);
    }
  };

  return { Data, loader, getData, sendData,setloading ,loading};
}
