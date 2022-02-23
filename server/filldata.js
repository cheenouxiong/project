const faker = require('faker');

const database = {
  product: []
};

for (let i = 1; i <= 150; i++) {
  database.product.push({
   
    id: i,
    name: faker.name.findName(),
    jobtype: faker.name.jobTitle(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    imageUrl: faker.image.avatar()
  });
}

console.log(JSON.stringify(database));