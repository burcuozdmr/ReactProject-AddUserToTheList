import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

function AddUser(props) {
  const [enteredData, setEnteredData] = useState({ userName: "", age: "" });
  const changeInputHandler = (identifier, value) => {
    setEnteredData((prevData) => {
      return {
        ...prevData,
        [identifier]: value,
      };
    });  
};
  const submitHandler = (event) => {
    props.onGetData(enteredData);
    setEnteredData({ userName: "", age: "" });
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="userName" className={classes.label}>
        UserName
      </label>
      <input
        type="text"
        id="userName"
        defaultValue={enteredData.userName}
        onChange={(event) =>
          changeInputHandler("userName", event.target.value.trim())
        }
        className={classes.input}
      />
      <label htmlFor="age" className={classes.label}>
        Age(Years){" "}
      </label>
      <input
        type="number"
        id="age"
        defaultValue={enteredData.age}
        className={classes.input}
        onChange={(event) =>
          changeInputHandler("age", event.target.value.trim())
        }
      />
      <Button type="submit">Add User</Button>
    </form>
  );
}
export default AddUser;
