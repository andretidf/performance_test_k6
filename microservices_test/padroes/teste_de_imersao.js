import http from 'k6/http';
import { thresholds, check, sleep } from 'k6';

export const url = 'http://localhost:80';

export const options = {
    stages:[
        {duration: '2m', target: 14}, //ramp-up
        {duration: '10m', target: 14}, //manutenção
        {duration: '2m', target: 0}, //ramp-down
    ]
};

export default function(){
    http.get(url);
    sleep(1);
    
}