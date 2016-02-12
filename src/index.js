import { EncodeFilter } from './encode.filter';
import { DecodeFilter } from './encode.filter';


angular.module('angular-url-encode', [])
    .filter('bpcEncode', EncodeFilter)
    .filter('bpcDecode', DecodeFilter)
;

