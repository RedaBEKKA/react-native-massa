import { useEffect, useState } from "react";
import { TOKEN ,ENDPOINT_QUESTIONS} from "@env";
import axios from "axios";

export default function GetQuestions() {
  const [Data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    setLoader(true);
    const Response = await axios.post(ENDPOINT_QUESTIONS, {
      access_token: TOKEN,
    });
    setData(Response.data);
    setLoader(false);
  };



  return {  Data, loader,getData };
}
