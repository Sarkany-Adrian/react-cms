
### UI
The view layer is built with the [React](https://reactjs.org) v.16.6.3 library which enables the composition of encapsulated components to build complex and dynamic layouts that update according to the application state.
For more information please read the [official docs](https://www.reactjs.org).
---
### State Management
The application state is managed with [Mobx](https://mobx.js.org/index.html) v.5.8.0, a state management solution that aims for ease of use and simplicity to aid development speed and developer experience all while providing app performance and reliability.
The core idea behind it is to make producing an inconsistent state impossible, by making sure everything that can be derived from the application state will be derived automatically.

- It operates on four major concepts:

1. Make state trackable for Mobx using the **[@observable](https://mobx.js.org/refguide/observable.html)** decorator
2. to create functions that can automatically derive their value from the state use the **[@computed](https://mobx.js.org/refguide/computed-decorator.html)** decorator
3. use **[reactions](https://mobx.js.org/refguide/autorun.html)** ( ex. mobx.autorun() ) which are essentially task runners governed by state changes, to produce side effects like logging, making api calls etc.
4. use **[mobx actions](https://mobx.js.org/refguide/action.html)** only and always on functions that modify state, to allow Mobx to track their invocations
**[Mobx-react](https://github.com/mobxjs/mobx-react)** provides aditional functionality to bridge React and Mobx.
---
### Testing

This project uses [Jest](https://jestjs.io/) as its testing environment, alogng with [Enzyme](https://github.com/airbnb/enzyme) which is a utility library to render react components into the DOM and query the DOM tree for assertions provided by [jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#readme).
---
### Typechecking

Typechecking is done with [Flow](https://flow.org/).
It understands [JavaScript](https://flow.org/en/docs/getting-started/) and also [React](https://flow.org/en/docs/react/) coding patterns, so you are required to do minimal work to describe your code, and Flow will infer the rest. Flow can even understand some of your code without any types. For it to watch a file you need to add ``` // @flow ``` at the beginning of the document. Please consult the appropiate pages of the [docs](https://flow.org/en/docs/) for [syntax](https://flow.org/en/docs/types/) and [usage](https://flow.org/en/docs/usage/).
