export function EncodeFilter() {

    return encode;


    /**
     * URL-encode a string
     *
     * @param {String} input
     * @return {String} output
     */
    function encode(input) {
        return window.encodeURIComponent(input);
    }

}

