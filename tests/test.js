const completedList = new DoublyLinkedList();
const emptyList = new DoublyLinkedList();
const emptyList2 = new DoublyLinkedList();

completedList.push_back(5);
completedList.push_back(2);
completedList.push_back(8);
completedList.push_back(1);

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

const newPopFList = new DoublyLinkedList();
const newPopFUnitList = new DoublyLinkedList();

newPopFList.push_back(3);
newPopFList.push_back(7);
newPopFList.push_back(59);
newPopFList.push_back(4);
newPopFUnitList.push_back(5);

describe("pop_front", function () {

   describe("Удаляем из списка, где > 1 элементов", function () {

      function makeTest() {
         newPopFList.pop_front();
         it(`Значение первого(головы) элемента списка - ${newPopFList.head.value}`, function () {
            assert.equal(newPopFList.head.value, 7);
         });
         it(`Размер списка - ${newPopFList.get_size()}`, function () {
            assert.equal(newPopFList.get_size(), 3);
         });
      }

      makeTest();

   });

   describe("Удаляем из списка, где 1 элемент", function () {

      function makeTest() {
         newPopFUnitList.pop_front();
         it(`Значение первого(головы) элемента списка - ${newPopFUnitList.head}`, function () {
            assert.equal(newPopFUnitList.head, null);
         });
         it(`Значение последнего(хвоста) элемента списка - ${newPopFUnitList.tail}`, function () {
            assert.equal(newPopFUnitList.tail, null);
         });
         it(`Размер списка - ${newPopFUnitList.get_size()}`, function () {
            assert.equal(newPopFUnitList.get_size(), 0);
         });
      }

      makeTest();

   });

});

const newPopBList = new DoublyLinkedList();
const newPopBUnitList = new DoublyLinkedList();

newPopBList.push_back(3);
newPopBList.push_back(7);
newPopBList.push_back(59);
newPopBList.push_back(4);
newPopBUnitList.push_back(5);

describe("pop_back", function () {

   describe("Удаляем из списка, где > 1 элементов", function () {

      function makeTest() {
         newPopBList.pop_back();
         it(`Значение последнего(хвоста) элемента списка - ${newPopBList.tail.value}`, function () {
            assert.equal(newPopBList.tail.value, 59);
         });
         it(`Размер списка - ${newPopBList.get_size()}`, function () {
            assert.equal(newPopBList.get_size(), 3);
         });
      }

      makeTest();

   });

   describe("Удаляем из списка, где 1 элемент", function () {

      function makeTest() {
         newPopBUnitList.pop_front();
         it(`Значение первого(головы) элемента списка - ${newPopFUnitList.head}`, function () {
            assert.equal(newPopBUnitList.head, null);
         });
         it(`Значение последнего(хвоста) элемента списка - ${newPopFUnitList.tail}`, function () {
            assert.equal(newPopBUnitList.tail, null);
         });
         it(`Размер списка - ${newPopBUnitList.get_size()}`, function () {
            assert.equal(newPopBUnitList.get_size(), 0);
         });
      }

      makeTest();

   });

});

const insertList = new DoublyLinkedList();

insertList.push_back(4);
insertList.push_back(5);
insertList.push_back(78);
insertList.push_back(645);
insertList.push_back(25);
insertList.push_back(63);
insertList.push_back(6);

describe("insert", function () {

   function makeTest() {
      insertList.insert(55, 4);
      let insertElem = insertList.at(5);
      it(`Значение предыдущего элемента списка(относительно вставленного) - ${insertElem.previous.value}`, function () {
         assert.equal(insertElem.previous.value, 25);
      });
      it(`Значение следующего элемента списка(относительно вставленного) - ${insertElem.next.value}`, function () {
         assert.equal(insertElem.next.value, 63);
      });
      it(`Размер нового списка - 8`, function () {
         assert.equal(insertList.get_size(), 8);
      });
   }

   makeTest();

});

const setList = new DoublyLinkedList();

setList.push_back(44);
setList.push_back(77);
setList.push_back(89);
setList.push_back(15);
setList.push_back(62);
setList.push_back(43);

describe("set", function () {

   function makeTest() {
      let setValue = 55;
      setList.set(55, 4);
      let insertElem = insertList.at(5);
      it(`Значение нового элемента с индексом "4" - ${setList.at(4).value}`, function () {
         assert.equal(setList.at(4).value, setValue);
      });
      it(`Значение следующего элемента списка(относительно добавленного) - ${setList.at(4).next.value}`, function () {
         assert.equal(setList.at(4).next.value, 43);
      });
      it(`Значение предыдущего элемента списка(относительно добавленного) - ${setList.at(4).previous.value}`, function () {
         assert.equal(setList.at(4).previous.value, 15);
      });
   }

   makeTest();

});

const removeList = new DoublyLinkedList();

removeList.push_back(33);
removeList.push_back(41);
removeList.push_back(16);
removeList.push_back(91);
removeList.push_back(50);

describe("remove", function () {

   function makeTest() {
      removeList.remove(3);
      it(`Значение нового элемента с индексом "4" - ${removeList.at(3).value}`, function () {
         assert.equal(removeList.at(3).value, 50);
      });
   }

   makeTest();

});

const clearList = new DoublyLinkedList();

clearList.push_front(7);
clearList.push_front(7);
clearList.push_front(7);
clearList.push_front(7);

describe("clear", function () {

   function makeTest() {
      clearList.clear();
      it(`Значение головы списка - ${clearList.head}`, function () {
         assert.equal(clearList.head, null);
      });
      it(`Значение хвоста списка - ${clearList.tail}`, function () {
         assert.equal(clearList.tail, null);
      });
      it(`Размер списка - ${clearList.get_size()}`, function () {
         assert.equal(clearList.get_size(), 0);
      });
   }

   makeTest();

});