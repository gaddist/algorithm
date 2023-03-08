//forEach , map , filter , reduce
a=[10,11,12,13,14,15];
let answer=a.reduce(function(v,i1){
  return v*2+i1; 

},2);

console.log(answer);