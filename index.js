// for(var i=1; i<=10; i++){
//     document.write("bangladesh </br>")
// }
//https://swiperjs.com/

var result = 88;


if(result>=0 && result<=100){
    if(result<33){
        console.log('failed');
        
    }
    // if(result>=33){
    //     console.log(" D grade");
    // }
    else if(result<=40){
        console.log(" D grade");
    }
    else if(result<=49){
        console.log(" C grade");
    }
    else if(result<=59){
        console.log(" B grade");
    }
    else if(result<=69){
        console.log(" B+ grade");
    }
    else if(result<=79){
        console.log(" A grade");
    }
    else{
        console.log("A+");
    }
}
else{
    console.log("invalid grade")
}
