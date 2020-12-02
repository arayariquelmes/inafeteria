<?php


    function conectar(){
        $mysqli = mysqli_connect("192.168.0.26","root","inacap","inafeteria");

        return $mysqli;
    }