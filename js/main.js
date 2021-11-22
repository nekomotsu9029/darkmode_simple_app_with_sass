const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click', (e)=>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})