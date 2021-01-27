$(document).ready(function () {
    $("#Button_1").click(function () { 
        $("#IdSelector").fadeOut(500);
    });

    $("#Button_2").click(function () { 
        $(".test").fadeOut(500);
    });

    $("#Button_3").click(function () { 
        $("*").fadeOut(500);
    });

    $("#Button_4").click(function () { 
        $("[testname*='Hello']").fadeOut(500);
    });

    $("#Button_5").click(function () { 
        $("[Wordname~='WordValue']").fadeOut(500);
    });
    
    $("#Button_6").click(function () { 
        $("[EndWith$='mad']").fadeOut(500);
    });

    $("#Button_7").click(function () { 
        $("[Equal='Hello']").fadeOut(500);
    });

    $("#Button_8").click(function () { 
        $("[StartWith^='Hello']").fadeOut(500);
    });

    $("#Button_9").click(function () { 
        $(":button").fadeOut(500);
    });

    $("#Button_10").click(function () { 
        $(":checkbox").fadeOut(500);
    });

    $("#Button_11").click(function () { 
        $("#Parent > p.test").fadeOut(500);
    });

    $("#Button_12").click(function () { 
        $("#Contains:contains('test')").fadeOut(500);
    });

    $("#Button_13").click(function () { 
        $("#descendantId p").fadeOut(500);
    });

    $("#Button_14").click(function () { 
        $("#dis input:disabled").fadeOut(500);
    });

    $("#Button_15").click(function () { 
        $("#enb input:enabled").fadeOut(500);
    });

    $("#Button_16").click(function () { 
        $("div:empty").fadeOut(500);
    });

    $("#Button_17").click(function () { 
        $("#indexSelector p:eq(1)").fadeOut(500);
    });

    $("#Button_18").click(function () { 
        $("#evenSelector p:even").fadeOut(500);
    });

    $("#Button_19").click(function () { 
        $("#fileSelector :file").fadeOut(500);
    });

    $("#Button_20").click(function () { 
        $("#childSelector p:first-child").fadeOut(500);
    });

    $("#Button_21").click(function () { 
        $("#firstTypeSelector p:first-of-type").fadeOut(500);
    });

    $("#Button_22").click(function () { 
        $("#firstSelector p:first").fadeOut(500);
    });
    
    $("#Button_23").click(function () { 
        $("#greaterthanSelector p:gt(0)").fadeOut(500);
    });

    $("#Button_24").click(function () { 
        $("div[HasAttribute]").fadeOut(500);
    });

    $("#Button_25").click(function () { 
        $("div.hasClass:has(p)").fadeOut(500);
    });

    $("#Button_26").click(function () { 
        $("#LastChild p:last-child").fadeOut(500);
    });

    $("#Button_27").click(function () { 
        $("#LastOfType p:last-of-type").fadeOut(500);
    });

    $("#Button_28").click(function () { 
        $("#LastSelector p:last").fadeOut(500);
    });

    $("#Button_29").click(function () { 
        $("#LessThan p:lt(10)").fadeOut(500);
    });

    $("#Button_30").click(function () { 
        $("div[class][multipleAttribute*='Te']").fadeOut(500);
    });

    $("#Button_31").click(function () { 
        $("div.MultipleSelector , p#MultipleSelector").fadeOut(500);
    });

    $("#Button_32").click(function () { 
        $("#NextAdjacent + div + p").fadeOut(500);
    });

    $("#Button_33").click(function () { 
        $("#NextSiblings ~").fadeOut(500);
    });
});