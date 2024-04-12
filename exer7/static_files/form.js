const submitButton = document.getElementById("submit-button")
const addFood = (req, res) => {
  // alert('Adding Favorite Food')
  // if(req.body.foodname.length != 0){
  //   console.log(req.body.foodname)
  // }
  console.log(req.body)
}

if(submitButton.getAttribute("foodname") == ""){
    console.log("Empty Food Name")
} else {
    submitButton.addEventListener("click", addFood)
}
