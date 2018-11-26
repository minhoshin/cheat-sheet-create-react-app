This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Add

Create-react-app V2 릴리즈! 무슨 변경 사항이 있을까?
https://velog.io/@velopert/create-react-app-v2

### '설치 및 사용'

$ npx create-react-app what-is-new
$ cd what-is-new
$ yarn start

### Sass, CSS Module 지원

Sass 와 CSS Module 을 yarn eject 하지 않고 사용

##### Sass

**Sass 를 사용하기 위해선, 사전에 node-sass 를 설치**

$ yarn add node-sass

src/MyComponent.js
```javascript
import React from 'react';
import './MyComponent.scss';

const MyComponent = () => {
  return (
    <div className="MyComponent">
      <div className="something-inside">Hello CRA v2</div>
    </div>
  );
};

export default MyComponent;
```

src/MyComponent.scss
```css
.MyComponent {
  background: black;
  color: white;
  padding: 1rem;
  .something-inside {
    background: white;
    color: black;
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
  }
}
```

src/App.js
```javascript
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

export default App;
```

##### CSS Module

**파일 생성시 파일이름.module.css 이런식으로 하시면 CSS Module 적용**

src/AnotherComponent.module.css
```css
.wrapper {
  background: gray;
  color: white;
  padding: 1rem;
  font-size: 2rem;
}
```

src/AnotherComponent.js
```javascript
import React from 'react';
import styles from './AnotherComponent.module.css';

const AnotherComponent = () => {
  return <div className={styles.wrapper}>What about CSS Module?</div>;
};

export default AnotherComponent;
```

src/App.js
```javascript
import React, { Component } from 'react';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
        <AnotherComponent />
      </div>
    );
  }
}

export default App;
```