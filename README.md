### installation
1. npm install -g typescript / npx tsc


### command to compile 
1. tsc filename
2. npx tsc filename 

//

## Types of the typescript
1. string 
2. number 
3. boolean // let isValid = true; 

4. Union type means multiple type // exam:  let userID: string | number = 'abc1'

5. any type  // exam: let user;   // not define the value

6. object type  // let user: {}; 

7. array type //  let hobbies: Array<string> || let hobbies: string []

8. undefined type:

9. Void type: // write void type rather than undefined type
/// function add(a: number, b: number): undefined {
   const result = a + b;
   console.log(result);
   }
/// 
Note: const: we need neet to explicitly say about a type; 

10. custom type: by using the word 'type'. it uses to a store type in typescript. with a custom 'Name'
**type AddFn = (a: number, b: number) => number**
custom type by using **"type"  "name"  "="**
custom type object by using "interface" "Name", "{}" /// no equal '=' or ':' use here.

11. Merge Type:
For type keyword: need to use '&' operator to merge to type together.  ~ type AppAdmin = Admin & AppUser;

12. For interface keyword: ~ interface AppAdmin extends Admin, AppUser {} /// we can keep it empty | we also can add more properties inside it.
13. Generic Types: type dataStorage<T>= {}
14. function type : add:()=> 

15. literal type: 
need to be exact value in the type. by creating a union type
    // union type: need to be exact type as it shown in type after colon. after colon - these are the types. 
 Example. ~   let role: 'admin' | 'user' | 'editor';
    role = 'admin';
    role = 'user';
    role = 'editor';

// how to use in function
type Role = 'admin' | 'user' | 'editor';
let role: Role; // 'admin' | 'user' | 'editor';
function performAction(action: string, role: Role) {}
Through union type, we check and perform an action in the function. see example in code. 

* type Guards:
function performAction1(action: string | number, role: Role) {
if (role === 'admin' && typeof action === 'string') {
// typeof = operator
// run my action
}
}


``` 
**type = here is a typescript keyword. it uses to a store type in typescript.** 
AddFn = name of the function - start with capital letter. 
'=' = assigning the type 
(a: number, b: number) = arguments of the type and inside its own type 
=> = use before its return type after () 
=> number = its return type is number. 
--------
interface Credentials {
key: type }
```










``` 
Note: 
1 - 2 - 3. you don't need to explicit assignment of the variable type. 

4. we can not use in union type for boolean
6. object type:  we will write // let user: {};  // here we assigning the type it
we use semicolon ";" end of the object elements
if we want exact shape value of the object then we can not assign empty object // let user = {};
7. Array type: we need to spicified vale inside hold this Array by useing < type > with Array //  let hobbies: Array<string> || let hobbies: string []
two ways we can write Array type; Array<string> || type [];
example: string[] , boolean [] , number [], 
{name: string; age: number} []; you can say bunch of object in a Array

****Function: 
*funtions are types need show in (arguments) also for return after (arguments): what type return function probide. 
* fun
if in the (arguments) there is a function as a arguments, we can write type by providing below: 
(calcFn: paramiter list like (a: number , b: number) => my return type )
**** "=>" it it not arrow function here as it is showing what is the function return type will be. 
**** when we are calling we can do: 

 function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
  calcFn(a, b);
}
  **** calculate(2,3, add2)
 a = number, 
 b = number 
 add = is a function
 
 (a: number, b: number, add)

 ```






```
let userName;
let userName: string = 'Max'

```

### Use of 
1. ':' colon assign a type: // let userName: string = 'Max'
2. explicit assignment
3. <> angle bracket 
4. type alias 
5. interface
6. class Name with **implements** keywords and Name of the interface.
class AuthCredentials implements Credentials { }
7. 
``` 
you will do explicit type assignment in advance senerios where the interred type maybe isn't the type you want. 
```


### where we use typescript: 
1. for variable,  assignment type (let) , re-assigning variable.
2. for const, we don't set a type explicitly because it has always an initial type from which the type can be inferred. 
const cannot reassign any ways. 
3. for function,  
we can put the type in the
**(arguments type)**
for return function
**():return type**
4. type Vs interface keywords 
``` 
* in general, we always use 'type' keyword. it allows the other type including object type. 
* interface, most of the time use for object type. you can also use it for function. but NOT for the Union type. 
* interface object can be use for class with implements keyword to extend 
* interface for object - can be use to add more property later to it with the same name. 
(use for sharing library with other dev to extend the properties) 

```


## Type Guards & Type Narrowing - A Closer Look
When using "Type Guards" (i.e., if statements that check which concrete type is being used), 
TypeScript performs so-called "Type Narrowing".

This means that TypeScript is able to narrow a broader type down to a more specific type.

Consider this example:
``` 
function combine(a: number | string, b: number | string) {
if (typeof a === 'number' && typeof b === 'number') {
return a + b;
}

return `${a} ${b}`;
}


```


In this example, inside the if statement, TypeScript narrows the types of a & b from "either a number or a string" down to "definitely a number" 
- because that's what the condition of the if check says (and TypeScript "understands" that).
After the if statement, TypeScript understands that a and b are again either a number or a string"  
- because we only make it into the if statement if both are of type number. The type therefore is broader again.

You can add all kinds of "Type Guards" to run code conditionally and get TypeScript to narrow a type:

* Use JavaScript's typeof operator as shown above to check if you're dealing with a string, number, 
boolean, object, function, symbol or bigint type

* Use JavaScript's instanceof operator to check if an object value is based on some specific class
* Use JavaScript's in operator to check if an object contains a specific property

Important: You can NOT check if a value meets the definition of a custom type (type alias) or interface type. These are TypeScript-specific features for which no JavaScript equivalent exists. Therefore, since those if checks need to run at runtime, you can't write any code that would be able to check for those types at runtime.

For example, the below code won't work because the User type does not exist once the code is compiled to JavaScript:
``` 
type User = {
name: string;
age: number;
};

type Admin = {
name: string;
age: number;
permissions: string[];
};

function login(u: User | Admin) {
if (typeof u === User) {
// do something
}
}
But you could check for the existence of the permissions property since only the Admin object will have one:

function login(u: User | Admin) {
if ('permissions' in u) {
// do something
}
}
```
That code would work at runtime.

## Generic Types: 
[Generic Type]()

* generic type is the type that works together with another type. 
* build in generic type 
* custom generic type / 
* storing data which i don't know what will be the type. in that case we can create a generic type. 
* need a type placeholder 
* type DataStorage<T> = {}; here T= type. we can put any name. it's a placeholder. 
* we can multiply type here, e.g. DataStorage<T, U>={}
* it's flexible, we can do storage.  
* we define at once, and we use it whenever we need to do work with different data. 
``` TypeScripts
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
```


