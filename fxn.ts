console.log(greetNamed("John"));
// console.log(greetUnnamed("John"));

function greetNamed(name: string) : string {
    if(name){
        return "Hi! " + name;
    }
}
var greetUnnamed: (name: string) => string = function(name: string) : string {
    if(name){
        return "Hi! " + name;
    }
}
console.log(greetUnnamed("Johnu"))

function add(foo: number, bar: number, foobar?: number ) : number {
    var result = foo + bar;
    if(foobar !== undefined ){
        result += foobar;
    }
    return result;
}
var output = add(2,2,2);
console.log(output);