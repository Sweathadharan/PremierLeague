//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
const createManager=( managerName,
  managerAge,
  currentTeam,
  trophiesWon)=>{
  return [managerName, managerAge, currentTeam, trophiesWon];

}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
const createFormation=(formation)=>{
  if(formation.length==0)
  {
    return null;
  }
  else{
  return {
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2]

  }
}

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

const filterByDebut=(year)=>{
  return players.filter((player)=>{
    return player.debut===year})
  }

//Progression 4 - Filter players that play at the position _______
const filterByPosition=(position)=>{
  return players.filter((player)=>{
    return player.position===position})
  }


//Progression 5 - Filter players that have won ______ award
const filterByAward=(awardName)=>{
  return players.filter((player)=>{
    return player.awards.some((award)=>
           award.name===awardName
    )})
  }


//Progression 6 - Filter players that won ______ award ____ times
const filterByAwardxTimes=(awardName,noOfTimes)=>{
  return players.filter((player)=>{
    let count=0;
     player.awards.forEach((award)=>
     {
           if(award.name===awardName)
           {
            count++;
           }
      })
      return count>=noOfTimes
    })
      
  }


//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry=(awardName,country)=>{
  return players.filter((player)=>{
    return player.awards.some((award)=>
           award.name===awardName
    ) && player.country===country
  })
  }


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge=(noOfAwards, team, age)=>{
  return players.filter((player)=>{
    return player.awards.length>=noOfAwards && player.team===team && player.age<=age
  })
}

//Progression 9 - Sort players in descending order of their age
const SortByAge=()=>{
  return players.sort((player1,player2)=>player2.age-player1.age)
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
const FilterByTeamxSortByNoOfAwards=(team)=>{
  const teamPlayers=players.filter((player)=>{
    return player.team===team
  })
  return teamPlayers.sort((player1,player2)=>player2.awards.length-player1.awards.length)
}



//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
const SortByNamexAwardxTimes=(awardName,noOfTimes,country)=>{
  const sortedPlayers=players.filter((player)=>{
    return player.awards.length>=noOfTimes && player.country===country
  })
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
const SortByNamexOlderThan=(age)=>{
  const filteredPlayers = players.filter((player)=>{
    return player.age>age;
  })
  const sortedPlayers=filteredPlayers.sort((player1,player2)=>{
    const player1Name= player1.name;
    const player2Name = player2.name;
    if(player1Name>player2Name){
      return 1
    }
    if(player1Name<player2Name)
    {
      return -1
    }
    return 0
  })
  return sortedPlayers.forEach(player => {
    player.awards.sort((player1, player2) => {
        return player2.year - player1.year;
    });
});
}