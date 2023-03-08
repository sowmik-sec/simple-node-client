import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleAddUser = (event) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <button type="submit">Add User</button>
      </form>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </div>
  );
}

export default App;
