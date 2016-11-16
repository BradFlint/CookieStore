//Create a simple front-end website where users can decide how many cookies that they'd like to eat 
// of each flavor. Once they indicate this, which could be by clicking on an item on screen 
// or by submitted a form, store this value inside of several browser cookies, which specify the 
// type of confectionary cookies as the key and the amount of confectionary cookies eaten so 
// far as a value.

$(document).ready(function(){
	$('#chocbutton').on('click', function(){
		var current = Cookies.get('chocolatecount');
		if(current && !isNaN(current)){
			Cookies.set('chocolatecount', parseInt(current)+1);
		} else {
			Cookies.set("chocolatecount", 1);
		};
		setValue('chocolatecount');
		$("#chocolatepic").animate({
            left: '450px',
            height: '+=250px',
            width: '+=450px'
        }).animate({
        	left: '0px',
            height: '-=250px',
            width: '-=450px'
        });

	});

	// sets the value of whatever cookie value is passed in

	// by clicking the sugar cookie "eat cookies" button causes the image to fade out and back in
	
	function setValue(cookieName){
		if (Cookies.get(cookieName)){
			$("#"+cookieName).text(Cookies.get(cookieName));
		}
	}

	$('#sugarbutton').on('click', function(){
		var current = Cookies.get('sugarcount');
		if(current && !isNaN(current)){
			Cookies.set('sugarcount', parseInt(current)+1);
		} else {
			Cookies.set("sugarcount", 1);
		};
		setValue("sugarcount");
		$("#sugarpic").fadeOut(4000)
		.fadeIn(4000);
	});

	// clicking the lemon "eat cookies" button causes the image to drop down and then jump back up

	$('#lemonbutton').on('click', function(){
		var current = Cookies.get('lemoncount');
		if(current && !isNaN(current)){
			Cookies.set('lemoncount', parseInt(current)+1);
		} else {
			Cookies.set("lemoncount", 1);
		};
		setValue('lemoncount');
		$("#lemonpic").animate({
			top: "310px"}, 1500)
		.animate({
			top: "-100px"}, 500)
		.animate({
			top: "0"}, 500);
	});


	// resets the cookies eaten value to 0 and displays the value 0 in the text box 

	$('#reset').on('click', function(){
		Cookies.set("sugarcount", 0);
		setValue("sugarcount");
		Cookies.set("chocolatecount", 0);
		setValue("chocolatecount");
		Cookies.set("lemoncount", 0);
		setValue("lemoncount");
	});
});

	

