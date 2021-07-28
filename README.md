# Practical React

In this project, I'm going to learn and explore some of the use full react packages that help me to create efficient and optimized UI/UX.

## React Icons

React Icons include popular icons in our React projects easily with react-icons, which utilizes ES6 imports that allows us to include only the icons that our project is using.

## Installation

```bash
yarn add react-icons
# or
npm install react-icons --save
```

#### Example usage

```jsx
import { FaBeer } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return (
      <h3>
        {" "}
        Lets go for a <FaBeer />?{" "}
      </h3>
    );
  }
}
```

## Authors

- [@react-icons - github](https://github.com/react-icons)
- [React Icons - github repo](https://github.com/react-icons/react-icons)

#

#

## React Toastify

React-Toastify allows you to add notifications to your app with ease. No more nonsense!

## Installation

```bash
yarn add react-toastify
# or
npm install --save react-toastify
```

#### Example usage

```jsx
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
```

## Authors

- [@Fadi Khadra - github](https://github.com/fkhadra)
- [React Toastify - github repo](https://github.com/fkhadra/react-toastify)

#

#

## React Modal

Accessible modal dialog component for React.JS

## Installation

```bash
yarn add react-modal
# or
npm install --save react-modal
```

#### Example usage

```jsx
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ReactModel = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setmodalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "red",
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <h2>Model Title</h2>
        <p>Model body</p>
        <div>
          <button onClick={() => setmodalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModel;
```

## Authors

- [@React Community - github](https://github.com/reactjs)
- [React Modal - github repo](https://github.com/reactjs/react-modal)

#

#

## Tippy.js for React

Tippy.js is the complete tooltip, popover, dropdown, and menu solution for the web, powered by Popper.

Tippy is an abstraction over Popper that provides common logic involved in all types of elements that pop out on top of the UI, positioned next to a target or reference element. This is a React wrapper for the core library, providing full integration including headless rendering abilities.

## Installation

```bash
npm i @tippyjs/react
# or
yarn add @tippyjs/react

```

#### Example usage

```jsx
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const StringContent = () => (
  <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
);

const JSXContent = () => (
  <Tippy content={<span>Tooltip</span>}>
    <button>My button</button>
  </Tippy>
);
```

## Authors

- [@James N - github](https://github.com/atomiks)
- [Tippy.js for React - github repo](https://github.com/atomiks/tippyjs-react)

#

#

## React CountUp

A configurable React component wrapper around CountUp.js.

## Installation

```bash
yarn add react-countup
# or
npm i react-countup

```

#### Example usage

```jsx
import React from "react";
import CountUp, { useCountUp } from "react-countup";

const ReactCountup = () => {
  return (
    <div>
      <h1>
        <CountUp end={200} duration={2} />
      </h1>
  );
};

export default ReactCountup;
```

## Authors

- [@Glenn Reyes - github](https://github.com/glennreyes)
- [Tippy.js for React - github repo](https://github.com/glennreyes/react-countup)
