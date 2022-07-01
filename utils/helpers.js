const fetch = use("cross-fetch");
const URL = "https://kasirpintar.co.id/allAddress.txt";

// getData function
const getData = async () => {
  const res = await fetch(URL);

  if (res.status >= 400) {
    throw new Error("Bad response from server");
  }

  const data = await res.json();
  return data;
};

// function filter by id
const filterById = (jsonObject, id) => {
  return jsonObject.filter((jsonObject) => {
    return jsonObject["id"] == id;
  })[0];
};

// function filter by kota_id
const filterByKeyValue = (jsonObject, key, value) => {
  const filteredKecamatan = jsonObject.filter((jsonObject) => {
    return jsonObject[key] == value;
  });
  return filteredKecamatan;
};

// status code
const messages = {
  200: "success",
  201: "data saved!",
  400: "not found",
  401: "unauthorized",
  404: "fail",
};

// function response json
const responseJson = (res, code, data) => {
  return res.status(code).json({ status: messages[code.toString()], data });
};

module.exports = { responseJson, getData, filterById, filterByKeyValue };
