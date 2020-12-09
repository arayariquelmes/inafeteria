<?php


    function conectar(){
        $mysqli = mysqli_connect("192.168.0.12","root","inacap","inafeteria");

        return $mysqli;
    }