let make_me_smile_wrap = document.getElementsByClassName("make_me_smile_wrap");
let smilers = Array.from(make_me_smile_wrap);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

window.onload = function(event) {
	console.log(smilers)
	smilers.forEach(function(el) {
		el.style.top = `${getRandomArbitrary(-310, 310)}` + 'px';
		el.style.left = `${getRandomArbitrary(-310, 310)}` + 'px';
	})
}
