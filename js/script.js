

// select elements

const form = document.querySelector('form');

const word = document.querySelector('#word');

const result = document.querySelector('.result');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // getData(form.elements[0].value);
    getData(word.value);4
})

const getData=async(word)=>{
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    // console.log(data);

    result.innerHTML = `<h2>${data[0].meanings[0].definitions[0].definition}</h2>`;
    // console.log('word' + word);

}