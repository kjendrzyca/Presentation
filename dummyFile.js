var img = document.createElement('img');
img.src = require('./somepng.png');

var somediv = document.createElement('div');
somediv.innerHTML = 'helloman';
somediv.appendChild(img);

export default somediv;
