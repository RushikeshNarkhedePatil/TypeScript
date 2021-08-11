///////////////////////////////////////////////////////
// Name Of Project : Check Prime or Not
// Date            : 28/7/2021
// Name Of Developer: Rushikesh Dilip Narkhede
//Description: The Number is Divisible by 2 and reminder is 0
//             Then number is not a prime number other number is
//             Consider as a prime Number.
//////////////////////////////////////////////////////
function Prime(no:number)
{
    var icnt=2;
  
    if(no%icnt==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
var iRet:boolean;
iRet=Prime(11);
if(iRet==true)
{
    console.log("It is a Prime Number")
}
else
{
    console.log("It is a Not Prime Number")
}
// console.log("Number is :",iRet);