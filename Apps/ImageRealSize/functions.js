$(document).ready(function (e) {
    var poster_h, poster_w, paper_h, paper_w, current_left, current_right;
    $("#expand_buttom").click(function () {
        if (document.getElementById("expand_buttom").value === "\uE73F") {
            if (document.exitFullscreen) {
                document.exitFullscreen(); 
                document.getElementById("expand_buttom").value = "\uE740";
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen(); 
                document.getElementById("expand_buttom").value = "\uE740";
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen(); 
                document.getElementById("expand_buttom").value = "\uE740";
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen(); 
                document.getElementById("expand_buttom").value = "\uE740";
            }
        } else {
            var i = document.getElementById("bdy");
            if (i.requestFullscreen) {
                i.requestFullscreen();  
                document.getElementById("expand_buttom").value = "\uE73F";
            } else if (i.webkitRequestFullscreen) {
                i.webkitRequestFullscreen(); 
                document.getElementById("expand_buttom").value = "\uE73F";
            } else if (i.mozRequestFullScreen) {
                i.mozRequestFullScreen(); 
                document.getElementById("expand_buttom").value = "\uE73F";
            } else if (i.msRequestFullscreen) {
                i.msRequestFullscreen(); 
                document.getElementById("expand_buttom").value = "\uE73F";
            }
        }
    });
    $("#OK2_Button").click(function () {
        $("#secondpage").hide();
    });
    $("#OK3_Button").click(function () {
        if ($("#poster_width").val() > 0 && $("#poster_height").val() > 0) {
            var format_d = document.getElementById("format").value;
            switch (format_d) {
            case 'A4':
                $(".fixed_hidden").css("width", "29.7cm");
                $(".fixed_hidden").css("height", "21cm");  
                $(".fixed").css("width", "29.7cm");
                $(".fixed").css("height", "21cm");
                $(".fixed_hidden").css("margin-top", "-10.5cm");
                $(".fixed_hidden").css("margin-left", "-14.85cm");  
                $(".fixed").css("margin-top", "-10.5cm");
                $(".fixed").css("margin-left", "-14.85cm");
                paper_h = 29.7;
                paper_w = 21;
                break;
            case 'A5':
                $(".fixed_hidden").css("width", "21cm");
                $(".fixed_hidden").css("height", "14.8cm");
                $(".fixed").css("width", "21cm");
                $(".fixed").css("height", "14.8cm");
                $(".fixed_hidden").css("margin-top", "-7.4cm");
                $(".fixed_hidden").css("margin-left", "-10.5cm");  
                $(".fixed").css("margin-top", "-7.4cm");
                $(".fixed").css("margin-left", "-10.5cm");
                paper_h = 21;
                paper_w = 14.8;
                break;
            case 'A6':
                $(".fixed_hidden").css("width", "14.8cm");
                $(".fixed_hidden").css("height", "10.5cm");
                $(".fixed").css("width", "14.8cm");
                $(".fixed").css("height", "10.5cm");
                $(".fixed_hidden").css("margin-top", "-5.25cm");
                $(".fixed_hidden").css("margin-left", "-7.4cm");  
                $(".fixed").css("margin-top", "-5.25cm");
                $(".fixed").css("margin-left", "-7.4cm");
                paper_h = 14.8;
                paper_w = 10.5;
                break;
            }
            poster_h = document.getElementById("poster_height").value;
            poster_w = document.getElementById("poster_width").value;
            $("#image").css("width", poster_w + "cm");
            $("#pop").fadeOut();
        } else {
            alert("Please specify the poster dimensions or image source!");
            $("#firstpage").show();
            $("#secondpage").show();
        }
    });
    $("#ok_button").click(function () {
        if ($("#poster_width").val() > 0 && $("#poster_height").val() > 0) {
            var format_d = document.getElementById("format").value;
            switch (format_d) {
            case 'A4':
                $(".fixed_hidden").css("width", "29.7cm");
                $(".fixed_hidden").css("height", "21cm");  
                $(".fixed").css("width", "29.7cm");
                $(".fixed").css("height", "21cm");
                $(".fixed_hidden").css("margin-top", "-10.5cm");
                $(".fixed_hidden").css("margin-left", "-14.85cm");  
                $(".fixed").css("margin-top", "-10.5cm");
                $(".fixed").css("margin-left", "-14.85cm");
                paper_h = 29.7;
                paper_w = 21;
                break;
            case 'A5':
                $(".fixed_hidden").css("width", "21cm");
                $(".fixed_hidden").css("height", "14.8cm");
                $(".fixed").css("width", "21cm");
                $(".fixed").css("height", "14.8cm");
                $(".fixed_hidden").css("margin-top", "-7.4cm");
                $(".fixed_hidden").css("margin-left", "-10.5cm");  
                $(".fixed").css("margin-top", "-7.4cm");
                $(".fixed").css("margin-left", "-10.5cm");
                paper_h = 21;
                paper_w = 14.8;
                break;
            case 'A6':
                $(".fixed_hidden").css("width", "14.8cm");
                $(".fixed_hidden").css("height", "10.5cm");
                $(".fixed").css("width", "14.8cm");
                $(".fixed").css("height", "10.5cm");
                $(".fixed_hidden").css("margin-top", "-5.25cm");
                $(".fixed_hidden").css("margin-left", "-7.4cm");  
                $(".fixed").css("margin-top", "-5.25cm");
                $(".fixed").css("margin-left", "-7.4cm");
                paper_h = 14.8;
                paper_w = 10.5;
                break;
            }
            poster_h = document.getElementById("poster_height").value;
            poster_w = document.getElementById("poster_width").value;
            $("#image").css("width", poster_w + "cm");
            $("#pop").fadeOut();
        } else {
            alert("Please specify the poster dimensions or image source!");
        }
    });
    $("#settings_buttom").click(function () {
        $("#pop").fadeIn();
        $("#firstpage").show();
        $("#secondpage").show();
    });
    $("#tutorial_button").click(function () {
        $("#firstpage").hide();
    });
});

