import { EncodeFilter } from './encode.filter';
import { DecodeFilter } from './decode.filter';

angular.module('bc.AngularUrlEncode', [])
    .filter('bcEncode', EncodeFilter)
    .filter('bcDecode', DecodeFilter)
;

