export default function validate(inputs) {
    const errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d).{6,10}$/;

    if (!inputs.email) {
        errors.email = "El email no puede estar vacío.";
    } else if (inputs.email.length > 35) {
        errors.email = "El email no puede tener más de 35 caracteres.";
    } else if (!emailRegex.test(inputs.email)) {
        errors.email = "El email no es válido.";
    }

    if (!inputs.password) {
        errors.password = "La contraseña no puede estar vacía.";
    } else if (!passwordRegex.test(inputs.password)) {
        errors.password =
            "La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres.";
    }

    return errors;
}
