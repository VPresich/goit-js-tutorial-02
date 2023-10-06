// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

function findLongestWord(string) {
  // Change code below this line

const words = string.split(" ");
  
  let longestWord = "";  
  
  for ( let i = 0; i < words.length ; i += 1){
    if (longestWord.length < words[i].length){
        longestWord = words[i];
    }
  }

  return longestWord;
  // Change code above this line
}