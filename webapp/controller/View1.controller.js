sap.ui.define([
    "sap/m/MessageBox",
	"sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
function (MessageBox, MessageToast, Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
            var oJsonModel = new JSONModel({
				Shutterstock: sap.ui.require.toUrl("helloworldui5/images/283930_shutterstock_56287057.jpg"),
			});
			this.getView().setModel(oJsonModel);
        },

		onPress: function (evt) {
			if (evt.getSource().getText() === "Reject") {
                MessageBox.alert("Rejected!");
            } else {
                MessageToast.show(evt.getSource().data("buttonLabel") + "Button Pressed");
            }
		}
    });
});
