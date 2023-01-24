let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[{\"phase\":\"browse\"}]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1628299928408-hkfawa994","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.isSelectAll","fieldValue":"{action.checked}"}],"id":"flex-action-1628299960931","type":"cardAction"}}],"channelname":"cpq_{recordId}_1","displayLabel":"cpq_{recordId}_1:cpq_mark_select_all_checkbox","element":"action","eventLabel":"pubsub","eventname":"cpq_mark_select_all_checkbox","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"isRepeatable":true,"listenToWidthResize":false,"lwc":{"DeveloperName":"cfCpqProductView_5_Vlocity","Id":"0RbDn000002qzjnCAU","ManageableState":"unmanaged","MasterLabel":"cfCpqProductView_5_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"sessionVars":[{"name":"isSelectAll","val":"false"}],"states":[{"actions":[],"childCards":["cpqProductTileList"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Products-Count","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BParent.type%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productsheader","container":{"class":""},"customClass":"cpq__productsheader","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productsheader","container":{"class":""},"customClass":"cpq__productsheader","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Select All Checkbox","name":"Checkbox","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"checked":"{Parent.isSelectAll}","phase":"{Parent.phase}"},"hasExtraParams":true,"id":"flex-action-1628299975007","message":"cpq_select_all_products_checkbox","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","data-conditions":{"group":[{"field":"Parent.qualifiedFilter","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"Qualified"}],"id":"state-condition-object","isParent":true},"propertyObj":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordId}","extraParams":{"checked":"{Parent.isSelectAll}","phase":"{Parent.phase}"},"hasExtraParams":true,"id":"flex-action-1628299975007","message":"cpq_select_all_products_checkbox","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"checked":false,"customProperties":[{"id":5,"label":"checked","value":"{Parent.isSelectAll}"}],"fieldBinding":"","label":"{Label.CPQSelectAll}"},"record":"{record}","type":"checkbox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"List-header-checkbox","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-checkbox","container":{"class":""},"customClass":"cpq__productlist-header-checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-checkbox","container":{"class":""},"customClass":"cpq__productlist-header-checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-name-Text-0","key":"element_element_element_block_1_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.Name%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-name","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productName","container":{"class":""},"customClass":"cpq__productlist-header-productName","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productName","container":{"class":""},"customClass":"cpq__productlist-header-productName","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-description-Text-0","key":"element_element_element_block_1_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_2_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CPQDescription%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-description","key":"element_element_block_1_0_block_2_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productDescription","container":{"class":""},"customClass":"cpq__productlist-header-productDescription","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-productDescription","container":{"class":""},"customClass":"cpq__productlist-header-productDescription","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-commercials-ot-Text-0","key":"element_element_element_block_1_0_block_3_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_3_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3E%7BLabel.OneTime%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-commercials-ot","key":"element_element_block_1_0_block_3_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"List-header-block-product-commercials-recurring-Text-0","key":"element_element_element_block_1_0_block_4_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_4_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%22%3E%7BLabel.Recurring%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-commercials-recurring","key":"element_element_block_1_0_block_4_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-commercials","container":{"class":""},"customClass":"cpq__productlist-header-commercials","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[],"class":"slds-col ","element":"block","elementLabel":"List-header-block-product-actions","key":"element_element_block_1_0_block_5_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-actions","container":{"class":""},"customClass":"cpq__productlist-header-actions","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small cpq__productlist-header-actions","container":{"class":""},"customClass":"cpq__productlist-header-actions","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"List-header-block","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"Parent.view","hasMergeField":false,"id":"state-new-condition-16","operator":"==","type":"custom","value":"list"},{"field":"Parent.phase","hasMergeField":false,"id":"state-new-condition-25","logicalOperator":"&&","operator":"==","type":"custom","value":"Browse"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productlist-header","container":{"class":""},"customClass":"cpq__productlist-header","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__productlist-header","container":{"class":""},"customClass":"cpq__productlist-header","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Load-More-FlexCard-0","key":"element_element_block_3_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_block_3_0","property":{"cardName":"cpqProductTileList","cardNode":"{record.result.records}","isChildCardTrackingEnabled":false,"parentAttribute":{"isSelected":"{Session.isSelected}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.qualifiedFilter}","view":"{Parent.view}"},"recordId":"{recordId}","selectedState":"ListView"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-product-view_container ","container":{"class":"cpq-product-view_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq-product-view_container ","container":{"class":"cpq-product-view_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Load-More-Action-1","key":"element_element_block_3_0_action_1_0","name":"Action","parentElementKey":"element_block_3_0","property":{"buttonVariant":"neutral","card":"{card}","data-conditions":{"group":[{"field":"result.actions","id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"hideActionIcon":true,"record":"{record}","stateAction":{"displayName":"{Label.CPQLoadMore}","eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{Parent.cartId}","category":"{Parent.catalogId}","ipMethod":"CPQ_GetProducts","loadMoreEventName":"cpq_load_more_products","offerType":"Products","offsetSize":"{result.actions.nextproducts.remote.params.offsetSize}","pagesize":"{Parent.pagesize}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.qualifiedFilter}","query":"{Parent.query}","records":"{result.records}","utilMethod":"loadMoreFunctionality"},"hasExtraParams":true,"id":"flex-action-1628306934228","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Load-More","name":"Block","property":{"action":null,"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-right:0;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         margin-right:0;","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"margin-right:0;","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         margin-right:0;","text":{"align":"center","color":""}}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"result.totalSize","id":"state-new-condition-9","operator":"!=","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Product-View","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Incorrect-CartId-Error","key":"element_element_block_0_1_outputField_0_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","data-conditions":{"group":[{"field":"result.messages[0].code","id":"state-new-condition-19","operator":"==","type":"custom","value":"100"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-align_center%20slds-text-heading_large%22%3E%3Cspan%20style=%22color:%20#e03e2d;%22%3E%7BLabel.CPQError%7D:%20%7BLabel.CPQEmptyInvalidCartId%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"No-Product-Error","key":"element_element_block_0_1_outputField_1_1","name":"Text","parentElementKey":"element_block_0_1","property":{"card":"{card}","data-conditions":{"group":[{"field":"result.messages[0].code","id":"state-new-condition-19","operator":"==","type":"custom","value":"101"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-align_center%20slds-text-heading_large%22%3E%3Cspan%20style=%22color:%20#000000;%22%3E%7BLabel.CPQProductsNotAvailable%7D%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}]}},"conditions":{"group":[{"field":"result.totalSize","id":"state-condition-1","operator":"==","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"No-Product","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small slds-m-around_none ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqProductView","Id":"a3gDn000000U0k2QAS","vlocity_cmt__GlobalKey__c":"cpqProductView/Vlocity/2/1636344848303"};
  export default definition