
$(document).ready(function(){
    //Remove Product Confirmation
    $('.productsList table .productRemove a').click(function(){
        if(confirm("Are you sure you wish to remove this product?")){
            $(this).parent().parent().remove();
        }
    });
    //Remove Product from Inventory X Button
    // $('div.productsList table .productRemove a').click(function(){
    //     console.log('correct click');
    //     $(this).parent().parent().remove();
    // });

    //Logout Confirmation
    $('.header a').click(function(){
        if(confirm('Confirm Logout')){
            $(this).attr('href', 'admin_login.html');
        }
        else{
            $(this).attr('href', '#');
        }
    });

    //Adding Flavor Rows in Add Product
    $('.addProduct form table td a.addAnother').click(function(){
        $(this).parent().parent().before('<tr><td><input type=\'text\' name=\'productFlavor\'></td><td><input type=\'number\' class=\'thisQuantity\' name=\'thisQuantity\' min=\'0\'></td><td><a class=\'delete\'>&#10005;</a></td></tr>');
        removeProduct_addListener();
    });
    //Deleting Flavor Row in Add Product
    $('.addProduct form table a.delete').click(function(){
        console.log('correct click');
        $(this).parent().parent().remove();
    });
    //Submit for Add Product Page
    $('.addProduct input.submit').click(function(event){
        event.preventDefault();
        var pName=$('#pName').val();
        console.log(pName);
        $('.addProduct>p.successMessage span').text(pName);
        $('.addProduct>p.successMessage').css('display', 'block');
    });
    
})
function removeProduct_addListener(){
    $('.addProduct form table a.delete').click(function(){
        $(this).parent().parent().remove();
    });
}