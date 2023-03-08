function solution(a){
  answer='';
  for(let x of a){
    if(x==x.toUpperCase()) answer+=x.toLowerCase();
    else answer+=x.toUpperCase();
  }
  return answer;
}


let s='StuDY';
console.log(solution(s));