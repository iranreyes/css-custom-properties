const containerElem = document.querySelector('.closure');
const varName = '--closureVar';
let initialValue = true;

function onButtonClick() {
    const currentVariableValue = getComputedStyle(containerElem).getPropertyValue('--closureVar');
    console.log('Current variable value: ', currentVariableValue);

    containerElem.style.setProperty(varName, initialValue ? '60px' : '30px');

    initialValue = !initialValue;
}

const buttonElem = document.querySelector('.action-button button');
buttonElem.onclick = onButtonClick;