//Jména
const jmena = [
    ["Michal", "Martin", "Jan"],
    ["Marketa", "Jana", "Adela"],
    ["Vlasta", "Zdenek", "Kristyna"]
]

// Vytvoření prázdného pole pro uložení emailů
var emaily = new Array()

// Vytvoření prázdného pole pro uložení všech jmen 
var vsechnajmena = new Array()
// Vnější cyklus - prochází řádky tabulky jmen
for (var i = 0; i < jmena.length; i++) {
    // Vnitřní cyklus - prochází jednotlivá jména 
    for (var j = 0; j < jmena[i].length; j = j + 1) {
        // Přidání aktuálního jména na konec všech jmen
        vsechnajmena[vsechnajmena.length] = jmena[i][j]
    }
}

// Cyklus pro vytvoření emailových adres
for (var k = 0; k < vsechnajmena.length; k++) {
    // Vytvoření emailu připojením "@firma.cz" ke každému jménu
    emaily[k] = vsechnajmena[k] + '@firma.cz'
}

// Výpis všech vytvořených emailů do konzole
console.log(emaily)