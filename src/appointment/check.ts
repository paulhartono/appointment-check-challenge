import Appointment from './appointment';

const check = (appointment1: Appointment, appointment2: Appointment): boolean => {
  const end1 = new Date(appointment1.start.getTime() + appointment1.duration * 60000);

  const end2 = new Date(appointment2.start.getTime() + appointment2.duration * 60000);

  // console.log(`start = ${appointment1.start} `);
  // console.log(`end = ${end1}`);

  return (
    (appointment1.start <= appointment2.start && end1 > appointment2.start) ||
    (appointment2.start <= appointment1.start && end2 > appointment1.start)
  );
};

export default check;
