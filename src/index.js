document.addEventListener("DOMContentLoaded", () => {
  const accountMainContainer = document.createElement("div");
  accountMainContainer.classList.add("Account");
  const registrationHeader = document.createElement("header");
  const mainTitleHeading = document.createElement("h1");
  mainTitleHeading.textContent = "CREATE AN ACCOUNT";
  const subTitleDescription = document.createElement("p");
  subTitleDescription.textContent = "We always keep your name and email address private.";
  registrationHeader.append(mainTitleHeading, subTitleDescription);
  accountMainContainer.append(registrationHeader);
  const registrationForm = document.createElement("form");
  function generateFormFieldsRow(firstFieldConfiguration, secondFieldConfiguration) {
    const inputRowContainer = document.createElement("div");
    inputRowContainer.classList.add("inputs");
    const firstInputField = document.createElement("input");
    firstInputField.type = firstFieldConfiguration.fieldType;
    firstInputField.placeholder = firstFieldConfiguration.fieldPlaceholder;
    const secondInputField = document.createElement("input");
    secondInputField.type = secondFieldConfiguration.fieldType;
    secondInputField.placeholder = secondFieldConfiguration.fieldPlaceholder;
    inputRowContainer.append(firstInputField, secondInputField);
    return inputRowContainer;
  }
  registrationForm.append(
    generateFormFieldsRow(
      { fieldType: "text", fieldPlaceholder: "First name" },
      { fieldType: "text", fieldPlaceholder: "Last name" }
    )
  );
  registrationForm.append(
    generateFormFieldsRow(
      { fieldType: "text", fieldPlaceholder: "Display Name" },
      { fieldType: "email", fieldPlaceholder: "Email Address" }
    )
  );
  registrationForm.append(
    generateFormFieldsRow(
      { fieldType: "password", fieldPlaceholder: "Password" },
      { fieldType: "password", fieldPlaceholder: "Password Confirmation" }
    )
  );
  const roleSelectionContainer = document.createElement("div");
  roleSelectionContainer.classList.add("RoleChoice");
  function buildRoleSelectionOption(roleOptionTitle, roleOptionDescription, isOptionSelectedByDefault) {
    const roleLabelElement = document.createElement("label");
    roleLabelElement.classList.add("RoleCheck");
    const roleRadioButton = document.createElement("input");
    roleRadioButton.type = "radio";
    roleRadioButton.name = "role";
    if (isOptionSelectedByDefault) {
      roleRadioButton.checked = true;
    }
    const textDetailsContainer = document.createElement("span");
    textDetailsContainer.classList.add("inBox");
    const titleSpanElement = document.createElement("span");
    titleSpanElement.classList.add("title");
    titleSpanElement.textContent = roleOptionTitle;
    const explanationSpanElement = document.createElement("span");
    explanationSpanElement.classList.add("explanation");
    explanationSpanElement.textContent = roleOptionDescription;
    textDetailsContainer.append(titleSpanElement, explanationSpanElement);
    roleLabelElement.append(roleRadioButton, textDetailsContainer);
    return roleLabelElement;
  }
  const buyerRoleOption = buildRoleSelectionOption(
    "Join As a Buyer",
    "I am looking for a Name, Logo or Tagline for my business, brand or product.",
    true
  );
  const sellerRoleOption = buildRoleSelectionOption(
    "Join As a Creative or Marketplace Seller",
    "I plan to submit name ideas, logo designs or sell names in Domain Marketplace.",
    false
  );
  roleSelectionContainer.append(buyerRoleOption, sellerRoleOption);
  registrationForm.append(roleSelectionContainer);
  const marketingConsentContainer = document.createElement("div");
  marketingConsentContainer.classList.add("agree");
  const marketingConsentCheckbox = document.createElement("input");
  marketingConsentCheckbox.type = "checkbox";
  marketingConsentCheckbox.id = "consent";
  const marketingConsentLabel = document.createElement("label");
  marketingConsentLabel.htmlFor = "consent";
  marketingConsentLabel.textContent = "Allow Squadhelp to send marketing/promotional offers from time to time";
  marketingConsentContainer.append(marketingConsentCheckbox, marketingConsentLabel);
  registrationForm.append(marketingConsentContainer);
  const createAccountButton = document.createElement("button");
  createAccountButton.type = "submit";
  createAccountButton.classList.add("btn");
  createAccountButton.textContent = "Create account";
  registrationForm.append(createAccountButton);
  accountMainContainer.append(registrationForm);
  document.body.append(accountMainContainer);
});