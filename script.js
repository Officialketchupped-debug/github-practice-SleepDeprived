const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundImage = `linear-gradient(
        50deg,
        hsl(120deg 100% 20%) 0%,  
        hsl(140deg 100% 30%) 20%,   
        hsl(160deg 100% 40%) 40%,   
        hsl(180deg 100% 45%) 60%,   
        hsl(200deg 100% 55%) 80%,   
        hsl(220deg 100% 60%) 100% 
        )`;
        body.style.color = '#333'; 
        body.style.transition = '1.5s ease';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
