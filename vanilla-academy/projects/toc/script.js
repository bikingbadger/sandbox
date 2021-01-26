(function() {
  // Select the table of contents div
  const TOC = document.querySelector("#table-of-contents");

  const buildTOCHeaders = heading => {
    // Get all headings for provided header and convert to Array
    const headings = Array.prototype.slice.call(
      document.querySelectorAll(heading),
    );

    if (headings) {
      // List each of the headings in TOC
      tocHeadings = headings
        .map(heading => {
          // Make sure each heading has an id, if not assign one
          // based on the the text content of the heading
          if (!heading.id) {
            heading.id = heading.textContentP
              .toLowerCase()
              .replace(/[^a-z0-9]+/gi, "-");
          }

          let listItem = `<li><a href='#${heading.id}'>${heading.textContent}</a></li>`;
          return listItem;
        })
        .join("");ac
      return tocHeadings;
    } else {
      return null;
    }
  };

  TOC.innerHTML = "<ol>" + buildTOCHeaders("h2") + "</ol>";
})();

an