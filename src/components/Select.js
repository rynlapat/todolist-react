import React, { useState, useEffect } from "react";
import axios from "axios";

function Select() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getSelect();
  }, []);
  function getSelect() {
    axios
      .get("http://localhost:3003/", { crossdomain: true })
      .then((response) => {
        console.log(response);
        setList(response.data);
      });
  }
  function deleteData(delList) {
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
  function getInsert() {
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
  return (
    <div>
      <form method="POST">
        <input
          className="myform"
          name="todo"
          placeholder="เพิ่มสิ่งที่ต้องการจะทำ"
          value={todo}
          onChange={(event) => {
            event.preventDefault();
            setTodo(event.target.value);
          }}
        />
        <button
          className="button2"
          onClick={(event) => {
            event.preventDefault();
            if (todo !== "") {
              getInsert();
              setTodo("");
            }
          }}
        >
          เพิ่ม
        </button>
      </form>
      <div>
        {list.map((element) => {
          return (
            <ul className="todoplay" key={element.id}>
              {element.list}
              <button className="button4">แก้ไข</button>

              <button
                className="button3"
                onClick={(event) => {
                  event.preventDefault();
                  deleteData(element.id);
                }}
              >
                ลบ
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
