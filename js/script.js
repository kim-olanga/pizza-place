function wantDelivery() {
    var locality = prompt("please enter target destination");
    alert("Dear client, the delivery fee is present on the order");
    alert("our services will be at" + " " + locality + " " + "at any time now"); 
}
$(document).ready(function(){
    $(".delivery").click(function(){
        $(".delivery-img").fadeToggle(1000);
        $("#delivery").fadeToggle(1000);
    });
    $(".payment").click(function(){
        $(".payment-img").fadeToggle(1000);
        $("#payment").fadeToggle(1000);
    });
    $("#backToOrder").click(function(){
        $("#make-order").show();
        $("#myOrder").hide();
    });
});

class Pizza {
    constructor(pizzaSize, pizzaCrust, pizzaTopping, pizzaQuantity) {
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
        this.pizzaTopping = pizzaTopping;
        this.pizzaQuantity = pizzaQuantity;
    };
    sizePrices() {
        if (this.pizzaSize === "Small") {
            return 500;
        };
        if (this.pizzaSize === "Medium") {
            return 900;
        };
        if (this.pizzaSize === "Large") {
            return 1200;
        };  
    }
    crustPrices() {
        if (this.pizzaCrust === "Thick-crust") {
            return 250;
        };
        if (this.pizzaCrust === "Salted-crust") {
            return 250;
        };
        if (this.pizzaCrust === "Stuffed") {
            return 250;
        };
        if (this.pizzaCrust === "Crispy") {
            return 250;
        };
        if (this.pizzaCrust === "Gluten-free") {
            return 250;
        };
    };
    toppingPrices() {
        if (this.pizzaTopping === "Pepperoni") {
            return 100;
        };
        if (this.pizzaTopping === "BBQ") {
            return 100;
        };
        if (this.pizzaTopping === "Veggies") {
            return 100;
        };
        if (this.pizzaTopping === "Extra salt") {
            return 100;
        };
        if (this.pizzaTopping === "Mushroom") {
            return 100;
        };
        if (this.pizzaTopping === "Chicken") {
            return 100;
        };
        if (this.pizzaTopping === "Cream sauce") {
            return 100;
        };
        if (this.pizzaTopping === "Pinnapple") {
            return 100;
        };
        if (this.pizzaTopping === "Extra cheese") {
            return 100;
        };
        if (this.pizzaTopping === "Beacon") {
            return 100;
        };
    };

    totalPrice() {
        return (
            (this.sizePrices() + 
            this.crustPrices() + 
            this.toppingPrices()) * this.pizzaQuantity
        );
    };
};

let submitButton = document.getElementById("makeOrder");
submitButton.addEventListener("click",function() {

    const Pizza = new Pizza();

    Pizza.pizzaSize = document.getElementById("pizzaSize").value;
    Pizza.pizzaCrust = document.getElementById("pizzaCrust").value;
    Pizza.pizzaTopping = document.getElementById("pizzaTopping").value;
    Pizza.pizzaQuantity = parseInt(document.getElementById("pizzaQuality").value);
    console.log(typeof(pizza.pizzaQuantity));

    let total = pizza.totalPrice();
    let check = checkIfEmpty(Pizza);
    if(check) {
        document.getElementById("myPizzaSize").innerText = Pizza.pizzaSize;
        document.getElementById("pizzaSizePrice").innerText = Pizza.sizePrices() + " " + "Ksh";
        document.getElementById("myPizzaCrust").innerText = Pizza.pizzaCrust;
        document.getElementById("pizzaCrustPrice").innerText = Pizza.crustPrice() + " " + "Ksh";
        document.getElementById("myPizzaTopping").innerText = Pizza.pizzaTopping;
        document.getElementById("pizzaToppingPrice").innerText = Pizza.toppingPrice() + " " + "Ksh";
        document.getElementById("myPizzaQuantity").innerHTML= Pizza.pizzaQuantity() + " " + "Pcs";
        document.getElementById("total").innerHTML= "Your total price is" + " " + "total" + " " + "Ksh.";

        $("#make-order").hide();
        $("#myOrder").show();
    } else 
    document.getElementById("placeOrder").reset();
})


function checkIfEmpty(object) {
    if (isNaN(object.pizzaQuantity)) {
        alert("please key in the amount needed");
        return false;
    } else {
        return true;
    };
};