const player = require("node-wav-player");
player.play({
  path: "./stop_talking.wav"
});
setInterval(function() {
  player.play({
    path: "./stop_talking.wav"
  });
}, 5000)
