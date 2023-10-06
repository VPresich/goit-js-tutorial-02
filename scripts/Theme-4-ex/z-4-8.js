// Виконай рефакторинг функції calculateTotalPrice() таким чином,
// щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна
// функція з параметрами(quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами,
// повертає правильне значення

//8
// Change code below this line


const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};