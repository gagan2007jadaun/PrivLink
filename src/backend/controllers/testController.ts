import { Request, Response } from 'express';
import { getMessage } from '../services/testService';

export const getTestMessage = (req: Request, res: Response) => {
    const data = getMessage();
    res.status(200).json(data);
};
