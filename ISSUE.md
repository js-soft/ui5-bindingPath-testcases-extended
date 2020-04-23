Title: sap/ui/test/matchers/BindingPath cannot locate control by named model and root property

Description:
The 'extended custom test cases' depict a bug in the BindingPath matcher when `modelName` is set and the bound `propertyPath` is a root property. In this case the matcher doe not find the control.

Colleagues: @vobu

OpenUI5 version: 1.76

Browser/version (+device/version): Chrome Version 81.0.4044.113 (Official Build) (64-bit)/ MacOs Catalina 10.15.4

Any other tested browsers/devices(OK/FAIL): None

URL (minimal example if possible): [working example](https://github.com/js-soft/ui5-bindingPath-testcases-extended)
This working example extends the test cases for the BindingPath matcher with three test case for this issue and points out the missing feature.

User/password (if required and possible - do not post any confidential information here): none

Steps to reproduce the problem:
1. Run example
2. Check test cases

What is the expected result?
The BindingPath matcher finds the expected control.

What happens instead?
The BindingPath matcher does not find the expected control.

Any other information? (attach screenshot if possible)

