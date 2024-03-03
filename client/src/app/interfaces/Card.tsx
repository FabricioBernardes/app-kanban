export default interface Card {
    id: string;
    title: string;
    description: string;
    position: number;
    comments: Comment[];
}