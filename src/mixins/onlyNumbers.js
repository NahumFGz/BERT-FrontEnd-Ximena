import { rgxOnlyNumbers } from '@/utils/patternsRegex';

const mixinOnlyNumbers = {
    methods: {
        onlyNumbers(event) {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValid = rgxOnlyNumbers.test(keyValue);
            if (isValid) return keyValue;
            event.preventDefault();
        }
    }
};
export default mixinOnlyNumbers;