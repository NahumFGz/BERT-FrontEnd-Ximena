// Mixin para rules en formularios

/**
 * Restringe la cantidad de Caracteres en un Input
 * @param length:number, cantidad de caracteres permitidos
 */
const ruleMaxLengthChars = (length) => {
  return (v) => v.length <= length || `Maximo ${length} caracteres`;
};

/*
 * Validacion de campo obligatorio fuerte, remueve el espacio en blanco usando trim()
 */
const ruleEmptyRequired = (v) => {
  return !!(v ? v.trim() : v) || "Campo obligatorio";
};

const mxRules = {
  methods: {
    ruleMaxLengthChars,
    ruleEmptyRequired,
  },
};
export default mxRules;
