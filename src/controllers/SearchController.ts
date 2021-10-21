import { Request, Response } from 'express';
import { Pet } from '../models/Pet';

export const Search = ( req: Request, res: Response ) => {
  let q = req.query.q as string;
  let list = Pet.getFromName(q);
  res.render('pages/page', { list, q });
}