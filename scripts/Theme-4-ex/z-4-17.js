
// Завдання 17/48
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
const getUserNames = users => {
  return users.map(user => user.name); 

  };
  // Change code above this line