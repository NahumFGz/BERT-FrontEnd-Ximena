import { rgxOnlyLetters } from '@/utils/patternsRegex';

const mixinOnlyLetters = {
    methods: {
        onlyLetters(event) {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValid = rgxOnlyLetters.test(keyValue);
            if (isValid) return keyValue;
            event.preventDefault();
        }
    }
};
export default mixinOnlyLetters;