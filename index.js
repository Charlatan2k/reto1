function subs(op1, op2){
  return op1 - op2
}

function mult(op1, op2){
  return op1 * op2
}

function div(op1, op2){
  return op1 / op2
}

function rq(op1){
  let result = Math.sqrt(op1);
  return result;
}


module.exports={suma, subs, mult, div, rq};