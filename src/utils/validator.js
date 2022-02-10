const formatEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const minPassword = 6;

const validator = (type, value) => {
    switch (type) {
        case 'email':
            if(formatEmail.test(value)) {
                return {
                    error: '',
                }
            }
            return {
                error: 'formato de email no valido: user@gmail.com',
                value
            }
        case 'password':
            if(value.length >= minPassword) {
                return {
                    error: '',
                }
            }
            return {
                error: `la contraseña debe tener al menos ${minPassword} caracteres`,
                value
            }
        default:
            return {
                error: '',
                value
            }
    }
}

export default validator;