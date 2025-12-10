export interface ItemsResponse {
    items: ItemsSimple[];
}

export interface ItemsSimple {
    id: number;
    name: string;
    ki: number;
    maxKi: string;
    race: string;
    gender: string;
    image: string;
    affiliation: string;

}

