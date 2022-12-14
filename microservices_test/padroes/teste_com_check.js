import http from 'k6/http';
import { check } from 'k6';

export const url = 'http://localhost:80';

export const options = {
    vus: 10,
    duration: '30s',
};

export default function(){
    const response = http.get(url);
    check(response,
        {
            'is status 200': (r) => r.status === 200,
            'body is not null': (r) => r.body.length > 0,
        }
    );
    
}