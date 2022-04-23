<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lngach/dont-miss-punch">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Do Not Miss Punch</h3>

  <p align="center">
    An awesome extension to prevent your mouth from "OH SHIT"!!
    <br />
    <a href="https://github.com/lngach/dont-miss-punch"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lngach/dont-miss-punch">View Demo</a>
    ·
    <a href="https://github.com/lngach/dont-miss-punch/issues">Report Bug</a>
    ·
    <a href="https://github.com/lngach/dont-miss-punch/issues">Request Feature</a>
  </p>
</div>



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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](http://blueprint.cyberlogitec.com.vn/)

There are many people got headache from punch in punch out there. This extension is about to make a new revolution.

Here's why:
* Your time should be focused on creating something amazing than PUNCH. A project that solves a problem and helps others

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [Node.js](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Puppeteer](https://pptr.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Extension Setup

### Prerequisites

* MacOS
  - node
    ```sh
    brew install node
    ```
  - npm
    ```sh
    npm install npm@latest -g
    ```
  - Google Chrome

### Installation

1. Clone the repo
   ```sh
    git clone https://github.com/lngach/dont-miss-punch.git
   ```
2. Move in to repo
   ```sh
    cd dont-miss-punch
   ```
3. Install NPM packages & build
   ```sh
    npm install && npm run build
   ```
4. Create `.env` file with content below and change your info
   ```
    USER_NAME=[Your Blueprint username]
    PASSWORD=[Your Blueprint password]
    MAX_TRY=[Number of tries when failed](3)
   ```
5. Config crontab like below
   ```sh
    crontab -e
   ```
  - Every week days at `8:00, 8:15, 8:30`  and  `18:00, 18:15, 18:30`  + random `[0,15]` minutes
   ```sh
    0,15,30 8,18 * * 1-5 sleep $(($RANDOM\%15*60))m ; /path/to/dont-miss-punch/dist/execute.sh
   ```
6. Make sure to make execute.sh executable
   ```sh
    chmod u+x execute.sh
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Keep your device open and sleep.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

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

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Nah - [@Ngọc Nam](https://facebook.com/gack113) - nam.ngoc.le.97@gmail.com

Project Link: [https://github.com/lngach/dont-miss-punch](https://github.com/lngach/dont-miss-punch)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lngach/dont-miss-punch.svg?style=for-the-badge
[contributors-url]: https://github.com/lngach/dont-miss-punch/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lngach/dont-miss-punch.svg?style=for-the-badge
[forks-url]: https://github.com/lngach/dont-miss-punch/network/members
[stars-shield]: https://img.shields.io/github/stars/lngach/dont-miss-punch.svg?style=for-the-badge
[stars-url]: https://github.com/lngach/dont-miss-punch/stargazers
[issues-shield]: https://img.shields.io/github/issues/lngach/dont-miss-punch.svg?style=for-the-badge
[issues-url]: https://github.com/lngach/dont-miss-punch/issues
[license-shield]: https://img.shields.io/github/license/lngach/dont-miss-punch.svg?style=for-the-badge
[license-url]: https://github.com/lngach/dont-miss-punch/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lngach
[product-screenshot]: images/screenshot.png
