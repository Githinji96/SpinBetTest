import faker from 'faker';

Cypress.Commands.add('generateRandomUserData', () => {
  const firstName = faker.person.fullName();
  const email = faker.internet.email();
  const num=faker.phone.number();
  const password = faker.internet.password();
  return { firstName, lastName, email,num, password };
});
