import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to={"/users"}>Пользователи</NavLink>
        <NavLink to={"/todos"}>Список дел</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
