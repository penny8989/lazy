// window.onload = function () {
//     var s = skrollr.init();
// };



anime.js
var food1 = anime({
    targets: "#hero",
    translateY: 50,
    translateX: -5,
    direction: "alternate",
    loop: true,
    easing: "linear",
    duration: 1900,

});


//jQ寫法
$("#food1").mouseenter(
    function () {
        $("#food1-line").addClass("border-orange");
        $("#food1").addClass("scalefood");
        $("#addorange").addClass("o-color");


    }
)
$("#food1").mouseleave(
    function () {
        $("#food1-line").removeClass("border-orange");
        $("#food1").removeClass("scalefood");
        $("#addorange").removeClass("o-color");
    }
)

$("#food2").mouseenter(
    function () {
        $("#food2-line").addClass("border-orange");
        $("#food2").addClass("scalefood");
        $("#addorange2").addClass("o-color");
    }
)
$("#food2").mouseleave(
    function () {
        $("#food2-line").removeClass("border-orange");
        $("#food2").removeClass("scalefood");
        $("#addorange2").removeClass("o-color");
    }
)

$("#food3").mouseenter(
    function () {
        $("#food3-line").addClass("border-orange");
        $("#food3").addClass("scalefood");
        $("#addorange3").addClass("o-color");
    }
)
$("#food3").mouseleave(
    function () {
        $("#food3-line").removeClass("border-orange");
        $("#food3").removeClass("scalefood");
        $("#addorange3").removeClass("o-color");
    }
)

$("#food4").mouseenter(
    function () {
        $("#food4-line").addClass("border-orange");
        $("#food4").addClass("scalefood");
        $("#addorange4").addClass("o-color");
    }
)
$("#food4").mouseleave(
    function () {
        $("#food4-line").removeClass("border-orange");
        $("#food4").removeClass("scalefood");
        $("#addorange4").removeClass("o-color");
    }
)

$("#food5").mouseenter(
    function () {
        $("#food5-line").addClass("border-orange");
        $("#food5").addClass("scalefood");
        $("#addorange5").addClass("o-color");
    }
)
$("#food5").mouseleave(
    function () {
        $("#food5-line").removeClass("border-orange");
        $("#food5").removeClass("scalefood");
        $("#addorange5").removeClass("o-color");
    }
)

$("#food6").mouseenter(
    function () {
        $("#food6-line").addClass("border-orange");
        $("#food6").addClass("scalefood");
        $("#addorange6").addClass("o-color");
    }
)
$("#food6").mouseleave(
    function () {
        $("#food6-line").removeClass("border-orange");
        $("#food6").removeClass("scalefood");
        $("#addorange6").removeClass("o-color");
    }
)

// $(document).ready(function(){
//     $("#top2-b").click(function(){
//       $("#top2").slideToggle();
//     });
//   });



$("#top3-b").mouseenter(
    function () {
        $("#top3").show();
    }
)
$("#top3-b").mouseleave(
    function () {
        $("#top3").hide();
    }
)

$("#top2-b").mouseenter(
    function () {
        $("#top2").show();
    }
)
$("#top2-b").mouseleave(
    function () {
        $("#top2").hide();
    }
)








$(document).ready(function () {
    $(".owl-6").owlCarousel({
        loop: true,
        margin: 0,
        padding: 0,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        nav: false,
        responsiveClass: true,






        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(".owl-3").owlCarousel({
        loop: true,
        margin: 35,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

});

// var textWrapper = document.querySelector('.ml11 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml11 .line',
//     scaleY: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 600
//   })
//   .add({
//     targets: '.ml11 .line',
//     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//     easing: "easeOutExpo",
//     duration: 800,
//     delay: 100
//   }).add({
//     targets: '.ml11 .letter',
//     opacity: [0.2,1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=775',
//     delay: (el, i) => 34 * (i+1)
//   }).add({
//     targets: '.ml11',
//     opacity: 1,
//     duration: 100,
//     easing: "easeOutExpo",
//     delay: 100
//   });



