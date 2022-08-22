import axios from "axios";

axios
  .get("http://localhost:3003/") //ตัวแปร+String
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
