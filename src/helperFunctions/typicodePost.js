import API from "../api";

export default function typicodeApiPOST(path, payload) {
  return API.post(path, {
    payload
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
}
