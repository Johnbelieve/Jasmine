//1
const replaceWith = (str, char1, char2) => {
    let output = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char1) {
            output += char2
            continue;
        }
        output += str[i]
    } return output;
}

//2
function expand(arr, val) {
    let newArr = [];
    for (let i = 0; i < val; i++) {
        for (let j = 0; j < arr.length; j++) {
            newArr.push(arr[j])
        }
    }
    return newArr;
}


//3
const acceptNumberOnly = (...string) => {
    return string.every(function (val) {
        return typeof val === "number"
    })
}


//4
const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2).sort((arr1, arr2,) => arr1 - arr2)
}

//5
var obj1 = {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}
function mergeObjects(obj1, obj2) {
    let merged = {
        ...obj1,
        ...obj2
    };
    return merged;
}