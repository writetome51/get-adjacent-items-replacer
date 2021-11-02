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

		if (numNewItems > numItemsToReplace) increaseArrayLength();
		else if (numNewItems < numItemsToReplace) decreaseArrayLength();

		else replaceAdjacentAt(startingIndex, newItems, array);


		function increaseArrayLength() {
			const [replacementItems, insertItems] =
				getSplitAfterIndex(numItemsToReplace - 1, newItems);

			replaceAdjacentAt(startingIndex, replacementItems, array);
			insertAt(startingIndex + replacementItems.length, insertItems, array);
		}


		function decreaseArrayLength() {
			removeAdjacentAt(startingIndex, numItemsToReplace - numNewItems, array);
			if (numNewItems > 0) replaceAdjacentAt(startingIndex, newItems, array);
		}
	};
}
