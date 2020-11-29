// Homework Assignment # 11 - Exceptions

function reverseJsonArray(str = '') {
    try {
        let arr = JSON.parse(str);
        arr.reverse();
        return JSON.stringify(arr);
    } catch {
        return false;
    }
}

console.log(reverseJsonArray());
// expected: false

console.log(reverseJsonArray(true));
// expected: false
console.log(reverseJsonArray(false));
// expected: false

const emptyArray = [];
const oneArray = [1];
const evenArray = [1, 2, 3, 4];
const oddArray = [1, 2, 3, 4, 5];

console.log(reverseJsonArray(evenArray));
// expected: false
console.log(reverseJsonArray(['foo', 'bar', 'blubb']));

console.log(reverseJsonArray('[foo, bar, foobar'));
// expected: false
console.log(reverseJsonArray('boo, far, one, two'));
// expected: false
console.log(reverseJsonArray("['foo'; 'bar'; 'blubb']"));
// expected: false

console.log(reverseJsonArray(JSON.stringify(emptyArray)));
// expected: []

console.log(reverseJsonArray(JSON.stringify(oneArray)));
// expected: [1]

console.log(reverseJsonArray(JSON.stringify(evenArray)));
// expected: [4, 3, 2, 1]

console.log(reverseJsonArray(JSON.stringify(oddArray)));
// expected: [5, 4, 3, 2, 1]
console.log(reverseJsonArray("['a', 'b', 'c']"));
// expected: ['c', 'b', 'a']
