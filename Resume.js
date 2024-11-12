function AddNewPjt() {
    console.log("Adding new Project");


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.setAttribute('rows',3);
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');    
    let projectOb=document.getElementById('project');
    let projectAddButtonOb=document.getElementById('projectAddButton');

    projectOb.insertBefore(newNode,projectAddButtonOb);
}

function AddNewAD() {
    console.log("Adding new Academic Detail");


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('academicfield');
    newNode.setAttribute('rows',3);
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');  

    let AcademicOb=document.getElementById('Academic');
    let AcademicDAddButtonOb=document.getElementById('AcademicD');

    AcademicOb.insertBefore(newNode,AcademicDAddButtonOb);
}

function AddNewskill() {
    console.log("Adding new skill");


    let newNode=document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder','Enter here');    
    let skillOb=document.getElementById('Skills');
    let skillAddButtonOb=document.getElementById('skillAddButton');

    skillOb.insertBefore(newNode,skillAddButtonOb);
}

// generating cv
function GenerateResume() {
    //  console.log("Generating Resume")
    // image
    // Assuming you have an input element for file selection and an image element to display the image

const fileInput = document.getElementById('imageInput');
const previewImage = document.getElementById('ResumeImage');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});
//  name
    let Name=document.getElementById('Name').value;

    let nameTemp=document.getElementById('nameTemp');

    nameTemp.innerHTML=Name;
    // generating contact

    document.getElementById('nameTemp1').innerHTML=Name;

    let Contact=document.getElementById('Contact').value;

    let contactTemp=document.getElementById('contactTemp');

    contactTemp.innerHTML=Contact;

    // address
    let Address=document.getElementById('Address').value;

    let addressTemp=document.getElementById('addressTemp');

    addressTemp.innerHTML=Address;
    // links

    let Instagram=document.getElementById('Instagram').value;

    let IGTemp=document.getElementById('IGTemp');

    IGTemp.innerHTML=Instagram;
    //Linkedin

    let Linkedin=document.getElementById('Linkedin').value;

    let LDTemp=document.getElementById('LDTemp');

    LDTemp.innerHTML=Linkedin;

//    Facebook
    document.getElementById("FBTemp").innerHTML=document.getElementById("Facebook").value;

    // skills
    let  skill=document.getElementsByClassName("skillField");
    let char='';
   
    for(let s of skill){
       char=char+`<li> ${s.value} </li>`;
    }
    document.getElementById("skillsTemp").innerHTML=char;
   
   
   
    

    // objectives
    let Objective=document.getElementById('ObjectiveField').value;
    let ObjectiveTemp=document.getElementById('objectiveTemp');

    ObjectiveTemp.innerHTML=Objective;
    

//  let    document.getElementById("objectiveTemp").innerHTML=document.getElementById("ObjectiveField").value;

// projects

 let  projects =document.getElementsByClassName("projectField");
 let str='';

 for(let p of projects){
    str=str+`<li> ${p.value} </li>`;
 }
 document.getElementById("projectTemp").innerHTML=str;
//  Academics 
  
let  Academics =document.getElementsByClassName("academicfield");
 let string ='';

 for(let a of Academics){
    string=string+`<li> ${a.value} </li>`;
 }
 document.getElementById("academicTemp").innerHTML=string;


 document.getElementById('resume-form').style.display='none';
 document.getElementById('resume-template').style.display='block';
}

// PRINT RESUME
function PrintResume(){
    window.print();
}


