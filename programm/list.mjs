class Node {
   constructor(value) {
      this.value = value;
      this.index = 0;
      this.next = null;
      this.previous = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   get_size() {
      return this.length;
   }

   isEmpty() {
      if (this.length == 0) return true;
      return false;
   }

   push_back(value) {
      let newNode = new Node(value)
      //newNode.next = this.head;
      //this.head.previous = newNode;
      if (this.isEmpty()) {
         this.head = newNode;
         this.tail = newNode;
         this.length = this.length + 1;
      } else {
         this.tail.next = newNode;
         newNode.previous = this.tail;
         this.tail = newNode;
         this.length = this.length + 1;
         newNode.index = newNode.previous.index + 1;
         newNode.next = null;
      }
   }

   print_to_console(separator) {
      let listElem = this.head;
      let listArray = '';

      for (let i = 0; i < this.get_size(); i++) {
         if (i == this.get_size() - 1) listArray = listArray + listElem.value;
         else listArray = listArray + listElem.value + separator;
         listElem = listElem.next;
      }

      console.log(listArray);
   }
}

export {
   DoublyLinkedList,
   Node
}