function solution(a){
  let answer;
  answer=a.filter(function(v,i){
    if(i==a.indexOf(v)) return true;
  });
  return answer;
}

let str=["good","time","good","time","student"];
console.log(solution(str));