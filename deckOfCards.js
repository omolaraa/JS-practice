function makeDeck() {
    const deck =[];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')){
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck){
    return deck.pop()
}
console.log(drawCard(makeDeck()));
//everytime we want to take out a card we'll have to call this function and the argument.
//we can make it better by using objects 

//using objects
const myDeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    drawnCards: [],
    initializeDeck(){
    const {deck, suits, values} = this;
    for (let value of values.split(',')){
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }

},
// by using objects we don't have to pass any argument through drawCard()
drawCard(){
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
},
drawMultiple(numCards) {
    for (let i = 0; i < numCards; i++){
        this.drawCard();
    }
},
drawMultiple2(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++){
        cards.push(this.drawCard());
    }
    return cards;
},
shuffle() {
    const {deck} = this;
    //loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];

        console.log(deck);
    }
}

    }
   

    

console.log(myDeck.deck);
console.log(myDeck.initializeDeck());
console.log(myDeck.shuffle());
// console.log(myDeck.drawMultiple(4));
// console.log(myDeck.drawnCards);
// console.log(myDeck.drawMultiple2(4));
// console.log(myDeck.deck.length);



// function shuffle(deck) {
//     //loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//         //pick random index before current element
//         let j = Math.floor(Math.random() * (i + 1));
//         //swap
//         [deck[i], deck[j]] = [deck[j], deck[i]];

//         console.log(deck);
//     }
// }
// console.log(shuffle(['1', '4', '5', '6', '7']));