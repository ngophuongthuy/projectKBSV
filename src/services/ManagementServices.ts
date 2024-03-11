import axios from 'axios';

const fetchTableData = async () => {
  try {
    const res = await axios.get('https://64f7dd31824680fd217ee404.mockapi.io/api/Management');
    return res.data;
  } catch (error) {
    throw new Error('Error fetching table data');
  }
};

const ManagementServices = {
  fetchTableData,
};

export default ManagementServices;
