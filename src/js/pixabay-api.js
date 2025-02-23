import axios from 'axios';

const myApiKey = '48965067-3962fe69a0505f7cd9cc5ea86';

const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: myApiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    safeSearch: true,
  },
});

export function getImages(searchQuery) {
  const params = {
    q: encodeURIComponent(searchQuery),
  };

  return axiosInstance.get('', { params }).then(response => response.data.hits);
}
