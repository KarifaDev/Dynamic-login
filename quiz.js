const uri = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz";  

fetch(uri) //Fetches data from the API
	.then(function(response){ //Runs the function
	   return response.json();
	})
	.then(function(quiz){
	   let placeholder = document.querySelector("#data-output"); //Picks up the HTML table
	   let out = ""; //Empty variable to be filled with data
	   for(let course of quiz){ //Loops through the information below from the API
	      out += `
	         <tr>
             <td>${course.question}</td>
             <td>${course.correct_answer}</td>
             <td>${course.incorrect_answers}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out; //Puts the data into the HTML
	});