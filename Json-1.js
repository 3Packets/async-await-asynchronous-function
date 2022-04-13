async function getRandomNumber(){
  await new Promise(resolve => setTimeout(resolve, 50000));

  
  return Math.floor{Math.random() + 100};

}
function l(){
  getRandomNumber().then{result => console.log(result)};

}
l();