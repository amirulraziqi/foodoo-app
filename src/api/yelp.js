// We can use axios DIRECTLY to make a network request.
// Alternatively, we can make an instance of it that has pre-set options assigned

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        // to Authorize with Yelp API
        Authorization: 'Bearer nBi09Kmjbx8rb4HU1wGv6dbdS8_aJINFJkYA8EEOabPrN8dYHxe7DTczPk-S028acEReDXXfmXFeG8y_h1RrnX_fqx0_7QGffuDphhW3UKtmK7IFMhzK1WH3rNTcX3Yx'
    }
});

