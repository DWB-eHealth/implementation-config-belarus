
Bahmni.ConceptSet.FormConditions.rulesOverride  = {

    'Baseline, Treatment for drug-susceptible TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-susceptible TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-susceptible TB treatments","Baseline, What is the outcome of the last DSTB treatment")
        } else {
            conditions.disable.push("Baseline, How many drug-susceptible TB treatments","Baseline, What is the outcome of the last DSTB treatment")
        }
        return conditions;
    },
'Baseline, Treatment for drug-resistant TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-resistant TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-resistant TB treatments","Baseline, What is the outcome of the last DRTB treatment" )
        } else {
            conditions.disable.push("Baseline, How many drug-resistant TB treatments","Baseline, What is the outcome of the last DRTB treatment")
        }
        return conditions;
    },
    'Bacteriology, Xpert MTB result': function (formName, formFieldValues) {
        var rifconceptToEnable = "Bacteriology, RIF resistance result type"
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Bacteriology, Xpert MTB result'];
        if (conditionConcept == "Detected") {
            conditions.enable.push(rifconceptToEnable)
        } else {
            conditions.disable.push(rifconceptToEnable)
        }
        return conditions;
    },
    'Bacteriology, Culture results': null,
    'TI, Did the patient start treatment':  function (formName, formFieldValues) {
       var enStartDate = "TUBERCULOSIS DRUG TREATMENT START DATE";
       var enReason = "TI, Reason for not starting treatment";
       var txFacility = "TI, Treatment facility at start";
        var conditionConcept = formFieldValues['TI, Did the patient start treatment'];
       if (conditionConcept == false) {
           return {enable: [enReason], disable: [enStartDate, txFacility]}
       } else if (conditionConcept == true) {
           return {enable: [enStartDate, txFacility], disable: [enReason]}
       }
       else {
           return {disable: [enStartDate, txFacility, enReason]}
       }
   },
    'TI, Type of treatment regimen': null,
    'Baseline, Start date of past TB treatment': null,
 '6m PTO No Change Reason Failed Tx Started New Tx': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['6m PTO No Change Reason Failed Tx Started New Tx'];
        var conceptToEnable = "6m PTO, If Failed New Tx Number";
        if (conditionConcept) {
            conditions.enable.push(conceptToEnable)
        } else {
            conditions.disable.push(conceptToEnable)
        }
        return conditions;lcoa
    },
    '6m PTO, 6 month post treatment outcome': function causeOfDeathLogics(formName, formFieldValues) {
        var conceptToEnable = ["6m PTO No Change Reason Cured No Relapse", "6m PTO No Change Reason Failed Tx not died", "6m PTO No Change Reason Failed Tx Started New Tx"];
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['6m PTO, 6 month post treatment outcome'];
        if (conditionConcept == "No change in outcome since end of treatment") {
            conditions.enable = conceptToEnable
        } else {
            conditions.disable = conceptToEnable
        }
        return conditions;
    }
};
