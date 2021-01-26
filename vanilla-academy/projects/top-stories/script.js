const app = document.querySelector("#app");
const api =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VkxWa9dO1FPPlcrnwo3aRgPRAZN2uI4o";

// Fetch the lastest top stories
const topStories = fetch(api)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(data => {
    const news = data.results;
    let html = news
      .map(newsItem => {
        const title =
          '<h3><a href="' +
          newsItem.url +
          '" title="' +
          newsItem.abstract +
          '" target="blank">' +
          newsItem.title +
          "</a></h3>";
        return title;
      })
      .join("");

    app.innerHTML = html;
  })
  .catch(err => {
    console.log(err);
  });
