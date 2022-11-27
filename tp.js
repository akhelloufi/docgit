/* es5*//*
function personne(a,b){     
    this.nom=a;
    this.prenom=b;
    this.somme=function(a,b){return a+b;this}
}*/
/*es6*/
class personne{
    constructor(a,b){
        this.nom=a;
        this.prenom=b;
    }
    somme(a,b){
        return a+b;
    }
}

var p =new personne("ahmed","ahmed");
var s=p.somme(10,20);
console.log(p);
console.log(p.somme(20,30));

