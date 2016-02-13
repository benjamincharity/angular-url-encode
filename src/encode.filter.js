export function EncodeFilter(
    $window
) {
    'ngInject';

    return encode;


    /**
     * URL-encode a string
     *
     * @param {String} input
     * @return {String} output
     */
    function encode(input) {
        return $window.encodeURI(input);
    }

}

