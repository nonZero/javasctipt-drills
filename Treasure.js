$(function mainFunction(){
	//table creation
	var tableSize = 5;
	var mainTable = $("<table id='mTable'></table>");
	for (var i=1; i < tableSize + 1; i++) {
		var tr = $("<tr></tr>");
		for (var j=1; j < tableSize + 1; j++) {
			$(tr).append($('<td></td>'));
		};
	mainTable.append(tr);
	};
	$("#tableHere").append(mainTable);
	
	
	//Players
	var player1Score = 0;
	var player2Score = 0;
	var turn = 1;
	var maxTurns = 25;
	
	//Events
	$("td").hover(
		function(){
			$(this).addClass('highlighted');
	},
		function(){
			$(this).removeClass('highlighted');
		});
		
	$("td").click(function(){

		$(this).addClass('selected');
		
		mine = false;
		
		if ($(this).attr('class') != "selected highlighted"){
			var num = Math.floor( 1 + Math.random() * 105);
			$(this).text(num);
			var currentNum = parseInt($(this).text());
			maxTurns -=1;

				if (minesChecker(currentNum) == false){
				
					if (turn % 2 !=0){
						player1Score += parseInt($(this).text());
						$("#player").text("Player2");
						turn += 1;
					}
					else{
						player2Score += parseInt($(this).text());
						$("#player").text("Player1");
						turn += 1;
					}
					$("#p1s").text(player1Score);
					$("#p2s").text(player2Score);
				}
				else{
					$(this).addClass("boom");
					alert("You stepped on a mine \n you are the loser")
					location.reload();
				}
		};

		if (maxTurns <= 0){
			alert("Game Over");
			location.reload();
		}
	})
	
	function minesChecker (cell){
		if (cell > 100){
			return true;
		}
		else {return false;}
	}
});

window.onload = function(){
	mainFunction();
}
