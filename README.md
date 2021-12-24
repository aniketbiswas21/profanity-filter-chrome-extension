<!-- # profanity-filter-chrome-extension -->

<!-- [![Linked![logo]()
In][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/aniketbiswas21/profanity-filter-chrome-extension">
    <img src="https://user-images.githubusercontent.com/51146347/147242707-bb433bf3-3a06-48b4-9e2d-ff580acc2d3a.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Profanity Filter Chrome Extension</h3>

  <p align="center">
    Blocks unwanted explicit words
    <br />
<!--     <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a> -->
    <br />
<!--     <br /> -->
<!--     <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> -->
<!--     · -->
    <a href="https://github.com/aniketbiswas21/profanity-filter-chrome-extension/issues">Report Bug</a>
    ·
    <a href="https://github.com/aniketbiswas21/profanity-filter-chrome-extension/issues">Request Feature</a>
  </p>
</p>

[![GitHub issues](https://img.shields.io/github/issues/aniketbiswas21/profanity-filter-chrome-extension?logo=github)](https://github.com/aniketbiswas21/profanity-filter-chrome-extension/issues)
![Size](https://github-size-badge.herokuapp.com/aniketbiswas21/profanity-filter-chrome-extension.svg)



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#features">Features</a>
      </li>
    <li>
      <a href="#installation">Installation</a>
<!--       <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul> -->
    </li>
<!--     <li><a href="#documentation">Documentation</a></li> -->
<!--     <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
<!--     <li><a href="#contributors">Contributors</a></li>     -->
<!--     <li><a href="#license">License</a></li> -->
<!--     <li><a href="#contact">Contact</a></li> -->
<!--     <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://user-images.githubusercontent.com/51146347/147318735-1d5bef42-938b-445b-a6e2-1b1aab3c6ee6.png" height="600px" />

Profanity filter is a fully customizable chrome extension that blocks any explicit content that is present in the web page. 

### Built With

- [TypeScript](https://www.typescriptlang.org/) - Made use of typescript because of the elegant type system it provides, which aids in avoiding silly bugs in terms of passing the wrong data type and also for the code IntelliSense, which makes it easier to work.
- [ReactJS](https://reactjs.org/) - Made use of ReactJS because of the ease of development it provides in making a web app/chrome extension and the performance gains that come out of the box with React because of the use of Virtual DOM. 

<!-- FEATURES -->

## Features

- Blocks explicit content and replaces the text with a user-defined placeholder.
- Get a detailed report of all the explicit words.
- Add/Remove words to the whitelist and blacklist.
- Customizable placeholder.
- User settings sync across different devices using the same gmail account(if enabled).

<!-- GETTING STARTED -->

## Installation

- Clone the project.
- Run `yarn install`/`npm install`(depending on your preferred package manager) in the root of the project.
- Run `yarn run build`/`npm run build`(depending on your preferred package manager) in the root of the project.
- Copy the generated `build` folder in the root directory of the project to a destination of your choice.
- Open Google chrome and go the url: [chrome://extensions/](chrome://extensions/)
- You should see a page like the following:

  ![image](https://user-images.githubusercontent.com/51146347/147246130-4a0ca4c1-5bd1-4bac-a50e-9aa9d931d9b6.png)
- Enable the devloper mode(if not already)
- Click on load unpacked and select the `build` folder you copied eariler.
- You should now be able to see the `profanity-filter-chrome-extension` on the list.


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- [linkedin-url]: https://linkedin.com/in/othneildrew -->


