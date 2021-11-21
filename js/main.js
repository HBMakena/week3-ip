$(document).ready(function(){
    $(".des").click(function(){
        $(".des").hide();
        $(".design").toggle();
    });
    $(".design").click(function(){
        $(".des").show();
        $(".design").hide();
    });
});

$(document).ready(function(){
    $(".devel").click(function(){
        $(".devel").hide();
        $(".development").toggle();
    });
    $(".development").click(function(){
        $(".devel").show();
        $(".development").hide();
    });
});

$(document).ready(function(){
    $(".management").click(function(){
        $(".management").hide();
        $(".product").toggle();
    });
    $(".product").click(function(){
        $(".management").show();
        $(".product").hide();
    });
});

