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
      let newNode = new Node(value);
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

   at(initial_index) {
      if (initial_index < 0 || initial_index > this.get_size() - 1) {
         console.log('There is no element with this index in the list');
      } else {
         let listElem = this.head;
         while (listElem.index != initial_index) {
            listElem = listElem.next;
         }
         return listElem;
      }
   }

   //increases all indexes by one
   change_indexes(initial_index) {
      let listElem = this.at(initial_index).next;

      for (let i = initial_index; i < this.get_size() - 1; i++) {
         listElem.index++;
         listElem = listElem.next;
      }
   }

   push_front(value) {
      let newNode = new Node(value);
      if (this.isEmpty()) {
         this.head = newNode;
         this.tail = newNode;
         this.length = this.length + 1;
      } else {
         this.head.previous = newNode;
         newNode.next = this.head;
         this.head = newNode;
         this.length = this.length + 1;
         this.change_indexes(0);
      }
   }

   print_to_console(separator) {
      let listElem = this.head;
      let listArray = '';

      for (let i = 0; i < this.get_size(); i++) {
         if (i == this.get_size() - 1) listArray = listArray + '[' + listElem.index +']' + listElem.value;
         else listArray = listArray +'[' + listElem.index +']' + listElem.value + separator;
         listElem = listElem.next;
      }

      console.log(listArray);
   }
}

export {
   DoublyLinkedList,
   Node
}