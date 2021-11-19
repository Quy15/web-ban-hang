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
   

    /*$("window").scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#totop").show("slow")
        else
            $("#totop").hide()
    })*/

    $("#totop").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
})


$(document).ready(function(){
    $("div.items > div.item:nth-child(even)").addClass("animate__animated animate__slideInRight");
    $("div.items > div.item:nth-child(even)").addClass("animate__animated animate__slideInDown");
})
