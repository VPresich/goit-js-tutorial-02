// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.

// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
const calculateTotalBalance = users => {
   return users.reduce((auxiliary, user) => auxiliary + user.balance , 0);
};
// Change code above this line