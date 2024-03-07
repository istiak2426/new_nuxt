import axios from "axios";

export default defineEventHandler(async (event) => {
  const lol = "popopopopo";

  const response = await axios.get("https://reqres.in/api/users?page=2");

  const allData = response.data;

  return {
    lol: allData,
  };
});
