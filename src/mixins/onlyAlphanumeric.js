import { rgxAlphanumeric, rgxAlphanumericDocument } from '@/utils/patternsRegex';

const mixinAlphanumeric = {
    methods: {
        onlyAlphanumeric(event) {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValid = rgxAlphanumeric.test(keyValue);
            if (isValid) return keyValue;
            event.preventDefault();
        },
        mxNumberDocument() {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValid = rgxAlphanumericDocument.test(keyValue);
            if (isValid) return keyValue;
            event.preventDefault();
        }
    }
};
export default mixinAlphanumeric;