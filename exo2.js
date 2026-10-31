
const etudiant ={
    id:2026,
    nom:"sow",
    prenom:"brahim",
    filiere:"GL",
    niveau:"L2",
    ville:"Dakar"
}

const {nom,prenom,filiere}=etudiant
const{niveau:classe}=etudiant
const tab=[15,11,17,13,16]
const [T1,T2,,,T5]=tab
const [n1,,n3]=tab

const { email = "n89@gmil.com" } = etudiant
console.log(email);
console.log(`Salut,je suis ${prenom} ${nom} , en ${classe} ${filiere} `)