const quizzes = require('./quizzes')

findAllQuizzes = () => quizzes

findQuizById = (qid) => quizzes.find(quiz => quiz._id === qid)


module.exports = {
    findAllQuizzes,
    findQuizById
}
