const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

const theme = localStorage.getItem('theme');
const isSolar =localStorage.getItem('isSolar');

if(theme){
    body
}

// button event handlers

darkButton.onclick = () => {
    body.classList.replace('light','dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark','light');   
};

solarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarButton.style.cssText = 
        '--bg-solar: var(--yelow);'
        solarButton.innerText ='solarize';

    }    

    else{
        solarButton.style.cssText= '--bg-solar: white;'
        body.classList.add('solar');
        solarButton.innerText = 'normalize';
    }
};