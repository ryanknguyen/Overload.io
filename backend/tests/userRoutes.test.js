//import supertest
const request = require('supertest'); 
const app = require('../server');

//instantiate a User obj
const User = require('../models/user');
jest.mock('../models/user');

describe('User API routes', () => {

    it('should create a new user and return 201 status', async() => {
        User.create.mockResolvedValue({id: 1, name: 'User Test Name', email: 'userTest1@gmail.com'});
        const response = await request(app)
            .post('/api/user')
            .send({name: 'User Test Name', email: 'userTest1@gmail.com'});

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe('User Test Name');
            expect(response.body.email).toBe('userTest1@gmail.com');
    });

    it('should retrieve a user based off their id', async() => {
        User.findByPk.mockResolvedValue({id: 1, name: 'User Test Name', email: 'userTest1@gmail.com'});
        const response = await request(app).get('/api/user/1');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('User Test Name');
        expect(response.body.email).toBe('userTest1@gmail.com');
    });

    it('should notify the user that the id provided does not exist', async() =>{
        
        // create a null
        User.findByPk.mockResolvedValue(null);
        const response = await request(app).get('/api/user/1');

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', "User not found");
        
    });

    it('should notify the user that something wrong happened on the server side', async() =>{
        
        // create a promise to simulate a real failure
        User.findByPk.mockRejectedValue(new Error('Database error'));

        const response = await request(app).get('/api/user/1');

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Error retrieving user data. Something happened on our end :(');
    })
});
