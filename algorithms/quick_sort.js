function quickSortRecursive(arr) {
	if (arr.length < 1) {
		return arr;
	}
	console.log("new arr: " + arr);

	let mid = Math.floor(arr.length / 2);
	console.log("Mid: " + mid, arr[mid]);
	let lp = 0;
	let rp = arr.length - 1;
	let swap = false;
	let larr = [];
	let rarr = [];

	// shift pointers if correctly in place
	while (lp < mid || rp > mid) {
		while (arr[lp] < arr[mid]) {
			console.log("lp, " + arr[lp] + " : " + arr[mid]);
			lp++;
			// console.log(lp, rp, arr[lp], arr[rp]);
		}

		while (arr[rp] > arr[mid]) {
			console.log("rp, " + arr[rp] + " : " + arr[mid]);
			rp--;
			// console.log(lp, rp, arr[lp], arr[rp]);
		}
		// console.log(arr[lp], arr[rp]);

		// if (lp !== mid && rp === mid) {
		// 	lp++;
		// 	swap = true;
		// } else if (lp === mid && rp !== mid) {
		// 	rp--;
		// 	swap = true;
		// } else if (lp !== mid && rp !== mid) {
		if (lp <= rp) {
			console.log(`Swapping ${arr[lp]} with ${arr[rp]}`);
			let temp = arr[lp];
			arr[lp] = arr[rp];
			arr[rp] = temp;
			lp++;
			rp--;
			swap = true;
			console.log(arr[lp], arr[rp], arr[mid] + " : " + arr);
		}
	}
	console.log("current arr: " + arr);

	if (swap) {
		left_split = arr.slice(0, mid);
		right_split = arr.slice(mid);
		return Array.prototype.concat(
			quickSortRecursive(left_split),
			quickSortRecursive(right_split)
		);
	} else {
		return arr;
	}
}

const nums1 = [4, 1, 1, 3, 2, 7, 9, 3, 7, 2];
const nums2 = [1, 5, 4, 3, 2, 10, 7];

console.log(quickSortRecursive(nums1));
// console.log(quickSortRecursive(nums2));

/*
[1, 5, 4, 3, 2, 10, 7];
mid_index = 3
mid = 3
left_pointer = 0
right_pointer = 6

1 < 3, shift left
5 !< 3, stop pointer

7 > 3, shift right
10 > 3, shift right
2 !> 3, stop pointer

swap variables

arr = [1, 2, 4, 3, 5, 10, 7];

// Recursive calls on left and right
return quickSort(arr.slice(0, mid)), quickSrot(arr.slice(mid+1, arr.length-1))

// left arr, recursive call 1:
arr = [1, 2, 4]
mid = 1
lp = 0
rp = 2
*/

// function quickSort(arr) {
// 	let newArr = []
// 	if (arr.length < 2) {
// 		return arr;
// 	}

// 	mid = Math.floor(arr.length / 2);
// 	left_pointer = 0
// 	right_pointer = array.length-1

// 	while(left_pointer < mid && right_pointer > mid){
// 		// shift pointers if correctly in place
// 	}

// 	return newArr
// }

// const nums1 = [4, 1, 1, 3, 2, 7, 9, 3, 7, 2];
// const nums2 = [5, 4, 3, 2, 1];

// console.log(quickSort(nums2));
