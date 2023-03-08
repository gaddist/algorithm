function solution(arr){
  let answer=arr;
  let sum=a.reduce((a,b)=>a+b,0);
  for(i=0; i<a.length; i++){
    for(j=i+1;j<a.length+1;j++){
      test=a[i]+a[j];
      if(sum-test==100){
        a.splice(j,1);
        a.splice(i,1);
      }
    }
  }
  return answer;
}


let a=[20,7,23,19,10,15,25,8,13];
console.log(solution(a));