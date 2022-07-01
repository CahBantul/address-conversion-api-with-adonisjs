"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");
const User = use("App/Models/User");

class UserSeeder {
  async run() {
    // const users = await Factory.model("App/Models/User").createMany(2);
    // console.log(users);
    const user1 = new User();
    user1.username = "usersatu";
    user1.password = "12345";
    user1.email = "user1@gmail.com";
    await user1.save();
    const user2 = new User();
    user2.username = "userdua";
    user2.password = "12345";
    user2.email = "user2@gmail.com";
    await user2.save();
    const users = await Database.table("users");
    console.log(users);
  }
}

module.exports = UserSeeder;
