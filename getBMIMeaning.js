const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  let bmi = weight/(Math.pow(height,2))
  return bmi
}
function getBMIMeaning(weight, height) {
  //code here
  let bmi = calculateBMI(weight,height)
  if(bmi < 18.5){
    return 'Underweight'
  }else if (bmi > 18.5 && bmi < 24.9){
    return 'Normal weight'
  }else{
    return 'Overweight'
  }
}
module.exports = getBMIMeaning
