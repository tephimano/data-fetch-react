import React from "react";
import "./App.css";
import Users from "./_react_query/Users";
import { ReactQueryDevtools } from "react-query-devtools";

const App = () => {
  return (
    <div>
      <Users />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default App;
