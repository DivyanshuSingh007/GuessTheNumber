let state=9
const rand=Math.round((Math.random()*99))+1
function check(){
    let guess=document.querySelector('input').value
    const but=document.createElement('button')
    but.textContent="Play Again"
    but.style.backgroundColor="orange"
    but.style.padding=10
    but.addEventListener('click',(e)=>{
        location.reload()
    })
    if(state>0){
        if(guess==rand){
            document.querySelector('h4').innerHTML="You Won!!!"
            document.querySelector('.game').appendChild(but)
            state=-1
        }
        else{
            if(guess>rand){
                document.querySelector('h4').innerHTML=`Incorrect guess...<br /> Try a <b>smaller</b> number`
            }
            if(guess<rand){
                document.querySelector('h4').innerHTML=`Incorrect guess...<br /> Try a <b>larger</b> number`
            }
            document.querySelector('h3').innerHTML=`Only ${state} attempts left !!!`
        }
    }
    else{
        if(state==0){
            if(guess==rand){
                document.querySelector('h4').innerHTML="You Won!!!"
                document.querySelector('.game').appendChild(but)
                state=-1
            }
        else{
            document.querySelector('h3').innerHTML=`Only ${state} attempts left !!!`
        document.querySelector('h4').innerHTML=`You Lose !!! Correct number : ${rand}`
        document.querySelector('.game').appendChild(but)
        }
    }
}
    state--
}