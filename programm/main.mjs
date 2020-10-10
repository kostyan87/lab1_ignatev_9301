import {
   DoublyLinkedList,
   Node
} from './list.mjs';

let list = new DoublyLinkedList();

/*list.push_back(1);
list.push_back(2);
list.push_back(3);

console.log(list.head);
console.log(list.head.next);
console.log(list.tail);*/
for (let i = 0; i < 9; i++) {
   list.push_back(i);
}

list.print_to_console(';');

list.push_front(69);

list.print_to_console(';');

console.log(list.at(0).value);

console.log(list.isEmpty());

console.log(list.get_size());