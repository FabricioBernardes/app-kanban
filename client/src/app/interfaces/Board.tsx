import List from "./List";

export default interface Board {
    id: string;
    title: string;
    lists: List[];
}