export interface ResultsResponse {
    results: ResultsSimple[];

}
export interface ResultsSimple {
    id: number;
    age: number;
    birthdate:string;
    name: string;
    portrait_path: string;
    status: string;
}

