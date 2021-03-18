const getBmi=function(weightinKg,heightinM){
  try{ return this.bmiData.result= weightinKg/( heightinM * heightinM)}
  catch(error){
     return undefined;
}}
export{getBmi};