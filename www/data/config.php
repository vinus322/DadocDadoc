<?php
   $servername = "115.88.201.54";
   $username = "cp152";
   $password = "cp152";
   $dbName = "cp152_users";

   $conn = new mysqli($servername, $username, $password);

   if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
   }


   if (!mysql_select_db('dbName', $conn)) {
    echo 'Could not select database';
    exit;
   }
   echo "Connected successfully";
   $sql = 'SELECT id, name, email FROM users';
   $stmt = $dbh->prepare( $sql );
    $stmt->execute();
     $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
      $json = json_encode( $result );
        echo $json;

   ?>
