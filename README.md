<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is my result for assessment test in PT. Kasir Pintar International.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This address conversion api build with :

- [Adonis.js](https://adonisjs.com/)
- [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an instructions on setting up project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

List things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- adonis cli
  ```sh
  npm install @adonisjs/cli -g
  ```
  for make sure you installed it, check with
  ```sh
  adonis --version
  ```

### Installation

1. Clone the repo and enter the directory
   ```sh
   git clone https://github.com/CahBantul/address-conversion-api-with-adonisjs.git && cd address-conversion-api-with-adonisjs
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. rename file `.env.sample` become `.env`. I use the default configuration
   note : if the APP_KEY doesn't exit, you can use command below
   ```sh
   adonis key:generate
   ```

4. migrating database

   ```sh
   adonis migration:run
   ```

5. seeding data dummy for user

   ```sh
   adonis seed
   ```

   after run it, two user adding in the database. For information the users you can see it in the log

   ```js
   [
     {
       id: 1,
       username: "usersatu",
       email: "user1@gmail.com",
       password: "$2a$10$iU9hgCpOMF16tjUH5Xufaubp3fkPInni0NSrgW1i82p7/MTCtFA42",
       created_at: "2022-07-01 13:26:33",
       updated_at: "2022-07-01 13:26:33",
     },
     {
       id: 2,
       username: "userdua",
       email: "user2@gmail.com",
       password: "$2a$10$4260QSjXGNlHH5sm4XzWGuU4mGCbEmpuQDkEuNJgUn32pg83nGTYS",
       created_at: "2022-07-01 13:26:35",
       updated_at: "2022-07-01 13:26:35",
     },
   ];
   ```

6. run the app
   ```sh
   adonis serve --dev
   ```
   the app running on [http://127.0.0.1:3333](http://127.0.0.1:3333)
   <p align="right">(<a href="#top" >back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

For postman documentation of this api _please refer to the [Documentation](https://documenter.getpostman.com/view/11537842/UzJERynq)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@fardannozami](https://twitter.com/fardannozami)

Project Link: [https://github.com/CahBantul/address-conversion-api-with-adonisjs.git](https://github.com/CahBantul/address-conversion-api-with-adonisjs.git)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

List resources helpful and I would like to give credit to.

- [https://legacy.adonisjs.com/docs/4.1/installation](https://legacy.adonisjs.com/docs/4.1/installation)
- [Membuat api sederhana dengan framework adonis 4.1](https://zackstam.medium.com/membuat-base-api-sederhana-dengan-framework-adonis-4-1-a332978bc94)
- [Membuat Authentication JWT di AdonisJS](https://zackstam.medium.com/membuat-authentication-jwt-di-adonisjs-cc9f320748d2)
- [Adonis Tutorial — JWT Authentication](https://www.techiediaries.com/adonis-jwt-authentication/)
- [Adonis Tutorial — CRUD REST API and JWT Authentication](https://www.techiediaries.com/adonis-tutorial-rest-api/)
- [Panduan Singkat Menggunakan Postman](https://kotakode.com/blogs/16235/Panduan-Singkat-Menggunakan-Postman)

<p align="right">(<a href="#top">back to top</a>)</p>
