$(document).ready(function(){
        $(function() {
            var toc = $("#toc").tocify({ selectors: "h2, h3, h4", extendPage:false}).data("toc-tocify");
            $(".optionName").popover({ trigger: "hover" });

        });
        $("#button").click(function(){
         $('#toc').each(function () {
    var mylist = $(this);
    var listitems = mylist.children('li').get();
    listitems.sort(function(a, b) {
    var compA = $(a).text().toUpperCase();
    var compB = $(b).text().toUpperCase();
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
});
$.each(listitems, function(idx, itm) { mylist.append(itm); });
});
});
});
