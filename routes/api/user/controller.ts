import { Request, Response } from 'express';
import { User } from '../../../models/user';


/*
GET /api/user/list
*/

export const list = (_: Request, res: Response) => {
    User.find({}, '-password -__v')
        .then(users => res.json({
            message: 'success',
            users 
        }))
        .catch((error: Error) => {
            res.status(404).json({
                message: error.message
            })
        })
}

/*
GET /api/user/:email
*/

export const find = (req: Request, res: Response) => {
    User.findById(req.params.id, '-password -__v')
        .then(user => res.json({
            message: 'success',
            user
        }))
        .catch((error: Error) => {
            res.status(404).json({
                message: error.message
            })
        })
}
