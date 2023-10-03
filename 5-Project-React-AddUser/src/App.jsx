import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import Card from "./components/Card/Card";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import UserList from "./components/UserList/UserList";

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userInputData = (userInput) => {
    console.log(userInput);
    if (userInput.userName && userInput.age ) {
      setData([...data, userInput]);
    } else {
      setIsModalOpen(true);
    }
  };
 
  
  return (
    <div>
      <Card>
        <AddUser onGetData={userInputData}></AddUser>
      </Card>
      {data.length > 0 && (
        <Card>
          <UserList data={data}></UserList>
        </Card>
      )}
      {isModalOpen && (
        <ErrorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></ErrorModal>
      )}
    </div>
  );
}

export default App;
