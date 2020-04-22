const questionsService = require('../services/question.service.server')

module.exports = function (app) {
    app.get("/api/quizzes/:qid/questions",(req, res) => res.json(
        questionsService.findQuestionsForQuiz(req.params['qid'])
    ))
}
