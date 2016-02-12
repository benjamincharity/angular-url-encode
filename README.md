# Angular URL-Encode Filter

A simple Angular filter to encode or decode a string using `encodeURIComponent` and `decodeURI`.


## Demo

[Plunkr](http://plnkr.co/edit/oPJZWt?p=preview)


## Installation

`$ bower install angular-url-encode --save`

Add `bc.AngularUrlEncode` to your module's dependencies:

```
angular.module('myModule', ['bc.AngularUrlEncode']);
```


## Usage

As a filter in the DOM:

```
{{ myPlainString | bcEncode }}
{{ encodedString | bcDecode }}
```

Using the `$filter` service in JS:

```
// Encode
this.encodedString = $filter('bcEncode')(myPlainString);

// Decode
this.decodedString = $filter('bcDecode')(encodedString);
```


- - -


### Development Scripts

* `npm run build` - produces production version of your library under the `dist` folder
* `npm run dev` - produces development version of your library and runs a watcher


- - -


[All idea and code contributions
welcome!](https://github.com/benjamincharity/angular-url-encode/issues)

