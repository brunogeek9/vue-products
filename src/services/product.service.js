import axios from 'axios';
 
const PLURAL_URL = '/products';
 
export default {
  async getAll() {
    // return this.http.get(PLURAL_URL);
    const res = await axios.get(PLURAL_URL);
    let products = res.data;
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