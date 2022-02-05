const mixinLettersNumbers = {
    methods: {
        lettersNumbers(event) {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const isValid = /^[0-9a-zA-Z]+$/.test(keyValue);
            if (isValid) return keyValue;
            event.preventDefault();
        }
    }
};
export default mixinLettersNumbers;