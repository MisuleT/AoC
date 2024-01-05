
type Hand = {
    cards: string;
    bet: number;
    strength: number;
}

const CARD_ORDER = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const CARD_ORDER_WITH_JOKER = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];

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
function getStrengthWithJokers(hand: string) {
    const cards = hand.split('').filter(card => card !=='J');
    const cardsSize = new Set(cards).size;
    let jokersCount = (hand.match(/J/g) || []).length;

    if(!jokersCount){
        return getStrength(hand);
    }
    // five of kind
    if(jokersCount === 5) return 0;
    if(jokersCount === 4) return 0;
    if(cardsSize === 1) return 0;
    // four of kind
    if(jokersCount > 1 && cardsSize === 2) return 1;

    if(jokersCount === 2) {
        // Three of a kind
        if(cardsSize === 3) return 3;
    }
    if(jokersCount === 1) {
        if(cardsSize === 2) {
            // full house
            if(cards[0] === cards[1] && cards[2] === cards[3]) return 2;
            if(cards[0] === cards[3] && cards[1] === cards[2]) return 2;
            if(cards[0] === cards[2] && cards[1] === cards[3]) return 2;
            // four of kind
            return 1;
        }
        // Three of a kind
        if(cardsSize === 3) return 3;
        // One pair
        if(cardsSize === 4) return 5;
    }
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

function compareCardsWithJokers(a: Hand, b: Hand) {
    if(b.strength !== a.strength) {
        return b.strength - a.strength;
    }
    for (let i = 0; i < a.cards.length; i++) {
        if(a.cards[i] !== b.cards[i]){
            return CARD_ORDER_WITH_JOKER.indexOf(b.cards[i]) - CARD_ORDER_WITH_JOKER.indexOf(a.cards[i])

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

    return hands.reduce((total, hand, index) => total + hand.bet * (index+1), 0);
}
export const part2 = (input: string) => {
    const hands: Hand[] = input
        .split('\n')
        .map(line => line.split(" "))
        .map(([cards, bet]) => {
            return{
                cards,
                bet: Number(bet),
                strength: getStrengthWithJokers(cards)
            }
        })
        .sort(compareCardsWithJokers)

    return hands.reduce((total, hand, index) => total + hand.bet * (index+1), 0);
}
