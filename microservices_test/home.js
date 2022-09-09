import http from 'k6/http';

export const url = 'http://localhost:80';

export const options = {
    vus: 2,
    duration: '30s',
};

export default function(){
    http.get(url);
}