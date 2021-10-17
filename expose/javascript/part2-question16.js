for(const value in statistics){
  if(statistics[value] % 2 !== 0 || value[0] === 'r'){
    console.log(statistics[value]);
  }
}
