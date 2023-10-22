fetch("./ds.json")
    .then(response => response.json())
    .then(myImg => loadImg(myImg));

function loadImg(myImg)
{
    var img1 = document.getElementById("linkedList"); // Avengers
    var img2 = document.getElementById("hashTable"); // The Last Airbender
    var img3 = document.getElementById("Tree"); // The Iron Giant
    var img4 = document.getElementById("graph"); // Mulan
    var txt1 = document.getElementById("txt1"); // Avengers
    var txt2 = document.getElementById("txt2"); // The Last Airbender
    var txt3 = document.getElementById("txt3"); // The Iron Giant
    var txt4 = document.getElementById("txt4"); // Mulan
    
    for (var i = 0; i < myImg.images.length; i++) {
        // load the images and text out
        let img = myImg.images[i].image;
        let textt = myImg.images[i].text;
        // create div for picture
        let imge = document.createElement("div");
        imge.innerHTML = `<img src=${img}  alt="..." height="200"></img>`;
        //create p for text
        let txt = document.createElement("p");
        txt.innerHTML = `<p style="padding-bottom: 2rem; font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 1.2em"><strong>${textt}</strong></p>`;

        if (myImg.images[i].imageId === "1234") {
            img1.appendChild(imge);
            txt1.appendChild(txt);
        } else if (myImg.images[i].imageId === "A124") {
            img2.appendChild(imge);
            txt2.appendChild(txt);
        } else if (myImg.images[i].imageId === "76788") {
            img3.appendChild(imge);
            txt3.appendChild(txt);
        } else if (myImg.images[i].imageId === "BB124") {
            img4.appendChild(imge);
            txt4.appendChild(txt);
        }
    } // end for loop
}
