let projCollection = document.getElementById('collectionGrid')

let jsonDatabase = [
{
	"title" : "Inevitable",
	"description" : "Short animated sequence",
	"preview" : "inevitable.png",
	"link" : "https://github.com/MaxxTorres/creative_coding_midterm_Max",
	"skills" : ["Creative Coding", "Javascript", "OOP"]
},
{
	"title" : "Triangles",
	"description" : "Interactive Patterns",
	"preview" : "triangles.png",
	"link" : "https://github.com/MaxxTorres/pattern_matrix",
	"skills" : ["Creative Coding", "Javascript", "Matrix Transformation"]
},
{
	"title" : "Overlanding Guide",
	"description" : "Website about overlanding",
	"preview" : "overlanding.png",
	"link" : "https://github.com/MaxxTorres/web_dev_mobile_overlanding",
	"skills" : ["Web Development", "HTML/CSS", "Media Queries"]
},
{
	"title" : "E-waste",
	"description" : "Website about the issue on e-waste",
	"preview" : "ewaste.png",
	"link" : "https://github.com/MaxxTorres/web_dev_proj_issueV2",
	"skills" : ["Web Development", "HTML/CSS","Flexbox"]
}
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createCollection(jsonDatabase[i]);
}

function createCollection(incomingJSON) {
	let newProject = document.createElement("DIV");
	newProject.classList.add('projectItem');

	let newProjectTitle = document.createElement("H3");
	newProjectTitle.classList.add('projectTitle');
	newProjectTitle.innerText = incomingJSON['title'];
	newProject.appendChild(newProjectTitle);

	let newProjectDesc = document.createElement("P");
	newProjectDesc.classList.add('projectDesc');
	newProjectDesc.innerText = incomingJSON['description'];
	newProject.appendChild(newProjectDesc);

	let newProjectSubhead = document.createElement("P");
  	newProjectSubhead.innerText = "Skills:";
  	newProject.appendChild(newProjectSubhead);

  	let newProjectSkills = document.createElement("UL");
  	newProject.appendChild(newProjectSkills);

  	for (var i = 0; i < incomingJSON['skills'].length; i++) {
	    var newSkill = document.createElement("LI");
	    newSkill.innerText = incomingJSON['skills'][i];;
	    newProjectSkills.appendChild(newSkill);
  	}

  	let newImage = document.createElement("IMG");
  	newImage.classList.add("projectImage");
  	newImage.src = incomingJSON['preview'];
  	newProject.appendChild(newImage);

  	let newProjectLink = document.createElement("A");
  	newProjectLink.innerText = "Github Link";
  	newProjectLink.href = incomingJSON['link'];
  	newProject.appendChild(newProjectLink);

  	projCollection.appendChild(newProject);
}