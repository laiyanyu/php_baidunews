<?php
	require_once('db.php');

    if($conn)
    {
    	$newid=$_POST['nwesid'];
    	
    	$sql="delete from  `newsdata` where `newsdata`.`id`= {$newid}";
    	mysqli_query($conn,"SET NAMES 'UTF8'");
    	$result=mysqli_query($conn,$sql);
    	echo json_encode(array('msg' =>'success'));
     }
	else
	{
		echo json_encode(array('msg' =>'fail'));
	}
	mysqli_close($conn);
?>