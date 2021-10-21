import { Request, Response } from 'express';

export const Search = ( req: Request, res: Response ) => {
  res.render('home');
}