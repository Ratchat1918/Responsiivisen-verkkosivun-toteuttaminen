document.getElementById("switch").onclick=function(){
    const changetext=document.querySelector('#switch');
    changetext.addEventListener("click",function(){
        changetext.textContent="Fahrenheit->Celicius"
    })
}
function laske(){
    let temp;
    document.getElementById("convert").onclick=function(){
        temp=document.getElementById("submition").value;
    }
}