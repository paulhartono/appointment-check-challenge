import 'dotenv/config';
import Appointment, { check } from './appointment';

console.info('----------------------------------------------------------------');
console.info('--                   Appointment Check Challenge              --');
console.info('----------------------------------------------------------------');
console.info('author: Paul Hartono');
console.info('email: paul.hartono@gmail.com');
console.info('');

if (!process.env.APPOINTMENT1_START || !process.env.APPOINTMENT1_DURATION)
  throw 'Appointment 1 not defined properly. Aborting...';
if (!process.env.APPOINTMENT2_START || !process.env.APPOINTMENT2_DURATION)
  throw 'Appointment 2 not defined properly. Aborting...';

const app1: Appointment = {
  start: new Date(process.env.APPOINTMENT1_START),
  duration: Number(process.env.APPOINTMENT1_DURATION),
};
const app2: Appointment = {
  start: new Date(process.env.APPOINTMENT2_START),
  duration: Number(process.env.APPOINTMENT2_DURATION),
};

console.log(`Appointmenet 1: ${JSON.stringify(app1)}`);

console.log(`Appointmenet 2: ${JSON.stringify(app2)}`);

const isConflicted = check(app1, app2);
console.log(`isConflicted = ${isConflicted}`);
