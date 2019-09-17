# Mandatberegning
Beregning av mandater etter st. lagues metode. Applikasjonen bruker API-ene til valg.no. https://valgresultat.no/api/

# Deployment
Google Cloud Build bygger et Docker image basert på `Dockerfile`. 
Push til master deployes til Google App Engine.
