import API from "./api";

export default function typicodeApiCall(path, params) {
  console.log(path + " " + params);
  if (!params) {
    return API.get(path)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  return API.get(`${path}/${params}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
}
