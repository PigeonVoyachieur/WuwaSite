const API_WUWA = "https://api.resonance.rest";

async function fetchFromAPI(endpoint) {
    try {
        const response = await fetch(`${API_WUWA}/${endpoint}`);
        if (!response.ok) {
            console.error(`Une erreur avec l'API est survenue: ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        console.log(`Données reçues de ${endpoint}:`, data);
        return data;
    } catch (error) {
        console.error("Erreur lors de la requête", error);
        return [];
    }
}

async function fewCharacters() {
    const response = await fetchFromAPI("characters");

    const characters = response.characters;
    if (!Array.isArray(characters) || characters.length === 0) {
        console.error("Aucun personnage trouvé !");
        return;
    }

    const fewCharacters = characters.slice(-4);

    const showCharacters = document.getElementById("few-characters");
    if (showCharacters) {
        showCharacters.innerHTML = fewCharacters.map(character => `
            <div class="card">
                <img src="https://api.resonance.rest/characters/${character}/icon" alt="${character}">
                <div class="details">
                    <h3>${character}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

async function allCharacters() {
    const response = await fetchFromAPI("characters");

    const characters = response.characters;
    if (!Array.isArray(characters) || characters.length === 0) {
        console.error("Aucun personnage trouvé !");
        return;
    }

    const allCharacters = characters;

    const showAllCharacters = document.getElementById("character-list");
    if (showAllCharacters) {
        showAllCharacters.innerHTML = allCharacters.map(character => `
            <div class="card">
                <img src="https://api.resonance.rest/characters/${character}/icon" alt="${character}">
                <div class="details">
                    <h3>${character}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

async function fewWeapons() {
    const response = await fetchFromAPI("weapons");

    const weaponTypes = response.types;
    if (!Array.isArray(weaponTypes) || weaponTypes.length === 0) {
        console.error("Aucune arme trouvée !");
        return;
    }

    const fewWeaponTypes = weaponTypes.slice(-4);

    const showWeapons = document.getElementById("few-weapons");
    if (showWeapons) {
        showWeapons.innerHTML = fewWeaponTypes.map(weaponType => `
            <div class="card">
                <img src="https://api.resonance.rest/weapons/${weaponType}/icon" alt="${weaponType}">
                <div class="details">
                    <h3>${weaponType}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

async function allWeapons() {
    const response = await fetchFromAPI("weapons");

    const weaponTypes = response.types;
    if (!Array.isArray(weaponTypes) || weaponTypes.length === 0) {
        console.error("Aucune arme trouvée !");
        return;
    }

    const allWeaponTypes = weaponTypes;

    const showWeapons = document.getElementById("weapon-list");
    if (showWeapons) {
        showWeapons.innerHTML = allWeaponTypes.map(weaponType => `
            <div class="card">
                <img src="https://api.resonance.rest/weapons/${weaponType}/icon" alt="${weaponType}">
                <div class="details">
                    <h3>${weaponType}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

async function fewEchoesSonatas() {
    const response = await fetchFromAPI("echoes/sonatas");

    const sonatas = response.sonatas;
    if (!Array.isArray(sonatas) || sonatas.length === 0) {
        console.error("Aucun effet sonata trouvé !");
        return;
    }

    const fewEchoesSonatas = sonatas.slice(-4);

    const showSonatas = document.getElementById("few-sonata");
    if (showSonatas) {
        showSonatas.innerHTML = fewEchoesSonatas.map(sonata => `
            <div class="card">
                <img src="https://api.resonance.rest/echoes/sonatas/${sonata}/icon" alt="${sonata}">
                <div class="details">
                    <h3>${sonata}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

async function allEchoesSonata() {
    const response = await fetchFromAPI("echoes/sonatas");

    const sonatas = response.sonatas;
    if (!Array.isArray(sonatas) || sonatas.length === 0) {
        console.error("Aucun effet sonata trouvé !");
        return;
    }

    const allEchoesSonatas = sonatas;

    const showSonatas = document.getElementById("sonata-list");
    if (showSonatas) {
        showSonatas.innerHTML = allEchoesSonatas.map(sonata => `
            <div class="card">
                <img src="https://api.resonance.rest/echoes/sonatas/${sonata}/icon" alt="${sonata}">
                <div class="details">
                    <h3>${sonata}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

async function allEchoes() {
    const response = await fetchFromAPI("echoes");

    const echoes = response.echoes;
    if (!Array.isArray(echoes) || echoes.length === 0) {
        console.error("Aucun echo trouvé !");
        return;
    }

    const allEchoes = echoes;

    const showEchoes = document.getElementById("echo-list");
    if (showEchoes) {
        showEchoes.innerHTML = allEchoes.map(echo => `
            <div class="card">
                <img src="https://api.resonance.rest/echoes/${echo}/icon" alt="${echo}">
                <div class="details">
                    <h3>${echo}</h3>
                    <p></p>
                </div>
            </div>
        `).join('');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("few-characters")) fewCharacters();
    if (document.getElementById("character-list")) allCharacters();
    if (document.getElementById("few-weapons")) fewWeapons();
    if (document.getElementById("weapon-list")) allWeapons();
    if (document.getElementById("few-sonata")) fewEchoesSonatas();
    if (document.getElementById("sonata-list")) allEchoesSonata();
    if (document.getElementById("echo-list")) allEchoes();
});
