function attach_login_handler(){
    $('.header a').click(function(){
        if(confirm('Confirm Logout')){
            $(this).attr('href', 'admin_login.html');
        }
        else{
            $(this).attr('href', '#');
        }
    })
}
$(document).ready(function(){
    $('.wrapper').prepend('<div class=\'top\'><div class=\'header\'><a href=\'admin_login.html\'>Logout</a><p>Gotta Grow Supplements</p></div><div class=\'navbar\'><a href=\'admin_orders.html\'>Orders</a><a href=\'admin_products.html\'>View Items</a><a href=\'admin_addProduct.html\'>Add Item</a></div></div>');
    attach_login_handler();
});