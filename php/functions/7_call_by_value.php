<?php
    function add_one($n)
    {
        $n++ ;
        return $n;
    }
    $num = 0;
    $num = add_one($num);
    echo $num;
?>