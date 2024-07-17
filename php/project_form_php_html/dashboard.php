<?php
    session_start();

    if(isset($_SESSION['user_id']))
    {
        $user_id = $_SESSION['user_id'];
        $name = $_SESSION['name'];
    }
    echo "Hello " . $name;
?>