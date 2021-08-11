////////////////////////////////////////////////////////////////
//  Program Name: Accept Three input Number and Return Largest
//                  Number using function in typescript
//  Date:     25/07/2021
//  Day:      Sunday
//  Creator Name:Rushikesh Narkhede
////////////////////////////////////////////////////////////////

function Large(no1:number,no2:number,no3:number):number
{
    var temp:number=0;
    if(no1>no2&&(no1>no3))
    {
        temp=no1;
        return temp;
    }
    else if(no2>no1&&(no2>no3))
    {
        temp=no2;
        return temp;
    }
    else{
        temp=no3;
        return temp;
    }
}
var iret:number=0;
iret=(Large(63,88,864))
console.log("Largest number is :",iret);
iret=(Large(93,88,66))
console.log("Largest number is :",iret);
iret=(Large(73,88,66))
console.log("Largest number is :",iret);