$(document).ready(function() {
	// hide until start clicked
	$("#winLoose").hide();
	$("#questions").hide();
	$("#timer").hide();
	$("#totalDisplay").hide();
	
	// array of questions
	var Qarr = ["The world's most pupulous country, and the host of the 2008 Summer Olympic Games.",
				"With a landscape of moutains and rainforests, this country was the home of the Incan Empire.",
				"Ruled over for thousands of years by Pharaohs, its land is an archaeological goldmine.",
				"A highway system that in some places has no speed limit, might be a good place to take your Mercedes for a spin.",
				"The home of the Abrahamic faiths, the modern world recognizes this small country as a technology and military powerhouse",
				"Spanning 11 time Zones and bordering 14 countries, all while wearing an Ushanka-hat."
				];

	// array of countries
	var Aarr = ["China", "Peru", "Egypt", "Germany", "Israel", "Russia"];

	// array of src images
	var Iarr = ['https://media.giphy.com/media/nGZRKgSBWhSpy/giphy.gif', 'https://media.giphy.com/media/RiLyxOORttTyw/giphy.gif',
	 		    'https://media.giphy.com/media/w91gk3uIgIVNu/giphy.gif', 'https://media.giphy.com/media/14n9QTjnkqDGtG/giphy.gif', 
				'https://media.giphy.com/media/ZxHv5pMs8lYC4/giphy.gif', 'https://media.giphy.com/media/GMMQTNvKHh5u0/giphy.gif'];

    // array of answers
	var qArr = ['Japan', 'Brazil', 'China', 'Greece', 'Peru', 'Australia', 'Iran', 'Canada', 'Egypt', 'Nigeria', 'Cambodia', 'Mexico',
				'Greenland', 'Germany', 'Mongolia', 'Ireland', 'Argentina', 'Angola', 'Afghanistan', 'Israel', 'South Korea', 'Russia', 
				'Chad', 'Italy'];

	$("#start").on('click', function(){
		
		// clear start button
		$("#startbtn").hide();

		// variables for questions answser image placholder
		var question = 0;
		var answer = 0;
		var image = 0;
		var answerPlace = 0;

		// hold players choice
		var choice = '';

		// count correct incorrect rounds
		var correct = 0;
		var incorrect = 0;
		var rounds = 0;

		game();

		// function to dispaly answers
		function answers(){

			// keep track of id
			var answerId = 1;
			
			for(var i = 0; i < 4; i ++){

				// loop through and display answer choices
				$("#answer" + answerId).text(qArr[answerPlace]);

				// incriment id and placeholder
				answerId++;
				answerPlace++;
			}
		};

		// game logic
		function game(){
			console.log("called")
			// display answers
			answers();

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

					// no double clicks
					$(".answerText").off('click');

					// to catch a countdown glitch
					if($("#time").text() == 20){

					console.log("dont click on 20");

					}else{

						//stop countdown 
						clearInterval(x);

						// capture choice
						choice = $(this).text();

						winLoose();
					}

				});

				if(time <= 0){
					// stop countdown
					clearInterval(x);

					winLoose();
				};

			}, 1000);
		};

		// win loose logic
		function winLoose(){
			console.log("called2");

			// check answer
			if($("#time").text() == 0){
				$("#choice").show();
				$("#choice").text('The correct answer is ' + Aarr[answer]);
				$("#rightWrong").text('You ran out of time.');
				incorrect++;
				rounds++;
			}else if(answer == 0 && choice == 'China'){
				$("#choice").hide();
				$("#rightWrong").text('You got it!');
				correct++;
				rounds++;
			}else if(answer == 1 && choice == 'Peru'){
				$("#choice").hide();
				$("#rightWrong").text('You got it!');
				correct++;
				rounds++;
			}else if(answer == 2 && choice == 'Egypt'){
				$("#choice").hide();
				$("#rightWrong").text('You got it!');
				correct++;
				rounds++;
			}else if(answer == 3 && choice == 'Germany'){
				$("#choice").hide();
				$("#rightWrong").text('You got it!');
				correct++;
				rounds++;
			}else if(answer == 4 && choice == 'Israel'){
				$("#choice").hide();
				$("#rightWrong").text('You got it!');
				correct++;
				rounds++;
			}else if(answer == 5 && choice == 'Russia'){
				$("#choice").hide();
				$("#rightWrong").text('You got it!');
				correct++;
				rounds++;
			}else{
				$("#choice").show();
				$("#choice").text('The correct answer is ' + Aarr[answer]);
				$("#rightWrong").text('Get a map bro.');
				incorrect++;
				rounds++;
			}

			// incriment correct answer
			answer++;

			// set countdown time
			var answerTime = 6;

			// set next image
			$("#imageTag").attr('src', Iarr[image]);
			image++;

			// begin win loose countdown
			var y = setInterval(function(){

				// show / hide until time up
				$("#winLoose").show();
				$("#questions").hide();
				
				answerTime--

				if(answerTime <= 0){

					clearInterval(y);

					//check if game over
					if(rounds >= 6){
						$("#winLoose").hide();
						$("#questions").hide();
						$("#timer").hide();
						$("#totalDisplay").show();

						// display correct incorrect
						$("#status").text('You got ' + correct + ' out of 6 right.');
						if(correct === 6){
							$("#comment").text('You should be on Jeopardy!'); 
						}else if(correct <=5 && correct > 3){
							$("#comment").text('Nice job! You know your countries!');
						}
						else if(correct <= 3){
							$("#comment").text('Seriously get a map bro.');
						}

						$(document).on('click','.restart', function(){
							console.log("clicked 3")
							$("#time").text(20);
							$("#totalDisplay").hide();
							$("#startbtn").show();
							
						});

					}else{
						// reset text
						$("#time").text(20);

						// show / hide when time is up
						$("#questions").show();
						$("#winLoose").hide();
						game();
					};
				}

			}, 1000);

		}


	});

});