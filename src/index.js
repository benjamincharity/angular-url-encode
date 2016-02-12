import { EncodeFilter } from './encode.filter';
import { DecodeFilter } from './encode.filter';


angular.module('angular-encode-url', [])
    .filter('bpcEncode', EncodeFilter)
    .filter('bpcDecode', DecodeFilter)
;

