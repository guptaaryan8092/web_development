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
    $max =get_max(5, 10);
    echo $max;

?>