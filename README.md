# getAdjacentItemsReplacer\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[]<br>): (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex: number, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItemsToReplace: number, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newItems: T[]<br>) => void

Returns a replacer function that is a more reliable alternative to simply calling  
Array.prototype.splice() when replacing items in `array`.  It strictly validates args,  
checking if `startingIndex` is an existing index, and that  
`startingIndex + numItemsToReplace` is not greater than `array.length`.  
The replacer modifies the array and returns void.  
`startingIndex` can be negative or positive.


## Examples
```js
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
```

## Installation
`npm i  @writetome51/get-adjacent-items-replacer`


## Loading
```js
import {getAdjacentItemsReplacer} from '@writetome51/get-adjacent-items-replacer'; 
```
