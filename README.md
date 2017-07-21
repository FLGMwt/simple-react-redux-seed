# Redux Demo

## Setup

- `git clone {thisRepo}`
- `cd {this repo}`
- `yarn` or `npm install`
- `yarn run start` or `npm run start`

## Switching Pages

`src/index.js` should call out (`import`) to either `react-demo` or `make-redux`. Pick one to call and comment out the other.

`src/react-demo` calls out to one of four react demo app:

- `counter-app`: A simple counter React app
- `counter-app-complicated`: a counter component w/ a sibling renderer
- `counter-app-redux`: A simple counter React app using Redux for state
- `counter-app-redux-complicated`: a counter component w/ a sibling renderer using Redux for state

Leave one of the `ReactDOM.render` lines uncommented to see that application in the browser.