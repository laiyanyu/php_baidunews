<?php
	require_once('db.php');

    if($conn)
    {
        if(isset($_GET['newstype']))
        {
            $type=$_GET['newstype'];
            $sql="select * from newsdata where `newstype`='{$type}' order by addtime desc";
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
        }
        else
        {
            $sql="select * from newsdata  order by addtime desc";
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
        }




    }
	else
	{
		echo json_encode(array('msg' =>'success'));
	}

	mysqli_close($conn);

?>