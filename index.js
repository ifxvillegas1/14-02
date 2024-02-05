const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('mouseover',function () {
     const randomX = parseInt(Math.random()*500);
     const randomY = parseInt(Math.random()*500);
     yesbtn.style.setProperty('top',randomY+'%');
     yesbtn.style.setProperty('left', randomX+'%');
     yesbtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('click',function () {
    alert('Ve al segundo link 😋')
});