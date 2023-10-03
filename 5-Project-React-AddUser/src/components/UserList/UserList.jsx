import classes from "./UserList.module.css";
function UserList(props) {
  return (
    <ul className={classes.ul}>
      {props.data.map((user,index) => (
        <li className={classes.li} key={index}>
          {user.userName} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
}
export default UserList;
