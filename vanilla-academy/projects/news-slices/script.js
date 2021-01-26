const articleSection = document.querySelector(".articles");
const apiURL =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VkxWa9dO1FPPlcrnwo3aRgPRAZN2uI4o";

/**
 * Replace the NY Times API with the category passed
 * @param {string} category Category for the articles that need to be fetched
 */
const categoryURL = category => {
  return apiURL.replace("home", category);
};

/**
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
const sanitizeHTML = str => {
  var temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
};

/**
 * Helper function to create html of 5 articles returned by
 * the NY Times API. It will then re-render the articles to
 * show selection
 * @param {Array} articles Array of articles for rendering
 */
const renderArticles = articles => {
  firstFive = articles.slice(0, 5);
  articleSection.innerHTML = firstFive
    .map(article => {
      const html =
        '<article><h3><a href="' +
        sanitizeHTML(article.url) +
        '" target="blank">' +
        sanitizeHTML(article.title) +
        "</a></h3>" +
        "<p>" +
        sanitizeHTML(article.abstract) +
        "<p></article>";

      return html;
    })
    .join("");
};

/**
 * Takes in a string based URL and fetches the data from the API of
 * the URL. That data is then passed on to another function to render
 * the articles on the page
 * @param {String} url A URL for the page to fetch
 */
const fetchURL = url => {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(data => {
      renderArticles(data.results);
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * Event delegator for the click event on any of the
 * categories that are in the list.
 */
document.addEventListener(
  "click",
  event => {
    if (event.target.className === "category") {
      category = event.target.innerText;
      url = categoryURL(category);
      // Fetch the latest top stories
      fetchURL(url);
    }
  },
  false,
);

fetchURL(apiURL);
