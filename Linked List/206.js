/*Problem Statement : Reverse Linked List */

//Reverse linked list method
const reverseList = (head) => {
  let prev = null;
  let current = node;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
