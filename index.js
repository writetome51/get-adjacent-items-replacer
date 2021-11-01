import {validateAdjacentItemsOperationArgs}
	from '@writetome51/validate-adjacent-items-operation-args';


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
		validateAdjacentItemsOperationArgs(startingIndex, numItemsToReplace, array);
		array.splice(startingIndex, numItemsToReplace, ...newItems);
	};
}
