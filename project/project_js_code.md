#Projects related to DOM

#Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


#solution code

#Project 1 ===> Color changer

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