//hey kiddo
const controleerLeeftijd = function (leeftijd) {
if (leeftijd >= 18) {
    return "true";
} else {
    return "false";
}
};

const antwoordLeeftijd = function (leeftijd) {
    if (leeftijd >= 18) {
        return "Hallo daar";
    } else {
        return "Hey kiddo";
    }
    };

console.log(antwoordLeeftijd(15));
console.log(antwoordLeeftijd(25));

//BTW oefening 1
const verkoopprijs = function (basisprijs, btwPercentage) {
   return basisprijs * btwPercentage/100;
};

const btwBedrag = function (verkoopprijs, basisprijs) {
    return
}