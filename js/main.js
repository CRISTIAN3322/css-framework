// 👉 Menú Temario
document.querySelectorAll('#temario .temario_link').forEach((elemento)=> {
    elemento.addEventListener('click', ()=>{
        document.querySelector('#temario .activo').classList.remove('activo');
        elemento.parentElement.classList.add('activo');
    })
})