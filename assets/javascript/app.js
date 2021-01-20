// for the ham menu section

const ham = document.querySelector('.ham > .ham-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

ham.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);


function toggleMenu () {
   if (menu.classList.contains('open')) {
     menu.classList.remove('open')
     document.body.classList.remove('lock-scroll');
   }else {
      menu.classList.add('open')
      document.body.classList.add('lock-scroll');
   }
}

// Form Validation

const form = document.querySelector('.form')
const fullName = document.querySelector('.fullName')
const mobileNo = document.querySelector('.mobileNo')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirmPassword = document.querySelector('.confirmPassword')



// I just want this code to run on index.html page

const instaNo = document.querySelector('.instaNos');
const fundsGenerated = document.querySelector('.fundsGenerated');
const RevenueGenerated = document.querySelector('.RevenueGenerated');
const SatisfiedCustomers = document.querySelector('.SatisfiedCustomers');

  if (window.location.pathname == '/index.html') {
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
  }



  //   for the signIn page

  if (window.location.pathname == '/signIn.html') {

  const headBtn = document.querySelector('.signBtn');
  const anchor1 = document.querySelector('.anchor-forgot-pass');
  const anchor2 = document.querySelector('.anchor-create-act');
  const form1 = document.querySelector('.first-form');
  const form2 = document.querySelector('.second-form');
  const form3 = document.querySelector('.third-form');
    
        anchor1.addEventListener("click", () => {
             if(form1.classList.contains('on-click-hide')){
                 form1.classList.remove('on-click-hide');
             }else{
                 form1.classList.add('on-click-hide');
                 form2.classList.remove('on-click-hide')
             }
        })

        anchor2.addEventListener("click", () => {
            if(form1.classList.contains('on-click-hide')){
                form1.classList.remove('on-click-hide')
            }else{
                form1.classList.add('on-click-hide');
                form3.classList.remove('on-click-hide');
            }
        })
     }
        
