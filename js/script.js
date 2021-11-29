/*function init() {
    var images = document.querySelectorAll("div.thumb img")
    for(var i = 0;i < images.length;i ++)
    {
        images[i].onclick = function() {
            var path = this.src;
            var img = document.getElementById("mainImage");
            img.src = path;
        }
    }
}*/

function changeImg(id) {
   var imgPath = document.getElementById(id).getAttribute('src');
   document.getElementById('mainImg').setAttribute('src', imgPath);
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
    $("div.items > div.item > div:nth-child(even)").addClass("wow animate__slideInRight");
    $("div.items > div.item > div:nth-child(odd)").addClass("wow animate__slideInLeft");

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
})

