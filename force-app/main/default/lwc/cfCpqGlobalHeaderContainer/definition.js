let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1624262663924-mkfezf2yb","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.pricelistId","fieldValue":"{action.response.records[0].details.records[0].PriceListId__c}"},{"fieldName":"Session.ObjectType","fieldValue":"{action.response.records[0].details.records[0].ObjectType}"},{"fieldName":"Session.cartDetails","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1622026494886","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1633063808888-77i4u0xzh","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.pricelistId","fieldValue":"{action.response.records[0].details.records[0].PriceListId__c}"},{"fieldName":"Session.ObjectType","fieldValue":"{action.response.records[0].details.records[0].ObjectType}"},{"fieldName":"Session.cartDetails","fieldValue":"{action.response.records[0].details}"}],"id":"flex-action-1622026494886","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_cart_updated","element":"action","eventLabel":"pubsub","eventname":"cpq_cart_updated","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1633063808888-7ugxgmg51","label":"Action","stateAction":{"eventName":"cpq_{recordId}","extraParams":{"cartType":"{action.carttype}","enteredQuantity":"{action.value}","getInputMethod":"prepareUpdateCartItemInput","handleResponseMethod":"processUpdateCartItemResponse","hierarchyPath":"{action.hierarchypath}","input":"{}","ipMethod":"CPQ_UpdateCartItem","itemId":"{action.itemid}","methodName":"updateCartItem","responseEventName":"cpq_updateCartItem_responseEvent","updateType":"quantity"},"hasExtraParams":true,"id":"flex-action-1626014528129","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpqQuantityField_{recordId}","displayLabel":"cpqQuantityField_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1633063808888-1veg4ons6","label":"Action","stateAction":{"eventName":"cpq_{recordId}","extraParams":{"attributeCategoryId":"{action.attributecategoryid}","attributeCheckboxValue":"{action.checked}","attributeId":"{action.attributeid}","attributeValue":"{action.value}","cartType":"{action.carttype}","getInputMethod":"prepareUpdateCartItemInput","handleResponseMethod":"processUpdateCartItemResponse","hierarchyPath":"{action.hierarchypath}","input":"{}","ipMethod":"CPQ_UpdateCartItem","itemId":"{action.itemid}","methodName":"updateCartItem","responseEventName":"cpq_updateCartItem_responseEvent","updateType":"attribute"},"hasExtraParams":true,"id":"flex-action-1626014493778","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpqProductAttributes_{recordId}","displayLabel":"cpqProductAttributes_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-2","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1633063808888-mai6deosk","label":"Action","stateAction":{"eventName":"cpq_{recordId}","extraParams":{"cartType":"{action.cartType}","getInputMethod":"prepareDeleteItemFromCartInput","handleResponseMethod":"processDeleteItemFromCartResponse","hierarchyPath":"{action.hierarchyPath}","ipMethod":"CPQ_DeleteItemFromCart","itemId":"{action.itemId}","methodName":"deleteItemFromCart","minQuantity":"{action.minQuantity}","parentObject":"{action.parentObject}"},"hasExtraParams":true,"id":"flex-action-1626014508344","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_delete_item","element":"action","eventLabel":"pubsub","eventname":"cpq_delete_item","eventtype":"pubsub","key":"event-3","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqGlobalHeaderContainer_1_Vlocity","Id":"0RbDn000002qzjjCAC","ManageableState":"unmanaged","MasterLabel":"cfCpqGlobalHeaderContainer_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"cartId","val":"null"},{"name":"pricelistId","val":"null"},{"name":"ObjectType","val":"Order"},{"name":"cartDetails","val":"null"}],"states":[{"actions":[],"childCards":["cpqGlobalHeader"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqGlobalHeader","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"ObjectType":"{objectApiName}","cartId":"{recordId}","details":"{Session.cartDetails}"},"recordId":"{recordId}","selectedState":"Order"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqGlobalHeaderContainer","Id":"a3gDn000000U0sdQAS","vlocity_cmt__GlobalKey__c":"cpqGlobalHeaderContainer/Vlocity/1/1621926741232"};
  export default definition