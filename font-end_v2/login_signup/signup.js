let hide = document.querySelector('.field div:has(>img)');
let mail = document.querySelector('#emailfield');
let checkretype = document.querySelector('.field:has(#retype) input');

hide.addEventListener('click', switchHide);
mail.addEventListener('change', checkMail);
checkretype.addEventListener('change', checkretypefunc);

function switchHide() {
    console.log('triggered');
    if(document.querySelector('#password').getAttribute('type') == "text"){
        document.querySelector('#password').setAttribute('type', 'password');
        document.querySelector('div:has(#password) img:first-of-type').setAttribute('style', 'display:none');
        document.querySelector('div:has(#password) img:last-of-type').setAttribute('style', 'display:inline');
    }
        
    else{
        document.querySelector('#password').setAttribute('type', 'text');
        document.querySelector('div:has(#password) img:first-of-type').setAttribute('style', 'display:inline');
        document.querySelector('div:has(#password) img:last-of-type').setAttribute('style', 'display:none');
    } 
}


function checkretypefunc(){
    let retypeVal = document.querySelector('.field:has(#retype) input').value;
    console.log(retypeVal);
    let typeVal = document.querySelector('.field:has(#password) input').value;
    console.log(typeVal);
    if (retypeVal  === typeVal) {
        document.querySelector('#retypefield label').setAttribute('style', 'color: green');
        document.querySelector('#retypefield input').setAttribute('style', 'border-color: green');
    }
    else{
        document.querySelector('#retypefield label').setAttribute('style', 'color: red');
        document.querySelector('#retypefield input').setAttribute('style', 'border-color: red');
    }
}

function checkMail(){
    let val = document.querySelector('#emailfield input').value;
    if(val.length > 0){
        if(val.indexOf('@') == -1) {
            document.querySelector('#emailfield label').setAttribute('style', 'color: red');
            document.querySelector('#emailfield input').setAttribute('style', 'border-color: red');
        }
        else{
            document.querySelector('#emailfield label').setAttribute('style', 'color: green');
            document.querySelector('#emailfield input').setAttribute('style', 'border-color: green');
        }

    }
}