import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import axios from 'axios';

export const helloWorld = onRequest(async (request, response) => {
    try {
        // Specify the GBIF API endpoint for species
        const gbifSpeciesEndpoint = 'https://api.gbif.org/v1/species';

        // Make a GET request to the GBIF API
        const gbifResponse = await axios.get(gbifSpeciesEndpoint);

        // Extract and send the data in the response
        response.status(200).send(gbifResponse.data);
    } catch (error) {
        logger.error('Error fetching species data from GBIF:', error);
        response.status(500).send('Error fetching species data');
    }
});
