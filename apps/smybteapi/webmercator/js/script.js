class MercatorResRes {
    constructor(){
        this.resolution = new Array(21);
    }
}

var EARTH_CIRCUMFERENCE = 40075017;

function renderResoultion(data){
    for (var c = 0; c < data.resolution.length; c++) {
        $("#res" + c.toString()).html(data.resolution[c].toString());
    }
}

function selectItems(data,updateUi){
    var found = false;
    var meter = parseFloat($("#met").val());
    var zoom = -1;
    for (var c = 0; c < data.resolution.length; c++) {
        if(data.resolution[c] <= meter && found == false) {
            if(!$("#r" + c.toString()).hasClass("sel") && updateUi) {
                $("#r" + c.toString()).toggleClass("sel");
            }
            found = true;
            zoom = c;
            if(data.resolution[c] < meter){
                if(data.resolution[c - 1] > meter){
                    if(!$("#r" + (c - 1).toString()).hasClass("sel") && updateUi) {
                        $("#r" + (c - 1).toString()).toggleClass("sel");
                    }

                    first_diff = data.resolution[c - 1] - meter;
                    second_diff = meter - data.resolution[c];
                    if (first_diff < second_diff) {
                        zoom = c - 1;
                    }
                }
            }
        } else {
            if($("#r" + c.toString()).hasClass("sel") && updateUi) {
                $("#r" + c.toString()).toggleClass("sel");
            }
        }
    }

    return zoom
}

function toRadians(degrees){
    return degrees * (Math.PI / 180);
}

function getResolultion(latitude){
    var resp = new MercatorResRes();
    for(var z=0; z < resp.resolution.length; z++){
        resp.resolution[z] = EARTH_CIRCUMFERENCE * Math.cos(toRadians(latitude)) / parseFloat((1<<z) * 256);
    }

    return resp;
}

$( document ).ready(function() {
    /*$.ajax({
        url: "https://smybteapi.buildtheearth.net/webmercator/resolution?latitude=0",
        type: "GET",
        dataType: "json",
        success: function(data){
            renderResoultion(data)
            selectItems(data, true)
        }
    });*/
    var data = getResolultion(0);
    renderResoultion(data);
    selectItems(data, true);

    $("#lonForm").submit(function( event ) {
      /*$.ajax({
            url: "https://smybteapi.buildtheearth.net/webmercator/resolution?latitude=" + $("#lon").val(),
            dataType: "json",
            success: function(data){
                renderResoultion(data)
                zoom = selectItems(data, false)
                $("#zoom").html(zoom.toString())
                $("#popc").show(200, function(){
                    selectItems(data, true)
                    $("#pop").show(200);
                });

            }
        });*/
        var data = getResolultion($("#lon").val());
        renderResoultion(data);
        zoom = selectItems(data, false);
        $("#zoom").html(zoom.toString());
        $("#popc").show(200, function(){
            selectItems(data, true);
            $("#pop").show(200);
        });
        event.preventDefault();
    });

    $("#closePopup").click(function(){
        $("#pop").hide(200, function(){
            $("#popc").hide(200);
        });
    });
});