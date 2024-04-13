const addFood = (e) => {
  e.preventDefault();

  var newFood = document.getElementById("new-food");
  if (findFood(newFood[0].value.toLowerCase()) == false){
    if (findFood(newFood[3].value) == false){
      addNewFood(newFood[0].value.toLowerCase(), newFood[1].value.toLowerCase(), newFood[2].value, newFood[3].value);
      alert(newFood[0].value + " is added")
    } else {
      alert("Rank " + newFood[3].value.toString() + " is existing");
    }
  } else {
    alert(newFood[0].value + " is existing")
  }
}

const findFood = (foodName) => {
  var faveFood = document.getElementById(foodName);
  if(faveFood){
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
  const food = document.createElement("div");
  food.setAttribute("name", name);
  food.setAttribute("id", rank.toString());
  food.innerHTML = "<h2>Rank "+rank.toString()+"</h2>\n<h1>" + name.toUpperCase() + "</h1>\n<img src=\"" + url + "\" alt=\"" + name + "\" width=\"400\" height=\"auto\" /><br>\n<p>" + description + "</p><br>";
  parent.appendChild(food);
  sortFaveFoods("fave-foods");
}

const sortFaveFoods = (faveFoodsID) => {
  var mylist = document.getElementById(faveFoodsID);
  var divs = mylist.getElementsByTagName('div');
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
      mylist.appendChild(listitems[i]);
  }
}

const newFood = document.getElementById("new-food");
newFood.addEventListener("submit", addFood);