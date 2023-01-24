let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":0,"inputMap":{"cartId":"{Parent.cartId}"},"ipMethod":"CPQ_GetAppliedDiscounts","resultVar":"[\"response\"]","vlocityAsync":false}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285615028-2guuwv008","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123479946","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285637868-yr7u3x59w","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123479946","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_apply_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_apply_response","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285615028-e13b1t51a","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123509131","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626285637868-ax8uxzsog","label":"Action","stateAction":{"eventName":"reload","id":"flex-action-1620123509131","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_delete_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_delete_response","eventtype":"pubsub","key":"event-1","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartAppliedDiscount_1_Vlocity","Id":"0RbDn000002qzjb0AQ","ManageableState":"unmanaged","MasterLabel":"cfCpqCartAppliedDiscount_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[],"states":[{"actions":[],"childCards":["cpqCartDiscount"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-0","name":"Action","property":{"actionList":[{"actionIndex":0,"draggable":true,"isOpen":true,"key":"1640873989513-wgsr1oww2","label":"Action","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1640874161341","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout"}}],"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"iconName":"utility:add","label":"\\{Label.CPQAddNewDiscount}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount","container":{"class":""},"customClass":"cpq__add-new-discount","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}},{"conditionString":"asyncJobResponse.isAsyncProcessCompleted == false && asyncJobResponse.isAsyncProcessesPresent > 0","conditions":{"group":[{"field":"asyncJobResponse.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"},{"field":"asyncJobResponse.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"cpq__add-new-discount__cnd","name":"cpq__add-new-discount__cnd","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__add-new-discount cpq__add-new-discount__cnd","container":{"class":""},"customClass":"cpq__add-new-discount cpq__add-new-discount__cnd","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-FlexCard-0","key":"element_element_block_0_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_0_0","property":{"cardName":"cpqCartDiscount","cardNode":"{record.records}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"data-preloadConditionalElement":false,"isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"action":null,"card":"{card}","collapsedByDefault":false,"collapsible":true,"label":"\\{Label.CPQAppliedDiscounts} ({totalSize})","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[{"field":"totalSize","id":"state-new-condition-11","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq__cart-applied-disc_container slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card cpq__cart-applied-disc_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"action","elementLabel":"Action-0-clone-0","name":"Action","property":{"actionList":[{"actionIndex":0,"draggable":true,"isOpen":true,"key":"1640873989513-wgsr1oww2","label":"Action","stateAction":{"cardName":"cpqDiscount","channelName":"close_modal","flyoutLwc":"cpqDiscount","flyoutParams":{"cartId":"{Parent.cartId}"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1640874161341","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout"}}],"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"flyoutChannel":"close_modal","flyoutDetails":{"openFlyoutIn":"Modal"},"iconName":"utility:add","label":"\\{Label.CPQAddNewDiscount}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"isSetForDesignTime":false,"isopen":true,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}},{"conditionString":"asyncJobResponse.isAsyncProcessCompleted == false && asyncJobResponse.isAsyncProcessesPresent > 0","conditions":{"group":[{"field":"asyncJobResponse.isAsyncProcessCompleted","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"},{"field":"asyncJobResponse.isAsyncProcessesPresent","hasMergeField":false,"id":"state-new-condition-7","logicalOperator":"&&","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"draggable":true,"isSetForDesignTime":true,"isopen":true,"key":1,"label":"cpq__add-new-discount__cnd","name":"cpq__add-new-discount__cnd","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"right","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_medium%22%3E%7BLabel.CPQNoAppliedDiscountsNew%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small cpq__cart-applied-discounts_empty-text","container":{"class":""},"customClass":"cpq__cart-applied-discounts_empty-text","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-p-around_x-small cpq__cart-applied-discounts_empty-text","container":{"class":""},"customClass":"cpq__cart-applied-discounts_empty-text","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"center","color":""}}}],"type":"text"}]}},"conditions":{"group":[{"field":"records.totalSize","id":"state-condition-0","operator":"<=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Empty State","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         background-color:#FAFAF9\n","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartAppliedDiscount","Id":"a3gDn000000U0kBQAC","vlocity_cmt__GlobalKey__c":"cpqCartAppliedDiscount/Vlocity/4/1623859962195"};
  export default definition