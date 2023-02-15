let a = [34, 44, 334, 5, 54, 54, 4, -34, -9, 4324, -432435252];
function bableShort(a) {
  let isBubble;
  let temp;

  do {
    isBubble = false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        isBubble = true;
      }
    }
  } while (isBubble);
  return a;
}

console.log(bableShort(a));
