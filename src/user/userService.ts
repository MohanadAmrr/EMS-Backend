var userModel = require("./userModel.ts");

module.exports.getDataFromDBService = () => {
  return new Promise(function checkURL(resolve, reject) {
    userModel.find({}, function returnData(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports.createUserDBService = (userDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var userModelData = new userModel();

    userModelData.name = userDetails.name;
    userModelData.group = userDetails.group;
    userModelData.email = userDetails.email;
    userModelData.attendence = userDetails.attendence;
    userModelData.password = userDetails.password;

    userModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports.updateUserDBService = (id, userDetails) => {
  console.log(userDetails);
  return new Promise(function myFn(resolve, reject) {
    userModel.findByIdAndUpdate(
      id,
      userDetails,
      function returnData(error, result) {
        if (error) {
          reject(false);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports.removeUserDBService = (id) => {
  return new Promise(function myFn(resolve, reject) {
    userModel.findByIdAndDelete(id, function returnData(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};
