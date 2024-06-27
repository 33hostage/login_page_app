const container = document.getElementById ('container');
const toggle = document.getElementById ('toggle');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=> {
	toggle.classList.add('active')
});

loginBtn.addEventListener('click', ()=> {
	toggle.classList.remove('active')
});
