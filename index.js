let openButton = document.querySelector('.openBtn')

openButton.addEventListener('click', function () {
    let slider = document.querySelector('.slider')

    slider.classList.toggle('sliderOpen')
})
let arrNum = ['90','91','93','94','95','97','98','99']
function checkTelNum(correctNum){
    let corNum = correctNum[0] + correctNum[1]
    for(i=0;i < arrNum.length;i++) {
        if(corNum == arrNum[i]) {
            return true
        }
    }
}
document.querySelector('.sbmt').onclick = function(){
    let regionNum = document.querySelector('.region').value
    let correctNum = document.querySelector('.telNum').value
    
    if (regionNum == '+998' && correctNum.length == 9 && checkTelNum(correctNum) == true) {
        alert("Кодовый номер Узбекистана")
    } else {
        alert('Кодовый номер другой страны')
    }
}


/* KeyboardBlock start */
const display = document.querySelector('.keyboard-display')
const keys = document.querySelectorAll('.key')

keys.forEach((item) => {
    item.addEventListener('click', (e) => {
        let keyText = e.target.textContent;
        
        if(keyText === 'space') {
            keyText = ' ';
        }
        if(keyText === 'backspace') {
            display.value = display.value.slice(0, -1);
        }

        if(keyText !== 'backspace' && keyText !== 'tab' && keyText !== 'shift' 
        && keyText !== 'enter' && keyText !== 'capslock' && keyText !== 'Backspace' 
        && keyText !== 'ctrl' && keyText !== 'fn' && keyText !== 'win' && keyText !== 'alt' && 
        keyText !== 'up' && keyText !== 'down' && keyText !== 'left' && keyText !== 'right') {
            display.value += keyText; 
        }
       
        console.log(keyText)
    });
})

function pressEnter () {
    const contenteditableDiv = document.getElementById('enter');
    contenteditableDiv.innerHTML += '<br>';
}

const enterBtn = document.getElementById('enter');
enterBtn.addEventListener('click', pressEnter);

enterBtn.addEventListener('keypress', function(event){
    if (event.keyCode === 13) {
        pressEnter();
    }
})












/* KeyboardBlock End */
