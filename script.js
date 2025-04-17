
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm');
    if(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            localStorage.setItem('studentName', name);
            window.location.href = "home.html";
        });
    }
    const welcome = document.getElementById('welcome');
    if(welcome){
        welcome.textContent = 'Welcome, ' + localStorage.getItem('studentName') + '!';
    }
});
