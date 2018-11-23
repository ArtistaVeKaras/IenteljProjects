$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "As user I,",
  "description": "       want to be able to log in",
  "id": "as-user-i,",
  "keyword": "Feature"
});
formatter.before({
  "duration": 51716312,
  "status": "passed"
});
formatter.before({
  "duration": 7178126781,
  "status": "passed"
});
formatter.before({
  "duration": 80337,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "as-user-i,;login",
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
  "name": "am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the username and the password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "home page should be dislpayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.am_on_the_login_page()"
});
formatter.result({
  "duration": 4386010777,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username_and_the_password()"
});
formatter.result({
  "duration": 110901532,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_the_login_button()"
});
formatter.result({
  "duration": 836318295,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_should_be_dislpayed()"
});
formatter.result({
  "duration": 10447298981,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for title to be \"WEG Group\". Current title: \"Login\" (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027ArtistaMacAir.local\u0027, ip: \u0027192.168.1.14\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 63.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.22.0, moz:headless: false, moz:processID: 1072, moz:profile: /var/folders/g8/0fbwxjbx1h1..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 17.7.0, rotatable: false, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8d04517c-ea77-9d4a-a590-f1f5fc899204\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat pagesobj.LoginPages.confirmTitlePage(LoginPages.java:31)\n\tat stepsdef.LoginSteps.home_page_should_be_dislpayed(LoginSteps.java:39)\n\tat ✽.Then home page should be dislpayed(Login.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 19624291,
  "status": "passed"
});
formatter.after({
  "duration": 51980,
  "status": "passed"
});
formatter.uri("LogintestPageRegx.feature");
formatter.feature({
  "line": 1,
  "name": "As user I,",
  "description": "want to be able to log in",
  "id": "as-user-i,",
  "keyword": "Feature"
});
formatter.before({
  "duration": 38937,
  "status": "passed"
});
formatter.before({
  "duration": 56876,
  "status": "passed"
});
formatter.before({
  "duration": 33358,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login",
  "description": "",
  "id": "as-user-i,;login",
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
  "name": "am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the \"Username\" as \"montego001\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the \"Password\" as \"12345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "home page should is dislpayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageRegx.amOnLoginPage()"
});
formatter.result({
  "duration": 560977426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 13
    },
    {
      "val": "montego001",
      "offset": 27
    }
  ],
  "location": "LoginPageRegx.i_enter_the_as(String,String)"
});
formatter.result({
  "duration": 83543196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 13
    },
    {
      "val": "12345678",
      "offset": 27
    }
  ],
  "location": "LoginPageRegx.i_enter_the_as(String,String)"
});
formatter.result({
  "duration": 96093225,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_the_login_button()"
});
formatter.result({
  "duration": 1723122315,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageRegx.home_page_should_is_dislpayed()"
});
formatter.result({
  "duration": 43704287,
  "status": "passed"
});
formatter.after({
  "duration": 18615,
  "status": "passed"
});
formatter.after({
  "duration": 13602,
  "status": "passed"
});
formatter.uri("ScenarioOutlineEx.feature");
formatter.feature({
  "line": 1,
  "name": "As user I,",
  "description": "want to be able to log in\n\n/*\nlogin to system using multiple users at once\nwith regular expresssion\n*/",
  "id": "as-user-i,",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login",
  "description": "",
  "id": "as-user-i,;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter my \"Username\" as \"\u003cUsername_Details\u003e\" in the text field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter my \"Password\" as \"\u003cPassword_Details\u003e\" in the text field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Homepage is dislpayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "Login Details",
  "description": "",
  "id": "as-user-i,;login;login-details",
  "rows": [
    {
      "cells": [
        "Username_Details",
        "Password_Details"
      ],
      "line": 17,
      "id": "as-user-i,;login;login-details;1"
    },
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 18,
      "id": "as-user-i,;login;login-details;2"
    },
    {
      "cells": [
        "monteg",
        "1245"
      ],
      "line": 19,
      "id": "as-user-i,;login;login-details;3"
    },
    {
      "cells": [
        "claudio",
        "cor_1245"
      ],
      "line": 20,
      "id": "as-user-i,;login;login-details;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40828,
  "status": "passed"
});
formatter.before({
  "duration": 18411,
  "status": "passed"
});
formatter.before({
  "duration": 17236,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login",
  "description": "",
  "id": "as-user-i,;login;login-details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter my \"Username\" as \"montego001\" in the text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter my \"Password\" as \"12345678\" in the text field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Homepage is dislpayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageRegx.amOnLoginPage()"
});
formatter.result({
  "duration": 526937938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "montego001",
      "offset": 26
    }
  ],
  "location": "VerifyScenarioOutline.i_enter_my_as_in_the_text_field(String,String)"
});
formatter.result({
  "duration": 111220074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "VerifyScenarioOutline.i_enter_my_as_in_the_text_field(String,String)"
});
formatter.result({
  "duration": 101081044,
  "status": "passed"
});
formatter.match({
  "location": "VerifyScenarioOutline.i_click_login_button()"
});
formatter.result({
  "duration": 1130629522,
  "status": "passed"
});
formatter.match({
  "location": "VerifyScenarioOutline.homepage_is_dislpayed()"
});
formatter.result({
  "duration": 32743,
  "status": "passed"
});
formatter.after({
  "duration": 10910,
  "status": "passed"
});
formatter.after({
  "duration": 11710,
  "status": "passed"
});
formatter.before({
  "duration": 71800,
  "status": "passed"
});
formatter.before({
  "duration": 22937,
  "status": "passed"
});
formatter.before({
  "duration": 44792,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login",
  "description": "",
  "id": "as-user-i,;login;login-details;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter my \"Username\" as \"monteg\" in the text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter my \"Password\" as \"1245\" in the text field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Homepage is dislpayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageRegx.amOnLoginPage()"
});
formatter.result({
  "duration": 709209360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "monteg",
      "offset": 26
    }
  ],
  "location": "VerifyScenarioOutline.i_enter_my_as_in_the_text_field(String,String)"
});
formatter.result({
  "duration": 68537504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "1245",
      "offset": 26
    }
  ],
  "location": "VerifyScenarioOutline.i_enter_my_as_in_the_text_field(String,String)"
});
formatter.result({
  "duration": 51787776,
  "status": "passed"
});
formatter.match({
  "location": "VerifyScenarioOutline.i_click_login_button()"
});
formatter.result({
  "duration": 563512303,
  "status": "passed"
});
formatter.match({
  "location": "VerifyScenarioOutline.homepage_is_dislpayed()"
});
formatter.result({
  "duration": 24991,
  "status": "passed"
});
formatter.after({
  "duration": 10044,
  "status": "passed"
});
formatter.after({
  "duration": 15376,
  "status": "passed"
});
formatter.before({
  "duration": 49477,
  "status": "passed"
});
formatter.before({
  "duration": 33694,
  "status": "passed"
});
formatter.before({
  "duration": 29254,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login",
  "description": "",
  "id": "as-user-i,;login;login-details;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter my \"Username\" as \"claudio\" in the text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter my \"Password\" as \"cor_1245\" in the text field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Homepage is dislpayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageRegx.amOnLoginPage()"
});
formatter.result({
  "duration": 713137349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "claudio",
      "offset": 26
    }
  ],
  "location": "VerifyScenarioOutline.i_enter_my_as_in_the_text_field(String,String)"
});
formatter.result({
  "duration": 61691770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "cor_1245",
      "offset": 26
    }
  ],
  "location": "VerifyScenarioOutline.i_enter_my_as_in_the_text_field(String,String)"
});
formatter.result({
  "duration": 85210305,
  "status": "passed"
});
formatter.match({
  "location": "VerifyScenarioOutline.i_click_login_button()"
});
formatter.result({
  "duration": 750385382,
  "status": "passed"
});
formatter.match({
  "location": "VerifyScenarioOutline.homepage_is_dislpayed()"
});
formatter.result({
  "duration": 21105,
  "status": "passed"
});
formatter.after({
  "duration": 8906,
  "status": "passed"
});
formatter.after({
  "duration": 11073,
  "status": "passed"
});
});