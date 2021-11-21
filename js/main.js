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
    $(".manage").click(function(){
        $(".manage").hide();
        $(".management").toggle();
    });
    $(".management").click(function(){
        $(".manage").show();
        $(".management").hide();
    });
});
$(document).ready(function(){
    $(".submit").click(function(){
        var name = $(".name").val();
        var email = $(".email").val();
        var message = $(".massage").val();
        
        if(name == '' || email == '' || message == ''){
            alert("fill in the blanks");
        }
        else {
            alert("we have received your message.Thank you for reaching out to us");
        }
    })
});