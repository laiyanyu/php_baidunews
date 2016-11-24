$(document).ready(function(){
	getLists(0);
	$('nav a').click(function(e){
		e.preventDefault();
		var type=$(this).attr("data-type");
		getLists(type);
	})
})


getLists=function(type){
	var lists=$('article ul');
	lists.empty();
	$.ajax({
		url:'server/news.php',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){
			console.log(data);
			data.forEach(function(item,index,array){
				var list=$('<li></li>').addClass('news-list').prependTo(lists);
				var newsimg=$('<div></div>').addClass('newsimg').appendTo(list);
				var img=$('<img>').attr('src',item.newsimg).appendTo(newsimg);
				var newscontent=$('<div></div>').addClass('newscontent').appendTo(list);
				var h1=$('<h1></h1>').html(item.newstitle).appendTo(newscontent);
				var p=$('<p></p>').appendTo(newscontent);
				var newstime=$('<span></span>').addClass('newstime').html(item.addtime).appendTo(p);
				var newssrc=$('<span></span>').addClass('newsscr').html(item.newssrc).appendTo(p);
			})
		}
	});
}