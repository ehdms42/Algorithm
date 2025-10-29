function solution(a, b) {
   const ab = Number(a.toString() + b.toString()) 
   const ba = Number(b.toString() + a.toString())
   
   return ab > ba ? ab : ba;
}