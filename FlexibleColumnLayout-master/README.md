## Application Details

Steps for understanding
1. Set layout model in component.js which has layout, previousLayout and fullScreen state
2. Set App.view.xml and bind with model
3. Create Home, Master and Detail views and controllers
4. "config": {
        "routerClass": "sap.f.routing.Router",
        "viewType": "XML",
        "async": true,
        "viewPath": "flexiblecolumnlayout.view",
        "controlAggregation": "beginColumnPages",
        "controlId": "idFlexLayout"
      },
5.  "TargetDetail": {
          "viewName": "Detail",
          "controlAggregation": "midColumnPages",
          "transition": "slide",
          "viewId": "Detail",
          "viewLevel": "3"
        }
6. on Navigating pass layout accordingly (TwoColumnsMidExpanded/OneColumn/TwoColumnsBeginExpanded)

67/33/- TwoColumnsBeginExpanded
33/67/- TwoColumnsMidExpanded

7. To enable full screen
   a. set LayoutModel fullscreen property as true (whatever the next state is)
   b. set the current layout as previous layout
   c. set the layout as full screen layout
   d. to remove full screen, set the previous layout saved as current layout



|               |
| ------------- |
|**Generation Date and Time**<br>Fri Sep 13 2024 05:15:53 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.14.5|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A|
|**Module Name**<br>flexiblecolumnlayout|
|**Application Title**<br>FLC POC|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.128.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## flexiblecolumnlayout

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


