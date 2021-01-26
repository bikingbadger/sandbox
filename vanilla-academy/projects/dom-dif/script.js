'use strict';

(() => {
  var storageID = 'todo-items';

  const data = () => {
    const todoData = {
      todos: [
        { description: 'Completed Item', priority: 1, completed: true },
        { description: 'Milk and bread', priority: 1, completed: false }
      ]
    };
    return todoData;
  };

  const app = new Reef('#app', {
    data: data(),
    template: props => {
      const todos = props.todos
        .map((item, index) => {
          return `<li class="${
            item.completed ? 'complete' : ''
          }" data-todo='${index}'>${item.description}</li>`;
        })
        .join('');
      return '<h2>Todo List</h2><ul>' + todos + '</ul>';
    }
  });

  const setData = todo => {
    if (!todo.description) throw 'Need to provide description';
    const priority = todo.priority || 5;
    const completed = todo.completed || false;

    const exists = app.data.todos.find(
      element => element.description === todo.description
    );
    if (exists) {
      const index = app.data.todos.indexOf(exists);
      app.data.todos[index] = todo;
    } else {
      app.data.todos.push({
        description: todo.description,
        priority: priority,
        completed: completed
      });
    }
    app.render();
  };

  const clickHandler = event => {
    event.preventDefault();
    if (event.target.type === 'submit' && event.target.closest('#add-todos')) {
      const elements = event.target.closest('#add-todos').children;
      const elementsArray = Array.prototype.slice.call(elements);
      const input = elementsArray.find(element => element.id === 'new-todo');
      if (!input.value) return;
      setData({ description: input.value });
      input.value = '';
    }

    if (event.target.hasAttribute('data-todo')) {
      setData({
        description: event.target.innerText,
        completed: !event.target.classList.contains('complete')
      });
    }
  };

  document.addEventListener('click', clickHandler, false);

  app.render();
})();
