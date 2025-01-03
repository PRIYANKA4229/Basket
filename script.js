let cart = [];
let totalPrice = 0;

// Function to add product to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('₹', ''));  // Extract price
        
        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);  // Add product to cart
        
        updateCart();  // Update the cart display
    });
});

// Function to update cart
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current cart items

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} ₹${item.price}`;  // Display product name and price
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);  // Sum up all product prices
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);  // Show total price

    // Update cart count (number of items in cart)
    document.getElementById('cart-count').textContent = cart.length;
}
// Add an event listener to all the "Buy" buttons
document.querySelectorAll('.Buy').forEach(function(button) {
    button.addEventListener('click', function() {
        // Redirect to payment page when "Buy" button is clicked
        window.location.href = 'payment.html'; // Path to your payment page
    });
});

// Checkout button functionality
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert(`Total amount: ₹${totalPrice.toFixed(2)}. Proceeding to checkout...`);
        // Redirect or handle the checkout process here
            setTimeout(() => {
            // Hide the cart section
            document.querySelector('.cart-container').style.display = 'none';

            // Show the order confirmation section
            document.querySelector('.order-confirmation').style.display = 'block';
        }, 1000);  // 1-second delay before showing the message
    }
});

