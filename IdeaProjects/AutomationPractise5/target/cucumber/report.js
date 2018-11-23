$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to be able",
  "description": "      to login",
  "id": "as-a-user-i-want-to-be-able",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16336493583,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "as-a-user-i-want-to-be-able;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter my username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter my password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStep.am_on_the_landing_page()"
});
formatter.result({
  "duration": 11094982189,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.i_enter_my_username()"
});
formatter.result({
  "duration": 111953163,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.i_enter_my_password()"
});
formatter.result({
  "duration": 284562257,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.i_click_the_login_button()"
});
formatter.result({
  "duration": 1807314994,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStep.i_should_be_on_the_home_page()"
});
formatter.result({
  "duration": 38213103,
  "status": "passed"
});
formatter.after({
  "duration": 24370,
  "status": "passed"
});
formatter.uri("ScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to be able",
  "description": "to login",
  "id": "as-a-user-i-want-to-be-able",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "as-a-user-i-want-to-be-able;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on LandingPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"username\" as \"\u003cUser_Details\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"password\" as \"\u003cPassword_Details\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click  the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "Login with multiple acct",
  "description": "",
  "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct",
  "rows": [
    {
      "cells": [
        "User_Details",
        "Password_Details"
      ],
      "line": 13,
      "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;1"
    },
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 14,
      "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;2"
    },
    {
      "cells": [
        "montego",
        "00000000"
      ],
      "line": 15,
      "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;3"
    },
    {
      "cells": [
        "monteg",
        "7878787878"
      ],
      "line": 16,
      "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 38944,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login",
  "description": "",
  "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on LandingPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"username\" as \"montego001\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click  the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.am_on_LandingPage()"
});
formatter.result({
  "duration": 1260717303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "montego001",
      "offset": 23
    }
  ],
  "location": "ScenarioOutline.i_enter_as(String,String)"
});
formatter.result({
  "duration": 321376185,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #usernamelogin\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027ArtistaMacAir.local\u0027, ip: \u0027192.168.1.14\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 63.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.22.0, moz:headless: false, moz:processID: 1895, moz:profile: /var/folders/g8/0fbwxjbx1h1..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.7.0, rotatable: false, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f244376a-917f-874c-b980-18a0487a1566\n*** Element info: {Using\u003did, value\u003dusernamelogin}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat pages.LoginPages.usernameRegEx(LoginPages.java:23)\n\tat steps.ScenarioOutline.i_enter_as(ScenarioOutline.java:29)\n\tat ✽.When I enter \"username\" as \"montego001\"(ScenarioOutline.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "ScenarioOutline.i_enter_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ScenarioOutline.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ScenarioOutline.i_should_be_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23390,
  "status": "passed"
});
formatter.before({
  "duration": 32502,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login",
  "description": "",
  "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on LandingPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"username\" as \"montego\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"password\" as \"00000000\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click  the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.am_on_LandingPage()"
});
formatter.result({
  "duration": 1092617220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "montego",
      "offset": 23
    }
  ],
  "location": "ScenarioOutline.i_enter_as(String,String)"
});
formatter.result({
  "duration": 132072416,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #usernamelogin\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027ArtistaMacAir.local\u0027, ip: \u0027192.168.1.14\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 63.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.22.0, moz:headless: false, moz:processID: 1895, moz:profile: /var/folders/g8/0fbwxjbx1h1..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.7.0, rotatable: false, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f244376a-917f-874c-b980-18a0487a1566\n*** Element info: {Using\u003did, value\u003dusernamelogin}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat pages.LoginPages.usernameRegEx(LoginPages.java:23)\n\tat steps.ScenarioOutline.i_enter_as(ScenarioOutline.java:29)\n\tat ✽.When I enter \"username\" as \"montego\"(ScenarioOutline.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "00000000",
      "offset": 23
    }
  ],
  "location": "ScenarioOutline.i_enter_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ScenarioOutline.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ScenarioOutline.i_should_be_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23235,
  "status": "passed"
});
formatter.before({
  "duration": 32265,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login",
  "description": "",
  "id": "as-a-user-i-want-to-be-able;login;login-with-multiple-acct;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on LandingPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"username\" as \"monteg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"password\" as \"7878787878\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click  the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.am_on_LandingPage()"
});
formatter.result({
  "duration": 1138413909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "monteg",
      "offset": 23
    }
  ],
  "location": "ScenarioOutline.i_enter_as(String,String)"
});
formatter.result({
  "duration": 99913163,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #usernamelogin\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027ArtistaMacAir.local\u0027, ip: \u0027192.168.1.14\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 63.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.22.0, moz:headless: false, moz:processID: 1895, moz:profile: /var/folders/g8/0fbwxjbx1h1..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.7.0, rotatable: false, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f244376a-917f-874c-b980-18a0487a1566\n*** Element info: {Using\u003did, value\u003dusernamelogin}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat pages.LoginPages.usernameRegEx(LoginPages.java:23)\n\tat steps.ScenarioOutline.i_enter_as(ScenarioOutline.java:29)\n\tat ✽.When I enter \"username\" as \"monteg\"(ScenarioOutline.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "7878787878",
      "offset": 23
    }
  ],
  "location": "ScenarioOutline.i_enter_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ScenarioOutline.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ScenarioOutline.i_should_be_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21268,
  "status": "passed"
});
});