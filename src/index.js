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
        { name: "email", type: "email", placeholder: "Email Address" },
        { name: "password", type: "password", placeholder: "Password" },
        { name: "confirmPassword", type: "password", placeholder: "Confirm Password" }
    ];

    const wrapper = document.createElement("div");
    wrapper.className = "form-wrapper";

    const title = document.createElement("h2");
    title.innerText = "Create Account";
    wrapper.appendChild(title);

    const errorBox = document.createElement("div");
    errorBox.className = "error-message";
    errorBox.innerText = "Помилка: Паролі не співпадають!";
    errorBox.style.display = "none"; 
    wrapper.appendChild(errorBox);

    const form = document.createElement("form");

    fields.forEach(function(field) {
        const input = document.createElement("input");
        input.type = field.type;
        input.name = field.name; 
        input.placeholder = field.placeholder;
        input.className = "di";
        input.required = true;
        form.appendChild(input);
    });

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = "Create account"; 
    submitBtn.className = "submit-button";
    form.appendChild(submitBtn);

    wrapper.appendChild(form);
    document.body.appendChild(wrapper);
    function validatePasswords() {
        const passwordInput = form.querySelector('input[name="password"]');
        const confirmPasswordInput = form.querySelector('input[name="confirmPassword"]');

        if (passwordInput.value !== confirmPasswordInput.value) {
            errorBox.style.display = "block"; 
            return false;
        } else {
            errorBox.style.display = "none"; 
            return true;
        }
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!validatePasswords()) {
            return; 
        }

        const formData = new FormData(form);
        const data = {};
        
        formData.forEach(function(value, key) {
            if (key !== "password" && key !== "confirmPassword") {
                data[key] = value;
            }
        });

        const person = new Person(data);

        if (person.lastName) {
            localStorage.setItem(person.lastName, JSON.stringify(person));
            console.log("Збережено:", person);
            form.reset();
        }
    });
});