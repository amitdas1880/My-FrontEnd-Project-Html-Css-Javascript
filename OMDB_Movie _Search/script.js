function searchMovies(){
const apiKey = document.getElementById("apiKey").value;
const movieTitle = document.getElementById("movieTitle").value;
console.log(apiKey + " "+ movieTitle);

const url = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`;

document.getElementById("loader").style.display="block";

 fetch(url)
 .then((response)=>response.json())
 .then((data)=>{
 console.log(data)
 document.getElementById("loader").style.display="none";
 
 if(data.Error){
   showErrorMessage(data.Error);
   emptyInputbar();
   displayResult("");
 }
 else{
    displayResult(data.Search);   
    emptyInputbar();
    showErrorMessage("");
 }

});

//check if apikey OR movieTitle is not given.
if(!apiKey || !movieTitle){
   showErrorMessage(data.Error);
   emptyInputbar();
   displayResult(""); 
}

};

//This function is used to press Search button and display result.
const button  = document.getElementById("search-btn");
button.addEventListener("click",searchMovies);


// Error handling function:-
function showErrorMessage(ErrorMessage){
    document.getElementById("error-message").innerText=ErrorMessage;
}


//Display result function:-
function displayResult(List_of_movies){
const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML="";

List_of_movies.forEach((movie, index) => {
 
   const cardDiv = document.createElement("div");
   cardDiv.id='card';
   cardDiv.innerHTML=`<img id="cardimg" src="${movie.Poster}" alt="${movie.Title}">
   <div class="row-1">
   <h1>${index+1}</h1>
   <h2>${movie.Title}</h2>
   </div>
   <div class="row-2"
   <p><a id="year">Year:</a>${movie.Year}</p>
   <p> <a id="imdb">IMDB:</a> ${movie.imdbID}</p>
   </div>`;

   resultsDiv.appendChild(cardDiv);
});
}


// This function is used to press ENTER key and display result.
document.addEventListener('keydown',function(e){
   if(e.key==="Enter"){
       console.log("function called");
       searchMovies();    
     }
});

//This function is used to emply input-bar
function emptyInputbar(){
const apiKey = document.getElementById("apiKey").value="";
const movieTitle = document.getElementById("movieTitle").value="";
}

//  43207511 (my api key->amit kumar das)
