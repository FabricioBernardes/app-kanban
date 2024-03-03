import CardSummary from './CardSummary';

export default interface List {
    id: string;
    title: string;
    cards: CardSummary[];
}