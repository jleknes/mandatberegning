# Mandatberegning
Dette er et verktøy for å dynamisk følge med på et lokal- eller stortingsvalg. Beregning av mandater etter St. Lagues metode. Applikasjonen bruker API-ene til valg.no. https://valgresultat.no/api/

# Deployment
Google Cloud Build bygger et Docker image basert på `Dockerfile` med nginx som web server. 
Push til master deployes til Google App Engine.
