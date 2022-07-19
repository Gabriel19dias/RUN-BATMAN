const batman= document.querySelector('.batman');
const pipe=document.querySelector('.pipe');




const jump = () => {
    batman.classList.add('jump');

    setTimeout( () => {

    batman.classList.remove('jump')},500 );


}

document.addEventListener('keydown',jump);











const loop = setInterval ( () => {

    
    const pipePosition = pipe.offsetLeft ;
    const batmanPosition = +window.getComputedStyle(batman).bottom.replace('px','');

    console.log(batmanPosition);
 
     if (pipePosition <= 120 && pipePosition> 0 && batmanPosition < 80) {

        pipe.style.animation='none';
        pipe.style.left = `${pipePosition} px`;

        batman.style.animation = `none`;
        batman.style.bottom = `${batmanPosition} px`;

        batman.src='./img/game-over-3.png';



     }

},10);

