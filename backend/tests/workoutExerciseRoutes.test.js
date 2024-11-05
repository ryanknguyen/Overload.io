const request = require('supertest');
const app = require('../server');

const WorkoutExercise = require('../models/workoutExercise');
jest.mock('../models/workoutExercise');

describe('WorkoutExercise API routes', () => {
    it('should create a new workoutExercise entry', async() => {
        WorkoutExercise.create.mockResolvedValue({sets: 3, reps: 9, heartRate: 145, RPE: 10});
        const response = await request(app)
            .post('/api/workoutExercise')
            .send({sets: 3, reps: 9, heartRate: 145, RPE: 10});

        expect(response.status).toBe(201);
        expect(response.body.sets).toBe(3);
        expect(response.body.reps).toBe(9);
        expect(response.body.heartRate).toBe(145);
        expect(response.body.RPE).toBe(10);
        
    });

    it('should delete a specific workoutExercise entry given the workoutExerciseId and the exerciseId', async() =>{
        WorkoutExercise.destroy.mockResolvedValue(1);
        const response = await request(app)
            .delete('/api/workoutExercise/1/1');
        
            expect(response.status).toBe(200);
    });
})