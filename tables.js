$(function(){
	var table = $('<table id="myTable"></table>');
	var firstRow = $('<tr><td></td></tr>');
	for (var r=1; r < 11; r++) {
	 	$(firstRow).append($('<td id=boxX'+r+'></td>').text(r));
	};
		  table.append(firstRow);
	for (var i=1; i < 11; i++) {
	  var row = $("<tr><td id=boxY"+i+">"+ i + "</td></tr>");
	  for (var j=1; j < 11; j++) {
	  	$(row).append($('<td id=box'+i+j+'></td>').text(i*j));
	  };

	  table.append(row);
	  $("body").append(table);
	};	
	$("td").hover(hl,hlo);
	

	function hl(){
		$(this).addClass("highlited");
		$(this).parent().children(':first-child').addClass("highlited");
		var colNum = parseInt($(this).text()) / parseInt($(this).parent().children(':first-child').text());
		$("#boxX" + colNum).addClass("highlited")

	}
	function hlo(){
		$(this).removeClass("highlited");
		$(this).parent().children(':first-child').removeClass("highlited");
		var colNum = parseInt($(this).text()) / parseInt($(this).parent().children(':first-child').text());
		$("#boxX" + colNum).removeClass("highlited")
	}
	
	
});
