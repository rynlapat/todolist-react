import React, { useState, useEffect } from "react";
import axios from "axios";

const [list, setList] = useState([]);
const [todo, setTodo] = useState("");

useEffect(() => {
  getSelect();
}, []);
export function getSelect() {
  axios
    .get("http://localhost:3003/", { crossdomain: true })
    .then((response) => {
      console.log(response);
      setList(response.data);
    });
}
export function deleteData(delList) {
  console.log("เข้ามา" + delList);
  axios

    .delete(`http://localhost:3003/${delList}`)
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("ลบข้อมูลสำเร็จ");
      getSelect();
    });
}
export function getInsert() {
  axios
    .post("http://localhost:3003/", { list: todo })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("เพิ่มข้อมูลสำเร็จ");
      getSelect();
    });
}
