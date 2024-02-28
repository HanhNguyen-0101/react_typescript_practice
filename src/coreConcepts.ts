// type
type User = {
    username: string,
    age: number
}
const user: User = {
    username: 'a',
    age: 24,
}

// merge type with 2 WAYS
type Client = {
    login: boolean
}
type Admin = User & Client; // first way
const admin: Admin = {
    username: 'a',
    age: 12,
    login: true
}

interface AppAdmin extends User, Client { // second way
    auth: string
}
const appAdmin: AppAdmin = {
    auth: 'admin',
    login: false,
    username: '1',
    age: 12
}

// interface
// for object & can implement in class
interface Credentials {
    password: string;
    email: string;
}
interface Credentials {
    mode: string;
}
const creds: Credentials = {
    password: '111',
    email: '@',
    mode: 'dev'
}

//////////////////////
let hobbies: string[];
hobbies = ['jogging', 'swimming'];

let cusHobbies: [string, number, boolean]; // tuple type
cusHobbies = ['Alice', 34, true];

let role: 'admin' | 'user'; // literal type
role = 'admin';

let unionType: string | number; // union type
unionType = 34;

/////////////////////
// functions
// params
function add(a: number, b: number | string): number {
    return a + +b;
}
function calculate(a: number, b: number, func: (a: number, b: number) => number) {
    func(a, b);
}
calculate(4, 3, add);

// guard types - typeof / in (prop in object) / instanceof (value instanceof class)
function add3(a: number, b: number | string): number {
    if (typeof b === "string") {
        return a + +b;
    }
    return a + b;
}

// generic
// types
type Role = 'admin' | 'user' | 'editor';
let roles: Array<Role>;
roles = ['admin', 'user']

type DataStorage<T> = {
    storage: T[],
    add: (data: T) => void
}
const textStorage: DataStorage<string> = {
    storage: ['a'],
    add(data) {
        this.storage.push(data)
    }
}

// function
function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}
const applyUser = merge<{ a: string }, { b: number }>({ a: 'Alice' }, { b: 23 });
