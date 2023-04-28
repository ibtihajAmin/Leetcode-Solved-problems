/*Problem Statement : Delete Node in a Linked List
  Problem Link : https://leetcode.com/problems/delete-node-in-a-linked-list/
*/

//Driver Function
const deleteNode = (node) => {
  let head = node;

  head.val = head.next.val;
  head.next = head.next.next;
};
