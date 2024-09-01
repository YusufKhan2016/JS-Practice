/*There are two types array javascript:
1. continous
2. Holey


There happens three types of array optimization in javascript in 
those respective types of array depending on their element:


1. SMI (smal integer)
2. Packed element
3. Double(float, string, function)

*/

const arrTwo = [1,2,3,4,6,7,8,9];
//PACKED SMI ELEMENTS

arrTwo.push(6.0);
//PACKED DOUBLE ELEMENTS

arrTwo.push('7');
//PACKED ELEMENTS

arrTwo[10] = 11;
//HOLEY ELEMENTS : NOW THE ARRTWO BECAME HOLEY ELEMENTS
// CAUSE THERE ARE NOW DIFFERENT TYPES OF ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);





