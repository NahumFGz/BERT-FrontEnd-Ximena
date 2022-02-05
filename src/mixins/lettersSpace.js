import { rgxLettersSpace } from '@/utils/patternsRegex';

const mixinLettersSpace = {
    methods: {
        lettersSpace(event) {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValid = rgxLettersSpace.test(keyValue);
            if (isValid) return keyValue;
            event.preventDefault();
        }
    }
};
export default mixinLettersSpace;