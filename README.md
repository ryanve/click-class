# click-class
Angular `click-class` directive

## [Demo](https://ryanve.github.io/click-class/)

#### Toggle class on clicked element

```html
<button class="button" click-class="button--toggled">Toggle</button>
```

#### Toggle class on target element(s)
```html
<button class="button" click-class='{".target": ".target--toggled"}'>Toggle</button>
```

## Setup

#### Install via npm

```
npm install click-class --save
```

#### Declare dependency on your app

```js
angular.module('yourApp', ['clickClass'])
```

#### **Or** define the directive on your app

```js
angular.module('yourApp', []).directive('clickClass', require('click-class'))
```

## Develop

```
npm test
```
