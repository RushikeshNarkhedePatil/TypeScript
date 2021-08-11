///////////////////////////////////////////////////////////////
// Problem Statement : Create one Function Fibonacci That Function
//                      Accept One Number and print fibonacci series of That number.
//Creator Name       : Rushikesh Dilip Narkhede
// Date        : 11/8/2021
///////////////////////////////////////////////////////////////
function Fibonacci(no:number)
{
    let icnt=0;
    let num1=0;
    let num2=1;
    let sum=0;
    console.log("Fobonacci Number is :")
    for(icnt=1;sum<no;icnt++)
    {
            sum=num1+num2;
            console.log(sum);
            num1=num2;
            num2=sum; 
            // return sum;  
    }
}
var no=21;
 Fibonacci(21);
// console.log("",irret);

// x9=x9-1+x9-2
//=x8+x7
//=21+13
//34