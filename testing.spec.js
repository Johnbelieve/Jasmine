//1
describe("remove and replace characters in a string", () => {
    it("accepts two characters, removes and replaces it", () => {
        expects(replaceWith("awesome", "e", "z")).toEqual("awzsomz")
    })
})

//2
describe("testing a code", () => {
    it("check how many expande value", () => {
        expect(expand([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3])
    })
})

//3

describe("accepts only number", () => {
    it("accepts only numbers and returns true", () => {
        expect(acceptNumberOnly(1, 2, 3, 4, 5, 6, NaN)).toEqual(true);
    });
})


//4

describe("accepts two arrays", () => {
    it("accepts two arrays, merge them and sort them out", () => {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
    });
})

//5
describe("merge and compare two arrays", () => {
    it("merge two objects and return the second parameter", () => {
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        })
    })
})