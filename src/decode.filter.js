export function DecodeFilter(
    $window
) {
    'ngInject';

    return decode;


    /**
     * Decode an encoded URL string
     *
     * @param {String} input
     * @return {String} output
     */
    function decode(input) {
        return $window.decodeURI(input);
    }

}

