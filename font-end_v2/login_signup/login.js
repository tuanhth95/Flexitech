let hide = document.querySelector('.password div:has(i)');
hide.addEventListener('click', switchHide);

function switchHide() {
    console.log('triggered');
    if(document.querySelector('.password input').getAttribute('type') == "text"){
        document.querySelector('.password input').setAttribute('type', 'password');
        document.querySelector('.password i:first-of-type').setAttribute('style', 'display:none');
        document.querySelector('.password i:last-of-type').setAttribute('style', 'display:inline');
    }
        
    else{
        document.querySelector('.password input').setAttribute('type', 'text');
        document.querySelector('.password i:first-of-type').setAttribute('style', 'display:inline');
        document.querySelector('.password i:last-of-type').setAttribute('style', 'display:none');
    } 
}

document.querySelector('.login_btn').addEventListener('click',() =>{
    location.href='../home_page/homepage.html'
})