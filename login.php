<?php
  $connect =mysqli_connect('localhost','root','','Records');
  if(isset($_POST['Records']))
  {
    $name=$_POST['uname'];
    $password=$_POST['psw'];
    
    $query="INSERT INTO Signup(Username,Password) VALUES ('$name','$password')";
    $exce=mysqli_query($connect,$query);
   
  }

?> 