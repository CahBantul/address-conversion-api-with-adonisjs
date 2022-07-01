"use strict";

class AuthController {
  async postLoginJwt({ request, auth }) {
    try {
      const { email, password } = request.all();
      return auth
        .authenticator("jwt")
        .withRefreshToken()
        .attempt(email, password);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthController;
