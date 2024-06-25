<?php
function get_max($a, $b=0)
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
    $max =get_max(5)."";
    $max =get_max(5, "");
    echo $max;

?>