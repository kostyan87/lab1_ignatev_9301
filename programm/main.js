import {
   DoublyLinkedList,
   Node
} from './list.js';

function start() {
   let list = new DoublyLinkedList();

   list.print_to_console(';');

   for (let i = 0; i < 9; i++) {
      list.push_back(i);
   }

   list.print_to_console(';');

   list.push_front(69);

   list.print_to_console(';');

   console.log(list.isEmpty());

   console.log(list.get_size());

   for (let i = 0; i < 28; i++) {
      list.push_front(i);
   }

   list.print_to_console(';');

   console.log('The end of the script');

   console.log('______________________________________________________________________');
}

button.addEventListener('click',start);