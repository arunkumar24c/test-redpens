export default class LocalStorage {

    static LocalSetItem = async (setName, data) =>{
        const ConvertedData = JSON.stringify(data)
        window.localStorage.setItem(setName, ConvertedData);
        
    }

    static LocalGetItem =  (key) =>{
        const data =  localStorage.getItem(key);
        return JSON.parse(data)
    }

    

}