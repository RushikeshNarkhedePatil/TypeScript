///////////////////////////////////////////////////////////////
// Problem Statement : Create one Function Match That Function
//                      Accept One String and return Word matching or not.
//Creator Name       : Rushikesh Dilip Narkhede
// Date        : 10/8/2021
///////////////////////////////////////////////////////////////
function Match(Name:string):boolean
{
    if(Name.match("Marvellous"))
        return true;
    else
        return false;
}
var iret=Match("welcome to Marvellous");
if(iret==true)
{
    console.log("Marvellous world in it");
}
else
{
    console.log("Not Marvellous word in it");
}