console.log("Success");

function getHomepage(){
    console.log("Success");
}
// var li = document.getElementsByClassName("product-card");
// var div = li[0].getElementsByTagName("div");
// var span = div[3].getElementsByTagName("span");
// console.log(span[0].textContent);
var pro_li = document.getElementsByClassName("product-card");
// filter theo logo
var logofilter = document.getElementsByClassName("product_logo_container");
var li = document.getElementsByClassName("product_logo");
for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", selectLogo);
    li[i].setAttribute("checked", "unchecked");
}
function selectLogo(){
    var check=this.getAttribute("checked");
    if (check=="unchecked"){
        for (i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "rgba(0,0,0,0)";
            li[i].setAttribute("checked", "unchecked");
        }
        var pro_li = document.getElementsByClassName("product-card");
        for (i = 0; i < pro_li.length; i++) {
                pro_li[i].style.display = "";
        }
        this.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.setAttribute("checked", "checked");
        for (i = 0; i < pro_li.length; i++) {
            var pro_brand = pro_li[i].getAttribute("brand");
            if (pro_brand != this.getAttribute("id")){
                pro_li[i].style.display = "none";
            }
        }
    }
    else {
        this.style.backgroundColor = "rgba(0,0,0,0)";
        this.setAttribute("checked", "unchecked")
        var product = document.getElementsByClassName("product_pages");
        var pro_li = document.getElementsByClassName("product-card");
        for (i = 0; i < pro_li.length; i++) {
                pro_li[i].style.display = "";
        }
    }
}

//filter theo gia
var select1 = document.getElementsByClassName("lang-select1");
var prices = select1[0].getElementsByTagName("option");
select1[0].addEventListener("change",selectPrices);
function selectPrices(){
    for (i = 0; i < prices.length; i++) {
        if (prices[i].selected == true) {
            var pricevalue = prices[i].getAttribute("value");
            var product = document.getElementsByClassName("product_pages");
            if (pricevalue=="dart") {
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }        
            }
            else if (pricevalue=="price1") { 
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }   
                for (i = 0; i < pro_li.length; i++) {
                    var div = pro_li[i].getElementsByTagName("div");
                    var span = div[3].getElementsByTagName("span");
                    if ((span[0].textContent) > 100) {
                        pro_li[i].style.display = "none";
                    }
                }  
            }
            else if (pricevalue=="price2") { 
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }   
                for (i = 0; i < pro_li.length; i++) {
                    var div = pro_li[i].getElementsByTagName("div");
                    var span = div[3].getElementsByTagName("span");
                    if ((span[0].textContent) > 200 || (span[0].textContent) < 100) {
                        pro_li[i].style.display = "none";
                    }
                }  
            }
            else if (pricevalue=="price3") { 
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }   
                for (i = 0; i < pro_li.length; i++) {
                    var div = pro_li[i].getElementsByTagName("div");
                    var span = div[3].getElementsByTagName("span");
                    if ((span[0].textContent) > 300 || (span[0].textContent) < 200) {
                        pro_li[i].style.display = "none";
                    }
                }  
            }
            else if (pricevalue=="price4") { 
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }   
                for (i = 0; i < pro_li.length; i++) {
                    var div = pro_li[i].getElementsByTagName("div");
                    var span = div[3].getElementsByTagName("span");
                    if ((span[0].textContent) > 400 || (span[0].textContent) < 300) {
                        pro_li[i].style.display = "none";
                    }
                }  
            }
        }
    }
}





//filter theo tinh trang
var select2 = document.getElementsByClassName("lang-select2");
var statuss = select2[0].getElementsByTagName("option");
select2[0].addEventListener("change",selectStatus);
function selectStatus(){
    for (i = 0; i < statuss.length; i++) {
        if (statuss[i].selected == true) {
            var statusvalue = statuss[i].getAttribute("value");
            if (statusvalue=="dart") {
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }        
            }
            else if (statusvalue=="status1") { 
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }   
                for (i = 0; i < pro_li.length; i++) {
                    var pro_status = pro_li[i].getAttribute("status");
                    if (pro_status != "New") {
                        pro_li[i].style.display = "none";
                    }
                }  
            }
            else if (statusvalue=="status2") { 
                for (i = 0; i < pro_li.length; i++) {
                    pro_li[i].style.display = "";
                }   
                for (i = 0; i < pro_li.length; i++) {
                    var pro_status = pro_li[i].getAttribute("status");
                    if (pro_status != "Used") {
                        pro_li[i].style.display = "none";
                    }
                } 
            }
        }
    }
}

//filter theo checkbox
var checkbox = document.querySelectorAll("input[type=checkbox]");
console.log(checkbox);
for (i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", selectCheckbox);
    console.log(checkbox[i].checked);
}   
function selectCheckbox(){
    var count=0;
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) count++;
    }   
    if (count == 0) {
        for (i = 0; i < pro_li.length; i++) {
            pro_li[i].style.display = "";
        }      
    }
    else if (count==1) {   
        if (this.checked) {
            for (i = 0; i < pro_li.length; i++) {
                pro_li[i].style.display = "none";
            }   
            for (i = 0; i < pro_li.length; i++) {
                if (pro_li[i].getAttribute("kind")==this.getAttribute("id")){
                    pro_li[i].style.display = "";
                }    
            }   
        } else {    
            for (i = 0; i < pro_li.length; i++) {
                if (pro_li[i].getAttribute("kind")==this.getAttribute("id")){
                    pro_li[i].style.display = "none";
                }   
            } 
        }  
    }
    else {
        if (this.checked) {
            for (i = 0; i < pro_li.length; i++) {
                if (pro_li[i].getAttribute("kind")==this.getAttribute("id")){
                    pro_li[i].style.display = "";
                }    
            }   
        } else {
            for (i = 0; i < pro_li.length; i++) {
                if (pro_li[i].getAttribute("kind")==this.getAttribute("id")){
                    pro_li[i].style.display = "none";
                }   
            } 
        }  
    }
}