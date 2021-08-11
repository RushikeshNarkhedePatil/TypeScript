////////////////////////////////////////////////////////////////
//  Program Name: Find Factors using function in typescript
//  Date:     25/07/2021
//  Day:      Sunday
//  Creator Name:Rushikesh Narkhede
////////////////////////////////////////////////////////////////
function Factors(Number1:number)
{
    let icnt=0;
    let strore:number=0;
    for(icnt=1;icnt<=Number1;icnt++)
    {
        if((Number1%icnt==0))
        {
            console.log("Factor is:",icnt);
        }
    }
    
}

Factors(20);


