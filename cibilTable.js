import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
//import { func } from "prop-types";

const columns = [
  {
    title: "Personal Info",
    dataIndex: "perosnalInfo"
  },
  {
    title: "Value",
    dataIndex: "value"
  }
];
const data = [];
var cibilResponse = [
  {
    Equifax: {
      PersonalInfoDetails: {
        PersonalInfo: {
          Reference_Number: 50013,
          Bureauid: 1,
          BureauCategoryId: 1,
          FirstName: "YASHPAL MEHTA",
          DateOfBirth: "1966-09-12",
          Gender: 2,
          Occupation: "SALARIED",
          CreatedOn: "2018-09-21T14:26:00",
          Alias: "",
          Marital_status: "",
          Employment_status: "",
          Time_with_employer: "",
          NUMBER_OF_MAJOR_CREDIT_CARD_HE: "",
          AccountNo: "",
          EMailid: "",
          Fullname: "YASHPAL MEHTA",
          MatchSeq: 0,
          Seq: 0,
          CompleteName: "YASHPAL MEHTA",
          AdditionalNameDetails: ""
        }
      }
    },
    verifyID: {

    }
  }
];

var obj = {};
cibilResponse.forEach(function (element) {
  if (Object.keys(element).indexOf('Equifax') > -1) {
    obj.PersonalInfoDetails = element.Equifax.PersonalInfoDetails.PersonalInfo;
  }
});
console.log("object", obj);

Object.keys(obj.PersonalInfoDetails).forEach(function (rec, index) {
  let formObj = { perosnalInfo: "", value: "" };
  if (obj.PersonalInfoDetails[rec] !== "") {
    formObj.perosnalInfo = rec;
    formObj.value = obj.PersonalInfoDetails[rec];
    data.push(formObj);
  }
});
console.log("Data", data);

ReactDOM.render(
  <div>
    <h4>Middle size table</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>,
  document.getElementById("container")
);
