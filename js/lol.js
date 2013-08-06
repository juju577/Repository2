$(document).ready(function () {
    $(function () {
        var toc = $("#toc").tocify({
            selectors: "h2, h3, h4",
            extendPage: false
        }).data("toc-tocify");
        $(".optionName").popover({
            trigger: "hover"
        });

    });
    $(function () {
        var toc = $("#toc2").tocify({
            selectors: "h2, h3, h4",
            extendPage: false
        }).data("toc-tocify");
        $(".optionName").popover({
            trigger: "hover"
        });
        $("#toc2").hide()
    });
    $("#button").one("click", function () {
        $('#toc').each(function () {
            var mylist = $(this);
            var listitems = mylist.children('li').get();
            listitems.sort(function (a, b) {
                var compA = $(a).text().toUpperCase();
                var compB = $(b).text().toUpperCase();
                return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
            });
            $.each(listitems, function (idx, itm) {
                mylist.append(itm);
            });
        });
        $("#button").click(function () {
            $("#toc").toggle();
            $("#toc2").toggle();
        });
    });
    $("ul li").has("ul li")
        .prepend('<i class="icon-collapse"></i>')
    $("#one").click(function () {
        $("ul li ul").hide("hide");
    });
    $("#two").click(function () {
        $("ul li ul").show("hide");
        $("#two").addClass
    });
    $("#one").mouseenter(function () {
        $("#one").addClass("hightlight")
    });
    $("#two").mouseenter(function () {
        $("#two").addClass("hightlight")
    });
    $("#one").mouseleave(function () {
        $("#one").removeClass("hightlight")
    });
    $("#two").mouseleave(function () {
        $("#two").removeClass("hightlight")
    });
    $(".icon-collapse").click(function () {
        var x = $(this).next();
        if (x.is("a")) {
            $(this).next()
                .next()
                .toggle()
        } else {
            $(this).next()
                .toggle()}
    });
    $(".icon-collapse").on('click',function(){
       if ($(this).next().next().is(':visible')) {
          $(this).css('color','green')
          $(this).toggleClass('open')
       } else  if ($(this).siblings().has('a').is(':visible')){
          $(this).css('color','blue')
          $(this).toggleClass('open')
       } else {
        $(this).css('color','red')
        $(this).toggleClass('open')
       }
    });
});