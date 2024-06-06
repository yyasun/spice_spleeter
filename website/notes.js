var xhr = new XMLHttpRequest();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filename = urlParams.get('filename');

var image = xhr.response;                        
var img = document.createElement('img');
img.src = "http://127.0.0.1:5000/download?filename="+filename;
var output = document.getElementById("output");
output.appendChild(img);

function download_midi(){
  var link = document.createElement('a');         
  link.href = "http://127.0.0.1:5000/download?filename="+"converted_audio_file.mid";
  link.download = "output.mid"; // You can set the file name here
  link.click();
}