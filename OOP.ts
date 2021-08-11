import { substraction } from "./Server";

// Class Declaration
class Arithmatic   //class mhanje nakasha blue print
    //class madhe function define karnyasathi function keyword use karnyachi garaj nahi
{
    //Characteristic 
    ino1:number=0;
    ino2:number=0;
    sum:number=0;
    //Behaviour/Function
    Addition()
    {
        this.sum=this.ino1+this.ino2;   //typecript madhe pratek function che variable
                                //vaparnyasathi this.variable name vaprav lagate
        return this.sum;
    }
    Substraction()
    {
        this.sum=this.ino1-this.ino2
        return this.sum;
    }
    constructor(x:number,y:number)// jitake object create hotil titakya vela call hoil
                    //apan 2 value contractor la pathavlya ani tya madhe function madhalya characteristics madhe this vaprun tya values taklya
    {
        console.log("Jay Ganesh"); //2 time print hoil karan 2 object ahet
        this.ino1=x;
        this.ino2=y;
        this.sum=0;
    }
    
}
// jo paryant class cha object create karat nahi to paryant tyala memory milat nahi
// javascript support automatic garbege collection
//object creation
var obj1=new Arithmatic(30,33);  //object 
var obj2=new Arithmatic(66,44);
var iret=0;
iret=obj1.Addition();
console.log("Addition is :",iret);
iret=obj2.Substraction();
console.log("Substraction is :",iret);