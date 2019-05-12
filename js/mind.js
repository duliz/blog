setTimeout(function() {
    var mindmap=document.querySelector(".mindmap")
    if (mindmap){
    var minder = new kityminder.Minder({
        renderTo: '.mindmap'
    });
    var markdownText = mindmap.innerText.trim();
    mindmap.querySelectorAll("p").forEach(function(element,index) {
        element.style.display = 'none';
    });
    minder.importData('markdown', markdownText);
    minder.disable();
    minder.execCommand('hand');
}
},
100
)