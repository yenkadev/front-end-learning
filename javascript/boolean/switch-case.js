/**
 * Nếu điều kiện là tập các giá trị xác định 
 * Nếu điều kiện là dạng khoảng (lớn/bé hơn)
 */

function printMonth(n) {
  let month = '';
  console.log("n", n);
  
  switch (true) {
    case (n >= 1 && n <= 4):
      month = 'Quy 1';
      break;
    case (n >= 5 && n <= 8):
      month = 'Quy 2';
      break;
    case (n >= 9 && n <= 12):
      month = 'Quy 3';
      break;
    default:
      month = 'Kg thuoc quy nao';
  }

  return month;
}

console.log(printMonth(7));

/**
 * Write a function to classify student
 * Receive mark as number, output:
 * mark > 8 -> 'Excellence'
 * 7 <= mark <= 8 -> 'Good'
 * 4 <= mark <= 6 -> 'Not Good'
 * mark <4 -> 'Bad'
 */
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return "Invalid mark";

  switch (mark) {
    case 1:
    case 2:
    case 3: {
      return 'Bad';
    }
    case 4:
    case 5:
    case 6: {
      return 'Not Good';
    }
    case 7:
    case 8: {
      return 'Good';
    }
    case 9:
    case 10: {
      return 'Excellence';
    }
  }
}

/**
 * A list of error codes from server
 * EO1: Invalid user or password
 * EO2: Bad request
 * E03: Missing code
 * Write a function to take errorCode and return the according message
 */
// v1
function getErroMessage(errorCode) {
  let message = '';
  switch (mark) {
    case 'EO1': {
      message = 'Invalid user or password';
      break;
    }
    case 'EO2': {
      message = 'Bad request';
      break;
    }
    case 'EO3': {
      message = 'Missing code';
      break;
    }
    default: {
      message = 'Something went wrong';
    }
  }
  return message;
}

// v2
function getErrorMessage(errorCode) {
  const errorMessages = {
    EO1: 'Invalid user or password',
    EO2: 'Bad request',
    EO3: 'Missing code'
  }
  return errorMessages[errorCode] || 'Something went wrong';
}

