
const heading = document.getElementById('h1')
const image = document.getElementById('image')
const subTitle = document.getElementById('h3')
const detail = document.getElementById('detail')

const button = document.getElementById('btn');
const linkContainer = document.getElementById('linkContainer');


function searchData(){
    // Convert date format fron DD-MM-YYYY to YYYY-MM-DD
const date = document.getElementById('inputDate').value
const dateComponents = date .split('-');
const day = dateComponents[0];
const month = dateComponents[1];
const year = dateComponents[2];

const dateObject = new Date(`${year}-${month}-${day}`);

const formattedDate = dateObject.toISOString().split('T')[0];

//console.log(formattedDate)


const Api_key = `NeROpf2SgUBRQWr2MIGJfZb1LcfebSal7cGPGPU4`;
const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${Api_key}`;


    fetch(url)
    .then((response)=>response.json())
    .then((jsondata)=>{
    console.log(jsondata)
   
        
        heading.innerHTML="Picture on "+ jsondata.date;
        subTitle.innerHTML=jsondata.title;  
        detail.innerHTML=jsondata.explanation;
        
        //Add image from fatch API to HTML
        image.src=jsondata.hdurl;
        image.style.height='28rem'

        //Create link 
        const linkurl=`<a href="${jsondata.url}">${jsondata.date}</a>`;
        linkContainer.innerHTML+=linkurl +"<br>"+'<br>';
        
        

    })

    


}

button.addEventListener('click',searchData)
