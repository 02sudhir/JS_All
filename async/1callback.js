
function loadScript (src,callback){
    var script= document.createElement("script");
    script.src =src;
    script.onload = function(){
        console.log("loaded script" +src);
        callback();

    }
    document.body.appendChild(script);

}

function hello(){
    alert('yess im beaast');
}

function imgreats(){
    alert('greats');
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")