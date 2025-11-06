// Fonction pour trouver le minimum et le maximum dans un tableau de nombres
function trouverMinMax(tableau) {
    // Cas particulier : si le tableau est vide, il n'y a ni min ni max.
    if (tableau.length === 0) {
    return { min: null, max: null }; // On retourne null pour les deux
    }

    // Initialisation : on suppose que le premier élément est à la fois le min et le max.
    let min = tableau[0];
    let max = tableau[0];

    // On parcourt le tableau EN COMMENÇANT PAR LE DEUXIÈME élément (index 1)
    for (let i = 1; i < tableau.length; i++) {
    // Si l'élément actuel est plus petit que le min enregistré...
    if (tableau[i] < min) {
        min = tableau[i]; // ...il devient le nouveau min.
        }
    // Si l'élément actuel est plus grand que le max enregistré...
        if (tableau[i] > max) {
        max = tableau[i]; // ...il devient le nouveau max.
    }
   }

    // On retourne un objet contenant le min et le max trouvés.
    return { min, max };
}

// Fonction pour calculer la somme de tous les éléments d'un tableau
function sommeTableau(tableau) {
    // On initialise un "accumulateur" à 0.
    let somme = 0;
    // On parcourt chaque élément du tableau.
    for (let i = 0; i < tableau.length; i++) {
    // On ajoute la valeur de l'élément actuel à la somme.
    somme += tableau[i];
  }
    // On retourne le total.
    return somme;
}

// Fonction pour filtrer les éléments d'un tableau selon une condition
function filtrerTableau(tableau, condition) {
    // La méthode .filter() de Javascript fait exactement cela.
    // Elle prend une "fonction de rappel" (callback) en argument.
    // Elle exécute cette fonction 'condition' pour chaque élément.
    // Si 'condition(element)' retourne 'true', l'élément est gardé.
    // (Exemple de condition : n => n > 10)
    return tableau.filter(condition);
}