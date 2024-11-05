const request = require('supertest');
const app = require('../server');

const Workout = require('../models/workout');
jest.mock('../models/workout');

describe('workout API routes', () => {
    it('should create a new singular workout entry', async() =>{
        Workout.create.mockResolvedValue({workoutId: 1, userId: 1, date: '2024-11-5'});
        const response = await request(app)
            .post('/api/workout')
            .send({userId: 1, date: '2024-11-5'})

            expect(response.status).toBe(201);
            expect(response.body.workoutId).toBe(1);
            expect(response.body.userId).toBe(1);
            expect(response.body.date).toBe('2024-11-5');
    });

    it('should delete a whole workout entry given', async() =>{
        Workout.destroy.mockResolvedValue(1);
        const response = await request(app)
            .delete('/api/workout/1');

        expect(response.status).toBe(200);
    })
})