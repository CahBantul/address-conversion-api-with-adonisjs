"use strict";
const {
  responseJson,
  getData,
  filterById,
  filterByKeyValue,
} = require("../../../utils/helpers");

class AddressController {
  async showAllProvinsi({ auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const provinsi = data.address_provinsi;

      return responseJson(response, 200, [provinsi]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showProvinsi({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const provinsi = data.address_provinsi;

      const selectedProvinsi = filterById(provinsi, params.provinsi_id);
      if (selectedProvinsi == undefined)
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [{ nama: selectedProvinsi.nama }]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showAllKotaBaseOnProvinsiId({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kota = data.address_kota;

      const selectedKota = await filterByKeyValue(
        kota,
        "provinsi_id",
        params.provinsi_id
      );
      const mapKota = selectedKota.map((kota) => {
        return { nama: kota.nama, id: kota.id };
      });

      if (selectedKota == "")
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [mapKota]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showKota({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kota = data.address_kota;

      const selectedKota = filterById(kota, params.kota_id);
      if (selectedKota == undefined)
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [{ nama: selectedKota.nama }]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showAllKecamatanBaseOnKotaId({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kecamatan = data.address_kecamatan;

      const selectedKecamatan = await filterByKeyValue(
        kecamatan,
        "kota_id",
        params.kota_id
      );

      const mapKecamatan = selectedKecamatan.map((kec) => {
        return { nama: kec.nama, id: kec.id };
      });

      if (selectedKecamatan == "")
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [mapKecamatan]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showKecamatan({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kecamatan = data.address_kecamatan;

      const selectedKecamatan = filterById(kecamatan, params.kecamatan_id);
      if (selectedKecamatan == undefined)
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [{ nama: selectedKecamatan.nama }]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showAllKelurahanBaseOnKecamatanId({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kelurahan = data.address_kelurahan;

      const selectedKelurahan = await filterByKeyValue(
        kelurahan,
        "kecamatan_id",
        params.kecamatan_id
      );

      const mapKelurahan = selectedKelurahan.map((kel) => {
        return { nama: kel.nama, id: kel.id };
      });

      if (selectedKelurahan == "")
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [mapKelurahan]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }

  async showKelurahan({ params, auth, response }) {
    try {
      await auth.check();
      const data = await getData();
      const kelurahan = data.address_kelurahan;

      const selectedKelurahan = filterById(kelurahan, params.kelurahan_id);
      if (selectedKelurahan == undefined)
        return responseJson(response, 404, { message: "id not found!!!" });

      return responseJson(response, 200, [{ nama: selectedKelurahan.nama }]);
    } catch (error) {
      return responseJson(response, 401, { message: "unauthorized" });
    }
  }
}

module.exports = AddressController;
