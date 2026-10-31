const groupeA = ["bro", "ina", "nessi"];
const groupeB = ["boss", "adji"];
const etudiantBase = { nom: "Diop", filiere: "resaux", niveau: "L2" };

const  tousLesEtudiants = [...groupeA,...groupeB]
console.log(tousLesEtudiants)

const copieA = [...groupeA,"Cheikh"]
console.log(copieA)
console.log(groupeA)

const etudiantComplet = {...etudiantBase, age:22 , ville:"Dakar"}
console.log(etudiantComplet)

const L3= {...etudiantBase,niveau:"L3"}
console.log(L3.niveau)
console.log(etudiantBase.niveau)

const coordonnees = { ville: "Dakar", telephone: "703242597" };
const contact = { ville: "yeumbeul", email:" nsow@gmlcom" }

const profil = { ...coordonnees, ...contact }
console.log(profil)


