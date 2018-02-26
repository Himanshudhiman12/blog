var Controller = require('../controllers');
const Joi = require('joi');
const validator = {
    topic : Joi.string().required()
};

module.exports = function(app){
    app.route('/viewOneBlog').get(function (req,res){
            Controller.blogcontroller.viewOneBlog(req.query.topic ,function(err, data){
                console.log(err,data)
                if (err){
                    res.status(400).send({"Message":err})
                    return;
                }
                else{
            res.status(200).send(data)
        }
             });
            });
        }
    