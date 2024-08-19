// primitive type
// for const assignment: we need neet to explicitly say about a type;
const API_KEY = 'abc';

let userName: string;
let userAge = 34; // number
userName = 'Shah'; // string
let isValid = true; // boolean
//
let userID: string | number = 'abc1'; // union type // except boolean
userID = 123;

// object Type //
// let user: object;
// let user: {};

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: 'shah',
  age: 35,
  isAdmin: true,
  id: 'abc', // 123
};

// user = {}

// Array type //

// let hobbies;
// let ages: Array<number>; // Array<Specific Type>  // type[]
// ages = [12, 25, 25, 25, 95];
// {name: string; age: number} [];

// let hobbies: Array<string>;
let hobbies: string[]; // means should be an Array of String
hobbies = ['Sports', 'Cooking', 'Reading'];

// For function //
// function add (a: number, b: { value: number} ) {}

// return type - undefined
function add(a: number, b: number): undefined {
  const result = a + b;
  console.log(result);
}

// return type - void
function add1(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}
// return type - number
function add2(a: number, b: number): number {
  // const result = a + b;
  // return result;
  return a + b;
}

/// function in the arguments => return type.
type AddFn = (a: number, b: number) => number;
function calculate(
  a: number,
  b: number,
  // calcFn: (a: number, b: number) => number,
  calcFn: AddFn,
) {
  calcFn(a, b);
}

calculate(2, 3, add2);

/// custom type by using "type" "Name", "=" ///
// how store in a variable:
// type AddFn = (a: number, b: number) => number;   // function type
// type StringOrNumber = string | number // union type
//// object type with type keyword ////
type Users = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let users: Users;

/// custom type object by using "interface" "Name", "{}" /// no equal '=' or ':' use here.
////  object type with interface keyword ////

interface Credentials {
  email: string;
  password: number;
}
interface Credentials {
  mode: string;
}

let creds: Credential;
//
// creds = {
//   email: 'shah@ymail',
//   password: 123,
// };

//  interface can be used to add more item later to it with the same name.
interface Credentials {
  mode: string;
}

//  for class
// class AuthCredentials implements Credentials {
//   // from interface property must
//   email: string;
//   password: number;
//   //   you can add more properties
//   userName: string;
// }
//
// function login(credentials: Credentials) {}
// // we can all
// login(creds);
// // also
// login(new AuthCredentials());

//// merge type = &
// // For type keyword
// type Admin = {
//   permissions: string[];
// };
//
// type AppUser = {
//   userName: string;
// };
//
// // type AppAmin2 = Admin | AppUser; // union type = means can be use one of them. not two together.
// type AppAdmin = Admin & AppUser; // merging two types here.
// let admin: AppAdmin;
// admin = {
//   permissions: ['login'],
//   userName: 'shah',
// };

// For interface keyword merging
interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

// merging
interface AppAdmin extends Admin, AppUser {} // we can keep it empty | we also can add more properties inside it.

let admin: AppAdmin;
admin = {
  permissions: ['hello'],
  userName: 'Alam',
};

// union type: need to be exact type as it shown in type after colon.
// let role: 'admin' | 'user' | 'editor'; // these are types Not value
// role = 'admin';
// role = 'user';
// role = 'editor';

// how to use in function
type Role = 'admin' | 'user' | 'editor';
let role1: Role[]; //  generic type
let role2: Array<Role>; // generic type
let role: Role; // 'admin' | 'user' | 'editor';
function performAction(action: string, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    // typeof = operator
    // runs my action
  }
}

//  type Guards:
function performAction1(action: string | number, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    // typeof = operator
    // runs my action
  }
}

// Generic Type
let roles: Array<Role>; // build in generic type.

// custom generic type:
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void; // T[] //
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// const newUserGen = merge<{ name: 'shah' }, { age: 35 }>( // main
const newUserGen = merge({ name: 'shah' }, { age: 35 }); // alternative use without angle bracket.
