/*
---------------------------------------------------------------
AOS SCROLLING ANIME SCRIPT
---------------------------------------------------------------
*/
AOS.init({
  duration: 1500
});

const input = document.getElementById("search-bar");
const list = document.getElementById("panel");
const panel = document.getElementById("panel");
// console.log(list);
const miamAPI = axios.create({
  baseURL: document.getElementById("site_url").content
});

// miamAPI.get().then(res => {
//   const food = res.data;

// });

input.oninput = sendQuery;

function sendQuery(evt) {
  miamAPI
    .post("/search-recipes", { search: evt.target.value })
    .then(res => {
      input.onkeyup = evt => {
        showResult(res.data);
      };
    })
    .catch(err => console.log(err));
}

function displayFood(recipes) {
  //console.log("good so far");

  panel.classList.remove("hide");
  // list.innerHTML = "";
  recipes.forEach(food => {
    //console.log(food);

    list.innerHTML += `<li class="item recipe">${food.name}
    <div class="bloc-recipies">
          <span class="img-recipies">
            <img src=${food.image} alt="">
          </span>
          <span class="name-recipies">${food.name}</span>
          <a href="/see-more/${food._id}" class="see-more-link">See more</a>
        </div><a href="/result" class="see-more-link white">See more</a></li>`;
  });
}

function showResult(results) {
  console.log("results");
  list.innerHTML = "";
  if (results.length) {
    displayFood(results);
  } else {
    console.warn("no results");
  }
}
