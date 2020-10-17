import {
   DoublyLinkedList,
   Node
} from './list.js';

function start() {
   let list = new DoublyLinkedList();

   list.push_back(4);
   list.push_back(5);
   list.push_back(6);

   list.print_to_console(';');

   list.pop_back();

   list.print_to_console(';');

   console.log('The end of the script');

   console.log('______________________________________________________________________');
}

button.addEventListener('click',start);