# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) for practice


# solution code

### Project 1 ===> Color changer


```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((x)=>{
  console.log(x)
  x.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === 'grey') body.style.backgroundColor = e.target.id;
    if(e.target.id === 'white') body.style.backgroundColor = e.target.id;
    if(e.target.id === 'blue') body.style.backgroundColor = e.target.id;
    if(e.target.id === 'yellow') body.style.backgroundColor = e.target.id;

  });
});


```

### Project 2 ===> BMI CALCULATOR

```javascript

const form = document.querySelector('form');

form.addEventListener('submit',(x)=>{
  x.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  if(height === '' || isNaN(height) || height<0 || weight=== '' || isNaN(weight) ||weight<0) {
    results.innerHTML = 'Please Enter a valid number';
  }else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
    if(bmi<18.6) weightResult.innerHTML = `<span>Under weight</span>`;
    else if(bmi >=18.6 && bmi <=24.9) weightResult.innerHTML = `<span>Normal Weight</span>`;
    else weightResult.innerHTML = `<span>Over Weight</span>`
  }

  
});


```

### Project 3 ===> Digital Clock

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


### Project 4 ===> Random Number guessing

``` javascript
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame) {
  submit.addEventListener('click',function(e) {
    e.preventDefault()
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert('please enter a valid number');
  }else if(guess<1) {
    alert('please enter a number bigger than 1');
  }else if(guess>100) {
    alert('please enter a number less than 100');
  }else {
    prevGuess.push(guess)
    if(numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  }else if(guess < randomNumber) {
    displayMessage('Number is tOO low');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start new Game </h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame= true;
  });
}


```


### Project 5 ===>  Unlimited colors

myOwn made code 

``` javascript
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');


//generating a random color 

function colorChanger() {
  const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let generator= "";
  
  for(let i =0;i<6;i++) {
    const colorValue = hexVal[Math.floor(Math.random()*16)];
    generator+= colorValue;
  }
  
  return `#${generator}`;
}
start.addEventListener('click',function() {
  const x=setInterval(function(){
    document.body.style.backgroundColor = colorChanger();
    // console.log(colorChanger());
  },1000);
  stop.addEventListener('click',function(){
    clearInterval(x);
  })
})

// console.log(colorChanger());

```


### Project 6 ===>  keyboard

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keyword',(e)=>{
  insert.innerHTML = '
  <div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key=== " "? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
  ';
});


```



