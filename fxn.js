console.log(greetNamed("John"));
// console.log(greetUnnamed("John"));
function greetNamed(name) {
    if (name) {
        return "Hi! " + name;
    }
}
var greetUnnamed = function (name) {
    if (name) {
        return "Hi! " + name;
    }
};
console.log(greetUnnamed("Johnu"));
function add(foo, bar, foobar) {
    var result = foo + bar;
    if (foobar !== undefined) {
        result += foobar;
    }
    return result;
}
var output = add(2, 2, 2);
console.log(output);
