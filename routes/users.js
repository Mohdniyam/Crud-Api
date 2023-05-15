import express from 'express';

const router = express.Router();

import { v4 as uuidv4 } from 'uuid';


let users  = [

]


router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
})

router.post('/', (req, res) => {
    const user = (req.body)
    const userID = uuidv4();
    // const userWithId = {...user, id:userID}
    users.push({...user, id:userID});

    res.send(`user with  the name ${user.FirstName} added to the Db.`)
})

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id ===id);
    res.send(foundUser);
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
      users = users.filter((user)=>{
       return user.id !== id;
   }
   )
    res.send(`user with the id ${id} deleted from the db`);
})

router.patch('/:id',(req, res)=>{
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find(user => user.id === id);
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    res.send(`user with the id ${id} has been updated`)
})


export default router;