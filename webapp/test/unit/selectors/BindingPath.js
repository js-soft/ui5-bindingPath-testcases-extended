/*global QUnit */
sap.ui.define([
    'sap/ui/test/matchers/BindingPath',
    'sap/m/Text',
], function (BindingPath, Text) {
    "use strict";

    QUnit.module("BindingPath - basics", {
        // this setup is originally done in the fixture
        beforeEach: function () {
            this.oNamedModelPropertyText = new Text({ text: "{myModel>/propertyText}" });
            this.oNamedModelNoRootPropertyText = new Text({ text: "{myModel>propertyText}" });
        }
    });

    // --- standard tests available here: https://github.com/SAP/openui5/blob/master/src/sap.ui.core/test/sap/ui/core/qunit/opa/matchers/BindingPath.qunit.js

    QUnit.test("#1 - Should match both property path and model name", function (assert) {
        var oBindingPath = new BindingPath({
            modelName: "myModel",
            propertyPath: "/propertyText"
        });
        var bResult = oBindingPath.isMatching(this.oNamedModelNoRootPropertyText);
        assert.ok(bResult, "Should match control with exact property path and model name");
    });


    QUnit.test("#2 - Should not match property path if model name is different", function (assert) {
        var oBindingPath = new BindingPath({
            modelName: "none",
            propertyPath: "/propertyText"
        });
        var bResult = oBindingPath.isMatching(this.oNamedModelNoRootPropertyText);
        assert.ok(!bResult, "Should not match if path is the same but model name does not match");
    });

    QUnit.test("#3 - Should not match if property path is different and model is the same", function (assert) {
        var oBindingPath = new BindingPath({
            modelName: "myModel",
            propertyPath: "/property"
        });
        var bResult = oBindingPath.isMatching(this.oNamedModelNoRootPropertyText);
        assert.ok(!bResult, "Should not match if property path is different");
    });

    // --- extended custom test cases

    QUnit.test("#4 - Should match both root property path and model name", function (assert) {
        var oBindingPath = new BindingPath({
            modelName: "myModel",
            propertyPath: "/propertyText"
        });
        var bResult = oBindingPath.isMatching(this.oNamedModelPropertyText);
        assert.ok(bResult, "Should match control with exact property path and model name");
    });

    QUnit.test("#5 - Should match both root property path and model name - fixed", function (assert) {
        var oBindingPath = new BindingPath({
            modelName: "myModel",
            propertyPath: "//propertyText" // note the double slash which is needed to fix the bug
        });
        var bResult = oBindingPath.isMatching(this.oNamedModelPropertyText);
        assert.ok(bResult, "Should match control with exact property path and model name");
    });


    QUnit.test("#6 - Should match both root property path dependend on root path and model name", function (assert) {
        var oBindingPath = new BindingPath({
            modelName: "myModel",
            path: "/",
            propertyPath: "/propertyText" // note the double slash which is needed to fix the bug
        });
        var bResult = oBindingPath.isMatching(this.oNamedModelPropertyText);
        assert.ok(bResult, "Should match control with exact property path and model name");
    });
});
