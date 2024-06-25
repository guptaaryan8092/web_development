<?php
    $abc = "Hello Aryan";
    function a()
    {
        global $abc;
        $abc = "Hey";
        echo $abc;
    }
    a();
    echo $abc;
?>