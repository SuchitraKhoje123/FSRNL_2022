const button=document.getElementById("addAlbumButton");
const albums=document.getElementsByClassName("albums")[0];

button.addEventListener("click", function(){
    const image=document.getElementById("imageURL").value;
    const description=document.getElementById("description").value;
    const time=document.getElementById("time").value;
    
const album=createNewAlbum(image, description, time);

})

function createNewAlbum(imageURL,description,time)
{
        
        const albumDiv=document.createElement('div');
        albumDiv.className="album";
        const thumbnailDiv=document.createElement('div');
        thumbnailDiv.className="thumbnail";
        const image=document.createElement('img');
        image.setAttribute('src',imageURL);
        thumbnailDiv.appendChild(image);

        const detailsDiv=document.createElement('div');
        detailsDiv.className="details";
        const para=document.createElement('p');
        para.textContent=description;

        const detailsFooterDiv=document.createElement('div');
        detailsFooterDiv.className="details-footer";

        const buttonDiv=document.createElement('div');
        const button1=document.createElement('button');
        button1.textContent="View";
        const button2=document.createElement('button');
        button2.textContent="Edit";
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);

        const timeElement=document.createElement('span');
        timeElement.textContent=time+" min";

        detailsFooterDiv.appendChild(buttonDiv);
        detailsFooterDiv.appendChild(timeElement);

        detailsDiv.appendChild(para);
        detailsDiv.appendChild(detailsFooterDiv);

        albumDiv.appendChild(thumbnailDiv);
        albumDiv.appendChild(detailsDiv);

        albums.appendChild(albumDiv);

}


   