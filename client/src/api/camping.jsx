import axios from "axios";

export const createCamping = async (token,data) => {
    // console.log("createCamping Func",token,data);
    // return arg ที่ส่งจะมี 3 ตัว url data hearders
    return await axios.post("http://localhost:5000/api/camping", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}

export const listCamping = async () => await axios.get("http://localhost:5000/api/camping")