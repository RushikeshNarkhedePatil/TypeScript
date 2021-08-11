///////////////////////////////////////////////////////////////
// Problem Statement : Create one Function Maximum accept array
//                      and return Second largest number.
//Creator Name       : Rushikesh Dilip Narkhede
// Date        : 10/8/2021
///////////////////////////////////////////////////////////////
function Maximum(arr1:number[]):number
{
    //Max=arr1[0] SMax[arr1.length]
    var Max:number=0;
    var SMax:number=0;
    console.log("Number of array values is :")
    for(var i=0;i<arr1.length;i++)
    {
      console.log(arr1[i]);
      if(arr1[i]>Max)
      {
          SMax=Max;
          Max=arr1[i];
      }
      else if(arr1[i]>SMax)
      {
          SMax=arr1[i];
      }
    }
    return SMax;    
}
var iret:number;
iret=Maximum([5,44,33,99,44,4,66,55]);
console.log("Secon Largest Number is  :",iret)