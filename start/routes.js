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

Route.post("/login", "AuthController.postLoginJwt").prefix("api/v1");
Route.group(() => {
  Route.get("/kecamatan/:id", "AddressController.showKecamatan");
  Route.get("/kelurahan/:id", "AddressController.showKelurahan");
  Route.get("/kota/:id", "AddressController.showKota");
  Route.get("/provinsi/:id", "AddressController.showProvinsi");
  Route.get(
    "/kota-id/:kota_id",
    "AddressController.showAllKecamatanBaseOnKotaId"
  );
})
  .middleware(["auth:jwt"])
  .prefix("api/v1");
