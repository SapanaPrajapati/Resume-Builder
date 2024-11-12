<?php
  $conn=mysqli_connect('localhost','root','','Login');
  if(isset($_POST['login']))
  {
    $name=$_POST['uname'];
    $email=$_POST['email'];
    $phone=$_POST['number'];
    $password=$_POST['psw'];
    $query="INSERT INTO Register(Username,Email,Phone,Password) VALUES ('$name','$email','$phone','$password')";
    $run=mysqli_query($conn,$query);
   
  }

?> 