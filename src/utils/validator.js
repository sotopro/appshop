const formatEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

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
        default:
            return {
                error: '',
                value
            }
    }
}

export default validator;