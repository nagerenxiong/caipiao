$("#tabbar-div-s2 a")[8].click();
setTimeout(function(){
	changeNum();
},1000)
var numList=[[0,1,2,3,9],[0,1,7,8,9]];
var bsList=[1,3,9,27,81,243];
var domList=$(".li_m").eq(4).children('span');
var fagNext=1;
var bsFag=0;
function checkNum(numArray) {
	for (var i = 0; i < domList.length; i++) {
		 for (var j = 0; j < numArray.length; j++) {
		 	if(numArray[j]*1==domList.eq(i).text()*1){
		 		domList[i].click();
		 	}
		 }
	}
}

function changeNum(){
	$("#ifNewBet").contents().find(".contrl_bot_l .item").remove();
	if(fagNext==1){
	fagNext=0;
	checkNum(numList[fagNext]);
	}
	else
	{
	fagNext=1;
	checkNum(numList[fagNext]);
	}
	$("#lt_sel_times").val(bsList[bsFag]);
	$("#lt_fast_buy")[0].click();
	$(".reveal-modal-submit")[0].click();
	bsFag++;
	if(bsFag>bsList.length)
	{
		bsFag=0;
	}
	getStatus();
}
function getStatus(){
	var statusVal=$("#ifNewBet").contents().find(".contrl_bot_l .item").eq(0).children('.td010').text();
	if(statusVal!='未中奖'&&statusVal!='中奖'){
		setTimeout("getStatus();",1000);
	}
	else{
		 if(statusVal=="中奖")
		 {
		 	bsFag=0;
		 }
		 changeNum();
	}
}
