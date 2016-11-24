<?php
	require_once('db.php');

    if($conn)
    {
    	SafeFilter($_POST);
    	$newtitle=$_POST['newtitle'];
		$newstype=$_POST['newstype'];
		$newsimg=$_POST['newsimg'];
		$newstime=$_POST['newstime'];
		$newssrc=$_POST['newssrc'];
    	
    	$sql="INSERT INTO `newsdata` (`newstitle`,`newstype`,`newsimg`,`addtime`,`newssrc`) values('{$newtitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
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