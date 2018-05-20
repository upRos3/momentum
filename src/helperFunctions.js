import API from "./api";

export default function apiCall(params) {
  return API.get(`users/${params}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
}
