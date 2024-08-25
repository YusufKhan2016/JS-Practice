const nickname= document.querySelector('.name');
const follower = document.querySelector('.followers');
const picture = document.querySelector('.profile-picture');
const button = document.querySelector('.btn');

const xhr = new XMLHttpRequest();
const requestURL = 'https://api.github.com/users/hiteshchoudhary';
let data;
xhr.open('Get',requestURL);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        data = JSON.parse(this.responseText);
        button.addEventListener('click',function(){

            // image section edit 


            console.log(data);
            picture.innerHTML = '';
            const pic = document.createElement('img');
            pic.src = data.avatar_url;
            pic.className = "pic";
            // pic.style.borderRadius = "50%"
            picture.appendChild(pic);


            // text section edit 
            nickname.textContent = data.name;

            follower.textContent = data.followers;

        });
    }
}
// xhr.onreadystatechange;


xhr.send();