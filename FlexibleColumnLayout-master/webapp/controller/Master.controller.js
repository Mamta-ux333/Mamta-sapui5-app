sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("flexiblecolumnlayout.controller.Master", {
        onInit: function () {

        },

        openDetail: function () {
           // this.getView().getModel("LayoutModel").setProperty("/layout", "TwoColumnsMidExpanded");
            this.getView().getModel("LayoutModel").setProperty("/layout", "TwoColumnsBeginExpanded");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Detail");
        },

        openHome:function(){
            this.getView().getModel("LayoutModel").setProperty("/layout", "OneColumn");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Home");
        }
    });
});
