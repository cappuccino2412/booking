import axios from "axios";

export const createProfile = async (token,data) => {
  // console.log("createProfile Func",token,data);
  // return arg ที่ส่งจะมี 3 ตัว url data hearders
  return await axios.post("http://localhost:5000/api/profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
