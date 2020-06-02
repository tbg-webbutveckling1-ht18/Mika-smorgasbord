var cart = document.querySelector(".cartBtn");
var item = document.querySelector(".item");
var itemBtn = document.querySelectorAll(".itemBtn");
var purchaseBtn = document.querySelector(".purchaseBtn")
var removeBtn = document.querySelector(".removeBtn")
var totalCost = document.querySelector(".totalCost");
var products = {
    index0: {
        name: "item1",
        cost: 150   
    },
    index1: {
        name: "item2",
        cost: 50
    },
    index2: {
        name: "item3",
        cost: 100
    }
};
removeBtn.addEventListener("click", function() {
    var removeQuestion = prompt("Do you want to remove all items from your cart? Y/N");
    if (removeQuestion.toLocaleUpperCase() == "Y")
    {
        alert("Removed all items from your cart")
        item.innerHTML = "";
        totalCost.innerHTML = 0;
    }
})
purchaseBtn.addEventListener("click", function() {
    var purchaseQuestion = prompt("Do you want to purchase the items in your cart? Y/N");
    if (purchaseQuestion.toLocaleUpperCase() == "Y") 
    {
        alert("thanks for your purchase!");
        item.innerHTML = "";
        totalCost.innerHTML = 0;
    }
});
for (var index = 0; index < itemBtn.length; index++) {
    itemBtn[index].addEventListener("click", function() {
        
        if (this == itemBtn[0]) {
            item.innerHTML = products.index0.name + " + " + item.innerHTML;
            totalCost.innerHTML = products.index0.cost + parseInt(totalCost.innerHTML) + "kr";
        }
        else if (this == itemBtn[1]) {
            item.innerHTML = products.index1.name + " + " + item.innerHTML;
            totalCost.innerHTML = products.index1.cost + parseInt(totalCost.innerHTML) + "kr";
          }
        else {
            item.innerHTML = products.index2.name + " + " + item.innerHTML;
            totalCost.innerHTML = products.index2.cost + parseInt(totalCost.innerHTML) + "kr";
        }
    })};