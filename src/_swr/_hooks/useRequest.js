import useSwr from "swr";

const baseUrl = "http://localhost:8000";

export const useRequest = (path, name) => {
  if (!path) {
    throw new Error("Path is required");
  }
  console.log(path, name);
  // const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const url = name ? baseUrl + path + "/:" + name.join("/:") : baseUrl + path;
  console.log(url);
  const { data, error } = useSwr(url);
  console.log(data, error);
  return { data, error };
};
