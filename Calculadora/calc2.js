const display = document.getElementById('display')
const display2 = document.getElementById('display2')

function show(aa){
    display.value += aa;
    display2.value += aa;
}
function showtimes(){
        display.value += "×";
        display2.value += '*';
    }
function showdivide(){
        display.value += '÷';
        display2.value += '/';
    }
function cleardisplay(){
    display.value = "";
    display2.value = "";
}

Error = 'Error'
function equals(aa){
    try{
display2.value = eval(display2.value);
display.value = display2.value;
    }
    catch(error){
        display2.value = 'Error';
        display.value = display2.value;
    }
}
