import {getAdjacentItemsReplacer} from './index.js';

// Can be used like this:

const numbers = [1, 2, 3, 4, 5, 6];
getAdjacentItemsReplacer(numbers)(
	-3, 3, [10, 11, 12]
);
console.log(numbers); // [1, 2, 3, 10, 11, 12]

// Or something like this:

const users = ['user1', 'user2', 'user3'];
const replaceAdjacentUsers = getAdjacentItemsReplacer(users);

replaceAdjacentUsers(1, 2, ['user4', 'user5']);
console.log(users); // ['user1', 'user4', 'user5']

// Modify users further:

replaceAdjacentUsers(0, 1, ['user6']);
console.log(users); // ['user6', 'user4', 'user5']

replaceAdjacentUsers(0, 1, '');
console.log(users); // ['user4', 'user5']

replaceAdjacentUsers(0,1,['']);
console.log(users); // ['user6', 'user4', 'user5']

if (1) console.log('test 1 passed');
else console.log('test 1 FAILED');


let nums = [1, 2, 3, 4, 5, 6];
const replacer = getAdjacentItemsReplacer(nums)
let ms = Date.now();
let i = -1;
while (++i < 10000000) {
	replacer(0, 2, [10, 11]);
	if (nums.length < 3) nums.push(1);
}
ms = Date.now() - ms;
console.log(ms);


nums = [1, 2, 3, 4, 5, 6];
 ms = Date.now();
 i = -1;
while (++i < 10000000) {
	nums.splice(0, 2, 10, 11);
	if (nums.length < 3) nums.push(1);
}
ms = Date.now() - ms;
console.log(ms);

