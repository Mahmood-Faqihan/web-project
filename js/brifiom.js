function addToCart(name, price) {

    // نجيب السلة من التخزين
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // نضيف المنتج
    cart.push({
        name: name,
        price: price,
        quantity: 1
    });

    // نحفظ السلة من جديد
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("تمت الإضافة إلى السلة");
}