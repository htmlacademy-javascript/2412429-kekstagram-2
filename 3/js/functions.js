function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replaceAll(/ /g, '');
  const length = cleanedStr.length;

  for (let i = 0; i < length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(isPalindrome('кекс'));

const isStrLengthValid = (str, maxLength) => str.length <= maxLength;
console.log(isStrLengthValid('проверяемая строка', 20));
