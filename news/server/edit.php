<?php
	require_once('db.php');

    if($conn)
    {
    	$newid=$_GET['nwesid'];
    	
    	$sql="select * from newsdata  where `newsdata`.`id`= {$newid}";
    	mysqli_query($conn,"SET NAMES 'UTF8'");
    	$result=mysqli_query($conn,$sql);
        $senddata=array();
        while($row=mysqli_fetch_assoc($result))
        {
            array_push($senddata, array(
                    'id' =>$row['id'] ,
                    'newstype' =>$row['newstype'] ,
                    'newstitle' =>$row['newstitle'] ,
                    'newsimg' =>$row['newsimg'] ,
                    'addtime' =>$row['addtime'] ,
                    'newssrc' =>$row['newssrc'] ,
                ));
        }

        echo json_encode($senddata);
    	//echo json_encode(array('msg' =>'success'));
     }
	else
	{
		echo json_encode(array('msg' =>'fail'));
	}
	mysqli_close($conn);
?>