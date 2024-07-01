let inputele=document.getElementById("searchinput");

let searchWResultsEl=document.getElementById("searchresults");
let spinnerele=document.getElementById("spinner");

inputele.addEventListener("keydown",searchwikipedia);
function searchwikipedia(event){
    if(event.key === "Enter"){
        spinnerele.classList.toggle("d-none") ;
        searchWResultsEl.textContent=" ";
        let searchinput=inputele.value ;
        let url="https://apis.ccbp.in/wiki-search?search="+searchinput;
        let options={
            method:"GET"
        }
        fetch(url,options)
        .then (function(response){
            return response.json();
        })
        .then (function(jsonData){
            console.log(jsonData);
            let {search_results}=jsonData;
            displayResults(search_results);
        })
       
            
        }
    }
    function displayResults(a){
        spinnerele.classList.toggle("d-none")
        for(let result of a)
        createandAppendSearchResult(result);
    }
function createandAppendSearchResult(result){
let {title, link, description}=result;

    //div contanier -result-item
let resultItemEl=document.createElement("div")
resultItemEl.classList.add("result-item");
searchWResultsEl.appendChild(resultItemEl);
//Anchor title
let resulttitleel=document.createElement("a");
resulttitleel.classList.add("result-title");
resulttitleel.textContent=title;
result.href=link;
resulttitleel.target="_blank";
resultItemEl.appendChild(resulttitleel);

//breack line
let titlebreakele=document.createElement("br");
resultItemEl.appendChild(titlebreakele);

    //Anchor url -result-url
    let urlel=document.createElement("a");
    urlel.classList.add("result-url");
    urlel.href=link;
    urlel.target="_blank";
    urlel.textContent=link;
    resultItemEl.appendChild(urlel);
    

    //break line
    let titlebreakele1=document.createElement("br");
resultItemEl.appendChild(titlebreakele1);

    //paragraph description --line-description
    let descriptionele=document.createElement("p");
    descriptionele.classList.add("line-description")
    descriptionele.textContent=description;
resultItemEl.appendChild(descriptionele);
}
