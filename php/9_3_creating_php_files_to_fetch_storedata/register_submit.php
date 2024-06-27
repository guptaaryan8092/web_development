<?php
    $db_hostname ="127.0.0.1";
    $db_username = "root";
    $db_password = "";
    $db_name = "test";

    $conn = mysqli_connect ($db_hostname, $db_username, $db_password, $db_name);
    if(!$conn)
    {
        echo "connection failed: " .mysqli_connect_error();
        exit;
    }

    $name = $_POST['name']; // name should be same as in form
    $email = $_POST ['email'];
    $password = $_POST ['password'];

    $sql = "INSERT INTO users (name, email , password) VALUES ('$name','$email','$password')";  // sql query likenge jo data ko user table me row ke form me insert karegi
    
    $result = mysqli_query($conn,$sql);
    if(!$result)
    {
        echo "Error:" .mysqli_error ($conn);
        exit;
    }
    echo "Registration successful";
    mysqli_close ($conn);

?>