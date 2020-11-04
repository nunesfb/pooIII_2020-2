import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

const { RateLimiterMemory } = require('rate-limiter-flexible');

const opts = {
  points: 5, // 5 points
  duration: 1, // Per second
  blockDuration: 100, // block for 5 minutes if more than points consumed 
};

const rateLimiter = new RateLimiterMemory(opts);

export default async function rateLimiterMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {

  await rateLimiter.consume(request.connection.remoteAddress)
    .then(() => {
      next();
    })
    .catch(() => {
      throw new AppError('Opa, cuidado! Muita calma nesta hora, você está realizando muitas requisições :O, não queremos que nosso sistema fique fora do ar :)', 429);
    });
}
