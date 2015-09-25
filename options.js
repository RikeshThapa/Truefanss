$(function(){
	chrome.storage.sync.get('goal', function(items){
		$('#goal').val(items.total);
	});
	
	$("#save").click(function(){
		var goal = $("#goal").val();
		if(goal){
			chrome.storage.sync.set({'goal': goal}, function(){
				close();
			});
		}
	});
	
	$('#reset').click(function(){
		chrome.storage.sync.set({'total' : 0})
	});
	
});