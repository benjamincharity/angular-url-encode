# angular-url-encode

[![MIT License][license_image]][license_url] [![NPM version][npm_version_image]][npm_url]

:arrows_counterclockwise: A simple Angular filter to URL-encode or decode a string using `encodeURI`
and `decodeURI`.

> [**:tv: Demo**][demo]

_[Comments and Pull Requests welcome!][issues]_

---

## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Development](#development)

## Dependencies

- AngularJS (^1.4.0)


## Installation

#### NPM

```bash
$ npm install angular-url-encode --S
```

#### Bower

```bash
$ bower install angular-url-encode --S
```

#### Manually

Add the script and styles to your HTML:

```html
<script src="../path/to/angular-url-encode/dist/angular-url-encode.js"></script>
```

Add `bc.AngularUrlEncode` to your module's dependencies:

```javascript
angular.module('myModule', ['bc.AngularUrlEncode']);
```


## Usage

#### HTML

As a filter in the DOM:

```html
<p>{{ myPlainString | bcEncode }}</p>
<p>{{ encodedString | bcDecode }}</p>
```

#### JavaScript

Using the `$filter` service:

```javascript
// Encode
this.encodedString = $filter('bcEncode')(this.myPlainString);

// Decode
this.decodedString = $filter('bcDecode')(this.encodedString);
```


- - -


## Development

* `npm run build` - produces production version of your library under the `dist` folder
* `npm run dev` - produces development version of your library and runs a watcher


- - -


[demo]: http://codepen.io/benjamincharity/pen/wzyNqQ?editors=1000
[issues]: https://github.com/benjamincharity/angular-url-encode/issues
[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-url-encode
[npm_version_image]: http://img.shields.io/npm/v/angular-url-encode.svg

