import {errorIfArrayTooShortToMeetAdjacentItemsRequest}
	from 'error-if-array-too-short-to-meet-adjacent-items-request';
import {errorIfIndex_howMany_orArray_areNotValid}
	from 'error-if-index-how-many-or-array-are-not-valid';

export function validateAdjacentItemsOperationArgs(startingIndex, howMany, array) {
	errorIfIndex_howMany_orArray_areNotValid(startingIndex, howMany, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howMany, array.length);
}
