"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.post("/login", "AuthController.postLoginJwt");
  Route.get("/provinsi/:provinsi_id", "AddressController.showProvinsi");
  Route.get("/provinsi", "AddressController.showAllProvinsi");
  Route.get(
    "/all-kota/:provinsi_id",
    "AddressController.showAllKotaBaseOnProvinsiId"
  );
  Route.get("/kota/:kota_id", "AddressController.showKota");
  Route.get(
    "/all-kecamatan/:kota_id",
    "AddressController.showAllKecamatanBaseOnKotaId"
  );
  Route.get("/kecamatan/:kecamatan_id", "AddressController.showKecamatan");
  Route.get(
    "/all-kelurahan/:kecamatan_id",
    "AddressController.showAllKelurahanBaseOnKecamatanId"
  );
  Route.get("/kelurahan/:kelurahan_id", "AddressController.showKelurahan");
}).prefix("api/v1");
