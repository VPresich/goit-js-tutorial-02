// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }
  for (const elem of order) {
    total += elem;
  }

  // Change code above this line
  return total;
}
