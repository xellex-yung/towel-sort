
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  let res2 =[];
  if(matrix)
  {
 for (let i = 0; i < matrix.length; i ++)
 {

   if(i%2!=0)
   {
     res.push(matrix[i].reverse());
   }
   else{
    res.push(matrix[i]);
   }

 }
 for (let i = 0; i < res.length; i++)
 {

   res2 = res2.concat(res[i]);
 }

return res2;
  }
  else return [];
}
