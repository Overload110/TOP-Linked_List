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

    pop() {
      if(!this.head){
        return null;
      }
  
      if(this.size === 1){
        this.head = null;
        this.size--;
        return;
      }
  
      let previous = this.head;
      let current = this.head;
  
      while(current.next){
        previous = current;
        current = current.next;
      }
  
      previous.next = null;
      this.size--;
    }

    contains(data) {
      let current = this.head;
  
      while(current){
        if(current.data === data){
          return true;
        }
  
        current = current.next;
      }
  
      return false;
    }
  
    find(data) {
      let current = this.head;
      let index = 0;
  
      while(current){
        if(current.data === data){
          return index;
        }
  
        index++;
        current = current.next;
      }
  
      return null;
    }

    toString() {
      let current = this.head;
      let result = '';
  
      while(current){
        result += `( ${current.data} ) -> `;
        current = current.next;
      }
  
      result += 'null';
  
      return result;
    }

    insertAt(data, index) {
      if(index === 0) {
        this.prepend(data);
        return;
      }
  
      let previous = this.getAt(index-1);
  
      if(!previous) {
        return;
      }
  
      let node = new ListNode(data, previous.next);
      previous.next = node;
      this.size++;
    }
  
    removeAt(index) {
      if(index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
      }
  
      let previous = this.getAt(index-1);
  
      if(!previous || !previous.next) {
        return;
      }
  
      previous.next = previous.next.next;
      this.size--;
    }
}