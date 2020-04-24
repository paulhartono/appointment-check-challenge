import Appointment, { check } from '../appointment';

describe('Check', () => {
  describe('Conflicted Appointment Scenario. All must return true', () => {
    test('Appointment 1 end time has overlap with start of Appointment 2', () => {
      const app1: Appointment = { start: new Date('2020-04-26 11:00:00'), duration: 60 };
      const app2: Appointment = { start: new Date('2020-04-26 11:30:00'), duration: 30 };

      const availability: boolean = check(app1, app2);

      expect(availability).toEqual(true);
    });

    test('Appointment 1 start time has overlap with end of Appointment 2', () => {
      const app1: Appointment = { start: new Date('2020-04-26 11:30:00'), duration: 30 };
      const app2: Appointment = { start: new Date('2020-04-26 11:00:00'), duration: 60 };

      const availability: boolean = check(app1, app2);

      expect(availability).toEqual(true);
    });

    test('Appointment 1 start time = Appointment 2 start time', () => {
      const app1: Appointment = { start: new Date('2020-04-26 11:00:00'), duration: 60 };
      const app2: Appointment = { start: new Date('2020-04-26 11:00:00'), duration: 30 };

      const availability: boolean = check(app1, app2);

      expect(availability).toEqual(true);
    });
  });

  describe('Non-Conflicted Appointment Scenario. All must return false', () => {
    test('one after the other appointments. Appointment 1 starts first', () => {
      const app1: Appointment = { start: new Date('2020-04-26 11:00:00'), duration: 60 };
      const app2: Appointment = { start: new Date('2020-04-25 12:00:00'), duration: 30 };

      const availability: boolean = check(app1, app2);

      expect(availability).toEqual(false);
    });

    test('one after the other appointments. Appointment 2 starts first', () => {
      const app1: Appointment = { start: new Date('2020-04-26 12:00:00'), duration: 30 };
      const app2: Appointment = { start: new Date('2020-04-25 11:00:00'), duration: 60 };

      const availability: boolean = check(app1, app2);

      expect(availability).toEqual(false);
    });

    test('appointments NOT one after the other', () => {
      const app1: Appointment = { start: new Date('2020-04-26 11:00:00'), duration: 60 };
      const app2: Appointment = { start: new Date('2020-04-25 15:00:00'), duration: 30 };

      const availability: boolean = check(app1, app2);

      expect(availability).toEqual(false);
    });
  });
});
