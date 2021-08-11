var value : boolean=false;
var Count=0;
console.log("value of value is :",value);
console.log('Type of value is :',typeof(value));

//////////////array creation /////////////
var batches : string[]=["C_Programming","Java","Python","Web Development"];
console.log("All batches are :",batches);
console.log("First Element is:",batches[0]);
console.log("First Element is:",batches[1]);
console.log("First Element is:",batches[2]);
batches[1]="Anguler ";
batches.push(".Net");
console.log("Element are pop :",batches.pop());//pop chya case madhe last element remove hoto
console.log("Element are pop :",batches.pop());
batches.reverse();
// console.log("updated array is :",batches);
for(Count=0;Count<batches.length;Count++)
{
    console.log("Updated Batches are :",batches[Count]);
}

/////////////create array using any element ///////////////////////////
var tup1:any=['Pavan','Mayur','373882','true','false'];
Count=0;
for(Count=0;Count<tup1.length;Count++)
{
    console.log("Element of any array is :",tup1[Count]);
}
////////////////Const array///////////////////////////
Count=0;
const arr : number[] =[10,20,30,40];
console.log(typeof(arr));
for(Count=0;Count<arr.length;Count++)
{
    console.log("Const array :",arr[Count]);
}