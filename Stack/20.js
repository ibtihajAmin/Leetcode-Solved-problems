// Problem Name : 20. Valid Parentheses

const isValid = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let temp = s[i];

    if (temp == "(" || temp == "{" || temp == "[") {
      stack.push(temp);
      continue;
    }

    if (stack.length == 0) return false;

    let checkValid;

    switch (temp) {
      case ")":
        checkValid = stack.pop();
        if (checkValid == "{" || checkValid == "[") return false;
        break;
      case "}":
        checkValid = stack.pop();
        if (checkValid == "(" || checkValid == "[") return false;
        break;
      case "]":
        checkValid = stack.pop();
        if (checkValid == "(" || checkValid == "{") return false;
        break;
    }
  }
  return stack.length == 0;
};
