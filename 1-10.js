function solution(s,t){
  let answer=0;
  for(let x of s){
    if(x==t) answer++;
  }
  


  return answer;
} 

let a='COMPUTERPROGRAMMING';
console.log(solution(a,'G'));