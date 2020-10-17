const completedList = new DoublyLinkedList();
const emptyList = new DoublyLinkedList();
const emptyList2 = new DoublyLinkedList();

completedList.push_back(5);
completedList.push_back(2);
completedList.push_back(8);
completedList.push_back(1);

completedList.print_to_console(';');

describe("isEmpty", function () {

   it(`Список emptyList пустой`, function () {
      assert.isTrue(emptyList.isEmpty());
   });
   it(`Список completedList не пустой`, function () {
      assert.isFalse(completedList.isEmpty());
   });

});

describe("get_size", function () {

   it(`Размер emptyList равен 0`, function () {
      assert.equal(emptyList.get_size(), 0);
   });
   it(`Размер completedList равен 5`, function () {
      assert.equal(completedList.get_size(), 5);
   });

});

describe("push_back", function () {

   describe("Добавляем в непустой список", function () {

      function makeTest() {
         let lastElem = 88;
         completedList.push_back(lastElem);
         it(`Значение последнего(хвоста) элемента списка - ${completedList.tail.value}`, function () {
            assert.equal(completedList.tail.value, lastElem);
         });
         it(`Значение следующего(относительно старого хвоста) элемента списка - ${completedList.tail.value}`, function () {
            assert.equal(completedList.tail.previous.next.value, completedList.tail.value);
         });
         it(`Значение предыдущего(относительно добавленого) элемента списка - ${completedList.tail.previous.value}`, function () {
            assert.equal(completedList.tail.previous.value, 1);
         });
         it(`Следующий(относительно добавленого) элемент списка - null`, function () {
            assert.equal(completedList.tail.next, null);
         });
      }

      makeTest();

   });

   describe("Добавляем в пустой список", function () {

      function makeTest() {
         let lastElem = 44;
         emptyList2.push_back(lastElem);
         it(`Значение последнего(хвоста) элемента списка - ${emptyList2.tail.value}`, function () {
            assert.equal(emptyList2.tail.value, lastElem);
         });
         it(`Значение первого(головы) элемента списка - ${emptyList2.tail.value}`, function () {
            assert.equal(emptyList2.head.value, lastElem);
         });
         it(`Предыдущий(относительно добавленого) элемента списка - null`, function () {
            assert.equal(emptyList2.tail.previous, null);
         });
         it(`Следующий(относительно добавленого) элемента списка - null`, function () {
            assert.equal(emptyList2.head.next, null);
         });
         it(`Размер списка - 1`, function () {
            assert.equal(emptyList2.get_size(), 1);
         });
      }

      makeTest();

   });

});

describe("at", function () {

   it(`Индекс нулевого элемента равен 0`, function () {
      assert.equal(completedList.at(0).index, 0);
   });
   it(`Индекс третьего элемента равен 3`, function () {
      assert.equal(completedList.at(3).index, 3);
   });
   it(`Индекс четвертого элемента равен 4`, function () {
      assert.equal(completedList.at(4).index, 4);
   });

});

const newCompletedList = new DoublyLinkedList();
const newEmptyList = new DoublyLinkedList();

newCompletedList.push_back(8);
newCompletedList.push_back(1);
newCompletedList.push_back(9);
newCompletedList.push_back(6);

describe("push_front", function () {

   describe("Добавляем в непустой список", function () {

      function makeTest() {
         let firstElem = 14;
         newCompletedList.push_front(firstElem);
         it(`Значение первого(головы) элемента списка - ${newCompletedList.head.value}`, function () {
            assert.equal(newCompletedList.head.value, firstElem);
         });
         it(`Значение предыдущего(относительно старой головы) элемента списка - ${newCompletedList.head.value}`, function () {
            assert.equal(newCompletedList.head.next.previous.value, firstElem);
         });
         it(`Значение предыдущего(относительно добавленого) элемента списка - null`, function () {
            assert.equal(newCompletedList.head.previous, null);
         });
         it(`Следующий(относительно добавленого) элемента списка - ${newCompletedList.head.next.value}`, function () {
            assert.equal(newCompletedList.head.next.value, 8);
         });
      }

      makeTest();

   });

   describe("Добавляем в пустой список", function () {

      function makeTest() {
         let firstElem = 75;
         newEmptyList.push_front(firstElem);
         it(`Значение последнего(хвоста) элемента списка - ${newEmptyList.tail.value}`, function () {
            assert.equal(newEmptyList.tail.value, firstElem);
         });
         it(`Значение первого(головы) элемента списка - ${newEmptyList.tail.value}`, function () {
            assert.equal(newEmptyList.head.value, firstElem);
         });
         it(`Предыдущий(относительно добавленого) элемента списка - null`, function () {
            assert.equal(newEmptyList.tail.previous, null);
         });
         it(`Следующий(относительно добавленого) элемента списка - null`, function () {
            assert.equal(newEmptyList.head.next, null);
         });
         it(`Размер списка - 1`, function () {
            assert.equal(newEmptyList.get_size(), 1);
         });
      }

      makeTest();

   });

});