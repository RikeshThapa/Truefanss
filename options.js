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
		chrome.storage.sync.set({'total' : 0}, function() {
			var opt = {
				type: "basic",
				title: "Total reset!",
				message: "Total has been reset back to 0",
				iconUrl: "icon.jpg"
			}
			
			chrome.notification.create('reset', opt, function(){ });		
		});
	});	
});