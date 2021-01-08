$(onReady);

function onReady() {
  console.log('JS JQ');
  getTasks();
  $('.inputBar').on('click', '#submitTask', sendNewTask);
}

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
          <div>
            <p>${item.priority}</p>
          </div>
          <div>
            <p>Completed</p>
          </div>
          <div>
            <p>Delete</p>
          </div>
        </div>
      `);
      });
    })
    .catch(function (error) {
      console.log('error in get');
    });
} // end getTasks

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
  }).then(function (response) {
    console.log(response);
    getTasks();
    $('.inputBar input').val('');
  }).catch(function (error) {
    console.log('error in post', error);
    alert('Error adding task.')
  });
} // end sendNewTask
