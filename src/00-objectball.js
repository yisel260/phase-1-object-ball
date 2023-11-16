 function gameObject() {
return {
    home:{
        teamName:"Brooklyn Nets",
        colors:"Black, White",
        players:{
            "Alan Anderson": {
                number:"0",
                shoe:"16",
                points:"22",
                rebounds:"12",
                assists:"12",
                steals:"3",
                blocks:"1",
                slamdunks:"1",

            },
            "Reggie Evans":{
                number:"30",
                shoe:"14",
                points:"12",
                rebounds:"12",
                assists:"12",
                steals:"12",
                blocks:"12",
                slamdunks:"7",

            },
            "Brook Lopez": {
                number:"11",
                shoe:"17",
                points:"17",
                rebounds:"19",
                assists:"10",
                steals:"3",
                blocks:"1",
                slamdunks:"15",

            },
            "Mason Plumlee":{
                number:"1",
                shoe:"19",
                points:"26",
                rebounds:"12",
                assists:"6",
                steals:"3",
                blocks:"8",
                slamdunks:"5",

            },
            "Jason Terry":{
                number:"31",
                shoe:"15",
                points:"19",
                rebounds:"2",
                assists:"2",
                steals:"4",
                blocks:"11",
                slamdunks:"1",

            },
        },

    },
    away:{
        teamName:" Charlotte Hornets",
        colors: "Truquoise, Purple",
        players:{
            "Jeff Adrien": {
                number:"4",
                shoe:"18",
                points:"10",
                rebounds:"1",
                assists:"1",
                steals:"7",
                blocks:"2",
                slamdunks:"2",

            },
            "Bismak Biyombo": {
                number:"0",
                shoe:"16",
                points:"12",
                rebounds:"4",
                assists:"7",
                steals:"7",
                blocks:"15",
                slamdunks:"10",

            },
            "DeSagna Diop":{
                number:"2",
                shoe:"14",
                points:"24",
                rebounds:"12",
                assists:"12",
                steals:"4",
                blocks:"5",
                slamdunks:"5",

            },
            "Brendan Haywood": {
                number:"33",
                shoe:"15",
                points:"6",
                rebounds:"12",
                assists:"12",
                steals:"22",
                blocks:"5",
                slamdunks:"12",

            },
        }
    }
}
}
//console.log(gameInfo);

function homeTeamName(){
    let object = gameObject()
    return object["home"]["teamName"]
}

console.log (homeTeamName())

function pointsScored(playerName){
    for (key in gameObject){
        console.log(key.players.playerName)
        if (playerName == key.players.playerName) { 
            return key.playerName.points
        }
    }

}

console.log (pointsScored("Alan Anderson"))