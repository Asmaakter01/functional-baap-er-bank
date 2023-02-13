function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


function getElementValueById(elementId) {
    const elementIdText = document.getElementById(elementId);
    const elementIdTextString = elementIdText.innerText;
    const elementIdTextFloat = parseFloat(elementIdTextString)
    return elementIdTextFloat;
}


function setElementValueById(elementId, newValue) {
    const elementIdText = document.getElementById(elementId);
    elementIdText.innerText = newValue;
}