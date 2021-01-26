(function() {
  const buttons = hmhu.node2Array(document.querySelectorAll("button"));
  console.log(buttons);

  const firstElem = hmhu.fistElement("button");
  console.log(firstElem.classList.re);

  const buttonArray = hmhu.arrayQuerySelectorAll("button");
  console.log(buttons);
  hmhu.addClass(buttons, "btn-purple");
  hmhu.removeClass(buttons, "btn-blue");
})();
