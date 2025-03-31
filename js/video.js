var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// Load
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load();

	// Play 
	document.querySelector("#play").addEventListener("click", function() {
 		console.log("Play Video");
		video.play();
		document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
 	});

	// Pause
	document.getElementById("pause").addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();
	});

	// Slow Down
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed:", video.playbackRate);
	});

	// Speed Up
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate *= 1.10;
		console.log("New speed:", video.playbackRate);
	});

	// Skip Ahead
	document.getElementById("skip").addEventListener("click", function () {
		console.log("Original location:", video.currentTime);
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} 
		else {
			video.currentTime += 10;
		}
		console.log("New location:", video.currentTime);
	});

	// Mute / Unmute
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.innerText = video.muted ? "Unmute" : "Mute";
	});

	// Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.getElementById("volume").innerText = this.value + "%";
	});

	// Add oldSchool class
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	// Remove oldSchool class
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});

