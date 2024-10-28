document.onload = () => {
    const allDivs = document.querySelectorAll('div');
    console.log('Todos los divs');

    for (let div of allDivs) {
        console.log(div);
    }

    const buttonsClassElements = document.querySelectorAll('.buttons');
    console.log('Elementos con clase "buttons":');
    for (let button of buttonsClassElements) {
        console.log(button);
    }

    const oneButtonDiv = document.querySelector('.buttons');
    console.log('div "button":', oneButtonDiv);

    const allButtonDivs = document.querySelectorAll('.buttons');
    console.log('divs "buttons":');
    for (let buttonDiv of allButtonDivs) {
        console.log(buttonDiv);
    }
};