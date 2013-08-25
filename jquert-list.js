console.log("script start");

$(function () {

    console.log("init start");
    
    
	$("#list1").on('click', "li", function(){
	    console.log('click1 start');
		$("#list2").prepend($(this));
		console.log('click1 end');
	});
	
	$("#list2").on('click', 'li', function(){
   	    console.log('click2 start');
		$("#list1").prepend($(this));
   	    console.log('click2 end');
	});

    console.log("init end");
	
});

console.log("script end");