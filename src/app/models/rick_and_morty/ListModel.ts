export interface ResultsResponse {
    results: ResultsSimple[];
}
export interface ResultsSimple {
    id:number;
    name: string;
    status: string;
    species: string;
    type:string;
    gender:string;
    image: string;
}

