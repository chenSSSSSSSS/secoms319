fetch("./data.json")       // for reading the json file
.then(Response=>Response.json())                // take response from the user
.then(myImages=>loadImages(myImages)); 

function loadImages(myImages)
{   
    var mainContainer = document.getElementById("images1"); // first to create an container for the object
    let div = document.createElement("div");
    let url = myImages.images[0].url;
    div.innerHTML = `<img src=${url} width="200"></img>`;  
    mainContainer.appendChild(div);

    var mainContainer2 = document.getElementById("images2");
    let div2 = document.createElement("div");
    let url2 = myImages.images[1].url;
    div2.innerHTML = `<img src=${url2} width="300"></img>`;  
    mainContainer2.appendChild(div2);

    var mainContainer3 = document.getElementById("images3");
    let div3 = document.createElement("div");
    let url3 = myImages.images[2].url;
    div3.innerHTML = `<img src=${url3} width="200"></img>`;  
    mainContainer3.appendChild(div3);

    var mainContainer4 = document.getElementById("images4");
    let div4 = document.createElement("div");
    let url4= myImages.images[3].url;
    div4.innerHTML = `<img src=${url4} width="200"></img>`;  
    mainContainer4.appendChild(div4);
}