$(document).ready(function(){
 $(function() {
    $( "#lol" ).accordion({
      heightStyle: "content",
      collapsible: true
    });

});
        $(function() {

            var toc = $("#toc").tocify({ selectors: "h2, h3, h4", extendPage:false}).data("toc-tocify");
            prettyPrint();
            $(".optionName").popover({ trigger: "hover" });

        });
	});