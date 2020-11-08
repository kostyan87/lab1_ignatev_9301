class Node {
   constructor(value) {
      this.value = value;
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
      if (this.isEmpty()) {
         this.head = newNode;
         this.tail = newNode;
         this.length = this.length + 1;
      } else {
         this.tail.next = newNode;
         newNode.previous = this.tail;
         this.tail = newNode;
         this.length = this.length + 1;
         newNode.next = null;
      }
   }

   at(initial_index) {
      if (initial_index < 0 || initial_index > this.get_size() - 1 || typeof initial_index != 'number') {
         throw 'There is no element with this index in the list';
      }
      let listElem = this.head;
      let i = 0
      while (i != initial_index) {
         if (i == initial_index) break;
         i++;
         listElem = listElem.next;
      }
      return listElem;
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
      }
   }

   print_to_console(separator) {
      if (this.isEmpty()) {
         console.log('The list is empty');
      } else {
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

   pop_back() {
      if (this.isEmpty()) {
         throw 'The list is empty';
      }
      if (this.get_size() == 1) {
         this.head = null;
         this.tail = null;
         this.length--;
      } else {
         this.tail.previous.next = null;
         this.tail = this.tail.previous;
         this.length--;
      }
   }

   pop_front() {
      if (this.isEmpty()) {
         throw 'The list is empty';
      }
      if (this.get_size() == 1) {
         this.head = null;
         this.tail = null;
         this.length--;
      } else {
         this.head.next.previous = null;
         this.head = this.head.next;
         this.length--;
      }
   }

   insert(value, index) {
      if (this.isEmpty()) {
         throw 'The list is empty';
      }
      if (index < -1 || index > this.get_size() - 1 || typeof index != 'number') {
         throw 'There is no element with this index in the list';
      }
      let newItem = new Node(value);

      if (index == -1) {
         this.push_front(value);
      } else if (index == this.tail.index) {
         this.push_back(value);
      } else {
         let previousItem = this.at(index);

         newItem.next = previousItem.next;
         newItem.previous = previousItem;
         previousItem.next.previous = newItem;
         previousItem.next = newItem;
         this.length++;
      }
   }

   remove(index) {
      if (this.isEmpty()) {
         throw 'The list is empty';
      }
      if (index < 0 || index > this.get_size() - 1 || typeof index != 'number') {
         throw 'There is no element with this index in the list';
      }
      let removeElem = this.at(index);
      if (index == 0) {
         this.pop_front();
      } else if (index == this.get_size() - 1) {
         this.pop_back();
      } else {
         removeElem.previous.next = removeElem.next;
         removeElem.next.previous = removeElem.previous;
         this.length--;
      }
   }

   set(value, index) {
      if (this.isEmpty()) {
         throw 'The list is empty';
      }
      if (index < 0 || index > this.get_size() - 1 || typeof index != 'number') {
         throw 'There is no element with this index in the list';
      }
      this.remove(index);
      this.insert(value, index - 1);
   }

   clear() {
      if (this.isEmpty()) {
         throw 'The list is empty';
      }
      const initialListSize = this.get_size();
      for (let i = 0; i < initialListSize; i++) {
         this.remove(0);
      }
   }

   push_front_list(list) {
      if (typeof list != 'object') {
         throw 'Invalid data type';
      }
      if (list.isEmpty()) {
         throw 'Added sheet is empty';
      }
      let listElem = list.tail;

      for (let i = list.get_size() - 1; i >= 0; i--) {
         this.push_front(listElem.value);
         listElem = listElem.previous;
      }
   }
}