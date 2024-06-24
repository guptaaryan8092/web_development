<?php
    $students = array
    ( 
        "Amit" => array 
        (
            "phy" =>77,
            "chem" =>86, 
            "math" =>84
        ),
        "chirag" => array
        (
            "phy" => 84,
            "chem" =>92,
            "math" =>78
        ),
        "vandana" => array
        (
            "phy" => 91,
            "chem" =>88,
            "math" =>97 
        )
    );
    foreach($students as $student => $subjects)
        {
            foreach ($subjects as $subject => $mark)
                {
                    echo $student. "\n"."has scored \n" .$mark ."\n". "in \n" . $subject . "<br>";
                }
        }
?>