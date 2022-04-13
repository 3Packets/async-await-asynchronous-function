function getRandomNumber()  {
    return new Promise((resolve, reject) => {
      console.log("It is done.");
      // Succeed half of the time.
      if (Math.random() > 5) {
        resolve("SUCCESS")
      } else {
        reject("FAILURE")
      }
    })
  }
  
  const getrandomNumbers = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  //console.log("Calling Settimeout");
   // setTimeout (function(){console.log("Message");}, 500);
    //console.log("tel");
  const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  setTimeout(function(){
    alert('.5 seconds has passed');
  }, 500);
  console.log(fetchPromise);
  function handleResolution(){
  if(b===0.0){
      reject("Division by zero");
  }
  let result = a/b;
  resolve(result);
  
  
  }
  
  
  
  fetchPromise.then( response => {
    console.log(`Received response: ${response.status}`);
  });
  async function getRandomNumbers() {
      let user = await getUser(100);
      let services = await getServices(user);
      let cost = await getServiceCost(services);
      console.log(`The name of the person is ${name}`);
  
  //getrandomnumbers();
  
  
  }
  