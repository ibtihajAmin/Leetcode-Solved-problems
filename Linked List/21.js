/* Problem Statement : Merge Two Sorted Lists 
   Problem Link : https://leetcode.com/problems/merge-two-sorted-lists/ 
*/

//Two sorted list should be merged
const mergeTwoLists = (list1, list2) => {
  const head = new ListNode(Infinity);
  let current = head;

  while (list1 !== null && list2 !== null) {
    if (list1.data < list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 == null) {
    current.next = list2;
  } else {
    current.next = list1;
  }
  return head.next;
};
