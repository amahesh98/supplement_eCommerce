$(document).ready(function(){
    //DROPBAR
    $('.dropbar img').hover(function(){
        var temp=$(this).attr('src');
        $(this).attr('src', $(this).attr('alt-img'));
        $(this).attr('alt-img', temp);
    },
        function(){
            var temp=$(this).attr('src');
            $(this).attr('src', $(this).attr('alt-img'));
            $(this).attr('alt-img', temp);
        }
    );
    $('.dropbar img').click(function(){
        $(this).attr('src', 'images/dashes_black.png');
        if($('.dropbar').attr('toggled')=='no'){
            console.log("Getting the no");
            $('.dropbar a').css('display','block');
            // $('dropbar_links').slideDown();
            $('.dropbar').attr('toggled', 'yes');
        }
        else if($('.dropbar').attr('toggled')=='yes'){
            console.log('Getting the yes');
            $('.dropbar a').css('display','none');
            // $('dropbar_links').slideUp();
            $('.dropbar').attr('toggled','no');
        }
    });

    //Choosing what to sort products by, price, best seller
    $('.products .dropdown div a').click(function(){
        $(this).parent().siblings('button').text($(this).text());
    });

    //Hovering over a product to change image
    $('.product img').hover(function(){
        var temp=$(this).attr('src');
        $(this).attr('src', $(this).attr('hoverImg'));
        $(this).attr('hoverImg', temp);
    },
    function(){
        var temp=$(this).attr('src');
        $(this).attr('src', $(this).attr('hoverImg'));
        $(this).attr('hoverImg', temp);
    });

    //Changing social media icon color on hover
    $('.footer img').hover(function(){
        var temp=$(this).attr('src');
        $(this).attr('src', $(this).attr('hoverImg'));
        $(this).attr('hoverImg', temp);
    },
    function(){
        var temp=$(this).attr('src');
        $(this).attr('src', $(this).attr('hoverImg'));
        $(this).attr('hoverImg', temp);
    });    
    $('.minorText a').click(function(){
        $('.signupWrapper').css('display','block');
    })

    $('.signupWrapper .signupClose').click(function(){
        $('.signupWrapper').css('display','none');
    })

    //ADMIN PAGE SORT BY DROP DOWNS
    $('.sortStatus div a').click(function(){
        $(this).parent().siblings('button').text($(this).text());
    });
});
function showPassword(){
    var checkbox=document.getElementById("displayPassword");
    if(checkbox.checked){
        $('#password').attr('type','text');
        $('#passwordConfirm').attr('type','text');
    }
    else{
        $('#password').attr('type','password');
        $('#passwordConfirm').attr('type','password');
    }
}