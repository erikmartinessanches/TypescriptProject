let message: string = 'Hello World';
console.log(message);

//The return type comes last.
function simpleFunction(name:string, isActive: boolean): number {
    return 0;
}

//Ok to not have an explicit return annotation if the return type is obvious.
function createMessage(name:string) {
    return "Hello, " + name;
}

let result = createMessage("Juno");

//Class members are by default public.
export class Customer {
    protected name: string; //Can be called from within this class or any subclass.
    protected isActive: true;

    constructor(name: string) { this.name = name; this.isActive = true;}

    announce() {return "Hello, my name is " + this.name;}
}

//class SpecialCustomer extends Customer {  
//    constructor(parameters) {
//        super();
//    }
//}

let firstCustomer = new Customer("Vela");
firstCustomer.announce();
