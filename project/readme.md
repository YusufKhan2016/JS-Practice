### Projects related to DOM

# Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) for practice


# solution code

## Project 1 ===> Color changer

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

## Project 2 ===> BMI CALCULATOR

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

## Project 3 ===> Digital Clock

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

