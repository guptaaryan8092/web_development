<?php
    $abc = "Hello Aryan";
    function a()
    {
        $abc = "Hey";
        echo $abc;
    }
    function b()
    {
        echo $abc;// here abc is not initalize locally. So is will will not give output Not define.
    }
    a();
    b();
    echo $abc;
?>