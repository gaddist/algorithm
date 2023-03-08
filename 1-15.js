function solution(a){
  let answer;
  let mid=Math.floor(a.length/2);
  if(a.length%2==1) answer=a.substring(mid,mid+1);
  else answer=a.substring(mid-1,mid+1);
  return answer;

}

console.log(solution('good'));