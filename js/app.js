const checkbox = document.querySelector('#checkbox');

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    checkbox.setAttribute('checked', true);
}

checkbox.addEventListener('change', function(event){
    document.body.classList.toggle('is-dark-mode');
    if(this.checked){
        console.log(this.checked);
        document.body.classList.add('is-dark-mode');
        document.body.classList.remove('is-light-mode');
    }
    else{
        console.log(this.checked);
        document.body.classList.remove('is-dark-mode');
        document.body.classList.add('is-light-mode');
    }
})