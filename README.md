
# Purpose
Extended test case for `sap/ui/test/matchers/BindingPath`since the orinial test cases located in [BindinPath.qunit.js](https://github.com/SAP/openui5/blob/master/src/sap.ui.core/test/sap/ui/core/qunit/opa/matchers/BindingPath.qunit.js)
are not sufficient.

The 'extended custom test cases' depict a bug in the BindingPath matcher when `modelName` is set and the bound `propertyPath` is a root property.

# More information
* [Live Demo](https://sap.github.io/openui5-basic-template-app)
* [Documentation](https://openui5.hana.ondemand.com/#/topic/7a4d93c0b0bb439b9d889ffc5b02eac9)
* [UI5 Tooling](https://github.com/SAP/ui5-tooling)
* [OpenUI5](https://github.com/SAP/openui5)

This test case example is based on the 'openui5-basic-template-app'.

## Prerequisites
The **UI5 build and development tooling command line interface (UI5 CLI)** has to be installed.
For installation instructions please see [Installing the UI5 CLI](https://github.com/SAP/ui5-tooling#installing-the-ui5-cli).

## Setup
1. Clone the repository and navigate into it
1. Install all dependencies
    ```sh
    npm install
    ```

# Execute Test
1. Start a local server
    ```sh
    npm start
    ```
1. Open [tespage](http://localhost:8080/test.html) and run the unit test page
1. <span style="color:red">Note the failed test case no. 4. and 6 and the successfull test case no. 5.</span>

# Debugging Information
The function
``` javascript
function _getFormattedPath(sPath, bWithNamedModel, bWithContext)
```
 in `sap/ui/test/matchers/BindingPath` does `substring(1)` for all cases when the model is a named model and the path starts with a '/'. The needed workaround is a leading double slash in case the property is a model root property.
