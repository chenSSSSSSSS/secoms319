fetch("./data.json")       // for reading the json file
.then(Response=>Response.json())                // take response from the user
.then(myImages=>loadImages(myImages)); 

function loadImages(myImages)
{
    var mainContainer = document.getElementById("images1"); // first to create an container for the object
    //console.log("hh");  // testing if i can read data from json file 
    let div = document.createElement("div");
    let url = myImages.images[0].url;
    div.innerHTML = `<img src=${url} width="200"></img>`;  
    //console.log(url);
    mainContainer.appendChild(div);
    
    // Create for loop to iterate data in array
    // for(var i = 0; i < myImages.movies.length; i++)
    // {
    //     let title = myImages.images[i].decription;
    //     //let year = myMovies.images[i].year;
    //     let url = myImages.images[i].url;  // image 

    //     // print it out to the console --- DOM
    //     let div = document.createElement("div");
    //     // make text to the websites
    //     div.innerHTML = `
    //     <br>
    //     ${title} <br>
    //     <img src=${url} width="200"> </img><br><br>
    //     `;  

    //     //return back to the maincontainer
    //     mainContainer.appendChild(div);
    // }
}