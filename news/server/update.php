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
		$newid=$_POST['newid'];

    	$sql="update `newsdata` set `newstitle`='{$newtitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`addtime`='{$newstime}',`newssrc`='{$newssrc}' where `id`='{$newid}' ";

    	mysqli_query($conn,"SET NAMES 'UTF8'");
    	$result=mysqli_query($conn,$sql);
    	echo json_encode(array('msg' =>$newid));
     }
	else
	{
		echo json_encode(array('msg' =>'fail'));
	}
	mysqli_close($conn);
?>