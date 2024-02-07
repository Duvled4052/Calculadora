const display = document.getElementById('display')

function show(aa){
display.value += aa;
}

function fff(){
    display.value = "";
}

Error = 'Error'
function equals(aa){
    try{
display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}
