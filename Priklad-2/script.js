//Produkty

const produkty = [
  {
    id: 1,
    nazev: "Notebook",
    cena: 24999,
    skladem: true,
  },
  {
    id: 2,
    nazev: "Sluchátka",
    cena: 1999,
    skladem: false,
  },
  {
    id: 3,
    nazev: "Mobilní telefon",
    cena: 13999,
    skladem: true,
  },
]

// Vyhledání id "produkty"
let produktyDiv = document.getElementById("produkty");

// Vybere každý produkt
for (let i = 0; i < produkty.length; i++) {
  // Vytvoření nadpisu h2 s názvem produktu
  let nazevH2 = document.createElement("h2");
  nazevH2.innerHTML = produkty[i].nazev;
  
  // Vytvoření hondoty s cenou
  let cenaP = document.createElement("p");
  cenaP.innerHTML = produkty[i].cena + " Kč";
  
  // Vytvoření hodnoty s informací o dostupnosti
  let dostupnostP = document.createElement("p");
  
  // Kontrola produktu skladem
  if (produkty[i].skladem) {
    dostupnostP.innerHTML = "tento produkt je skladem";
    dostupnostP.style.color = "green";
  } else {
    dostupnostP.innerHTML = "tento produkt není skladem";
    dostupnostP.style.color = "red";
  }
  
  // Odeslání do ouutputu
  produktyDiv.appendChild(nazevH2);
  produktyDiv.appendChild(cenaP);
  produktyDiv.appendChild(dostupnostP);
}