let myProgress = [{
    scene: "Park",
    progress: 50,
    date: "02/02/2022"
  },
  {
    scene: "Street",
    progress: 30,
    date: "04/04/2022"
  },
  {
    scene: "Highway",
    progress: 65,
    date: "07/04/2022"
},
];


function addProgress1() {
let upcomingProgress = {
scene: "Class",
progress: 35,
date: "01/05/2022"
};


addToArray(upcomingProgress);
}

function addToArray(upcomingProgress) {
if (upcomingProgress.scene.length > 1) {
//   newCourse.subject = newCourse.subject.toUpperCase();
myProgress.push(upcomingProgress);
    let newRow = "<tr id=\"part3\">" 
    // newRow += "<td>" + upcomingback.number + "</td>";
    newRow += "<td>" + upcomingProgress.scene + "</td>";
    newRow += "<td>" + upcomingProgress.progress + "</td>";
    newRow += "<td>" + upcomingProgress.date + "</td></tr>";
    document.getElementById("courseTable").innerHTML += newRow;

} else {
alert("invalid progress entered");
}
}




// add3D('model7/scene.gltf', 'container4', 0.5, 50);
// add3D('model8/scene.gltf', 'container5', 0.5, 10);




function addProgress() {


// let newNumber = document.getElementById("num_input").value;
let newScene = document.getElementById("s_input").value;
let newProgress = document.getElementById("p_input").value;
let newDate = document.getElementById("d_input").value;

let newBackground = {
// number: newNumber,
scene: newScene,
progress: newProgress,
date: newDate
};

addToArray(newBackground);
}





function above50() {
	let above = "Progress of 50 or above: ";
	
	/* add a for-loop here to visit each item in the array */
	/* but only information about fourth-year courses should */
	/* be added to the end of the 'fourthYear' variable */
	for (let i = 0; i < myProgress.length; i++){
  
  let record = myProgress[i]; 
  
  if(record.progress >= 50){
  	above += record.scene + " "+ record.date + " ";
  }
  }

	$("#fourth").html(above);
}


