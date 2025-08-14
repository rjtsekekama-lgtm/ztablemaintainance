sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ztablemaintainance.controller.View1", {
        onInit() {
              // 1. Create mock data
     var aMockData = [
        {
            CTRT_NO: "C001",
            EMP_ID: "E101",
            EMP_NAME: "John Doe",
            EMP_EMAILID: "john.doe@example.com",
            COUNTRY: "USA",
            DOB: "01/01/1990",
            AGE: "35",
            PAYGRADE: "PG5"
        },
        {
            CTRT_NO: "C002",
            EMP_ID: "E102",
            EMP_NAME: "Jane Smith",
            EMP_EMAILID: "jane.smith@example.com",
            COUNTRY: "India",
            DOB: "15/05/1988",
            AGE: "37",
            PAYGRADE: "PG4"
        }
    ];
 // Create JSON model
    var oModel = new sap.ui.model.json.JSONModel({
        EmpContractDetails: aMockData
    });

    // Set model to the view
    this.getView().setModel(oModel, "AvailableRecordsModel");
      
        }
    });
});