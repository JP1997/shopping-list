$('#itemAdd').on("click", function(event) {
		event.preventDefault();

		let name = $('#itemName').val();
		if(name != ""){
			let newItem = `
				<li>
					<div class = "item">
						${name}
					</div>
					<div>
						<button type="submit" class="checkButton"> CHECK </button>
						<button type="submit" class="deleteButton"> DELETE </button>
					</div>
				</li> 
				` 

		$("#items").append(newItem);
		$("#itemName").val("");
		}

});

$("#items").on("click", ".checkButton", function(event) {
	event.preventDefault();

	if( $(this).parent().parent().hasClass("checked")) {
		$(this).parent().parent().removeClass("checked");
	} else {
		$(this).parent().parent().addClass("checked");
	}

});

$("#items").on("click", ".deleteButton", function(event) {
	event.preventDefault();
	$(this).parent().parent().remove();

});
