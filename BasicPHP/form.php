<?php
    $nameErr = $lastNameErr = $genderErr = $killErr = $deadErr = $assistErr = "";
    $name = $lastName = $gender = $position = $kill = $dead = $assist = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
          $nameErr = "Name is required";
        } else {
          $name = test_input($_POST["name"]);
        }
        
        if (empty($_POST["last_name"])) {
          $lastNameErr = "Last Name is required";
        } else {
          $lastName = test_input($_POST["last_name"]);
        }
          
        if (empty($_POST["gender"])) {
          $genderErr = "";
        } else {
          $gender = test_input($_POST["gender"]);
        }
        
        if (empty($_POST["username"])) {
          $genderErr = "Username is required";
        } else {
          $gender = test_input($_POST["username"]);
        }

        if (empty($_POST["position"])) {
          $position = "";
        } else {
          $position = test_input($_POST["position"]);
        }
      
        if (empty($_POST["kill"])) {
          $killErr = "Kill Score is required";
        } else {
          $kill = test_input($_POST["kill"]);
        }

        if (empty($_POST["dead"])) {
          $deadErr = "Dead Score is required";
        } else {
          $dead = test_input($_POST["dead"]);
        }

        if (empty($_POST["assist"])) {
          $assistErr = "Assist Score is required";
        } else {
          $assist = test_input($_POST["assist"]);
        }
      
      }

      header('Location: localhost/githubpages/heroku');
      die();




?>