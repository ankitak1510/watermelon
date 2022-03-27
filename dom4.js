const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    //localStorage.setItem('name',nameInput.value);
    //localStorage.setItem('mail',email.value);

var myObj={
    name1: nameInput.value,
    email1:emailInput.value
}
 
   arr.push(myObj);
   localStorage.getItem('userdetails'.JSON.stringify(arr));
   const p=JSON.parse(localStorage.getItem('userdetails'));





    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
