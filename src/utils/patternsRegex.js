
// DNI
const rgxDNI = /^\d{1}$/;

// Solo Numeros [No espacio, No letras, No Caracteres especiales]
const rgxOnlyNumbers = /[0-9]/;

// Solo Letras [No espacio, No Números, No caracteres especiales]
// Letras Mayuscula / Miniscula
const rgxOnlyLetters = /[A-Za-zÀ-ú ñ]/;

// Regex para Letras y Espacio
// [No Numeros, No caracteres especiales]
const rgxLettersSpace = /^[a-zA-ZÀ-ú ñ\s]*$/;

//  Regex Alfanumeros with Space and Numbers [No Caracteres especiales]
const rgxAlphanumeric = /^[a-zA-ZÀ-ú0-9\s]+$/; //TODO: REVISAR REGEX

//  Regex Alfanumeros with Space and Numbers y tildes [No Caracteres especiales]
const rgxAlphanumericAccent = /^[a-zA-ZÀ-ú0-9\s]+$/;

// Regex Numeros, letras, espacio, underscore, guion, tildesÀ-ú
const rgxAlphanumericDocument = /^[0-9A-Za-z_\-°/* ]+$/;

// Regex Numeros, letras, espacio, underscore, guion
//const rgxAlphanumeric = /^[0-9A-Za-z_.-]+$/;


// 0-9]{2}/[0-9]{2}/[0-9]{4} -> Esto solo valida si son numeros
// el sgte regex valida la fecha [DD/MM/YYYY]
const formatDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/;

export {
    rgxOnlyNumbers,
    rgxOnlyLetters,
    rgxLettersSpace,
    rgxAlphanumeric,
    rgxDNI,
    formatDate,
    rgxAlphanumericAccent,
    rgxAlphanumericDocument
};
