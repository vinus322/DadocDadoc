<?php
 $data = json_decode(file_get_contents("php://input"), true);
 $userid = mysql_real_escape_string($data->userid);
 $userpw = mysql_real_escape_string($data->password);

   $con = mysql_connect('115.88.201.54', 'cp152', 'cp152');
   mysql_select_db('cp152_users', $con);

  $sql= 'SELECT count(*) as cnt FROM test where uid="1"';
  $result = mysql_query($sql, $con);
  $res = mysql_fetch_assoc($result);


  if ($result['cnt'] == 0) {
      $qry = 'INSERT INTO test (name,pass,email) values ("' . $userid . '","' . $userpw .'");';
      $qry_res = mysql_query($qry);
      if ($qry_res) {
          $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
          $jsn = json_encode($arr);
          print_r($jsn);
      } else {
          $arr = array('msg' => "", 'error' => 'Error In inserting record');
          $jsn = json_encode($arr);
          print_r($jsn);
      }
  } else {
      $arr = array('msg' => "", 'error' => 'User Already exists with same email');
      $jsn = json_encode($arr);
      print_r($jsn);
  }

?>
