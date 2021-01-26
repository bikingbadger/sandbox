(function() {
  const buttons = new Manipulator("button");
  const listItems = new Manipulator("li");

  //console.log(buttons);

  console.log(listItems);

  console.log(listItems.getAll());
  listItems.toggle("purple");
})();
