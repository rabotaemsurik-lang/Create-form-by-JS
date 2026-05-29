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
    });
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = "Create account"; 
    submitBtn.className = "submit-button";
    form.appendChild(submitBtn);
    wrapper.appendChild(form);
    document.body.appendChild(wrapper);
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach(function(value, key) {
            if (key !== "password") {
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