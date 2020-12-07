const ham = document.querySelector('.ham > .ham-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

ham.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click",toggleMenu);


function toggleMenu () {
   if (menu.classList.contains('open')) {
     menu.classList.remove('open')
     document.body.classList.remove('lock-scroll');
   }else {
      menu.classList.add('open')
      document.body.classList.add('lock-scroll');
   }
}


const fullName = document.querySelector('.fullName')
const mobileNo = document.querySelector('.mobileNo')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirmPassword')
const formBtn = document.querySelector('.form-signIn-btn');


formBtn.addEventListener('click',(e) => {
   e.preventDefault();

   const nameId = document.getElementById('fullNameId');
   const mobileId = document.getElementById('mobileId');
   const emailId = document.getElementById('emailId');
   const passwordId = document.getElementById('passwordId');
   const confirmPasswordId = document.getElementById('confirmPasswordId');
   let formError = false;
   
   if ((fullName.value === "") || (fullName.value === null)) {
      nameId.innerHTML = 'Please add something in the name field'
      formError = true;
  }else if ((fullName.value.length < 5)||(fullName.value.length > 20)) {
       nameId.innerHTML = 'the length should not be less than 5 and not more than 20';
       formError = true;
  }else{
       nameId.innerHTML = '';
       formError = false;
  }

  if ((mobileNo.value === "") || (mobileNo.value === null)) {
      mobileId.innerHTML = 'Please add something in the name field'
      formError = true;
  }else if ((mobileNo.value.length < 10)||(mobileNo.value.length > 11)) {
       mobileId.innerHTML = 'mobile no should not be less than 10 and exceed 10 nos';
       formError = true;
  }else {
       mobileId.innerHTML = '';
       formError = false;
  }

  if ((email.value === "") || (email.value === null)) {
      emailId.innerHTML = 'Please add something in the name field'
      formError = true;
  }else {
     emailId.innerHTML = '';
     formError = false;
  }

  if ((password.value === "") || (password.value === null)) {
       passwordId.innerHTML = 'Please add something in the name field'
       formError = true;
  }else if ((password.value.length < 8)||(password.value.length > 16)) {
       passwordId.innerHTML = 'Password should not be less than 8 and exceed 16';
       formError = true;
  }else{
       passwordId.innerHTML = '';
       formError = false;
  }

   if ((confirmPassword.value === "") || (confirmPassword.value === null)) {
       confirmPasswordId.innerHTML = 'Please add something in the name field'
       formError = true;
  }else if ((confirmPassword.value.length < 8)||(confirmPassword.value.length > 16)) {
       confirmPasswordId.innerHTML = 'Password should not be less than 8 and exceed 16';
       formError = true;
  }else if (confirmPassword.value !== password.value) {
        confirmPasswordId.innerHTML = 'password is not a match'
        formError = true;
  }else {
        confirmPasswordId.innerHTML = '';
        formError = false;
  }

   if (formError = true){
      return false;
   }
      return true;
  
});


const instaNo = document.querySelector('.instaNos');
const fundsGenerated = document.querySelector('.fundsGenerated');
const RevenueGenerated = document.querySelector('.RevenueGenerated');
const SatisfiedCustomers = document.querySelector('.SatisfiedCustomers');


let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        instaNo.innerText = count;
        fundsGenerated.innerText = count;
        RevenueGenerated.innerText = count;
        SatisfiedCustomers.innerText = count;
    }
}, 5);

setTimeout(() => {
        let contentOne = document.getElementById('content-change-one');
        let contentTwo = document.getElementById('content-change-two');
        let contentThree = document.getElementById('content-change-three')
        let contentFour = document.getElementById('content-change-four');
    
        contentOne.innerText = "Insta Followers";
        contentTwo.innerText = "Funds Generated";
        contentThree.innerText = "Revenue Generated";
        contentFour.innerText = "Satisfied Customers";
        
}, 7500);
