
type Hand = {
    cards: string;
    bet: number;
    strength: number;
}

const CARD_ORDER = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

function getStrength(hand: string) {
    const cards = hand.split('').sort();
    // five of kind
    if(cards[0] === cards[4]) return 0;
    // four of kind
    if(cards[0] === cards[3] || cards[1] === cards[4]) return 1
    // full house
    if(cards[0] === cards[1] && cards[2] === cards[4]
        || cards[0] === cards[2] && cards[3] === cards[4])
        return 2;
    // Three of a kind
    if(cards[0] === cards[2] || cards[1] === cards[3] || cards[2] === cards[4]) return 3;
    // Two pair
    if(cards[0] === cards[1] && cards[2] === cards[3]
        || cards[1] === cards[2] && cards[3] === cards[4]
        || cards[0] === cards[1] && cards[3] === cards[4])
        return 4;
    // One pair
    if(cards[0] === cards[1]
        || cards[1] === cards[2]
        || cards[2] === cards[3]
        || cards[3] === cards[4])
        return 5;
    return 6;
}

function compareCards(a: Hand, b: Hand) {
    if(b.strength !== a.strength) {
        return b.strength - a.strength;
    }
    for (let i = 0; i < a.cards.length; i++) {
        if(a.cards[i] !== b.cards[i]){
            return CARD_ORDER.indexOf(b.cards[i]) - CARD_ORDER.indexOf(a.cards[i])
        }
    }
    return 0;
}

export const part1 = (input: string) => {
    const hands: Hand[] = input
        .split('\n')
        .map(line => line.split(" "))
        .map(([cards, bet]) => {
            return{
                cards,
                bet: Number(bet),
                strength: getStrength(cards)
            }
        })
        .sort(compareCards)
    console.log(hands)


    return hands.reduce((total, hand, index) => total + hand.bet * (index+1), 0);
}
export const part2 = (input: string) => {
    return 0
}
