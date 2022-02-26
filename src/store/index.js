import { reactive, readonly } from "vue";
import axios from 'axios'


// localStorage.messages = JSON.stringify([])
const app = {
    // dev: process.env.VUE_APP_DEBUG,
    // dev: false,
    dev: true,
    apiKey: "AmaneHosanna",
};

const state = reactive({
    
});


const appLog = function(...args){
    if(app.dev){
        console.log(...args);
    }
}



// fetch api messages
if (localStorage.messages) {
    try {
        appLog(">> ''", localStorage.messages);
        messages = JSON.parse(localStorage.messages);
        appLog(">> []", messages);
    } catch (e) {
        messages = [];
        appLog(">> error fetching JSON messages");
    }
}


appLog(">>> messages", messages);
const getters = readonly({
    
});

const methods = {
    
};

export default {
    app: readonly(app),
    appLog,
    state,
    getters,
    methods,
};
