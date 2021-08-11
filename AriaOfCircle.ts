`Variable chya nava pudhe jar ? quesion mark dila tar kahi
 argument dila nahi tari chalel`
function Area2(Redious:number,PI:number=3.14)
{
    var answer:number=0;
    answer=PI*Redious*Redious;
    return answer;
}
var no:number=10.22;
var ret:number=0;
ret=Area2(no,7.12);
console.log("Area is :",ret);
ret=Area2(no);
console.log("Area is :",ret);

//////////////////////////////////////////////

function fun1(no1:number,no2 ?)
{
    console.log("First Number is :",no1);
    console.log("Second number is :",no2);
}
fun1(10);
///////////////////////////////////////
function fun(name:string,passport ?,nationality="Indian")
{
    if(passport==undefined)
    {
        console.log("Sorry id dont have passport");
    }
    else
    {
        console.log("passport is :",passport);
    }
    console.log("Natinality is : ",nationality);
}
fun("Rushikesh",12345678,"bangladeshi");

////////////////////////////////////////////
//variable accept number of argument
function fun11(...data:number[])// three dot dile tar kiti pan number of element function ghete
{
    console.log(data);
}
fun11(11,22,76,33,44,55,77)