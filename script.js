//hey kiddo
const controleerLeeftijd = function(leeftijd) {
if (leeftijd >= 18) {
    return true;
} else {
    return false;
}
};

const antwoordLeeftijd = function (leeftijd) {
    if (controleerLeeftijd(leeftijd)) {
        return "Hallo daar";
    } else {
        return "Hey kiddo";
    }
    };

console.log(antwoordLeeftijd(15));
console.log(antwoordLeeftijd(25));

//BTW oefening 1
const btwBedrag = function(basisBedrag, btwPercentage) {
   return basisBedrag * (btwPercentage / 100);
};

const verkoopBedrag = function(basisBedrag, btwPercentage) {
    const btw = btwBedrag(basisBedrag, btwPercentage);
    return basisBedrag + btw
}

console.log(verkoopBedrag(100, 9));
console.log(verkoopBedrag(50, 21));

//BTW oefening 2
const berekenBasisBedrag = function(verkoopBedrag, btwPercentage) {
    const basisBedrag = verkoopBedrag / ((100 + btwPercentage) / 100);
    return basisBedrag
 };
 
 const berekenBasisBedragEnBtw = function(verkoopBedrag, btwPercentage) {
    const basisBedrag = berekenBasisBedrag(verkoopBedrag, btwPercentage);
    const btw = verkoopBedrag - basisBedrag;
     return [basisBedrag, btw];
 };
 
 console.log(berekenBasisBedragEnBtw(121, 21));
 console.log(berekenBasisBedragEnBtw(109, 9));
