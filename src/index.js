document.addEventListener("DOMContentLoaded", function() {
    
    class Person {
        constructor(data) {
            Object.assign(this, data); 
        }
    }

    const fields = [
        { name: "firstName", type: "text", placeholder: "First Name" },
        { name: "lastName", type: "text", placeholder: "Last Name" },
        { name: "nickName", type: "text", placeholder: "Nickname" },
        { name: "email", type: "email", placeholder: "Email Address" }
    ];
    const wrapper = document.createElement("div");
    wrapper.className = "form-wrapper";
    const title = document.createElement("h2");
    title.innerText = "Create Account";
    wrapper.appendChild(title);
    const form = document.createElement("form");
    fields.forEach(function(field) {
        const input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        input.className = "di";
        input.required = true;
        form.appendChild(input);
        if (field.name === "email") {
            const errorText = document.createElement("div");
            errorText.className = "message-for-error";
            errorText.id = "email-error-msg";
            errorText.innerText = "помилка валідації email";
            form.appendChild(errorText);
            input.addEventListener("input", function() {
                validateEmail(input, errorText);
            });
        }
    });
    function validateEmail(inputElement, errorMessageElement) {
        const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(inputElement.value);
        if (!isValid && inputElement.value !== "") {
            inputElement.classList.add("error-for-input");
            errorMessageElement.style.display = "block";
        } else {
            inputElement.classList.remove("error-for-input");
            errorMessageElement.style.display = "none";
        }
    }
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = "Create account";
    submitBtn.className = "submit-button";
    form.appendChild(submitBtn);

    wrapper.appendChild(form);
    document.body.appendChild(wrapper);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const emailInput = form.querySelector('input[name="email"]');
        const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            return;
        }
        const formData = new FormData(form);
        const data = {};
        formData.forEach(function(value, key) {
            data[key] = value;
        });
        const user = new Person(data);
        localStorage.setItem(user.lastName, JSON.stringify(user));
        form.reset();

    });
});