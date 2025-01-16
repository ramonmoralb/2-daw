
const validarForm = (nombre, apellidos, direccion, telefono) => {
    document.querySelector(".error-nombre").innerHTML = ""
    document.querySelector(".error-apellidos").innerHTML = ""
    document.querySelector(".error-telefono").innerHTML = ""
    document.querySelector(".error-direccion").innerHTML = ""
    let valido = true;
    const patternNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternApellidos = /^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternDireccion = /^.{3,}$/;
    if (!patternNombre.test(nombre)) {
        document.querySelector(".error-nombre").innerHTML = "El nombre debe contener 5 caracteres, y no debe contener números ni espacios."
        valido = false;
    }
    if (!patternApellidos.test(apellidos)) {
        document.querySelector(".error-apellidos").innerHTML = "Los apellidos deben contener al menos 5 caracteres, y no debe contener números."
        valido = false;

    } if (!patternDireccion.test(direccion)) {
        document.querySelector(".error-direccion").innerHTML = "La direccion es erronea."
        valido = false;

    }
    if (!/^\d{9}$/.test(telefono)) {
        document.querySelector(".error-telefono").innerHTML = "El teléfono contener 9 dígitos númericos"
        valido = false;
    }
    return valido;
}
const validarPromt = (nombre, apellidos, direccion, telefono) => {

    let valido = true;
    const patternNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternApellidos = /^[A-Za-z\sÁÉÍÓÚáéíóúÑñ]{3,}$/;
    const patternDireccion = /^.{3,}$/;
    if (!patternNombre.test(nombre)) {
        valido = false;
    }
    if (!patternApellidos.test(apellidos)) {
        valido = false;
    } if (!patternDireccion.test(direccion)) {
        valido = false;
    }
    if (!/^\d{9}$/.test(telefono)) {
        valido = false;
    }
    return valido;
}
export { validarForm, validarPromt };