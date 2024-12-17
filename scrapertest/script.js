function loadfromurl(){
    var urlstr=document.getElementById('urlinput').value;
    if(urlstr===""){
        return null;
    }
    var allurl=urlstr.split(" ");
    var loops=0;
    console.log(allurl);
    var looper=setInterval(function(){
        if(loops>=allurl.length-1){
            clearInterval(looper);
        }
        console.log(loops+": "+allurl[loops]);
        dothing(allurl[loops]);
        $("#blinker").fadeToggle(150).delay(250).fadeIn(150,filltabl);
        loops++;
    },1200);
    // if(urlstr.includes(" ")){
    //     
    //     console.log(allurl);
    //     var i=0;
    //     while(i<allurl.length;i++){
    //         //dothing(allurl[i]);
    //         console.log((i+1)+"/"+allurl.length);
    //         $("#blinker")
    //         .fadeToggle(400,function(){
    //             console.log(allurl[i]);
    //             dothing(allurl[i]);
    //         })
    //         .fadeToggle(600,function(){
    //             filltabl();
                
    //         })
    //         .fadeToggle(400,function(){
    //             i++;
    //         });
            
    //     }
    // }else{
    //     dothing(urlstr);
    //     //console.log(pagehtml);
    //     $("#blinker").fadeToggle(150).delay(250).fadeIn(150,filltabl);
    // }
}
function dothing(url){
    $.ajax({
        url: url,
        cache: false
    })
    .done(function( html ) {
        $( "#results" ).html( html );
        
    });
    //console.log(document.getElementById('firstHeading'));
}
function filltabl(){
    // var time=0;
    // while(document.getElementById('firstHeading')==null){
        // setInterval(function(){time++});
    // }
    // console.log("loaded after "+time+"ms");
    var newrow=document.createElement("tr");
    var rowurl=document.createElement("td");
    rowurl.innerHTML=document.getElementById('firstHeading').children[0].innerHTML;
    newrow.appendChild(rowurl);
    var rowmat=document.createElement("td");
    rowmat.innerHTML=lookfor("mat");
    newrow.appendChild(rowmat);
    document.getElementById("outtable").appendChild(newrow);
    var rowobt=document.createElement("td");
    rowobt.innerHTML=lookfor("obt");
    newrow.appendChild(rowobt);
    var rowttp=document.createElement("td");
    rowttp.innerHTML=lookfor("ttp");
    newrow.appendChild(rowttp);
    document.getElementById("outtable").appendChild(newrow);
}
function lookfor(which){
    if(which=="mat"){
        return document.getElementById("Used_in")!=null;
    }
    if(which=="obt"){
        //search if the item is crafted, bought, fished, dropped, found in chest
        var methods=[];
        if(document.getElementById("Recipe")!=null)
            methods.push("Crafting");
        var theads=document.getElementsByTagName("th");    
        for(i=0;i<theads.length;i++){
            if(theads[i].innerHTML=="Dropped by"){
                if(methods.includes("Drop")===false){
                    methods.push("Drop");
                }
            }
        }
        return methods;
    }
    if(which=="ttp"){
        return document.getElementsByClassName("stat")[0].rows[6].cells[1].innerHTML;
    }
}
window.onload = function(){
    document.getElementById("controls").children[1].setAttribute("style","color:green");
};