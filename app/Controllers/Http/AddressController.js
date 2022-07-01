"use strict";
const fetch = require("cross-fetch");
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
const filterByKotaId = (jsonObject, kotaId) => {
  const filteredKecamatan = jsonObject.filter((jsonObject) => {
    return jsonObject["kota_id"] == kotaId;
  });
  return filteredKecamatan;
};

// status code
const messages = {
  200: "success",
  201: "data saved!",
  400: "not found",
  401: "unauthorized",
};

// function response json
const responseJson = (res, code, data) => {
  return res.status(code).json({ status: messages[code.toString()], data });
};

class AddressController {
  async showKecamatan({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kecamatan = data.address_kecamatan;

      const selectedKecamatan = filterById(kecamatan, params.id);
      if (selectedKecamatan == undefined)
        return responseJson(response, 200, [{ message: "id not found!!!" }]);

      return responseJson(response, 200, [{ nama: selectedKecamatan.nama }]);
    } catch (error) {
      return responseJson(response, 401, [{ message: "unauthorized" }]);
    }
  }

  async showProvinsi({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const provinsi = data.address_provinsi;

      const selectedProvinsi = filterById(provinsi, params.id);
      if (selectedProvinsi == undefined)
        return responseJson(response, 200, [{ message: "id not found!!!" }]);

      return responseJson(response, 200, [{ nama: selectedProvinsi.nama }]);
    } catch (error) {
      return responseJson(response, 401, [{ message: "unauthorized" }]);
    }
  }

  async showKelurahan({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kelurahan = data.address_kelurahan;

      const selectedKelurahan = filterById(kelurahan, params.id);
      if (selectedKelurahan == undefined)
        return responseJson(response, 200, [{ message: "id not found!!!" }]);

      return responseJson(response, 200, [{ nama: selectedKelurahan.nama }]);
    } catch (error) {
      return responseJson(response, 401, [{ message: "unauthorized" }]);
    }
  }

  async showKota({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kota = data.address_kota;

      const selectedKota = filterById(kota, params.id);
      if (selectedKota == undefined)
        return responseJson(response, 200, [{ message: "id not found!!!" }]);

      return responseJson(response, 200, [{ nama: selectedKota.nama }]);
    } catch (error) {
      return responseJson(response, 401, [{ message: "unauthorized" }]);
    }
  }

  async showAllKecamatanBaseOnKotaId({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kecamatan = data.address_kecamatan;

      const selectedKecamatan = await filterByKotaId(kecamatan, params.kota_id);
      const mapKecamatan = selectedKecamatan.map((kec) => {
        return { nama: kec.nama };
      });

      if (selectedKecamatan == "")
        return responseJson(response, 200, [{ message: "id not found!!!" }]);

      return responseJson(response, 200, [mapKecamatan]);
    } catch (error) {
      return responseJson(response, 401, [{ message: "unauthorized" }]);
    }
  }
}

module.exports = AddressController;
