const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
function displayList(data){
    if(data==[]){
        for(ele of data){
            let liElement = document.createElement('li');
            liElement.classList.add('list-group-item')
            liElement.innerText=ele['word'];
            rhymesOutput.append(liElement)
        }
    }
    else{
        rhymesOutput.innerText='no rhymes'
    }
}

showRhymesButton.addEventListener('click',()=>{
    while (rhymesOutput.firstChild) {
        rhymesOutput.removeChild(rhymesOutput.lastChild);
    }
    getRhymes(wordInput.value, displayList)
})

clearButton.addEventListener('click', ()=>{
    while (rhymesOutput.firstChild) {
        rhymesOutput.removeChild(rhymesOutput.lastChild);
    }
    wordInput.innerText = ''
})

