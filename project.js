let arr;
const container = document.getElementById("container");

fetch("./data/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    arr = data;
    createProject(data);
  })
  .catch((error) => {
    console.log(error);
  });

function createProject(data) {
  data.map((d) => {
    container.innerHTML += `
      <div class="card" style="width: 18rem" id="container">
        <div class="card-body">
          <h5 class="card-title">${d.heading}</h5>
          <p class="card-text">${d.text}</p>
          <a href="${d.live_Link}" class="card-link">Live Link</a>
          <a href="${d.Git_hub_link}" class="card-link">GitHub Link</a>
        </div>
      </div>`;
  });
}
