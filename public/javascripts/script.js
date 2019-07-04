/*
---------------------------------------------------------------
AOS SCROLLING ANIME SCRIPT
---------------------------------------------------------------
*/
AOS.init({
  duration: 1500
});

const input = document.getElementById("search-bar");
const list = document.getElementById("results");
const panel = document.getElementById("panel");

const miamAPI = axios.create({
  baseURL: document.getElementById("site_url").content
});

// miamAPI.get().then(res => {
//   const food = res.data;

// });

input.oninput = sendQuery;

function sendQuery(evt) {
  miamAPI
    .post("/", { query: evt.target.value })
    .then(res => {
      // res = query;
      // displayFood(res);
      input.onkeyup = evt => showResult(res.data);
    })
    .catch(err => console.log(err));
}

function displayFood(food) {
  panel.removeAttribute("hide");
  list.innerHTML = "";
  food.forEach(food => {
    list.innerHTML += `<li class="item recipe">${food}</li>
    <div class="bloc-recipies">
          <span class="img-recipies">
            <img src=${food.image} alt="">
          </span>
          <span class="name-recipies">${food.name}</span>
          <a href="/see-more/:${food.id}" class="see-more-link">See more</a>
        </div>`;
  });
}

function showResult(results) {
  console.log(results);
}
