/**
 * This small bit of JavaScript code, when run on Facebook, clicks all
 * of the Like buttons on the page.
 */

var likes = document.querySelectorAll('.commentable_item.autoexpand_mode .UFILikeLink');
var i = 0;
setInterval(function() {
	var like = likes[i];
	like.click();
	like.scrollIntoView();
	window.scrollBy(0,-70);
	i++;
}, 1000);