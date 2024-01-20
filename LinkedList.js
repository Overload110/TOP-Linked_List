class Node {
    constructor(data = null, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
      const node = new Node(data);
  
      if(!this.head){
        this.head = node;
      } else {
        let current = this.head;
  
        while(current.next){
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }

    prepend(data) {
      const node = new Node(data, this.head);
      this.head = node;
      this.size++;
    }

    getSize() {
      return this.size;
    }
  
    getHead() {
      return this.head;
    }
  
    getTail() {
      let current = this.head;
  
      while(current.next){
        current = current.next;
      }
  
      return current;
    }
  
    getAt(index) {
      let current = this.head;
      let count = 0;
  
      while(current){
        if(count === index) {
          return current;
        }
  
        count++;
        current = current.next;
      }
  
      return null;
    }
}