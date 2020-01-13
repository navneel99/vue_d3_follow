d3.select("#below").append("h3").text("Hello World Example").append("br");
d3.select("#below").append("span").text("Hello World!").append("br");

d3.select("#below").append("h3").text("Event Handling").append("br");
d3.select("#below").append("span").attr("class","mo_event").append("button").attr("class","mo_but").text("Mouseover here!!").on("mouseover",function(){
    d3.select(this).transition().duration(1000).style("color","greenyellow").style("background-color","blue");
}).on("mouseout",function(){
    d3.select(this).transition().duration(1000).style("color","white").style("background-color","#e35885");
});

d3.select("#below").append("h3").text("Mouse Track with Animation").append("br");
d3.select("#below").append("div").attr("id","mouse_pos").attr("class","container").text("Here you will find the Mouse co-ordinate on the screen");
d3.select(".container").style("background-color","greenyellow").style("color","darkgreen");
d3.select("#mouse_pos").append("p");
d3.select("body").on("mousemove",function(){
    d3.select("#mouse_pos").select("p").text(d3.mouse(this));
})
// d3.select(".container").transition().duration(5000).style("background-color","#61a1bc").style("color","white");

// function repeatTransition(){
//     d3.select(".container").transition().duration(5000).style("background-color","#61a1bc").style("color","white");
//     d3.select(".container").transition().duration(5000).style("background-color","greenyellow").style("color","darkgreen").on("end",repeatTransition);
// }
var s = d3.select(".container").append("svg").attr("height",100).attr("width",960);
var c = s.append("circle").attr("cy","50");
function g(){
    d3.select(".container").transition().duration(2000).style("color","white").style("background-color","#61a1bc").transition().duration(2000).style("color","darkgreen").style("background-color","greenyellow").on("end",g);
    c.attr("cx",10).attr("fill","black").attr("r",5).transition().duration(2000).attr("cx",900).attr("r",25).attr("fill","white").transition().duration(2000).attr("cx",10).attr("r",5).attr("fill","black").transition().duration(2000).attr("r",5).transition().duration(2000).on("end",g);
}
g();


function f(data){
    var height = 750,
    scaleFactor = 5,
    barWidth = 20;
    
    d3.select("body").select("#temp_chart").remove("bar");

    var graph = d3.select("body").select("#bar").append("svg").attr("id","temp_chart").attr("height",height).attr("width",barWidth * data.length)
    
    var bar = graph.selectAll("g").data(data).enter().append("g").attr("transform",function(d,i){
        return "translate("+i*barWidth+",0)";
    });
    
    bar.append("rect").attr("height",function(d){
        return d * scaleFactor;
    }).attr("width", barWidth-1);

    bar.append("text").attr("x",barWidth/2).attr("y",function(d){return (d*scaleFactor-2)}).attr("dx","0.5em").text(function(d){return d;});
}


d3.select("#submit").on("click",function(){
    var qq = [];
    var n = parseInt(d3.select("#Num").property("value"));
    for (i = 0; i < n;i++){
        qq.push(Math.floor(Math.random() * 100)+10);
    }
    f(qq);
})

