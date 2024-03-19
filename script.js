// here we are accessing all buttons from html document
const buttons = document.querySelectorAll('.button');

// accessing body tag
const body = document.querySelector('body');

buttons.forEach( function (btn) {
    // console.log(btn);
    btn.addEventListener('mouseover', function (e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = "tomato";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = "cornFlowerblue";
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = "orangered";
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
});

