//JAVASCRIPT FUNCIONAL

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botaoIniciar = document.getElementById('start');
const botaoReiniciar = document.getElementById('restart');






const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')   
        
    },   500);
}





const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/marioMorto.gif';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        botaoReiniciar.style.display = 'block'//faz com que o botão apareça após a morte do mario (inativo)
        clearInterval(loop);

    }


}, 10);


botaoIniciar.addEventListener('click', () => {
    
    botaoIniciar.style.display = 'none';
    document.addEventListener('keydown', jump);
    pipe.classList.add('animarPipe');
    nuvem.classList.add('animarNuvem');
    
})

botaoReiniciar.addEventListener('click', () => {
    location.reload(); 
}) //não funciona se a div restart do html estiver em comentario