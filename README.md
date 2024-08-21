# kodey-javascript-selenium-mocha-chai-test-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can create mocha chai test cases with selenium and javascript.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environment (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Make sure you have dev branch. If not create one, kodey will be creating all the new branches against dev.
5. Create the sample issue / work item in your issue tracker. Copy and Paste the issue description from below.
6. Execute the below prompt in the Kodey.ai chat UI
7. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - Jest Test Cases For Vue Based Applications
```
        platform: github | bitbucket | azure | gitlab (choose one of these)

        project-to-work-on:  javascript-selenium-mocha-chai-test-sample (ONLY IF AZURE)
    
        repository-to-work-on: javascript-selenium-mocha-chai-test-sample
    
        branch name to create: tests/adding-test-cases-v1
      
        programming language: javascript

        Information to agent: Do as the steps below are defined one by one. You are working in github repo so make sure to use tools related to github repo.

        NOTE: You should write the actual implementation of code not just comments. You are working to develop the test cases unit test scripts for an application based on javascript. The components and functions code will be provided to you and you have to come up with the test scripts for them. You will be writing test cases with mocha and chai frameworks with selenium.

        Information to agent: Here, we will provide the details of component like its CSS selector and you have to develop the test cases later.
        Admin dropdown -->  class name: drop-down
        Admin dropdown items: -->  class name: dropdown-item
        Request Button: -->  element: button, class name: btn-primary
        Success Alert Message:--> class name: alert

        Steps:

        step 1: Create a new branch with name <branch name to create> and then do the steps below.

        step 2:  Get the content of the file tests/testfile.js, this functions contains test cases and hooks already built for some of the scenarios.

        step 3:  Now add new test cases to the above file for the following cases:
                        1) when the admin dropdown, when clicked, then it SHOULD display three items.
                        2) Given text in Email input, when you click 'Request Invitation' button, then there SHOULD be a confirmation message which should include "Thank you! We saved a fake email address" in the success alert message.

        step 4: Create a new Pull Request from the above created branch with title "Test Cases Developed v1" and body "Test cases developed with kodey v1".

        step 5: Update this issue status to closed.
```

## Once you have set the description of the issue in your relavant system. You need to use kodey UI Chat and execute below statement to get the work done. 

### Github Issue and Github Repo
```
   Get the issue with id <issue_id> from github repo and do as the description of the issue says step by step.
```

### Azure Repo Issue and Azure Repo
```
   Get the issue with id <issue_id> from azure repo and do as the description of the issue says step by step.
```

### Jira Issue and Bitbucket Repo
```
   Get the issue with id <issue_id> from jira and do as the description of the issue says step by step.
```

## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. You should see two additionals test cases added as per requirement in the new PR.
4. Confirm that the work item/issue/ticket in your relevant issue tracking platform is updated.