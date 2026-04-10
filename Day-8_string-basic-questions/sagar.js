class MyArray {

  constructor() {
    this.length = 0;
    this.data = {};
  }

Push(item) {
  this.data[this.length] = item;
  this.length++;
  return this.length;
}
get(index) {
  return this.data[index]
}
pop() {
  const lastItem = this.data[this.length - 1];
  delete this.data[this.length-1];
  this.length--;
  return lastItem;
}
shift() {
  const firstItem = this.data[0];

  for(let i = 0; i < this.length; i++){
    this.data[i] = this.data[i + 1];
  }
}

}
const myNewArray = new MyArray();
myNewArray.Push("one")
myNewArray.Push("Two")
myNewArray.Push("three")
myNewArray.pop()

console.log(myNewArray);

