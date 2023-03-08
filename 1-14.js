function solution(s){
  let max=Number.MIN_SAFE_INTEGER;
  let answer='';
  for(let x of s){
    if(x.length>=max) max=x.length,answer=x;
  }
  return answer;

}

let a=['teacher','time','student','beautiful','good'];
console.log(solution(a));