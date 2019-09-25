$(document).ready(function (e) {
    var poster_h, poster_w, paper_h = 29.7, paper_w = 21, current_left, current_bottom, max_width_step, max_height_step, left = 0, bottom = 0;
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
        current_left = 0;
        current_bottom = 0;
        $("#pop").fadeOut();
    });
    $("#ok_button").click(function () {
        current_left = 0;
        current_bottom = 0;
        $("#pop").fadeOut();
    });
    $("#settings_buttom").click(function () {
        $("#pop").fadeIn();
        $("#firstpage").show();
        $("#secondpage").show();
    });
    $("#tutorial_button").click(function () {
        $("#firstpage").hide();
    });
    $("#right_button").click(function () {
        if (poster_w > 0) {
            if (poster_h > paper_h) {
                if (current_left < max_width_step) {
                    left = left - paper_h;
                    var left_cm = left + "cm";
                    $("#image").css("left", left_cm);
                    current_left = current_left + 1;
                }

            }
        }
    });
    $("#left_button").click(function () {
        if (left != 0) {
            if (poster_w > 0) {
                if (poster_h > paper_h) {
                    if (current_left <= max_width_step) {
                        left = left + paper_h;
                        var left_cm = left + "cm";
                        $("#image").css("left", left_cm);
                        current_left = current_left - 1;
                    }
                }
            }
        }
    });
    
    $("#top_button").click(function () {
        if (poster_w > 0) {
            if (poster_w > paper_w) {
                if (current_bottom < max_height_step) {
                    bottom = bottom - paper_w;
                    var bottom_cm = bottom + "cm";
                    $("#image").css("bottom", bottom_cm);
                    current_bottom = current_bottom + 1;
                }

            }
        }
    });
    $("#bottom_button").click(function () {
        if (bottom != 0) {
            if (poster_w > 0) {
                if (poster_w > paper_w) {
                    if (current_bottom <= max_height_step) {
                        bottom = bottom + paper_w;
                        var bottom_cm = bottom + "cm";
                        $("#image").css("bottom", bottom_cm);
                        current_bottom = current_bottom - 1;
                    }
                }
            }
        }
    });
    
    
    
    $("#poster_width").bind('keyup mouseup', function () {
        if ($("#poster_width").val() > 0 && $("#poster_height").val() > 0) {
            document.getElementById("ok_button").disabled = false;
            document.getElementById("OK3_Button").disabled = false;
        } else {
            document.getElementById("ok_button").disabled = true;
            document.getElementById("OK3_Button").disabled = true;
        }
        if ($("#poster_width").val() > 0 ) {
            //var ppi = document.getElementById("ppitest").offsetWidth;
            var ppi = 128;
            var desinger_width = document.getElementById("poster_width").value; //in cm
            poster_w = desinger_width;
            desinger_width = (desinger_width * 0.39) * ppi;
            var scale_factor = desinger_width / document.getElementById("image").width;
            var y = scale_factor * document.getElementById("image").height;
            y = (y / ppi) / 0.39; //in cm
            poster_h = y;
            $("#image").css("height", poster_h + "cm");
            $("#image").css("width", poster_w + "cm");
            document.getElementById("poster_height").value = y.toFixed(2);
            max_width_step = Math.floor(poster_h / paper_h);
            max_height_step = Math.floor(poster_w / paper_w);
            if (max_height_step === 0 && max_width_step === 0){
                document.getElementById("tiles_info").innerHTML = "1";
            } else if (max_width_step === 0) {
                document.getElementById("tiles_info").innerHTML = max_height_step + 1;
            } else if (max_height_step === 0) {
                document.getElementById("tiles_info").innerHTML = max_width_step + 1;
            } else{
                document.getElementById("tiles_info").innerHTML = max_height_step * max_width_step;
            }
        }
    });
    $("#poster_height").bind('keyup mouseup', function () {
        if ($("#poster_width").val() > 0 && $("#poster_height").val() > 0) {
            document.getElementById("ok_button").disabled = false;
            document.getElementById("OK3_Button").disabled = false;
        } else {
            document.getElementById("ok_button").disabled = true;
            document.getElementById("OK3_Button").disabled = true;
        }
        if ($("#poster_height").val() > 0) {
            //var ppi = document.getElementById("ppitest").offsetWidth;
            var ppi = 128;
            var desinger_height = document.getElementById("poster_height").value; //in cm
            poster_h = desinger_height;
            desinger_height = (desinger_height * 0.39) * ppi;
            var scale_factor = desinger_height / document.getElementById("image").height;
            var x = scale_factor * document.getElementById("image").width;
            x = (x / ppi) / 0.39; //in cm
            poster_w = x;
            $("#image").css("height", poster_h + "cm");
            $("#image").css("width", poster_w + "cm");
            document.getElementById("poster_width").value = x.toFixed(2);
            max_width_step = Math.floor(poster_h / paper_h);
            max_height_step = Math.floor(poster_w / paper_w);
            if (max_height_step === 0 && max_width_step === 0){
                document.getElementById("tiles_info").innerHTML = "1";
            } else if (max_width_step === 0) {
                document.getElementById("tiles_info").innerHTML = max_height_step + 1;
            } else if (max_height_step === 0) {
                document.getElementById("tiles_info").innerHTML = max_width_step + 1;
            } else{
                document.getElementById("tiles_info").innerHTML = max_height_step * max_width_step;
            }
        }
    });
    $("#format").change(function () {
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
        left = 0;
        bottom = 0;
        $("#image").css("left", left + "cm");
        $("#image").css("bottom", bottom + "cm");
        current_left = 0;
        current_bottom = 0;
        document.getElementById("image_info").innerHTML = paper_w + "x" + paper_h + "cm";
    });
    
    
    
    $("#open_buttom").onchange(function () {
        left = 0;
        bottom = 0;
        current_left = 0;
        current_bottom = 0;
        //var ppi = document.getElementById("ppitest").offsetWidth;
        var ppi = 128;
        var desinger_width = document.getElementById("poster_width").value; //in cm
        poster_w = desinger_width;
        desinger_width = (desinger_width * 0.39) * ppi;
        var scale_factor = desinger_width / document.getElementById("image").width;
        var y = scale_factor * document.getElementById("image").height;
        y = (y / ppi) / 0.39; //in cm
        poster_h = y;
        $("#image").css("height", poster_h + "cm");
        $("#image").css("width", poster_w + "cm");
        document.getElementById("poster_height").value = y.toFixed(2);
        max_width_step = Math.floor(poster_h / paper_h);
        max_height_step = Math.floor(poster_w / paper_w);
        if (max_height_step === 0 && max_width_step === 0){
            document.getElementById("tiles_info").innerHTML = "1";
        } else if (max_width_step === 0) {
            document.getElementById("tiles_info").innerHTML = max_height_step + 1;
        } else if (max_height_step === 0) {
            document.getElementById("tiles_info").innerHTML = max_width_step + 1;
        } else{
            document.getElementById("tiles_info").innerHTML = max_height_step * max_width_step;
        }
    });
});

