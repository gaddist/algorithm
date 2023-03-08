function solution(a){
  let answer='';
  for(let x of a){
    answer+=x.toUpperCase();
    //let num=x.charCodeAt();
    //if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
    //else answer+=x;
  }
  return answer;
}


let s='ItisTimeToStudy';
console.log(solution(s));