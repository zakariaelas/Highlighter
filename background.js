var circles = document.querySelectorAll(".circle");

for (var i=0;i<circles.length;i++){
  circles[i].addEventListener("click",function(){
      chrome.tabs.executeScript(null,{code:"var color = "+JSON.stringify(this.id)},function(){
        chrome.tabs.executeScript(null,{file : "content.js"});
      })
  });
}
