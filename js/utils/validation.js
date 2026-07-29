export function validateName(name) {
    if (name.length < 3 || name.length > 50) {
        return false;
    }

    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    return nameRegex.test(name);
}