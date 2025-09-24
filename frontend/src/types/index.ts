export interface User {
    id: number;
    name: string;
    surname: string;
    middleName: string;
    birthdate: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    userId: number;
    user: User;
}
