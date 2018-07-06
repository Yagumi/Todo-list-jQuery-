
function Controller() {
	var createTodoList = new CreateTodoList();
	createTodoList.hideReachengeTask();
	// newTask = new CreateTask();
	var $rechangedTask;
	var $complitedTask = false;


	$('.cross').click(function() {
		createTodoList.toggleViseblility();
	})

	$('.new-task').on('keydown',function(e) {
		if(e.keyCode == 13) {
			createTodoList.createTask();
			$('.new-task__field').val('');
		} 
	});

	$('.new-task__button').on('click', function() {
		createTodoList.createTask();
		$('.new-task__field').val('');
	});



	$('.todo-list').on('dblclick', 'li', function(e) {
		var $thisLiText = $(this).html();
		$('.rechanged__field').val($thisLiText);
		
		createTodoList.showReachangeTask();
		$rechangedTask = $(this);
		$('.rechanged__field').focus();
	});


	$('.rechanged-task').on('keydown', function(e) {
		if(e.keyCode == 13) {
			var $rechangedValue= $('.rechanged__field').val();
			$rechangedTask.html($rechangedValue); 
			createTodoList.hideReachengeTask();
		}
	});

	$('.rechanged__button-rechange').on('click', function() {
			var $rechangedValue= $('.rechanged__field').val();
			$rechangedTask.html($rechangedValue); 
			createTodoList.hideReachengeTask();
	});		

	$('.rechanged__button-remove').on('click', function() {
			$rechangedTask.remove();
			createTodoList.hideReachengeTask();
	});		

	$('.todo-list').on('click', function(e) {
		if(!$('rechanged-task').is(e.target) && $('rechanged-task').has(e.target).length == 0) {
			createTodoList.hideReachengeTask();
		};
	});		

	$('.todo-list').on('click','li', function() {
		if($complitedTask == true) {
			$(this).css({'text-decoration': 'none', 'color': '#ffffff'});
			$complitedTask = !$complitedTask;
		} else {
			$(this).css({'text-decoration': 'line-through', 'color': '#f29f57'});
			$complitedTask = !$complitedTask;
		}
	});	
};





function CreateTodoList() {
	this.hideReachengeTask  = function() {
		$('.rechanged-task').hide();
	};

	this.showReachangeTask = function() {
		$('.rechanged-task').show();
	};

	this.createTask = function() {
		var $inputValue = $('.new-task__field').val();
		$('.todo-list').append('<li>'+ $inputValue +'</li');
	};

	this.toggleViseblility = function() {
		$('.new-task').slideToggle(400, function() {
			$('.new-task').animate('margin', '+=150px');
		});
	}
};






Controller();






