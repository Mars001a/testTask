export type Users = {
    id: number;
    username: string;
    email: string;
    address: { city: string };
};

export type Address = {
    city: string;
    street: string;
    suite: string;
};

export type Company={
    name: string;
    catchPhrase: string;
    bs: string;
}


export type User = {
    id: number;
    name: string;
    email: string;
    address: Address;
    company: Company;
};

export type Posts={
    userId:number;
    id:number;
    title:string;
    body:string;
}