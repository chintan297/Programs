class A
  {
     display()
    {
        console.log("A is invoked");
    }
  }
class B extends A                           // extands method based encapsulation
  {
    display()
    {
        console.log("B is invoked");
    }
  }
// B.prototype=Object.create(A.prototype)     // prototype based encapsulation
var a=[new A(),new B()]
a.forEach(element => {
    element.display()
});