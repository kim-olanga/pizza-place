$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").
        each(function(){
            var optionValue = 
        $(this).attr("value");
            if(optionValue){
                 $(".box").not("." + optionValue).hide();
                 $("." + optionalValue).show();
            } else {
                 $(".box").hide();
            }   
        })
    }).change();
})

var total = 0;
$("#items").on('click',".item", function(){
    $(this).appendTo("#basket")
    getTotal
});
$("#basket").on('click', ".item", function(){
    $(this).appendTo("#items");
    getTotal()
});
function getTotal(){
    total = 0;
    $("#basket").find('.price').each(function(i){
        total += parseInt($(this).text().slice(0,-1));
        if(i + 1 === $("#basket").find('.item').length){
            $('.total_price').text(total+'$');
        }
    })
}
   