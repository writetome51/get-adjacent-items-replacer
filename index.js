import {replaceAdjacentAt} from '@writetome51/array-replace-adjacent-at';
import {removeAdjacentAt} from '@writetome51/array-remove-adjacent-at';
import {insertAt} from '@writetome51/array-insert-at';
import {getHead, getTail} from '@writetome51/array-get-head-tail';


export const getSplitAfterIndex = (index, arr) => [
	getHead(index + 1, arr),
	getTail(arr.length - (index + 1), arr)
];



/**********************
Returns a replacer function that is a more reliable alternative to simply calling
Array.prototype.splice() when replacing items in `array`.  It strictly validates args,
checking if `startingIndex` is an existing index, and that
`startingIndex + numItemsToReplace` is not greater than `array.length`.
The replacer modifies the array and returns void.
`startingIndex` can be negative or positive.
 ***********************/

export const getAdjacentItemsReplacer = (array) => {
	return (startingIndex, numItemsToReplace, newItems) => {

		const numNewItems = newItems.length;

		if (numNewItems !== numItemsToReplace)
			array.splice(startingIndex, numItemsToReplace, ...newItems);

		else replaceAdjacentAt(startingIndex, newItems, array);
	};
}
