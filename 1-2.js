function solution(a,b,c){
  let answer,max;
  let sum=a+b+c;
  if(a>b) max=a;
  else max=b;
  if(max<c) max=c;
  if((sum-max)>max) answer="True";
  else answer="NO";

  return answer;
}

console.log(solution(13,33,17))