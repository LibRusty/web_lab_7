function getRandomSize(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function validateInput(inputField) {
    if (inputField.value > 20) {
        inputField.value = 20;
    }
}

let highlightedElement = null;

function generateElement(typeOfBlock) {
    const countOfElements = parseInt(document.getElementById('element-count').value);
    for (let i = 0; i < countOfElements; i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block', typeOfBlock);
        
        let size, positionX, positionY;
        if (typeOfBlock === 'block-square') {
            size = getRandomSize(50, 200);
            newBlock.style.width = size + 'px';
            newBlock.style.height = size + 'px';
            positionX = Math.random() * (window.innerWidth - size) + 'px';
            positionY = Math.random() * (window.innerHeight - size) + 'px';
        } else if (typeOfBlock === 'block-triangle') {
            size = getRandomSize(50, 200);
            newBlock.style.borderLeft = size + 'px solid transparent';
            newBlock.style.borderRight = size + 'px solid transparent';
            newBlock.style.borderBottom = size + 'px solid blue';
            positionX = Math.random() * (window.innerWidth - 2 * size) + 'px';
            positionY = Math.random() * (window.innerHeight - size) + 'px';
        } else if (typeOfBlock === 'block-circle') {
            size = getRandomSize(50, 200);
            newBlock.style.width = size + 'px';
            newBlock.style.height = size + 'px';
            newBlock.style.borderRadius = '50%';
            positionX = Math.random() * (window.innerWidth - size) + 'px';
            positionY = Math.random() * (window.innerHeight - size) + 'px';
        }

        newBlock.style.left = positionX;
        newBlock.style.top = positionY;

        newBlock.addEventListener('click', () => {
            if (highlightedElement && highlightedElement !== newBlock) {
                highlightedElement.classList.remove('active');
                if (highlightedElement.classList.contains('block-triangle')) {
                    highlightedElement.style.borderBottomColor = 'blue';
                }
            }
            highlightedElement = newBlock;
            if (typeOfBlock !== 'block-triangle') {
                newBlock.classList.toggle('active');
            } else {
                newBlock.style.borderBottomColor = newBlock.style.borderBottomColor === 'blue' ? 'yellow' : 'blue';
            }
        });

        newBlock.addEventListener('dblclick', () => {
            newBlock.remove();
        });

        document.body.appendChild(newBlock);
    }
}
