const uri = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses";

fetch(uri) //Fetches the data from the API declared
	.then(function(response){ //Collects the data and runs the function
	   return response.json();
	})
	.then(function(courses){
	   let placeholder = document.querySelector("#data-output"); //Picks up the HTML table
	   let out = ""; //Empty variable to be filled with data
	   for(let course of courses){ //Loops through the list below with information from the API
	      out += `
	         <tr>
             <td>${course.courseId}</td>
             <td>${course.courseName}</td>
             <td>${course.credit}</td>
             <td>${course.school}</td>
             <td>${course.startWeek}</td>
             <td>${course.endWeek}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out; //Places the API data into the HTML document
	});