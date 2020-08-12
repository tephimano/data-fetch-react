import React, { useState } from "react";
import { useRequest } from "../_hooks/useRequest";

const DisplayMessage = () => {
  const [url, setUrl] = useState("/");

  const { data: welcomeMessage, error } = useRequest(url);

  if (error) return <h1>Something went wrong!</h1>;
  if (!welcomeMessage) return <h1>Loading...</h1>;
  return (
    <div>
      {JSON.stringify(welcomeMessage, null, 2)} <br />
      <button
        type="button"
        onClick={() => {
          setUrl("/healthCheck");
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default DisplayMessage;
