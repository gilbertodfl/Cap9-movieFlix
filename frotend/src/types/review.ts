import { User } from "./user";

export type Review =  {
    id: number;
    movieId: number;
    text: string;
    user: User[];
}