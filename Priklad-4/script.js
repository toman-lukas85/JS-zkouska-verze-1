// Seznam studentů
const studenti = [
  {
    jmeno: "Jan Novák",
    znamky: [1, 2, 3, 4, 5, 2, 1, 3, 4, 5, 1, 2, 3, 2, 4, 5, 3, 1, 2, 4],
  },
  {
    jmeno: "Petra Svobodová",
    znamky: [2, 3, 1, 4, 5, 3, 2, 1, 5, 4, 3, 2, 5, 4, 1, 2, 3, 4, 5, 1],
  },
  {
    jmeno: "Karel Dvořák",
    znamky: [5, 4, 3, 2, 1, 5, 3, 4, 2, 1, 5, 4, 2, 3, 1, 5, 2, 4, 3, 1],
  },
  {
    jmeno: "Lucie Procházková",
    znamky: [3, 2, 4, 1, 5, 2, 3, 4, 1, 5, 2, 4, 3, 5, 1, 2, 3, 4, 5, 1],
  },
];

// Vytvoření výstupu pro výsledky
let vystupElement = document.createElement("div");
document.body.appendChild(vystupElement);

// Vyčtení každého studenta
for (let i = 0; i < studenti.length; i++) {
  let student = studenti[i];
  
  // Součet známek
  let soucet = 0;
  for (let j = 0; j < student.znamky.length; j++) {
    soucet = soucet + student.znamky[j];
  }
  
  // Vypočet průměru
  let prumer = soucet / student.znamky.length;
  
  // Převod na desetiné číslo
  let zaokrouhlenyPrumer = prumer.toFixed(2);
  
  // Vytvoření textu s výsledkem
  let textVysledku = student.jmeno + ": " + zaokrouhlenyPrumer;
  
  // Vypsání výsledku na stránku
  let paragraf = document.createElement("p");
  paragraf.textContent = textVysledku;
  vystupElement.appendChild(paragraf);
}
