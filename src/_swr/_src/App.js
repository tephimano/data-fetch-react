import React from "react";
import axios from "axios";
import "./App.css";
import useSWR from "swr";

const url = "http://localhost:8000/getJsonData";
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function App() {
  const { data: result, error } = useSWR(url, fetcher);

  if (error) return <h1>Something went wrong! {error.message}</h1>;
  if (!result) return <h1>Loading...</h1>;
  return (
    <div className="App">
      {result.map((values) => (
        <div>{values.name} </div>
      ))}
    </div>
  );
}

export default App;
