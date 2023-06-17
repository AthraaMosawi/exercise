// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}

class Challenge{
    constructor(id, level){
        this.id = id,
        this.level = level;
    }
}

class Users {
    constructor(name, xp, log){
        this.name = name;
        this.xp = xp;
        this.log = log
    }
    newSolvedChallenge(Challenge){
        this.xp += obj[Challenge.level];
        this.log.push(Challenge.id);

    }
}


let user1 = new Users("Russul", 0, []);
console.log(user1);

let ch1 = new Challenge(1, "ME");
user1.newSolvedChallenge(ch1);
let ch2 = new Challenge(2, "ME");
user1.newSolvedChallenge(ch2);
let ch3 = new Challenge(3, "EA");
user1.newSolvedChallenge(ch3);

// user1.newSolvedChallenge({
//     id:1,
//     level: "VE"
// })

// let o = {
//     id : 2,
//     level: "ME"
// }

console.log(user1.xp);
console.log(user1.log);