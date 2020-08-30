window.addEventListener('load', () => {
    let checkbox = document.querySelector('.toggle');
    let basic = document.querySelector('#basic');
    let pro = document.querySelector('#pro');
    let master = document.querySelector('#master');

    checkbox.addEventListener('change', () => {
        if(checkbox.checked) {
            basic.innerHTML = "&dollar;19.99";
            pro.innerHTML = "&dollar;24.99";
            master.innerHTML = "&dollar;39.99";
        } else {
            basic.innerHTML = "&dollar;199.99";
            pro.innerHTML = "&dollar;249.99";
            master.innerHTML = "&dollar;399.99";
        }
    })
});