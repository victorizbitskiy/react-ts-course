import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { IUser } from "./types/types";
import UserList from "./components/UserList";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  fetchUsers();
  useEffect(() => {}, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClick={(num) => {
          console.log("click", num);
        }}
      >
        <button>Кнопка</button>
        <div>Текст</div>
      </Card>
      <List 
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id}/> }
      />
    </div>
  );
};

export default App;
