var Service = require('../services')

const createBlog = function(data,callback){
    console.log(data, 'data+++++===========');
    Service.blogService.createNewBlog(data,function(err,newData){
        console.log(err,newData);
        if (err){
            if (err.code && err.code == 11000){
                return callback(err.message);
            }
            return callback(err);
        }
        else 
        {
          console.log("HERE=============+===============");
          return callback(null, newData);
        }
    })
 }

 const viewBlog =  function(callback){
     Service.blogService.viewBlog(function(err,newData){
         if (err) {
             if (err.code && err.code == 11000){
                 return callback(err.message);
             }
             return callback(err);
         } else
         {
             console.log ("++++viewBlog HERE++++");
             return callback(null,newData);
         }
     })
 }

 const findBlog =  function(data,callback){
    var criteria = {
        topic : data
    }
  Service.blogService.findBlog(criteria,{},{},function(err,newData){
        if(err){
            if (err.code && err.code == 11000){
                return callback(err.message);
            }
            return callback(err);
        } else
        {
            console.log ("++++findBlog HERE++++");
            return callback(null,newData);
        }
    })
}
 const updateBlog =  function(data,updatedata,callback){
    let criteria = {
        topic : data
    }
    let dataToSet = {
        topic : updatedata.topic,
        content : updatedata.content,
    }
 
  Service.blogService.updateBlog(criteria,dataToSet,{new:true},function(err,newData){
        if(err){
            if (err.code && err.code == 11000){
                return callback(err.message);
            }
            return callback(err);
        } else 
        {
            return callback(null,newData);
        }
    })
}



 const deleteBlog =  function(data,callback){
    let criteria = {
        topic : data
    }
  Service.blogService.deleteBlog(criteria, function(err,newData){
        if(err){
            if (err.code && err.code == 11000){
                return callback(err.message);
            }
            return callback(err);
        } else
        {
            return callback(null,newData);
        }
    })
}


/////we can view one particular blog passing 'topic' as queryparameter///////////// 
 const viewOneBlog = function(data,callback){
     let critiria = {
         topic : data
     }
     let pro = {_id:0,__v:0}
     let opt = {}
   Service.blogService.viewOneBlog(critiria, pro, opt , function(err,newData){
         if(err){
             if(err.code && err.code == 11000) {
                 return callback(err.message);
             }
             return callback(err);
         } else if (newData == null){
            return callback("No such topic exists")
        } else
         {  
            return callback(null, newData);
         }
     })
 }

module.exports = {
   createBlog: createBlog,
   viewBlog :viewBlog,
   viewOneBlog : viewOneBlog,
   deleteBlog : deleteBlog,
   updateBlog : updateBlog,
   findBlog : findBlog,


}