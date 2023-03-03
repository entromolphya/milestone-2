alert("Hello! This is a program basic calculation program. You can perform some basic operations like addition, substraction, multiplication, division ( +, -, *, / )  ");
/////////////////////////////////////////////


while(true){

//////////////////////////////////////////////
    var x=parseFloat(prompt('Please enter 1st number:'));
    var y=parseFloat(prompt('Please enter 2nd number:'));
    var z;
//////////////////////////////////////////////

    function summation(a,b){
        return a+b;
    }   
    function subtraction(a,b){
        return a-b;
    }
    function multiplication(a,b){
        return a*b;
    }
    function division(a,b){
        if(b==0){
            return 'error';
        }
        else{
            return a/b;
        }   
    }
//////////////////////////////////////////////////
    while(true){

        var oprnd=prompt('Please enter, which operation you want to perform? ( +, -, *, / )');

        var f=0;
        switch(oprnd){
            case '+':
                z=summation(x,y);
                break;
            case '-':
                z=subtraction(x,y);
                break;
            case '*':
                z=multiplication(x,y);
                break;
            case '/':
                z=division(x,y);
                break;
            default:
                alert('Please input operand properly ! ');
                f=1;
                break;
        }
        if(f==1){
            continue;
        }
        else{
            break;
        }
    }
//////////////////////////////////////////////////////////

    if(z=='error'){
        alert('Please input the 2nd numbers value greater or less than 0(zero)! ');
    }
    else{
        
        alert(x+' '+oprnd+' '+y+' = '+z)
        var choice=prompt('Do want to perform another operation? (Y/N)');
        if(choice=='N'){
            document.getElementById('proj').innerHTML='Your last arithmetic operation was: '+'<br>'+x+' '+oprnd+' '+y+'<br>'+'='+z;
            break;
        }
    }
}
