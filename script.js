window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openbtn = document.querySelector('.open'),
        field = document.createElement('div'); // cart-field elementini yaratamiz

    field.classList.add('cart-field'); // Class qo'shamiz
    document.body.appendChild(field); // Maydonni tanaga qo'shamiz

    function createCard() {
      let cart = document.createElement('div'),
          heading = document.createElement('h2'),
          closebtn = document.createElement('button');
  
      cart.classList.add('cart');
      closebtn.classList.add('close');
  
      heading.textContent = 'В нашей корзине';
      closebtn.textContent = 'Закрыть';
  
      document.body.appendChild(cart);
      cart.appendChild(heading);
      cart.appendChild(field);
      cart.appendChild(closebtn);
      
      cart.style.display = 'none';
    }
    createCard();
  
    let cart = document.querySelector('.cart'),
        closebtn = document.querySelector('.close');
  
    openbtn.addEventListener('click', function() {
        cart.style.display = 'block';
    });
  
    closebtn.addEventListener('click', function() {
        cart.style.display = 'none';
    });
  
    buttons.forEach(function(button, i) {
        button.addEventListener('click', function() {
            let cloneItem = products[i].cloneNode(true);
            let btn = cloneItem.querySelector('button');
  
            btn.remove();
            field.appendChild(cloneItem);
            products[i].remove();
        });
    });
});
