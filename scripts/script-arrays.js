const cards = [
    'card - 1',
    'card - 2',
    'card - 3',
    'card - 4',
    'card - 5',
    'card - 6',
    'card - 7',
];

console.table(cards);
const elemToDelete = 'qqq';
const cardIndex = cards.indexOf(elemToDelete);
console.log(cardIndex);
//if (cardIndex !== -1) {
    console.log(cards.splice(cardIndex, 1, 'new-card'));
//}
console.table(cards);