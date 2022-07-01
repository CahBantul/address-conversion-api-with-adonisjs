"use strict";
const {
  responseJson,
  getData,
  filterById,
  filterByKotaId,
} = require("../../../utils/helpers");

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
