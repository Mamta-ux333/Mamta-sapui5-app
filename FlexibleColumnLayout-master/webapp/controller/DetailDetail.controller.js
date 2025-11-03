sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("flexiblecolumnlayout.controller.DetailDetail", {
        onInit: function () {

        },

        closeDetailDetail: function () {
            this.getView().getModel("LayoutModel").setProperty("/layout", "TwoColumnsBeginExpanded");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Detail");
        },

        fullscreen:function(){
            let layoutModel = this.getView().getModel("LayoutModel");
            var isFullScreen = layoutModel.getProperty("/fullScreen");
			layoutModel.setProperty("/fullScreen", !isFullScreen);
			if (!isFullScreen) {
				// store current layout and go full screen
				layoutModel.setProperty("/previousLayout", layoutModel.getProperty("/layout"));
				layoutModel.setProperty("/layout", "EndColumnFullScreen");
			} else {
				// reset to previous layout
				layoutModel.setProperty("/layout",  layoutModel.getProperty("/previousLayout"));
			}
        },

        showToast:function(){
            sap.m.MessageToast.show("Detail Page")
        }
    });
});
