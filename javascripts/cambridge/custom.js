
$( document ).ready(function() {
   

	// Strand opener
	$( "#strand-opener .strand-number" ).wrap('<div class="masthead"></div>');

	$('#strand-opener').css({'height':($(window).height())});
	$(window).resize(function(){
    	$('#strand-opener').css({'height':($(window).height())});
    });


	// Chapter opener
	$( "#chapter-opener" ).wrapInner('<div class="masthead"></div>');
	$( "#chapter-opener").append('<div class="cover-image"></div>');

	var mastHeight = $( '.masthead' ).height();

	$('#chapter-opener .cover-image').css({'height':($(window).height()-mastHeight)});
	$(window).resize(function(){
    	$('#chapter-opener .cover-image').css({'height':($(window).height()-mastHeight)});
    });


	// Downoad button
	$('.eoc .download a').html('<div class="icon-doc-solid"></div><div>Download</div>');
	$('.activity-panel .download a').html('<div class="icon-doc-solid"></div><div>Download</div>');
	$('.task-panel .download a').html('<div class="icon-doc-solid"></div><div>Download</div>');
});

