import "./App.css";
import { useState, useEffect } from "react";

import Axios from "axios";

function App() {
  const [ListOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/creatUser").then((response) => {
      alert("created");
    });
  };
  return (
    <div className="App">
      <div className="userdisplay">
        {ListOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>age: {user.age}</h1>
              <h1>username: {user.username}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input type="text " placeholder="name"></input>
        <input type="text " placeholder="age"></input>
        <input type="text " placeholder="username"></input>
        <button onClick={createUser}>CreateUser</button>
      </div>
    </div>
  );
}

export default App;
