import http from 'k6/http';
import { thresholds, check } from 'k6';

export const url = 'http://localhost:80';

export const options = {
    vus: 1,
    duration: '5m',
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        checks: ['rate>0.9']
    }
};

export default function(){
    const response = http.get(url);
    check(response,
        {
            'is status 200': (r) => r.status === 200,
        }
    );
    
}