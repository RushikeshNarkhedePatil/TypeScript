///////////////////////////////////////////////////////////////
// Problem Statement : Create one Function Maximum accept array
//                      and return largest number.
//Creator Name       : Rushikesh Dilip Narkhede
// Date        : 8/8/2021
///////////////////////////////////////////////////////////////
function Maximum(arr1:number[]):number
{
    var temp:number=0;
    console.log("Number of array values is :")
    for(var i=0;i<arr1.length;i++)
    {
        console.log(arr1[i]);

        temp=temp+arr1[i];

    }
    return temp;
}
var iret:number;
iret=Maximum([5,44,33,99,44,55]);
console.log("Sumesion of Array is :",iret)