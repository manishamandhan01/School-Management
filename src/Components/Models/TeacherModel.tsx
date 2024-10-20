export interface ITeacherDetails {
    id: string;
    guid: string;
    isActive: boolean;
    balance: string; // or could be a number if you want to handle it as a numeric value
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
}