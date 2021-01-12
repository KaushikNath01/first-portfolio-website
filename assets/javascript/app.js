const ham = document.querySelector('.ham > .ham-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

ham.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click",toggleMenu);


function toggleMenu () {
   if (menu.classList.contains('open')) {
     menu.classList.remove('open')
     document.body.classList.remove('lock-scroll');
   //   ham.classList.remove('ham-hide')
   }else {
      menu.classList.add('open')
      document.body.classList.add('lock-scroll');
      // ham.classList.add('ham-hide')
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

  const headBtn = document.querySelector('.signBtn');
  headBtn.addEventListener("click", () => {
    location.href = "../signIn.html";
  })
