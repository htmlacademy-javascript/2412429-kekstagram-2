const isStrLengthValid = (str, maxLength) => str.length <= maxLength;
// console.log(isStrLengthValid('проверяемая строка', 20));

function isPalindrome(sourceStr) {
  const updateStr = sourceStr.toLowerCase().replaceAll(' ', '');
  const reverseStr = updateStr.split('').reverse().join('');

  return updateStr === reverseStr;
}


function extractNumbers(str) {
  const digits = str.toString().split('').filter((char) => /\d/.test(char));
  if (digits.length > 0) {
    return parseInt(digits.join(''), 10);
  } else {
    return NaN;
  }
}
//console.log(extractNumbers(2023));

const isMeetingWithinWorkingHours = (startOfDay, endOfDay, meetingStart, meetingDuration) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startDay = timeToMinutes(startOfDay);
  const endDay = timeToMinutes(endOfDay);
  const meetingStartInMinutes = timeToMinutes(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;
  return meetingStartInMinutes >= startDay && meetingEndInMinutes <= endDay;
};
