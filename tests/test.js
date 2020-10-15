const completedList = new DoublyLinkedList();
const emptyList = new DoublyLinkedList();
const emptyList2 = new DoublyLinkedList();2

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
         it(`Значение последнего элемента списка - ${completedList.tail.value}`, function () {
            assert.equal(completedList.tail.value, 88);
         });
         it(`Значение следующего(относительно старого хвоста) элемента списка - ${completedList.tail.value}`, function () {
            assert.equal(completedList.tail.value, 88);
         });
         it(`Значение предыдущего(относительно добавленого) элемента списка - ${completedList.tail.previous.value}`, function () {
            assert.equal(completedList.tail.previous.value, 1);
         });
         it(`Следующий(относительно добавленого) элемента списка - null`, function () {
            assert.equal(completedList.tail.next, null);
         });
      }
      
      makeTest();

   });

   describe("Добавляем в пустой список", function () {

      function makeTest() {
         let lastElem = 44;
         emptyList2.push_back(lastElem);
         it(`Значение последнего элемента списка - ${emptyList2.tail.value}`, function () {
            assert.equal(emptyList2.tail.value, 44);
         });
         it(`Значение первого элемента списка - ${emptyList2.tail.value}`, function () {
            assert.equal(emptyList2.head.value, 44);
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