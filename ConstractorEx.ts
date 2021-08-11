class Base
{
    fun()
    {
        console.log("Inside Fun");
    }
    constructor(no1,no2)
    {
        console.log("Addition is : ",no1+no2);
    }
}
class Derived extends Base
{
    Gun()
    {
        console.log("Inside Derived Class")
    }
}

var obj1=new Base(66,33);
// obj1.fun();
var dobj=new Derived(22,44);
dobj.Gun();