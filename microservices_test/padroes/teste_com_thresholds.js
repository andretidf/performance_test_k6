import http from 'k6/http';
import { thresholds } from 'k6';

export const url = 'http://localhost:80';

export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        http_req_failed: ['rate<0.01']
    }
};

export default function(){
    const response = http.get(url);
    
}