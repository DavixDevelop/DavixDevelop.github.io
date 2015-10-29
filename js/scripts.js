document.getElementById("foother_text").innerHTML = '<div class="container" style="padding-top:15.5px;padding-bottom:15.5px;"><div class="row text-center"><div class="col-xs-3"><a href="https://www.facebook.com/david.rupnik.397" target="_blank"><i class="fa fa-facebook fa-2x"></i></a></div><div class="col-xs-3"><a href="https://twitter.com/davidrupnik23" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></div><div class="col-xs-3"><a href="http://www.twitch.tv/mepphotv" target="_blank"><i class="fa fa-twitch fa-2x"></i></a></div><div class="col-xs-3"><a href="https://instagram.com/davidrupnik/" target="_blank"><i class="fa fa-instagram fa-2x"></i></a</div></div></div>';

function httpGetAsync(theUrl, callback)  //Get file data
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function httpGet(theUrl)  //Get file data
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}