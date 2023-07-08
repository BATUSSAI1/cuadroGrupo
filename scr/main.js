const BaseUrl = "https://datagroups.fundamentos-29.repl.co/"

async function getUrl(){
        const data = await fetch(BaseUrl)
        const res = await data.json()
    return res
}

async function datosComplit (){
    const promes = await getUrl()
    console.log(promes);
    printGrup(promes)
}
datosComplit ()

function printGrup(grupos) {
    
let padre1 = document.querySelector(".padre")

let infoGrup = ""
for (const grupo of grupos ) {
    infoGrup +=`
    <div class= "grupo" style="border: 5px solid ${grupo.color}">
    <h2 style=" color:${grupo.color}"> ${grupo.title}</h2>
    ${printSubgrups(grupo.subGroups, grupo.color)}
    </div>`

    
}
padre1.innerHTML=infoGrup
}

function printSubgrups(subgrupos, color){

    let infoSubgrup = ""

for (const subgrupo of subgrupos) {
infoSubgrup += 
`<div class = " subgrupos" style="border: 4px solid ${color}">
<h3>${subgrupo.title}</h3>
<div class="container_participant">
${printParticipant(subgrupo.participants, color)}
</div>

</div>`
}
return infoSubgrup
}

function printParticipant(participants, color) {

    let infoCompetitor = ""

    for (const competitor of participants) {
        infoCompetitor += `
        <div class = "participantes" style="border: 2px solid ${color}; --color-hover:${color}"> 
        <h3> ${competitor.name} </h3>
        <p> ${competitor.email}</p>
        </div>`
    }
    return infoCompetitor
}