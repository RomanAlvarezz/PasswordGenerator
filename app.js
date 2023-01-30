const $btn = document.querySelector('.btn');
const $input = document.getElementById('input');
const $copyIcon = document.querySelector('.fa-copy');
const $alertContainer = document.querySelector('.alert-container');
const $slider = document.querySelector('.slider');
const $sliderOutput = document.querySelector('.output');

$btn.addEventListener('click', () => {
    createPassword();
    $alertContainer.classList.add('active')
})

$copyIcon.addEventListener('click', ()=> {
    if($input.value){
      copyPassword();
      $alertContainer.classList.remove('active');
      setTimeout(()=>{
      $alertContainer.classList.add('active')
      }, 2000);  
    }
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = $slider.value;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        //console.log(randomNum, password); 
    }
    $input.value = password;
    $alertContainer.textContent = password + ' copied!';
}

function copyPassword(){
    $input.select();
    $input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText($input.value); 
}