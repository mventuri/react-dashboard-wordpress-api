import axios from 'axios';

export default function fetchPlugin () {
    return axios.get('https://<BASE_URL>/wp-json/wp/v2/plugins', {
        auth: {
            username: process.env.REACT_APP_USERNAME,
            password: process.env.REACT_APP_CLIENT_SECRET
        }
    });
}
