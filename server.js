const express = require("express");
const app = express();
const port = 8000;
    
const { faker } = require('@faker-js/faker');

const createUser =()=>{
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany={
        _id:faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street:faker.address.streetAddress(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
    return newCompany
}
// console.log(newFakeUser)
// ================================
// good example and template for making a function with nodemon
// ================================
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);



// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    const createNewUser = createUser();
    console.log(createNewUser)
    res.json(createNewUser);
});

app.get("/api/companies/new", (req, res) => {
    const createNewCompany = createCompany();
    console.log(createNewCompany)
    res.json(createNewCompany)

});

app.get('/api/user/company', (req,res) => {
    const createNewUser = createUser();
    const createNewCompany = createCompany();
    const together = {createNewCompany , createNewUser};
    console.log(together)
    res.json(together)

})


app.listen( port, () => console.log(`Listening on port: ${port}`) );