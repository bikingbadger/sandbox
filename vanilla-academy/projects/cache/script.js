(function() {
  // Select the table of contents div
  const TOC = document.querySelector('#table-of-contents');
  const main = document.querySelector('#main');
  const noData = 'Unable to get data';
  /**
   * Dynamically vary the API endpoint
   * @return {String} The API endpoint
   */
  var getEndpoint = () => {
    var endpoint = 'https://vanillajsacademy.com/api/';
    var random = Math.random();
    console.log(random);
    if (random < 0.5) return endpoint + 'pirates.json';
    return endpoint + 'fail.json';
  };

  var isDataValid = (saved, goodFor) => {
    // Check that there's data, and a timestamp key
    if (!saved || !saved.news || !saved.timestamp) return false;

    // Get the difference between the timestamp and current time
    var difference = new Date().getTime() - saved.timestamp;

    return difference < goodFor;
  };

  const buildTOCHeaders = heading => {
    // Get all headings for provided header and convert to Array
    const headings = Array.prototype.slice.call(
      document.querySelectorAll(heading)
    );

    if (headings) {
      // List each of the headings in TOC
      let tocHeadings = headings
        .map(heading => {
          // Make sure each heading has an id, if not assign one
          // based on the the text content of the heading
          if (!heading.id) {
            heading.id = heading.textContentP
              .toLowerCase()
              .replace(/[^a-z0-9]+/gi, '-');
          }

          let listItem = `<li><a href='#${heading.id}'>${heading.textContent}</a></li>`;
          return listItem;
        })
        .join('');

      return tocHeadings;
    } else {
      return null;
    }
  };

  const buildArticles = news => {
    let newsArticles = news
      .map(article => {
        const title = `<h2 id="${article.title.toLowerCase()}">${
          article.title
        }</h2>`;
        const paragraph = article.article ? `<p>${article.article}</p>` : '';
        return title + paragraph;
      })
      .join('');
    return newsArticles;
  };

  const createNews = news => {
    // create the articles from the news source
    main.innerHTML = buildArticles(news);

    // if theres no data no need for a table of contents
    if (news[0].title === noData) return;

    // create the table of contents
    TOC.innerHTML = '<ol>' + buildTOCHeaders('h2') + '</ol>';
  };

  // Get data from localStorage
  var saved = JSON.parse(localStorage.getItem('news'));

  // Check if it's been less than a week since the data was saved
  if (isDataValid(saved, 1000 * 5 /*60 * 30*/)) {
    // The data is still good, use it
    console.log('Cache');
    const pirateNews = saved;
    createNews(pirateNews.news);
  } else {
    console.log('API');
    // Get fresh data and use that instead
    fetch(getEndpoint())
      .then(res => {
        console.log(res);
        if (!res.ok) return new Error(res.status);
        return res.json();
      })
      .then(data => {
        const pirateNews = {
          news: data.articles,
          timestamp: new Date().getTime()
        };
        createNews(pirateNews.news);
        localStorage.setItem('news', JSON.stringify(pirateNews));
      })
      .catch(error => {
        if (
          error
            .toString()
            .includes('NetworkError when attempting to fetch resource.')
        ) {
          console.log('Error in URL');

          const pirateNews = saved ? saved : { news: [{ title: noData }] };
          createNews(pirateNews.news);
        }
      });
  }
})();
