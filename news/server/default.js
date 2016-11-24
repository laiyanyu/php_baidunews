//消息盒子的全局变量
var msgbox;

$(document).ready(function(){
	// 创建消息盒子
    msgbox = new MsgBox();
	
	//刷新新闻列表
	getNewsList();

	//提交按钮
	$("#btnsubmit").bind('click',function(e){
		//0.阻止默认的submit
		e.preventDefault();
		//1.输入判断
		if($('#newtitle').val()===""||$('#newsimg').val()===""||$('#newstime').val()===""||$('#newssrc').val()==="")
		{
			if($('#newtitle').val()==="")
			{
				$('#newtitle').parent().addClass('has-error');
			}
			else
			{
				$('#newtitle').parent().removeClass('has-error');
			}

			if($('#newsimg').val()==="")
			{
				$('#newsimg').parent().addClass('has-error');
			}
			else
			{
				$('#newsimg').parent().removeClass('has-error');
			}

			if($('#newstime').val()==="")
			{
				$('#newstime').parent().addClass('has-error');
			}
			else
			{
				$('#newstime').parent().removeClass('has-error');
			}

			if($('#newssrc').val()==="")
			{
				$('#newssrc').parent().addClass('has-error');
			}
			else
			{
				$('#newssrc').parent().removeClass('has-error');
			}
		}
		else
		{
			var jsonNews={
				newtitle:$('#newtitle').val(),
				newstype:$('#newstype').val(),
				newsimg:$('#newsimg').val(),
				newstime:$('#newstime').val(),
				newssrc:$('#newssrc').val()
			}
			$.ajax({
				url:'insert.php',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					msgbox.showMsgOk("提交成功", function () {
						$('#newtitle').val('');
						$('#newstype').val('精选');
						$('#newsimg').val('');
						$('#newstime').val('');
						$('#newssrc').val('');
						getNewsList();
					 });					
				}
			});
		}
	});

	//删除操作（事件委托）
	var deleteID=null;
	$("#tableList tbody").on('click','.btn-danger',function(e){
		$("#deleteModal").modal('show');
		deleteID=e.target.parentNode.parentNode.firstChild.innerHTML;
	});

	$("#confirmDelete").on('click',function(e){
		if(deleteID)
		{
				$.ajax({
					url:'deldete.php',
					type:'post',
					data:{nwesid:deleteID},
					success:function(data){
						console.log('success');
						$("#deleteModal").modal('hide');
						getNewsList();
					}
				});
		}
	});


	//编辑操作（事件委托）
	var editID=null;
	$("#tableList tbody").on('click','.btn-primary',function(e){
		$("#EditModal").modal('show');
		editID=e.target.parentNode.parentNode.firstChild.innerHTML;
		$.ajax({
					url:'edit.php',
					type:'get',
					datatype:'json',
					data:{nwesid:editID},
					success:function(data){
						//console.log('success');
						$('#unewstitle').val(data[0].newstitle);
						$('#unewstype').val(data[0].newstype);
						$('#unewsimg').val(data[0].newsimg);
						$('#unewssrc').val(data[0].newssrc);
						var time= data[0].addtime.split(' ')[0];
						$('#unewstime').val(time);
					}
				});
	});

	$("#confirmEdit").on('click',function(e){
		var jsonNews={
				newtitle:$('#unewstitle').val(),
				newstype:$('#unewstype').val(),
				newsimg:$('#unewsimg').val(),
				newstime:$('#unewstime').val(),
				newssrc:$('#unewssrc').val(),
				newid:editID
			};
			$.ajax({
				url:'update.php',
				type:'post',
				data:jsonNews,
				// datatype:'json',
				success:function(data){
					console.log(data);
					$("#EditModal").modal('hide');
					getNewsList();					
				}
			});
	});




})

//刷新新闻列表
getNewsList=function(){
	//0.清空列表
	$("#tableList tbody").empty();
	//1.ajax获取数据显示在页面上
	$.ajax({
		url:'news.php',
		type:'get',
		datatype:'json',
		success:function(data){
			console.log(data);
			data.forEach(function(item,index,array){				
				var type=newsType(item.newstype);
				var id=$('<td>').html(item.id);
				var newstitle=$('<td>').html(item.newstitle);
				var newstype=$('<td>').html(type);				
				var addtime=$('<td>').html(item.addtime);
				var control=$('<td>');
				var editBTN=$('<button>').addClass( 'btn btn-primary btn-xs').html("编辑");
				var delBTN=$('<button>').addClass('btn btn-danger btn-xs').html("删除");
				control.append(editBTN,delBTN);
				var tr=$('<tr>');
				tr.append(id,newstitle,newstype,addtime,control);
				$("#tableList tbody").append(tr);
			})
		}
	});
}

//新闻类型
newsType=function(typeNum){
	var type=null;
		if(typeNum==0)
		{
			type='精选';
		}
		else if(typeNum==1)
		{
			type='百家';
		}
		else if(typeNum==2)
		{
			type='本地';
		}
		else if(typeNum==3)
		{
			type='娱乐';
		}
		else if(typeNum==4)
		{
			type='社会';
		}
		else if(typeNum==5)
		{
			type='军事';
		}
		else if(typeNum==6)
		{
			type='女人';
		}
		else if(typeNum==7)
		{
			type='搞笑';
		}
		else if(typeNum==8)
		{
			type='互联网';
		}
		else if(typeNum==9)
		{
			type='科技';
		}
		else
		{
			type='更多';
		}
		return type;

}