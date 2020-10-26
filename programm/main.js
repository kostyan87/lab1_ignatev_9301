import {
   DoublyLinkedList,
   Node
} from './list.js';

function start() {
   const list = new DoublyLinkedList();
   const list2 = new DoublyLinkedList();

   for (let i = 0; i < 4; i++) {
      list.push_back(i);
   }

   for (let i = 4; i < 8; i++) {
      list2.push_back(i);
   }

   list2.push_front_list(list);

   list2.print_to_console(';');

   console.log('The end of the script');

   console.log('______________________________________________________________________');
}

button.addEventListener('click',start);