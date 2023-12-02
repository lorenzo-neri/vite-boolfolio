import axios from 'axios';
import { reactive } from 'vue';

export const state = reactive({
    base_url: 'http://127.0.0.1:8000',


    // CHIAMATA AXIOS QUANDO LA HOME E' MOUNTED
    getTypes() {
        axios.get(this.base_url + 'api/types')
            .then(response => {
                console.log('TYPES:', response);
                this.types = response.data.result;
            }).catch(err => {
                console.error(err);
            })
    },
})