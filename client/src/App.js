import './App.css';
import { Outlet,Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/todo-entry">Add</Link>  |{" "}
        <Link to="/list-todo">List</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
