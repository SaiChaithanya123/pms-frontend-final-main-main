import axios from 'axios';

const getPensionService = (newPensionObj) => {
    console.log(`getProcessPensionService`);
    return axios.get(`http://localhost:8082/PensionDetail/`,
    newPensionObj.name,newPensionObj.pan,newPensionObj.aadhar,newPensionObj.type);
}

export { getPensionService};