$(document).ready(function(){
    //show hide popover
    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("fast")
    });
    $(document).on("click",function(event){
        var $trigger =
        $(".dropdown");
        if($trigger !== 
            event.target && 
            !$trigger.has(event.target).length) {
                $(".dropdown-menu").slideup("fast");
            }
    })
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
   