'use strict';

//Select elements for email regex
const txtEmail = document.getElementById('email-input');
const btnEmailReg = document.getElementById('btn-email-reg');
const notification = document.querySelector('.notification');
const emailRegEl = document.querySelector('.email-regex');
const personalInfoEl = document.querySelector('.personal-info');

// Validation email conditions
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let result;
function userNotification(message) {
  notification.style.color = '#cc0000';
  notification.textContent = message;
}

// Check when button Submit clicked
btnEmailReg.addEventListener('click', function () {
  console.log(txtEmail.value, typeof txtEmail.value);
  if (txtEmail.value === '') {
    userNotification('Bạn vui lòng nhập địa chỉ email!');
    txtEmail.focus();
  } else {
    result = regex.test(txtEmail.value);
    // Hidden email check, show the personal info
    if (result) {
      emailRegEl.classList.add('d-none');
      personalInfoEl.classList.remove('d-none');
    } else {
      userNotification('Định dạng email không đúng, vui lòng nhập lại!');
      txtEmail.focus();
    }
  }
});

// Select elements for view more view less CV Info
const btnsShowInfo = document.querySelectorAll('.show-info');
const cvItems = document.querySelectorAll('.cv-item');
const cvItemsContent = document.querySelectorAll('.cv-item-content');

for (let i = 0; i < cvItems.length; i++) {
  // Event when user mouse over on cv-item div
  cvItems[i].addEventListener('mouseover', function () {
    btnsShowInfo[i].classList.add('d-md-block');
  });

  // Event when user mouse over on cv-item div
  cvItems[i].addEventListener('mouseout', function () {
    btnsShowInfo[i].classList.remove('d-md-block');
  });

  // Event when button view more (view less) is clicked
  btnsShowInfo[i].addEventListener('click', function () {
    if (btnsShowInfo[i].textContent.trim() === 'VIEW MORE') {
      cvItemsContent[i].classList.remove('d-md-none');
      cvItems[i].style.height = '100%';
      btnsShowInfo[i].innerHTML = '<i class="icon-up-open-1"></i>VIEW LESS';
    } else if (btnsShowInfo[i].textContent.trim() === 'VIEW LESS') {
      cvItemsContent[i].classList.add('d-md-none');
      cvItems[i].style.height = 'auto';
      btnsShowInfo[i].innerHTML = '<i class="icon-down-open-1"></i>VIEW MORE';
    }
  });
}
