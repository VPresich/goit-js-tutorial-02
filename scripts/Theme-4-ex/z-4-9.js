// Виконай рефакторинг функції calculateTotalPrice() таким чином, 
// щоб вона використовувала неявне повернення.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з
// параметрами(quantity, pricePerItem)
// У функції використане неявне повернення
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, 
// повертає правильне значення

// Change code below this line


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach( (item) => {totalPrice += item;});

//   return totalPrice;
// }

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach( (item) => {totalPrice += item;});

  return totalPrice;
}
// Change code above this line