import {
   DoublyLinkedList,
   Node
} from './list.js';

function start() {
   let list = new DoublyLinkedList();

   list.push_back(8);
   list.push_back(8);

   list.print_to_console(';');

   list.remove(0);

   list.print_to_console(';');

   console.log('The end of the script');

   console.log('______________________________________________________________________');
}

button.addEventListener('click',start);