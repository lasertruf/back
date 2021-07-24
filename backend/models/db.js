const mongoose = require('mongoose');

const dburl = "mongodb://socialapp-dbcosmos:0HrV33P50BhpfkWXV1bP51Rjk8FZucxD56ne6y0pqtSefxBpv3PdYRlJGpSYdCwElXicxARNuLm0wvSVQx1EPQ%3D%3D@socialapp-dbcosmos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@socialapp-dbcosmos@";
mongoose.connect(dburl, (err)=> {
    if(!err){
        console.log("Successful Connection");
    }
    else{
        console.log("Failed to Connect");

    }
});


module.exports = mongoose; 