const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  }, 
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: { 
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// const ulParent = document.createElement('ul');
// for (let game of warriorsGames){
//   const gameLi = document.createElement('li');

//   const {homeTeam, awayTeam} = game;
//   const {team:hTeam, points:hPoints} = homeTeam;
//   const {team:aTeam, points:aPoints} = awayTeam;

//   const teamNames = `${aTeam} @ ${hTeam}`;
//   let scoreLine;
//  if (aPoints > hPoints){
//   scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//  }else{
//   scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//  }

//  // if homeTeam.team === 'Golden State', const warriors = homeTeam
//  // else const warriors = awayTeam
//  // if hTeam is Golden State, const warriors should reference the object
//  // homeTeam else if is Houston, it should reference awayTeam instead
//  // because if hTeam is not Golden State then aTeam would be Golden State
//  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//  gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')

//   gameLi.innerHTML = `${teamNames} ${scoreLine}`
//   ulParent.append(gameLi);
// }

// document.body.prepend(ulParent)



//Using functions:
const makeChart = (games, targetTeam) => {
const ulParent = document.createElement('ul');
for (let game of games){

  const gameLi = document.createElement('li');

  gameLi.innerHTML = getScoreLine(game);

 gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss')

  ulParent.append(gameLi);
}
return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target =  homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}


const getScoreLine = ({homeTeam, awayTeam}) => {
 const {team:hTeam, points:hPoints} = homeTeam;
  const {team:aTeam, points:aPoints} = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;

 if (aPoints > hPoints){
  scoreLine = `<b>${aPoints}</b>-${hPoints}`;
 }else{
  scoreLine = `${aPoints}-<b>${hPoints}</b>`;
 }
 return `${teamNames} ${scoreLine}`
}

const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');

gsSection.append(gsChart);
hrSection.append(hrChart);