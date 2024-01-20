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
      const node = new ListNode(data);
  
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
}