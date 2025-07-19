document.addEventListener("DOMContentLoaded",() => {
 
    const foodButtons = document.querySelectorAll(".order-food-btn");
    const foodList = document.getElementById("food-list");
    const foodTotalDisplay = document.getElementById("food-total");

    let foodTotal = 0;

    foodButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const foodItem = button.parentElement;
            const foodName = foodItem.querySelector("p").textContent;
            const foodPrice = parseInt(foodItem.getAttribute("data-price"));

            const foodEntry = document.createElement("P");
            foodEntry.textContent = `${foodName} - ₹${foodPrice}`;
            foodList.appendChild(foodEntry);

            foodTotal += foodPrice;
            foodTotalDisplay.textContent = foodTotal;

        })
    })
})