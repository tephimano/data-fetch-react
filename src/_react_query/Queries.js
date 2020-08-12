import axios from "axios";

export const fetchUsers = async (key, url) => {
  const { data } = await axios.get(url);
  return data;
};
