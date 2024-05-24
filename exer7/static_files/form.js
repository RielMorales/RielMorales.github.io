const addFood = (e) => {
  e.preventDefault();

  var newFood = document.getElementById("new-food");
  if (findFood(newFood[0].value.toLowerCase()) == false){
    if (findFoodRank(newFood[3].value) == false){
      addNewFood(newFood[0].value.toLowerCase(), newFood[1].value, newFood[2].value, newFood[3].value);
      alert(newFood[0].value + " is added")
    } else {
      alert("Rank " + newFood[3].value.toString() + " is existing");
    }
  } else {
    alert(newFood[0].value + " is existing")
  }
}

const findFood = (foodName) => {
  var faveFood = document.getElementsByName(foodName);
  if(faveFood[0]){
    return true
  } else {
    return false
  }
}

const findFoodRank = (rank) => {
  var foodRank = document.getElementById(rank.toString());
  if(foodRank){
    return true
  } else {
    return false
  }
}

const addNewFood = (name, description, url, rank) => {
  const parent = document.getElementById("fave-foods");
  // const gridFood = document.createElement("div");
  // gridFood.setAttribute("class", "foodGrid");
  const gridFood = document.getElementById("fave-foods").querySelector(".foodGrid");
  const food = document.createElement("div");
  food.setAttribute("class", "food");
  food.setAttribute("name", name);
  food.setAttribute("id", rank.toString());
  // food.innerHTML = "<h2>Rank "+rank.toString()+"</h2>\n<h1>" + name.toUpperCase() + "</h1>\n<img src=\"" + url + "\" alt=\"" + name + "\" width=\"400\" height=\"auto\" /><br>\n<p>" + description + "</p><br>";
  
  const rankElem = document.createElement("h2");
  rankElem.innerText = "Rank " + rank.toString();

  const foodElem = document.createElement("h1");
  foodElem.innerText = name.toUpperCase();

  const imgElem = document.createElement("img");
  imgElem.setAttribute("src", url);
  imgElem.setAttribute("alt", name);
  imgElem.setAttribute("width", "400");
  imgElem.setAttribute("height", "auto");

  const descElem = document.createElement("p");
  descElem.innerText = description;

  const delButton = document.createElement("button");
  const delContainer = document.createElement("div");
  delContainer.setAttribute("class", "button-container");
  // delButton.setAttribute("class", "button");
  delButton.setAttribute("id", "del-"+name);
  delButton.innerText = "Delete Food";
  delButton.addEventListener("click", deleteFood);


  food.appendChild(rankElem);
  food.appendChild(foodElem);
  food.appendChild(imgElem);
  food.appendChild(descElem);

  delContainer.appendChild(delButton)
  food.appendChild(delContainer);
  
  gridFood.appendChild(food);
  // gridFood.appendChild(rankElem);
  parent.appendChild(gridFood);
  sortFaveFoods("fave-foods");
}

//from stackoverflow
const sortFaveFoods = (faveFoodsID) => {
  var mylist = document.getElementById(faveFoodsID);
  var mylist1 = document.getElementById(faveFoodsID).querySelector(".foodGrid");
  console.log(mylist.innerHTML);
  var divs = mylist1.getElementsByClassName("food");
  var listitems = [];
  for (i = 0; i < divs.length; i++) {
          listitems.push(divs.item(i));
  }
  console.log(listitems)
  listitems.sort(function(a, b) {
      var compA = parseInt(a.getAttribute('id'));
      var compB = parseInt(b.getAttribute('id'));
      return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
  });
  for (i = 0; i < listitems.length; i++) {
      mylist1.appendChild(listitems[i]);
  }
  mylist.appendChild(mylist1);
  console.log(mylist.innerHTML);
}

const deleteFood = (e) => {
  const foodId = document.getElementById(e.target.id);
  console.log(foodId.parentNode.parentNode.id);
  const foodDelete = document.getElementById(foodId.parentNode.parentNode.id);
  // const foodDelete = document.getElementById("del-");
  // const foodDelete = foodList.getElementsByTagName('button');
  // foodList.removeChild(foodDelete);
  foodDelete.parentNode.removeChild(foodDelete);


  // alert("Deleting "+foodDelete.value);
  alert("Deleting "+foodDelete.getAttribute("name").toUpperCase());
}

const newFood = document.getElementById("new-food");
newFood.addEventListener("submit", addFood);