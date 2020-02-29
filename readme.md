![Drag Racing](https://i.ibb.co/JtYZKpc/Group-10-2-1.png)

# Codewonders Helpers [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

This is a small helpers utility functions for javascript development. In here
are the regular functions i use in my development feel free to contribute.

## Helper Functions

### _Array Helpers_

- arrayRandomItem - This allows you pick a random item in an array see more
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/array-helpers.js)

- arrayPickOne - This allows you pick a random item with its index in an array
  see more
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/array-helpers.js)

- arrayShuffleItems - This allows you to switch array index on document loaded
  in an array see more
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/array-helpers.js)

- arrayRemove - This allows you to remove item from with a `cb` an array see
  more
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/array-helpers.js)

- join - This allows you to join items in an array with different seperators
  `start` and `end` in an array see more
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/array-helpers.js)

### _Bind Helper_

- bind - This allows you to bind functions / curried functions see more
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/bind.js).
  takes in `fn` , `context` , `boundArgs`

### _Collect Into Helper_

- collectInto - This collects functions into with an argument
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/collect-into.js).
  takes in `args`

### _Cookie To Object Helper_

- cookieToObject - Converts cookie to object
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/cookies-to-object.js).
  takes in `cookie`

### _Countries Helpers_

- countries-by-calling-code - Gets country and their call codes
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/countries-by-calling-code.js).

- countries-by-curreny-code - Gets country and their currency codes
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/countries-by-curreny-code.js).

- countries-by-states - Gets country and their states
  [here](https://github.com/adenekan41/helpers/blob/master/src/helpers/countries-by-states.js).

## Install

```sh
$ npm install codewonders-helpers --save
```

## Usage

Getting familiar with the package and you want to use some helper functions like
`isEmpty`, `isJsonString` ,`pxToRem` helpers and e.t.c you can easily just
export them the following ways.

```js
import { isEmpty } from 'codewonders-helpers';
```

All methods are exported as a flat namesapce so you can also call them like this

```js
import isEmpty from 'codewonders-helpers/bundle-es/is-empty';
```

or

```js
var isEmpty = require('codewonders-helpers');
```

and then we have the exported helpers and can already do this

```js
isEmpty({});
// => true
```

> MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
> [@adenekan41 / codewonders](https://github.com/adenekan41) >
> &nbsp;&middot;&nbsp;

<!-- {blockquote: style='display:none'} -->
