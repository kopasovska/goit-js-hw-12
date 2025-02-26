import axios from 'axios';

const myApiKey = '48965067-3962fe69a0505f7cd9cc5ea86';

const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: myApiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    safeSearch: true,
    per_page: 40,
  },
});

export async function getImages(searchQuery, page) {
  const params = {
    q: encodeURIComponent(searchQuery),
    page: page,
  };

  const response = await axiosInstance.get('', { params });

  return response.data;
}
