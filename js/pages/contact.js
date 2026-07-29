import { validateEmail, validateName } from "../utils/validation.js";

export default function initContactForm() {
    const form = document.getElementById('contact_form-form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const petName = form.querySelector('#pet-name').value.trim();
        const serviceType = form.querySelector('#service-type').value.trim();

        if (!name || !email || !message || !phone || !petName || !serviceType) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validateName(name)) {
            alert('Por favor, insira um nome válido (apenas letras e espaços, entre 3 e 50 caracteres).');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        alert('Formulário enviado com sucesso!');
    });
}