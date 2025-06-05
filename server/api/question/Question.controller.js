function postquestion(req, res) {
    // Logic to handle posting a question
    res.send('Question posted ');
    
}

function getquestion(req, res) {
 res.send('question get');   
}


function allquestion(req, res) {
    // Logic to handle getting all questions
    res.send('All questions ');
    
}

module.exports = { postquestion, getquestion, allquestion };

