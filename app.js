const txtArea = document.querySelector('#txt-area');
const btnTranslate = document.querySelector('#btn-translate');
const outputArea = document.querySelector('#output-area');

// const serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

const serverURL = 'https://api.funtranslations.com/translate/minion.json';

function fetchURL(txt) {
    return serverURL + '?' + 'text=' + txt;
}

btnTranslate.addEventListener('click', () => {

    const inputTxt = txtArea.value;

    fetch(fetchURL(inputTxt))
        .then(res => res.json())
        .then(json => {
            let result = json.contents.translated;
            outputArea.innerText = result;
        })
        .catch(error => console.log("error occurred " + error));

});
