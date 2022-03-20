function wantDelivery() {
    var locality = prompt("please enter target destination");
    alert("Dear customer, the delivery fee is present on the order");
    alert("Our services will be at" + " " + locality + " " + "at any time from now");
}
$(document).ready(function(){
    $(".delivery").click(function(){
        $(".delivery-img").fadeToggle(1500);
        $("#delivery").fadeToggle(1500);
    })
    $(".payment").click(function(){
        $(".delivery-img").fadeToggle(1500);
        $("#delivery").fadeToggle(1500);
    })
    $("#backToOrder").click(function(){
        $("#make-order").show
        $("#myorder").hide
    })
})
class Pizza {
    constructor(pizzaSize, pizzaCrust, pizzaTopping, pizzaQuality) {
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
        this.pizzaTopping = pizzaTopping;
        this.pizzaQuantity = this.pizzaQuantity;
    };
    sizePrice() {
        if (this.pizzaSize === "Small") {
            return 500;
        };
        if (this.pizzaSize === "Medium") {
            return 900;
        };
        if (this.pizzaSize === "Large") {
            return 1200;
        }
    }
    crustPrice() {
        if (this.pizzaCrust === "Thick-crust") {
            return 150;
        };
        if (this.pizzaCrust === "Salted-crust") {
            return 150;
        };
        if (this.pizzaCrust === "stuffed") {
            return 150;
        };
        if (this.pizzaCrust === "Crispy") {
            return 150;
        };
        if (this.pizzaCrust === "Gluten-free") {
            return 150;
        };
    }
    toppingPrice() {
        if (this.pizzaTopping === "Pepperoni") {
            return 100;
        };
        if (this.pizzaTopping === "BBQ") {
            return 100;
        };
        if (this.pizzaTopping === "Extra salt") {
            return 100;
        };
        if (this.pizzaTopping === "Veggies") {
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
        if (this.pizzaTopping === "Pinnaple") {
            return 100;
        };
        if (this.pizzaTopping === "Extra cheese") {
            return 100;
        };
        if (this.pizzaTopping === "Bacon") {
            return 100;
        };
    };

    totalPrice() {
        return (
            (this.sizePrices() + 
            this.crustPrice() + 
            this.toppingPrice()) * this.pizzaQuantity 
        );
    };
};

let submitButton = document.getElementById("makeOrder");
submitButton.addEventListener("click", function(){

    const pizza = new pizza();

    pizza.pizzaSize = document.getElementById("pizzaSize").value;
    pizza.pizzaCrust = document.getElementById("pizzaCrust").value;
    pizza.pizzaTopping = document.getElementById("pizzaTopping").value;
    pizza.pizzaQuantity = parseInt(document.getElementById("pizzaQuantity").value);
    console.log(typeof(Pizza.pizzaQuantity));

    let total = pizza.totalPrice();
    let check = checkIfEmpty(Pizza);
    if (check) {
        document.getElementById("myPizzaSize").innerText = Pizza.pizzaSize;
        document.getElementById("pizzaSizePrice").innerText = Pizza.sizePrices() + " " + "Kshs";
        document.getElementById("myPizzaCrust").innerText = Pizza.pizzaCrust;
        document.getElementById("pizzaCrustPrice").innerText = Pizza.crustPrice() + " " + "Kshs";
        document.getElementById("myPizzaTopping").innerText = Pizza.pizzaTopping;
        document.getElementById("pizzaTopping").innerHTML = Pizza.toppingPrice() + " " + "Kshs";
        document.getElementById("myPizzaQuantity").innerText = Pizza.pizzaQuantity() + " " + "PCS";
        document.getElementById("Total").innerText = "Your total price is" + " " + total + " " + "Kshs.";


        $("#order").hide();
        $("#myorder").show();
    } else 
    document.getElementById("placeOrder").requestFullscreen();
});


function checkIfEmpty(object) {
    if (isNaN(object.pizzaQuantity)) {
        alert("please key in number of ordered pizzas");
        return false;
    } else {
        return true;
    };
};