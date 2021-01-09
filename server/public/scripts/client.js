$(onReady);

function onReady() {
  console.log('JS JQ');
  getTasks();
  $('.inputBar').on('click', '#submitTask', sendNewTask);
  $('#taskContainer').on('click', '.done', toggleDone);
  $('#taskContainer').on('click', '.delete', deleteTask);
  $('#taskContainer').on('click', '.priority', changePriority);
}

// get route
function getTasks() {
  $('#taskContainer').empty();
  $.ajax({
    type: 'GET',
    url: '/todo',
  })
    .then(function (response) {
      response.forEach((item) => {
        $('#taskContainer').append(`
          <div data-id="${item.id}">
            <div>
              <p>${item.task}</p>
            </div>
            <div>
              <p>${item.due_date}</p>
            </div>
            <div class="priority">
              <p>${item.priority}</p>
            </div>
            <div class="done" data-status="${item.done}">
              <i class="material-icons">done_outline</i>
            </div>
            <div class="delete">
              <i class="material-icons">clear</i>
            </div>
          </div>
        `);
      });
    })
    .catch(function (error) {
      console.log('error in get');
    });
} // end getTasks

// post route
function sendNewTask() {
  let newTask = {
    task: $('#taskIn').val(),
    due_date: $('#dueDate').val(),
    priority: $('#priority').val(),
    done: false,
  };

  $.ajax({
    type: 'POST',
    url: '/todo',
    data: newTask,
  })
    .then(function (response) {
      console.log(response);
      getTasks();
      $('.inputBar input').val('');
    })
    .catch(function (error) {
      console.log('error in post', error);
      alert('Error adding task.');
    });
} // end sendNewTask

// put route to toggle done
function toggleDone() {
  let newStatus = $(this).data('status') === true ? false : true;
  let id = $(this).parent().data('id');
  console.log(newStatus);

  $.ajax({
    type: 'PUT',
    url: `/todo/${id}`,
    data: { done: newStatus },
  })
    .then(function (response) {
      console.log(response);
      getTasks();
    })
    .catch(function (error) {
      console.log('error in toggleDone', error);
      alert('error changing task.');
    });
} // end toggleDone

// put route to change priority
function changePriority() {
  let id = $(this).parent().data('id');
  let priority = $(this).children().text();
  let newPriority = priority === '!' ? '!!' : priority === '!!' ? '!!!' : '!';

  $.ajax({
    type: 'PUT',
    url: `/todo/priority/${id}`,
    data: { priority: newPriority },
  })
    .then(function (response) {
      getTasks();
    })
    .catch(function (error) {
      console.log('error in changePriority', error);
      alert('error changing priority');
    });
}

// delete route
function deleteTask() {
  let id = $(this).parent().data('id');
  console.log(id);

  $.ajax({
    type: 'DELETE',
    url: `/todo/${id}`,
  })
    .then(function (response) {
      getTasks();
    })
    .catch(function (error) {
      console.log('error in delete', error);
      alert('error deleting task.');
    });
}