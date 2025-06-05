const express = require('express');
const router = express.Router();



// Route to post question 
router.post("/postquestion", (req, res) => {
    res.send('Question posted')
});




// Route to get specific question
router.get('/getquestion',(req, res) => {
    
    res.send(`question get`);
});   




// Route to get all questions
router.get('/allquestion', (req, res) => {
    res.send('All questions');
});


// Example question route
router.get('/test', (req, res) => {
    res.send('Question route is working!');
});

module.exports = router;