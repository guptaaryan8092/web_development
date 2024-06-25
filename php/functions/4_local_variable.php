<?php
function get_max($a, $b)
    {
        if($a > $b)
        {
            return $a;
        }
        else
        {
            return $b;
        }
    }
    $max =get_max(5, 10);  // variable locally get_max function me andar define hai 
    echo $max;
?>