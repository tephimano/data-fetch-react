import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchUsers } from "./Queries";

const config = { staleTime: 5000 };
const Users = () => {
  const [url, setUrl] = useState("http://localhost:8000/getJsonData");
  const { status, data, error } = useQuery(
    ["allUsers", url],
    fetchUsers,
    config
  );
  if (status === "loading") return <div>Loading Content, Please Wait ... </div>;
  if (error) return <div>Error : {error.message}</div>;

  return (
    <div>
      {JSON.stringify(data)}
      Status : {status}
      <button
        type="button"
        onClick={() => setUrl("http://localhost:8000/healthCheck")}
      >
        Check Health
      </button>
    </div>
  );
};

export default Users;
