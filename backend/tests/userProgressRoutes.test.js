const request = require('supertest');
const app = require('../server');

const UserProgress = require('../models/userProgress');
jest.mock('../models/userProgress');

describe('userProgress API Routes', () => {
   
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    it('should return a series of JSON responses of ', async() =>{
        UserProgress.findAll.mockResolvedValue([
            {progressId: 1, userId: '1', exerciseId: '1', bodyWeight: 100.7, date: '2023-01-01'},
            {progressId:2, userId: '1', exerciseId: '1', bodyWeight: 105, date: '2023-01-02'}
        ]);

        const response = await request(app)
            .get('/api/userProgress/1/exercise/1')
            .query({startDate: '2023-01-01', endDate: '2023-01-02'});
        
            expect(response.status).toBe(200);
            expect(response.body).toEqual([
                {progressId: 1, userId: '1', exerciseId: '1', bodyWeight: 100.7, date: '2023-01-01'},
                {progressId: 2, userId: '1', exerciseId: '1', bodyWeight: 105, date: '2023-01-02'}
            ]);
    });

});

