// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
 return users.filter(user => user.gender ===gender).reduce((sumOfBalance, user) => sumOfBalance + user.balance, 0);
};
// Change code above this line