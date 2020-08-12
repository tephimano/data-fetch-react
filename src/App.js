import React from "react";
import { useRequest } from "./_swr/_hooks/useRequest";
import "./App.css";
import DisplayMessage from "./_swr/_src/DisplayMessage";

const App = () => {
  const { data: result, error } = useRequest("/getJsonData");

  if (error) return <h1>Something went wrong! {error.message}</h1>;
  if (!result) return <h1>Loading...</h1>;
  return (
    <div className="App">
      {result.map((values) => (
        <div key={values}>{values.name} </div>
      ))}
      <DisplayMessage />
    </div>
  );
};

export default App;

/*import Users from "./_react_query/Users";
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
*/
