import http from 'k6/http';
import { thresholds, check, sleep } from 'k6';

export const url = 'http://localhost:80';

export const options = {
    stages:[
        {duration: '10s', target: 3}, //ramp-up - Abaixo da carga normal
        {duration: '1m', target: 3},
        {duration: '10s', target: 14}, //pico para 14 usuários simultaneos
        {duration: '3m', target: 14},
        {duration: '10s', target: 3}, //ramp-down
        {duration: '3m', target: 3},
        {duration: '10m', target: 0}, //ramp-down - Estagio de recuperação
    ]
};

export default function(){
    http.get(url);
    sleep(1);
    
}