import axios from 'axios';

const KEY = 'AIzaSyCEpE7g2lCyKxEHJYB7jLGNDAUakIKfsrY';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})