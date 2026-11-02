const express = require('express');
const request = require('supertest');

const mockService = {
  getAvailableAchievements: jest.fn(),
  getUserAchievements: jest.fn(),
};

jest.mock('../../src/services/gamificationService', () => jest.fn(() => mockService));

const { initializeGamificationAPI } = require('../../src/routes/gamification');

describe('gamification achievement routes', () => {
  const app = express();
  app.use('/api/v1/gamification', initializeGamificationAPI({}));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('serves the available achievements list instead of treating "available" as a username', async () => {
    mockService.getAvailableAchievements.mockResolvedValue([{ achievementName: 'First Cleanup' }]);

    const res = await request(app).get('/api/v1/gamification/achievements/available?category=cleanup');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      success: true,
      achievements: [{ achievementName: 'First Cleanup' }],
    });
    expect(mockService.getAvailableAchievements).toHaveBeenCalledWith('cleanup');
    expect(mockService.getUserAchievements).not.toHaveBeenCalled();
  });

  it('still requires authentication for a user achievements list', async () => {
    const res = await request(app).get('/api/v1/gamification/achievements/someone');

    expect(res.statusCode).toBe(401);
    expect(mockService.getUserAchievements).not.toHaveBeenCalled();
  });
});
