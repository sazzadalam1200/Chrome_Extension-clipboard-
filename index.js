let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//fetch from local storage
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""//clears field after input
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    //stringify -> turn array to string
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length;i++){
        // listItems += "<li><a href='myLeads[i]' target='_blank'>" + myLeads[i] + " "+ "</a></li>"
        listItems = 
        `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>

        `    
    }
        ulEl.innerHTML += listItems 
}
