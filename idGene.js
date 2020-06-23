async function getJwt(userName) {
  let jwturl = "http://35.200.205.107:1337/auth/local";
  let jwtconfig = {
    data: {
      "identifier": "gowtham",
      "password": "Gowthamr96"
    },
    method: 'post'
  };
  let apDetails = {
    "stateName": "",
    "stateCode": "",
    "branch": "",
    "employeeName": "",
    "branchId": ""
  };
  return axios(jwturl, jwtconfig)
    .then(async (jwtresponse) => {
      if (jwtresponse.data && jwtresponse.data.jwt) {
        let jwt = jwtresponse.data.jwt;
        let employeeDetails = await getEmployeeDetails(jwt, userName);
        console.log("EmployeeDetails:", employeeDetails);
        return employeeDetails;
      }
    })
    .catch((error) => {
      console.log("Error in calling strapi auth");
      console.log(error);
      return apDetails;
    });
}

async function getState(stateCode, jwt) {
  let stateUrl = 'http://35.200.205.107:1337/Statecodes';
  let stateConfig = {
    headers: {
      Authorization: "Bearer " + jwt
    }
  };
  let apDetails = {
    "stateName": "",
    "stateCode": ""
  };
  let stateResponse = await axios(stateUrl, stateConfig);
  if (stateResponse.status === 200 && stateResponse.data) {
    for (let iter = 0; iter < stateResponse.data.length; iter++) {
      if (stateCode === stateResponse.data[iter].state_code) {
        apDetails = {
          "stateName": stateResponse.data[iter].state_name,
          "stateCode": stateResponse.data[iter].state_code
        };
        break;
      }
    }
  } else {
    console.log("Error in stateCodes API");
  }
  return apDetails;
}

async function getApplicationNumber(stateCode) {
  let timeStamp = String(Math.floor(Date.now() / 1000)).substring(4, 11);
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let now = new Date().toDateString();
  let currentYear = now.match(/\d\d\d\d/g)[0].substring(2, 4);
  let currentDate = now.match(/\s\d\d/g)[0].replace(/\s/g, '');
  let currentMonth = now.match(/\s\w\w\w\s/g)[0].replace(/\s/g, '');
  for (let i = 0; i < months.length; i++) {
    if (currentMonth === months[i]) {
      if (String(i).length !== 1) {
        currentMonth = String(i);
      } else {
        currentMonth = "0" + String(i);
      }
    }
  }
  let collateralID = "C_" + stateCode + currentYear + currentMonth + timeStamp;
  let applicationNumber = stateCode + currentYear + currentMonth + timeStamp;
  let apIDs = {
    "applicationNumber": applicationNumber,
    "collateralID": collateralID
  }
  console.log("Application Number:", applicationNumber)
  return apIDs;
}