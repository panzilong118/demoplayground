window.name = 'bytedance';
function A () {
  this.name = 123;
}

A.prototype.getA = function () {
  console.log(this,'<-----this');
  return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();
