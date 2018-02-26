var Controller = require('../controllers');
const Joi = require('joi');
const validator = {
    topic : Joi.string().required()
};

module.exports = function(app){
    app.route('/deleteBlog').delete((req,res)=>{
        /////////finds that topic exists or not ///////////////////
        Controller.blogcontroller.findBlog(req.query.topic ,function(err, data){
            console.log(err,data);
            if (err){
                res.status(400).send({"Message":err});
                return;
            }
            /////////If topic not exists //////////////
            if(data == null ){
                res.status(401).send({"Message":"No Such Topic Exists"})
                return;
            }
            else{
         ///////////If Exists then deletes from DB//////////       
            Controller.blogcontroller.deleteBlog(req.query.topic.trim() ,function(err, data){
                console.log(err,data);
                if (err){
                    res.status(400).send({"Message":err});
                    return;
                }
                else{
            res.status(200).send({"Message":"Deleted Sucessfully","Data":data});
        }
             });
            }
            });
        })
    }