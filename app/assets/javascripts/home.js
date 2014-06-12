$(document).ready(function(){
	var $buttonModal = $(document.getElementById("trope"));
	var $imageModal = $(document.getElementById("modalImage"));
	var $image = $(document.getElementById("me"));
	$buttonModal.on("click", function(){
		$imageModal.fadeIn();
	});
	
	$image.on("click", function(){
		$imageModal.fadeOut();
	});
});