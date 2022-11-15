list1 = document.querySelectorAll('.list');//tu przy pierwszym uruchomieniu bylo const list1 = ...
    function activeLink(){
        counter :number = 0;
        list1.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
        if(item.classList === this.classList){
            item.classList.add('active');
        }
    }
    list1.forEach((item) =>
    item.addEventListener('click', activeLink));
