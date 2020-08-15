const { toast } = require("react-toastify");

export const ToasError = (error) => {
    let message = null;
    if(typeof error === 'object' && error.message) {
        message = error.message;
    }
    if(message !== null && message !== '' && typeof message !== 'undefined') {
        toast.error(message);
    }
}