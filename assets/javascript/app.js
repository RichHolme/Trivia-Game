$(document).ready(function() {
	// hide until start clicked
	$("#winLoose").hide();
	$("#questions").hide();
	$("#timer").hide();

	// variables for questions and answser placholder
	var question = 0;
	var answer = 0;
	
	// array of questions
	var Qarr = ["The world's most pupulous country, and the host of the 2008 Summer Olympic Games.",
				"With a landscape of moutains and rainforests, this country was the home of the Incan Empire.",
				"Ruled over for thousands of years by Pharaohs, its land is an archaeological goldmine.",
				"A highway system that in some places has no speed limit, might be a good place to take your Mercedes for a spin.",
				"The home of the Abrahamic faiths, the modern world recognizes this small country as a technology and military powerhouse",
				"Spanning 11 time Zones and bordering 14 countries, all while wearing an Ushanka-hat."
				];

	var Aarr = ["China", "Peru", "Egypt", "Germany", "Israel", "Russia"];

	$("#start").on('click', function(){
		
		// clear start button
		$("#startbtn").hide();
		game();

		function game(){
			console.log("called")
			// display questions
			$("#question").text(Qarr[question]);
			question++;

			// show timer questions and answer
			$("#timer").show();
			$("#questions").show();

			// begin 10 second countdown
			var x = setInterval(function() {

				// retrive time to countdown
				var time = $("#time").text();
				time--

				// update time left
				$("#time").text(time);

				// click function for answer
				$(".answerText").off('click').on('click', function(event) {
					console.log("clicked");
					clearInterval(x);
					$("#time").text(5);
					winLoose();
				})

				if(time <= 0){
					clearInterval(x);
					$("#time").text(5);
					winLoose();
				}

			}, 1000);
		}

		function winLoose(){
			console.log("called2");
			// begin win loose countdown

			// display answer
			$("#correctIncorrect").text(Aarr[answer]);
			answer++;

			var answerTime =  $("#time").text();

			var y = setInterval(function(){

				// show / hide until time up
				$("#winLoose").show();
				$("#questions").hide();
				
				answerTime--

				// update time left
				$("#time").text(answerTime);

				if(answerTime <= 0){
						
					clearInterval(y);
					// reset text
					$("#time").text(10);


					// show / hide when time is up
					$("#questions").show();
					$("#winLoose").hide();
					game();
					
				
				}
			}, 1000);

		}


	});

});