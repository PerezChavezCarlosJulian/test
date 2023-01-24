let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\n  \"filters\": [\n    {\n      \"value\": \"\",\n      \"operator\": \"equals\",\n      \"options\": [\n        {\n                    \"label\": \"Less Than\",\n                    \"value\": \"lessThan\"\n                },\n                {\n                    \"label\": \"Greater Than\",\n                    \"value\": \"greaterThan\"\n                },\n                {\n                    \"label\": \"Less Than or Equal\",\n                    \"value\": \"lessThanOrEqualTo\"\n                },\n                {\n                    \"label\": \"Greater Than or Equal\",\n                    \"value\": \"greaterThanOrEqualTo\"\n                },\n                {\n                    \"label\": \"Equals\",\n                    \"value\": \"equals\"\n                },\n                {\n                    \"label\": \"Does not Equal\",\n                    \"value\": \"doesNotequal\"\n                }\n      ],\n      \"index\": 1,\n      \"pickListValues\": [\n      ],\n      \"type\": \"currency\",\n      \"fieldName\": \"vlocity_cmt__RecurringCharge__c\",\n      \"fieldAPIName\": \"vlocity_cmt__RecurringCharge__c\",\n      \"fieldLabel\": \"Recurring Charge\",\n      \"objectName\": \"Asset\",\n      \"objectAPIName\": \"Asset\",\n      \"displaySequence\": 1\n    },\n    {\n      \"value\": \"\",\n      \"operator\": \"equals\",\n      \"options\": [\n        {\n                    \"label\": \"Less Than\",\n                    \"value\": \"lessThan\"\n                },\n                {\n                    \"label\": \"Greater Than\",\n                    \"value\": \"greaterThan\"\n                },\n                {\n                    \"label\": \"Less Than or Equal\",\n                    \"value\": \"lessThanOrEqualTo\"\n                },\n                {\n                    \"label\": \"Greater Than or Equal\",\n                    \"value\": \"greaterThanOrEqualTo\"\n                },\n                {\n                    \"label\": \"Equals\",\n                    \"value\": \"equals\"\n                },\n                {\n                    \"label\": \"Does not Equal\",\n                    \"value\": \"doesNotequal\"\n                }\n      ],\n      \"index\": 2,\n      \"pickListValues\": [\n      ],\n      \"type\": \"currency\",\n      \"fieldName\": \"vlocity_cmt__OneTimeTotal__c\",\n      \"fieldAPIName\": \"vlocity_cmt__OneTimeTotal__c\",\n      \"fieldLabel\": \"One Time Total\",\n      \"objectName\": \"Asset\",\n      \"objectAPIName\": \"Asset\",\n      \"displaySequence\": 2\n    },\n    {\n      \"value\": \"\",\n      \"operator\": \"contains\",\n      \"options\": [\n        {\n                    \"label\": \"Contains\",\n                    \"value\": \"contains\"\n                },\n                {\n                    \"label\": \"Does not Contain\",\n                    \"value\": \"doesNotContain\"\n                },\n                {\n                    \"label\": \"Starts With\",\n                    \"value\": \"startsWith\"\n                },\n                {\n                    \"label\": \"Ends with\",\n                    \"value\": \"endsWith\"\n                },\n                {\n                    \"label\": \"Equals\",\n                    \"value\": \"equals\"\n                },\n                {\n                    \"label\": \"Does not Equal\",\n                    \"value\": \"doesNotequal\"\n                }\n      ],\n      \"index\": 3,\n      \"pickListValues\": [\n      ],\n      \"type\": \"string\",\n      \"fieldName\": \"Name\",\n      \"fieldAPIName\": \"Name\",\n      \"fieldLabel\": \"Asset Name\",\n      \"objectName\": \"Asset\",\n      \"objectAPIName\": \"Asset\",\n      \"displaySequence\": 0\n    }\n  ],\n  \"fields\": [\n    {\n      \"pickListValues\": [\n      ],\n      \"value\": \"vlocity_cmt__RecurringCharge__c\",\n      \"label\": \"Recurring Charge\",\n      \"type\": \"currency\"\n    },\n    {\n      \"pickListValues\": [\n      ],\n      \"value\": \"vlocity_cmt__OneTimeTotal__c\",\n      \"label\": \"One Time Total\",\n      \"type\": \"currency\"\n    },\n    {\n      \"pickListValues\": [\n      ],\n      \"value\": \"Name\",\n      \"label\": \"Asset Name\",\n      \"type\": \"string\"\n    },\n    {\n      \"pickListValues\": [\n      ],\n      \"value\": \"IsDeleted\",\n      \"label\": \"Deleted\",\n      \"type\": \"boolean\"\n    },\n    {\n      \"pickListValues\": [\n      ],\n      \"value\": \"SystemModstamp\",\n      \"label\": \"System Modstamp\",\n      \"type\": \"datetime\"\n    },\n    {\n      \"pickListValues\": [\n      ],\n      \"value\": \"InstallDate\",\n      \"label\": \"Install Date\",\n      \"type\": \"date\"\n    },\n    {\n      \"pickListValues\": [\n        {\n          \"value\": \"Monthly\",\n          \"validFor\": null,\n          \"label\": \"Monthly\",\n          \"defaultValue\": true,\n          \"active\": true\n        },\n        {\n          \"value\": \"Yearly\",\n          \"validFor\": null,\n          \"label\": \"Yearly\",\n          \"defaultValue\": false,\n          \"active\": true\n        }\n      ],\n      \"value\": \"vlocity_cmt__RecurringUOM__c\",\n      \"label\": \"Recurring UOM\",\n      \"type\": \"picklist\"\n    }\n  ]\n}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1628656450048-y1y6iwdzn","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.filters","fieldValue":"{action.filters}"},{"fieldName":"filters","fieldValue":"{action.filters}"}],"id":"flex-action-1621848765950","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1629382967749-mv08b56nk","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.filters","fieldValue":"{action.filters}"},{"fieldName":"filters","fieldValue":"{action.filters}"}],"id":"flex-action-1621848765950","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:assets_search_change_value","element":"action","eventLabel":"pubsub","eventname":"assets_search_change_value","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637062005385-8g6dv8j01","label":"Action","stateAction":{"displayName":"Action","eventName":"reload","id":"flex-action-1637062142638","openUrlIn":"Current Window","subType":"PubSub","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpqAssetViewerAdvancedSearch_{recordId}","displayLabel":"cpqAssetViewerAdvancedSearch_{recordId}:clear_all","element":"action","eventLabel":"pubsub","eventname":"clear_all","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqAssetViewerAdvancedSearch_1_Vlocity","Id":"0RbDn000002qzj5CAC","ManageableState":"unmanaged","MasterLabel":"cfCpqAssetViewerAdvancedSearch_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableField":"","selectableMode":"Multi","selectedCardsLabel":"","states":[{"actions":[],"childCards":["cpqAdvancedSearchLineItem"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22color:%20#706e6b;%22%3E%7BLabel.CPQAdvancedSearch%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-bottom_large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:large","size":"large","type":"bottom"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-bottom_large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:large","size":"large","type":"bottom"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"cpqAdvancedSearchLineItem","cardNode":"{record.filters}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"fields":"{fields}","filters":"{filters}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Add a new row","name":"Action","property":{"card":"{card}","iconColor":"#006DCC","record":"{record}","stateAction":{"displayName":"{Label.CPQAddRow}","eventName":"cpqutils_{recordId}","extraParams":{"changeType":"addRow","changeValueEventName":"assets_search_change_value","fields":"{fields}","filters":"{filters}","offerType":"Assets","utilMethod":"advancedSearchChangeValue"},"hasExtraParams":true,"id":"flex-action-1628669271099","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#0070D2","fontSize":"15px","textAlign":"left","textDecoration":""}}},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{"iconColor":"#006DCC","styles":{"label":{"color":"#0070D2","fontSize":"15px","textAlign":"left","textDecoration":""}}},"inlineStyle":"font-weight: bold;","margin":[{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         font-weight: bold;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-m-left_small ","container":{"class":""},"elementStyleProperties":{"iconColor":"#006DCC","styles":{"label":{"color":"#0070D2","fontSize":"15px","textAlign":"left","textDecoration":""}}},"inlineStyle":"font-weight: bold;","margin":[{"label":"left:small","size":"small","type":"left"}],"padding":[{"label":"top:x-small","size":"x-small","type":"top"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         font-weight: bold;","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-3","name":"Custom LWC","property":{"channelName":"cpqutils","customlwcname":"cpqFlexCardUtils","recordId":"{recordId}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-5-Action-0","key":"element_element_block_4_0_action_0_0","name":"Action","parentElementKey":"element_block_4_0","property":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1637062045709-dutkybkxt","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.CPQClearAll}","eventName":"cpqAssetViewerAdvancedSearch_{recordId}","id":"flex-action-1637062205911","message":"clear_all","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#0070D2","fontSize":"14px","textAlign":"center"}}}],"card":"{card}","flyoutDetails":{},"label":"{Label.CPQClearAll}","record":"{record}","showSpinner":"false","stateObj":"{record}","styles":{"label":{"color":"#0070D2","fontSize":"14px","textAlign":"center"}}},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#0070D2","fontSize":"14px","textAlign":"center"}}},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#0070D2","fontSize":"14px","textAlign":"center"}}},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-5-Block-1","key":"element_element_block_4_0_block_1_0","name":"Block","parentElementKey":"element_block_4_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"9","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"9","isResponsive":false},"sizeClass":"slds-size_9-of-12 "},"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-5-Action-3","key":"element_element_element_block_4_0_block_2_0_action_0_0","name":"Action","parentElementKey":"element_element_block_4_0_block_2_0","property":{"buttonVariant":"brand","card":"{card}","displayAsButton":true,"record":"{record}","stateAction":{"displayName":"{Label.CPQApply}","eventName":"cpqutils_{recordId}","extraParams":{"applyAdvancedSearchEventName":"apply_advanced_search","filters":"{filters}","offerType":"Assets","utilMethod":"applyAdvancedSearch"},"hasExtraParams":true,"id":"flex-action-1628668984861","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}","styles":{"label":{"color":"#FFFFFF","textAlign":"center","textDecoration":""}}},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-left_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#FFFFFF","textAlign":"center","textDecoration":""}}},"height":"35px","inlineStyle":"","margin":[{"label":"left:x-small","size":"x-small","type":"left"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n     height:35px;    ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-m-left_x-small ","container":{"class":""},"elementStyleProperties":{"styles":{"label":{"color":"#FFFFFF","textAlign":"center","textDecoration":""}}},"height":"35px","inlineStyle":"","margin":[{"label":"left:x-small","size":"x-small","type":"left"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n     height:35px;    ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-5-Block-4","key":"element_element_block_4_0_block_2_0","name":"Block","parentElementKey":"element_block_4_0","property":{"action":null,"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 "},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-5","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"none","type":"around"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqAssetViewerAdvancedSearch","tracking":{"businessEvent":""},"Id":"a3gDn000000U0scQAS","vlocity_cmt__GlobalKey__c":"cpqAssetViewerAdvancedSearch/Vlocity/1/1621576001685"};
  export default definition