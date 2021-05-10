let priceTag = document.querySelectorAll('.price-tag');
let discount = document.querySelector('.discount');
let price = document.querySelectorAll('.price')
let range = document.querySelector('[type="range"]');

function changeEvent() {
    var width = document.body.clientWidth;
    if ( width > 768){
        priceTag[0].classList.remove('hide');
        priceTag[1].classList.add('hide');
        discount.innerHTML = "25% discount";
    }
    else{
        priceTag[0].classList.add('hide');
        priceTag[1].classList.remove('hide');
        discount.innerHTML = "-25%";
    }
}

window.addEventListener( 'resize', changeEvent);

range.addEventListener('input', getPrice);

function getPrice(){
    var val = range.value;
    var percentage = 100*(val - 1)/(20-1);
    price[0].innerHTML = val;
    price[1].innerHTML = val;
    range.style.background = "linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%)" +  percentage + "%, hsl(224, 65%, 95%)" + percentage + "%, hsl(224, 65%, 95%) 100%)";
}

getPrice();
changeEvent();