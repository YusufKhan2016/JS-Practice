const name= document.querySelector('.name');
const followers = document.querySelector('.followers');
const picture = document.querySelector('.profile-picture');
const button = document.querySelector('.btn');

const xhr = new XMLHttpRequest();
const requestURL = 'https://api.github.com/users/hiteshchoudhary';
let data;
xhr.open('Get',requestURL);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        data = JSON.parse(this.responseText);
        console.log(data.avatar_url);
        button.addEventListener('click',function(){
            picture.innerHTML = '<img class="pic" src="https://avatars.githubusercontent.com/u/11613311?v=4" alt="">'
            
        });
    }
}
// xhr.onreadystatechange;


xhr.send();