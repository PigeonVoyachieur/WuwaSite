# WuwaSite
WebSite for the gacha game named Wuthering Waves


Les fichiers html et css viennent d'un autre projet et ont été modifié pour se nouveau projet.

Certaines chose se sont pas présentent comme la page TierList ainsi qui les photos des différents éléments(armes, echoes, etc...)

Concernant le Javascript:
	*facilités:
		- Les fonctions pour récupérer les données dans l'API sont quasiment les mêmes sauf petits changement comme les noms de variables et les chemins pour les données dans l'API
		- certaines parties des fonctions ont été repris d'ancien code d'exercice comme içi et ont juste eu quelque changement:
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
    			 };

	*difficultés:
		-showCharacters.innerHTML = fewCharacters.map(character => `
            		<div class="card">
                		<img src="https://api.resonance.rest/characters/${character}/icon" alt="${character}">
                		<div class="details">
                    			<h3>${character}</h3>
                    			<p></p>
                		</div>
            		</div>

		  Résolue grâce à: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
					et
				 https://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-event-list


		-if (!Array.isArray(characters) || characters.length === 0) {
        	     console.error("Aucun personnage trouvé !");
        	     return;
    		 }

		Résolue grâce à: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
					et
				 ChatGPT
