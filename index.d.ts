export declare function getAdjacentItemsReplacer<T>(
	array: T[]
): (
	startingIndex: number,
	numItemsToReplace: number,
	newItems: T[]
) => void;
