// generics by class
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed());

const queue1 = new Queue<string>();
queue1.push("str");
console.log(queue1.pop().length);

// generics by interface
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "string" };
let kp2: KeyPair<string, number> = { key: "yh", value: 1 };

let arr: number[] = [1, 2, 3];
