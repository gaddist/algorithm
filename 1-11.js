function solution(s){
  let answer=0;
  for(let x of s){
    if(x==x.toUpperCase()){
      answer++;
      // let num=x.charCodeAt();
      // if(num>=65 && num<=90) answer++;
    }
  }
  return answer;

}


let s='KoreaTimeGood';
console.log(solution(s));



//대문자 아스키코드 : 65 ~ 90 (A~Z)
//소문자 아스키코드 : 97 ~ 122 (a~z)

