import express from 'express';
const router = express.Router();

router.get('/login', (req, res) =>{
    res.send("Login page");
})
router.get('/Signout', (req, res) =>{
    res.send("Signout bye bye");
})
router.get('/signup', (req, res) =>{
    res.send("Signup Here");
})

export default router;