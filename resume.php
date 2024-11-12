<?php

  $rsm= new mysqli_connect('localhost','root','','Project');
  if(isset($_POST['Project']))
  {
    $name=$_POST['uname'];
    $contact=$_POST['ucontact'];
    $address=$_POST['uaddress'];
    $linkedin=$_POST['ulinkedin'];
    $instagram=$_POST['uinsta'];
    $facebook=$_POST['uface'];
    $skill=$_POST['uskills']
    $objective=$_POST['uobjective'];
    $project=$_POST['uproject'];
    $academics=$_POST['uacademic'];

    $query="INSERT INTO Resumes(Username,Contact,Address,Linkedin,Instagram,Facebook,Skill,Objective,Project,Academic) VALUES ('$name','$contact','$address','$skill','$objective','$project','$academic')";
    $code=mysqli_query($rsm,$query);
   
  }
  else($rsm->connect_error){
         die("**Connection failed**",$rsm->connect_error);
  }
  echo "Connected Successfully!!!!";

  $rsm->close();

?> 