sap.ui.define([
    "sap/m/MessageBox",
	"sap/m/MessageToast",
    "sap/ui/core/mvc/Controller"
],
function (MessageBox, MessageToast, Controller) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
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
