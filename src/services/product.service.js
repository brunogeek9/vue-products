import axios from 'axios';
 
const PLURAL_URL = '/products';
 
export default {
  async getAll() {
    const res = await axios.get(PLURAL_URL);
    let products = res.docs;
    
    return products;
  }
 
//   get(id) {
//     return Axios.get(`${RESOURCE_NAME}/${id}`);
//   },
 
//   create(data) {
//     return Axios.post(RESOURCE_NAME, data);
//   },
 
//   update(id, data) {
//     return Axios.put(`${RESOURCE_NAME}/${id}`, data);
//   },
 
//   delete(id) {
//     return Axios.delete(`${RESOURCE_NAME}/${id}`);
//   }
};