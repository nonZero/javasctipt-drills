$(function(){
	$("#list1 li").click(function(){
		
		$(this).detach();
		$("#list2").prepend($(this));
		$(this).parent("list2");
	});
	
	//$("#list2 li").click(function(){
	//	$(this).detach();
		
		//$("#list1").prepend($(this));
		
	//});
	
});
