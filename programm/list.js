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
      if (initial_index < 0 || initial_index > this.get_size() - 1 || typeof initial_index != 'number') {
         throw 'There is no element with this index in the list';
      } else {
         let listElem = this.head;
         while (listElem.index != initial_index) {
            listElem = listElem.next;
         }
         return listElem;
      }
   }

   //increases all indexes by one
   increases_indexes(initial_index) {
      let listElem = this.at(initial_index).next;

      for (let i = initial_index; i < this.get_size() - 1; i++) {
         listElem.index++;
         listElem = listElem.next;
      }
   }

   //reduces all indexes by one
   reduces_indexes(index) {
      let listElem = this.at(index);

      for (let i = index; i < this.get_size() + 1; i++) {
         listElem.index--;
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
         this.increases_indexes(0);
      }
   }

   print_to_console(separator) {
      if (this.isEmpty()) {
         console.log('The list is empty');
      } else {
         let listElem = this.head;
         let listArray = '';

         for (let i = 0; i < this.get_size(); i++) {
            if (i == this.get_size() - 1) listArray = listArray + '[' + listElem.index + ']' + listElem.value;
            else listArray = listArray + '[' + listElem.index + ']' + listElem.value + separator;
            listElem = listElem.next;
         }

         console.log(listArray);
      }
   }

   pop_back() {
      if (this.isEmpty()) {
         throw 'The list is empty';
      } else {
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
   }

   pop_front() {
      if (this.isEmpty()) {
         throw 'The list is empty';
      } else {
         if (this.get_size() == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
         } else {
            this.head.next.previous = null;
            this.head = this.head.next;
            this.length--;
            if (this.head.index == this.get_size()) {
               this.head.index--;
            } else {
               this.reduces_indexes(1);
            }
         }
      }
   }

   insert(value, index) {
      if (this.isEmpty()) {
         throw 'The list is empty';
      } else if (index < -1 || index > this.get_size() - 1 || typeof index != 'number') {
         throw 'There is no element with this index in the list';
      } else {
         let newItem = new Node(value);

         if (index == -1) {
            this.push_front(value);
            /*newItem.previous = null;
            newItem.next = this.head;
            this.head.previous = newItem;
            this.head = newItem;
            this.length++;
            newItem.index = 0;
            this.increases_indexes(newItem.index);*/
         } else if (index == this.tail.index) {
            this.push_back(value);
            /*newItem.previous = this.tail;
            newItem.next = null;
            this.tail.next = newItem;
            this.tail = newItem;
            this.length++;
            newItem.index = this.get_size() - 1;*/
         } else {
            let previousItem = this.at(index);

            newItem.next = previousItem.next;
            newItem.previous = previousItem;
            previousItem.next.previous = newItem;
            previousItem.next = newItem;
            this.length++;
            newItem.index = previousItem.index + 1;
            this.increases_indexes(newItem.index);
         }
      }
   }

   remove(index) {
      if (this.isEmpty()) {
         throw 'The list is empty';
      } else if (index < 0 || index > this.get_size() - 1 || typeof index != 'number') {
         throw 'There is no element with this index in the list';
      } else {
         let removeElem = this.at(index);
         if (index == 0) {
            this.pop_front();
         } else if (index == this.get_size() - 1) {
            this.pop_back();
         } else {
            removeElem.previous.next = removeElem.next;
            removeElem.next.previous = removeElem.previous;
            this.length--;
            if (removeElem.next.index == this.get_size()) {
               removeElem.next.index--;
            } else {
               this.reduces_indexes(removeElem.next.index);
            }
         }
      }
   }

   set(value, index) {
      if (this.isEmpty()) {
         throw 'The list is empty';
      } else if (index < 0 || index > this.get_size() - 1 || typeof index != 'number') {
         throw 'There is no element with this index in the list';
      } else {
         this.remove(index);
         this.insert(value, index - 1);
      }
   }

   clear() {
      if (this.isEmpty()) {
         throw 'The list is empty';
      } else {
         const initialListSize = this.get_size();
         for (let i = 0; i < initialListSize; i++) {
            this.remove(0);
         }
      }
   }
}

export {
   DoublyLinkedList,
   Node
}