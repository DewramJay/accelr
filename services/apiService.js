// services/userService.js
import axios from "axios";

export const getUsers = async () => {
    try {
        
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      return response;
    } catch (error) {
        
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  

  export const getUserDetails = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
      return response.data[0];
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  };