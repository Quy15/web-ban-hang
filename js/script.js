function init() {
    var images = document.querySelectorAll("div.thumb img")
    for(var i = 0;i < images.length;i ++)
    {
        images[i].onclick = function() {
            var path = this.src;
            var img = document.getElementById("mainImage");
            img.src = path;
        }
    }
}

$(document).ready(function(){
    $("#totop").hide();

    $("window").scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#totop").show("slow")
        else
            $("#totop").hide()
    })

    $("#totop").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
})
