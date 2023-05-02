//Problem Name  234. Palindrome Linked List
//Problem Statement URL : https://leetcode.com/problems/palindrome-linked-list/description/

const isPalindrome = (head) => {
  let pointer = head;
  let stack = [];

  while (pointer !== null) {
    stack.push(pointer.val);
    pointer = pointer.next;

    if (pointer.next === null) {
      stack.push(pointer.val);
    }
  }

  let end = stack.length - 1;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === stack[end]) {
      end--;
    } else {
      return false;
    }
  }
  return true;
};
