// Vytvoření pole produktů bez DPH
let produkty = [
    { nazev: "Notebook", cena: 25000 },
    { nazev: "Sluchátka", cena: 1500 },
    { nazev: "Mobil", cena: 12000 },
    { nazev: "Monitor", cena: 8000 },
    { nazev: "Klávesnice", cena: 1200 }
  ];
  
  //Vytvoření funkce pro výpočet ceny s DPH
  let sDPH = (cena) => {
    // Vypočítat DPH (21% z ceny)
    let dph = cena * 0.21;
    // Přičíst DPH k původní ceně
    let cenaSDPH = cena + dph;
    // Vrátit výsledek
    return cenaSDPH;
  };
  
  // Vytvoření pole produkty včetně cen s DPH 
  let produktySCenami = produkty.map(function(produkt) {
    // Pro každý produkt vytvořit nový objekt
    let novyProdukt = {
      nazev: produkt.nazev,
      cenaBezDPH: produkt.cena,
      cenaSDPH: sDPH(produkt.cena)
    };
    
    // Vrátit nový objekt
    return novyProdukt;
  });
  
  // Vypsat produkty ve formátovaném tvaru
  for (let i = 0; i < produktySCenami.length; i++) {
    let produkt = produktySCenami[i];
    console.log("Produkt: " + produkt.nazev + ", Cena bez DPH: " + produkt.cenaBezDPH + " Kč, Cena s DPH: " + produkt.cenaSDPH + " Kč");
  }