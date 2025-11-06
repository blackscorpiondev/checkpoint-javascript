// Fonction pour calculer la factorielle d'un nombre (ex: 5! = 5*4*3*2*1)
function factorielle(n) {
    // La factorielle n'est pas définie pour les nombres négatifs.
    if (n < 0) return undefined; 
    
    // On initialise le résultat à 1.
    // (Important : 0! = 1 et 1! = 1, cette initialisation gère ces deux cas)
    let resultat = 1;
 
    // On boucle de 2 jusqu'à n.
    for (let i = 2; i <= n; i++) {
    // On multiplie le résultat par le nombre actuel de la boucle.
    resultat *= i; // équivaut à resultat = resultat * i
    }
    
    // On retourne le résultat final.
    return resultat;
}

// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    // 0, 1 et les nombres négatifs ne sont pas premiers.
    if (n <= 1) return false; 
    
    // 2 est le seul nombre pair qui est premier.
    if (n === 2) return true; 
    
    // Si le nombre est pair (et n'est pas 2), il n'est pas premier.
    if (n % 2 === 0) return false; 

    // Optimisation : Inutile de vérifier au-delà de la racine carrée de n.
    // On vérifie seulement les diviseurs impairs (on commence à 3, on saute 4, 6, 8...)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // Si n est divisible par 'i' (le reste de la division est 0)...
    if (n % i === 0) return false; // ...alors n a un diviseur, il n'est pas premier.
    }

    // Si la boucle se termine sans trouver de diviseur, le nombre est premier.
    return true;
}

// === LA FONCTION MANQUANTE ===

// Fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes
function suiteFibonacci(nbTermes) {
    // Cas 1 : Si on demande 0 terme, on retourne un tableau vide.
    if (nbTermes <= 0) return [];
 
    // Cas 2 : Si on demande 1 terme, on retourne le premier terme [0].
    if (nbTermes === 1) return [0];

    // Initialisation : La suite commence toujours par 0 et 1.
    let sequence = [0, 1];

    // On boucle pour générer le reste des termes.
    // On commence à i = 2 car on a déjà les 2 premiers termes (index 0 et 1).
    for (let i = 2; i < nbTermes; i++) {
    // Le terme suivant est la somme des deux termes précédents.
    // sequence[i - 1] est le terme juste avant
    // sequence[i - 2] est l'avant-dernier terme
    let termeSuivant = sequence[i - 1] + sequence[i - 2];
        
    // On ajoute ce nouveau terme à notre tableau 'sequence'.
    sequence.push(termeSuivant);
    }

    // On retourne la suite complète.
    return sequence;
}