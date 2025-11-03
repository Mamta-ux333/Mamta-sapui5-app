sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("flexiblecolumnlayout.controller.Home", {
        onInit: function () {

        },

        openMaster: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Master");
        },
    });
});
