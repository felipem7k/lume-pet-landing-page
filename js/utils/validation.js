export function validateName(name) {
    if (name.length < 3 || name.length > 50) {
        return false;
    }

    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    return nameRegex.test(name);
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone) {
    const phoneRegex = /^\(?[1-9]{2}\)?\s?9[0-9]{4}-?[0-9]{4}$/;
    return phoneRegex.test(phone);
}

export function validateMessage(message) {
    const messageRegex = /^[A-Za-zÀ-ÿ0-9\s.,!?'"()\-]+$/;
    return messageRegex.test(message);
}