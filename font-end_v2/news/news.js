const leftButton = document.getElementById('left-arrow');
const rightButton = document.getElementById('right-arrow');
leftButton.addEventListener('click', prevImg);
rightButton.addEventListener('click', nextImg);

var slideIndex = 0;
let counter = 0;
function nextImg(){
    let leftHeadWidth = document.getElementById('head__left').clientWidth;
    document.getElementsByClassName('posi-round')[counter].classList.remove('posi-active');
    counter = (counter == 3)?0: counter + 1;
    let a = document.getElementsByClassName('content-head__slider')[0].style.left = -leftHeadWidth*counter + 'px';
    console.log('Prev: clientwidth = ' + leftHeadWidth);
    document.getElementsByClassName('posi-round')[counter].classList.add('posi-active');
}
function prevImg(){
    let leftHeadWidth = document.getElementById('head__left').clientWidth;
    document.getElementsByClassName('posi-round')[counter].classList.remove('posi-active');
    counter = (counter == 0)?3: counter - 1;
    let a = document.getElementsByClassName('content-head__slider')[0].style.left = -leftHeadWidth*counter + 'px';
    console.log('Next: clientwidth = ' + leftHeadWidth);
    document.getElementsByClassName('posi-round')[counter].classList.add('posi-active');
}

data = [
    {
        stt: 0,
        linkImg: "info\images\iPhone-15-Pro-Max.png",
        name: "So sánh iPhone 15 Pro Max và iPhone 14 Pro Max: Có đáng “lên đời” lúc này?",
        time: "14/11/2023",
        author: "Huynh Duc Thuan",
    },
    {
        stt: 1,
        linkImg: "info\images\laptop-gaming-loq-15irh8-630x359.jpg",
        name: "Review Lenovo LOQ 15IRH8: Tân binh mới nhà Lenovo liệu có đáng gờm?",
        time: "21/10/2023",
        author: "Quoc Thinh",
    },
    {
        stt: 2,
        linkImg: "info\images\hacker_kheo_tay.png",
        name: "Hacker khéo tay hay mò khắc phục vấn đề nhức nhối nhất của Apple Magic Mouse",
        time: "22/11/2023",
        author: "Trương Duy Khang",
    },
    {
        stt: 3,
        linkImg: "info\images\amd-threadripper-pro.png",
        name: "AMD Ryzen Threadripper PRO 7995WX 96 nhân ngốn 1000W để ép xung lên 5,2GHz",
        time: "20/11/2023",
        author: "Trương Duy Khang",
    }
]