const request = require('supertest');
const app = require('../server');

const Exercise = require('../models/exercise');
jest.mock('../models/exercise');

describe('exercise API tests', () =>{
    beforeEach(() => jest.clearAllMocks());
    
    it('should add a new exercise with an exerciseId and a name', async() =>{
        Exercise.create.mockResolvedValue({exerciseId: 1, exerciseName: 'high-to-low lat row' });
        const response = await request(app)
            .post('/api/exercise')
            .send({exerciseName: 'high-to-low lat row'})

            expect(response.status).toBe(201);
            expect(response.body.exerciseName).toBe('high-to-low lat row');
            expect(response.body).toHaveProperty('exerciseId');
    })

    it('should delete an exercise', async() => {
        Exercise.destroy.mockResolvedValue(1);
        
        const response = await request(app)
            .delete('/api/exercise/1');
        
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Exercise was successfully deleted');
    });
});

