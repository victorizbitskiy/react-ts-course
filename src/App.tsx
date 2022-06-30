import React from "react";
import Card, { CardVariant } from "./components/Card";
import { IUser } from "./components/types/types";
import UserList from "./components/UserList";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "Nepo",
      email: "nepo@mail.ru",
      address: { city: "Moscow", street: "Lenina", zipcode: "12345" },
    },
    {
      id: 1,
      name: "Karlsen",
      email: "nepo@mail.ru",
      address: { city: ", Тёнсберг", street: "Lenina", zipcode: "12345" },
    },
  ];
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
      <UserList users={users} />
    </div>
  );
};

export default App;
