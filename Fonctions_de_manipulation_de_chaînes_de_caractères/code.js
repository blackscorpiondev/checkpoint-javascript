// Fonction pour compter le nombre de caractères dans une chaîne
function count(str) {
    // La propriété .length d'une chaîne de caractères retourne directement son nombre total de caractères.
    return str.length; 
}

// Fonction pour inverser une chaîne de caractères
function inver(str) {
    // .split('') transforme la chaîne en tableau (ex: "bonjour" -> ['b', 'o', 'n', 'j', 'o', 'u', 'r'])
    // .reverse() inverse l'ordre des éléments de ce tableau (-> ['r', 'u', 'o', 'j', 'n', 'o', 'b'])
    // .join('') rassemble les éléments du tableau en une seule chaîne (-> "ruojnob")
    return str.split('').reverse().join(''); 
}

// Fonction pour mettre en majuscule la première lettre de chaque mot dans une phrase
function capitaliserPremieresLettres(phrase) {
    // .split(' ') sépare la phrase en un tableau de mots (ex: "je suis dev" -> ["je", "suis", "dev"])
    return phrase
    .split(' ') 
    // .map() crée un nouveau tableau en appliquant une fonction à chaque mot
    .map(mot => 
        // mot.charAt(0) prend la première lettre du mot
        // .toUpperCase() la met en majuscule
        // mot.slice(1) prend le reste du mot (de l'index 1 à la fin)
        // .toLowerCase() s'assure que le reste du mot est en minuscule (bonne pratique)
        mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase()
        )
        // .join(' ') rassemble les mots du tableau en une seule chaîne, séparés par un espace
        .join(' ');
}