var response = {
    "_declaration": {
        "_attributes": {
            "version": "1.0",
            "encoding": "UTF-8",
            "standalone": "yes"
        }
    },
    "Response": {
        "CreditCardExpiryDate": {},
        "CreditCardNo": {},
        "CreditCardStatus": {},
        "CustAddress1": {
            "_text": "Bangalore"
        },
        "CustAddress2": {},
        "CustAddress3": {},
        "CustCity": {
            "_text": "Bangalore"
        },
        "CustCountry": {
            "_text": "IN"
        },
        "CustDateOfBirth": {
            "_text": "03-08-1979"
        },
        "CustEmail": {},
        "CustFullName": {
            "_text": "MALPANI DESI"
        },
        "CustMobileNumber": {},
        "CustPermanantAddress1": {
            "_text": "Bangalore"
        },
        "CustPermanantAddress2": {},
        "CustPermanantAddress3": {},
        "CustPermanantCity": {
            "_text": "Bangalore"
        },
        "CustPermanantCountry": {
            "_text": "IN"
        },
        "CustPermanantState": {
            "_text": "KA"
        },
        "CustPermanantZip": {
            "_text": "560066"
        },
        "CustPhone": {},
        "CustSex": {
            "_text": "M"
        },
        "CustState": {
            "_text": "KA"
        },
        "CustZip": {
            "_text": "560066"
        },
        "CustomerAccountDetailsInquiryResponse": {
            "ErrorCode": {
                "_text": "0"
            },
            "ExtendedReply": {
                "MessagesArray": {}
            },
            "ExternalReferenceNo": {
                "_text": "30265678965"
            },
            "IsOverriden": {
                "_text": "false"
            },
            "IsServiceChargeApplied": {
                "_text": "false"
            },
            "Memo": {},
            "ReplyCode": {
                "_text": "0"
            },
            "ReplyText": {},
            "SpReturnValue": {
                "_text": "0"
            }
        },
        "CustomerType": {
            "_text": "0"
        },
        "CASA_AccountList": {
            "ChAccount": [
                {
                    "AccountHolderName": {
                        "_text": "Malpani DesI"
                    },
                    "AccountNumber": {
                        "_text": "50180000046728"
                    },
                    "AccountRelation": {
                        "_text": "Single"
                    },
                    "AccountType": {
                        "_text": "SAV"
                    },
                    "AvailableBalance": {
                        "_text": "1026909.00"
                    },
                    "BranchName": {
                        "_text": "Kalathode"
                    },
                    "CurrentBalance": {
                        "_text": "1026909.00"
                    },
                    "CustomerId": {
                        "_text": "180000005040"
                    },
                    "NetBankingFlag": {
                        "_text": "Y"
                    },
                    "ProductCode": {
                        "_text": "504"
                    },
                    "ProductName": {
                        "_text": "SB Regular"
                    },
                    "ProductType": {
                        "_text": "CH"
                    }
                },
                {
                    "AccountHolderName": {
                        "_text": "1102 180000005040"
                    },
                    "AccountNumber": {
                        "_text": "50180000053335"
                    },
                    "AccountRelation": {
                        "_text": "Single"
                    },
                    "AccountType": {
                        "_text": "SAV"
                    },
                    "AvailableBalance": {
                        "_text": "1026909.00"
                    },
                    "BranchName": {
                        "_text": "Kalathode"
                    },
                    "CurrentBalance": {
                        "_text": "1026909.00"
                    },
                    "CustomerId": {
                        "_text": "180000005040"
                    },
                    "NetBankingFlag": {
                        "_text": "Y"
                    },
                    "ProductCode": {
                        "_text": "504"
                    },
                    "ProductName": {
                        "_text": "SB Regular"
                    },
                    "ProductType": {
                        "_text": "CH"
                    }
                }
            ]
        }
    }
}

let accountDetails = response.Response.CASA_AccountList;
let account = [];
accountDetails.ChAccount.forEach((chAccount) => {
    if (chAccount.ProductCode._text === '504') {
        account.push(chAccount.AccountNumber._text);
    }
})
