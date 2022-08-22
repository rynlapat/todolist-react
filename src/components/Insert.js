import React from "react";

function Insert() {
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
    <>
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
    </>
  );
}
export default Insert;
