console.log("hello");

let a = new Set();
let b = new Set();

let _add = Set.prototype.add;
Set.prototype.add = function(...values) {
    values.forEach(value => _add.call(this, value));
};

a.add(1,2,3,4);

for (let x of a) {
    console.log(x);
}

console.log(a);

b.add(3,4,5,6);

console.log(b);

for (let x of b) {
    console.log(x);
}

Set.prototype.intersect = function(other) {
    let result = new Set();
    for (let x of other) {
        if (this.has(x)) {
            result.add(x);
        }
    }
    return result;
};

Set.prototype.union = function(other) {
    let result = new Set();
    for (let x of other) {
        result.add(x);
    }
    for (let x of this) {
        result.add(x);
    }
    return result;
};

Set.prototype.difference = function(other) {
    let result = new Set();
    for (let x of this) {
        if (!other.has(x)) {
            result.add(x);
        }
    }
    return result;
};

Set.prototype.product = function(other) {
    let result = new Set();
    for (let x of this) {
        for (let y of other) {
            result.add([x, y]);
        }
    }
    return result;
};

Set.prototype.equals = function(other) {
    if (this.size !== other.size) {
        return false;
    }
    for (let x of other) {
        if (!this.has(x)) {
            return false;
        }
    }
    return true;
};

let i1 = a.intersect(b);
let i2 = b.intersect(a);

console.log(i1);
console.log(i2);

console.log(i1 === i2);
console.log(i1.equals(i2));

console.log("adding NaNs");
i1.add(NaN);
i2.add(NaN);
console.log(i1.equals(i2));

let u1 = a.union(b);
let u2 = b.union(a);

console.log(u1);
console.log(u2);
console.log(u1.equals(u2));

let d1 = a.difference(b);
let d2 = b.difference(a);

console.log(d1);
console.log(d2);
console.log(d1.equals(d2));

console.log(a.difference(a));

a = new Set([1,2]);
b = new Set(["x","y"]);

console.log(a.product(b));

//Set = function() {
//    this.x = 5;
//    this.y = 10;
//};
//
//let foo = new Set();
//console.log(foo);
