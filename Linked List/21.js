/* Problem Statement : Merge Two Sorted Lists 
   Problem Link : https://leetcode.com/problems/merge-two-sorted-lists/ 
*/

//Two sorted list should be merged
const mergeTwoLists = (list1, list2) => {
  /* If any of list is empty, then
  other list should be returned as mergedSorted list*/
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  }
};
