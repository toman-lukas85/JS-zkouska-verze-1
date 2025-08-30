// Kontrola délek hesla
document.addEventListener('DOMContentLoaded', function() {
    // vyhledání elementu na stránce
    var hesloInput = document.getElementById('password');
    var textovyVystup = document.getElementById('text');

    // Kontrola hesla při zadávání
    hesloInput.addEventListener('input', function() {
        // Uložení zapsané hodnoty pro kontrolu
        var aktualniHeslo = hesloInput.value;
        
        // Vypočet delky hesla
        var delkaHesla = aktualniHeslo.length;
        
        // Kontrola, zda je heslo v požadované délce
        if (delkaHesla >= 8) {
            // Pokud je heslo dostatečně dlouhé, vypsat zeleně
            textovyVystup.textContent = "Heslo je dostatečně dlouhé";
            textovyVystup.style.color = "green";
        } else {
            // Pokud heslo není dostatečně dlouhé, vypsat to červeně
            textovyVystup.textContent = "Heslo není dostatečně dlouhé";
            textovyVystup.style.color = "red";
        }
    });
});