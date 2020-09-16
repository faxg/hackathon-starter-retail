# Migros Hackathon Starter Template 

This repository is a starter template, originally designed for the Migros Hack Challenge __"Digital Product Twins"__ at HackZurich 2020.

It uses Azure Static Web Apps, and gives you in 2 minutes flat:
- A functional, production ready example web app
- CI/CD pipeline using GitHub Actions 
- Social login integration using Github, Twitter
- Azure Functions serverless backend API
- Support for a custom domain / TLS certificate


View a demo live at <https://aka.ms/MigrosHackathonStarter>

[![Deploy to Azure button](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/?feature.customportal=false#create/Microsoft.StaticApp)

## Learn how

Learn how to [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api/?WT.mc_id=shopathome-github-jopapa)

## Contents

The apps written in the following JavaScript frameworks/libraries:

| folder          | Description                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **angular-app** | [Sample Angular app](https://github.com/johnpapa/shopathome/blob/master/angular-app)         |
| **api** | [Sample Azure Functions app](https://github.com/johnpapa/shopathome/blob/master/api) |
| **react-app**   | [Sample React app](https://github.com/johnpapa/shopathome/blob/master/react-app)             |
| **svelte-app**  | [Sample Svelte app](https://github.com/johnpapa/shopathome/blob/master/svelte-app)           |
| **vue-app**     | [Sample Vue app](https://github.com/johnpapa/shopathome/blob/master/vue-app)                 |

## Prerequisites

- A GitHub account
- [Node.js and Git](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=shopathome-github-jopapa) installed
- The [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions?WT.mc_id=shopathome-github-jopapa) installed
- The [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=shopathome-github-jopapa) installed


## Migros Data Access
If you want to access the Migros Data APIs, you'll need to have an API key.
- You'll get the key in your Challenge Starter Box.
- put the key in the file ``api/.env``, or configure it as ``MIGROS_API_KEY`` in the Azure portal
- Make sure not to commit the key into source control / GitHub.



## Problems or Suggestions

[Open an issue here](https://github.com/faxg/retail-starter/issues)

## Resources

### Azure Static Web Apps

- Learn how to [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api?wt.mc_id=shopathome-github-jopapa)
- [API support in Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/apis?wt.mc_id=shopathome-github-jopapa)
- [Add an API to Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/add-api?wt.mc_id=shopathome-github-jopapa)
- [Authentication and authorization](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?wt.mc_id=shopathome-github-jopapa)
- [Routes](https://docs.microsoft.com/azure/static-web-apps/routes?wt.mc_id=shopathome-github-jopapa)
- [Review pre-production environments](https://docs.microsoft.com/azure/static-web-apps/review-publish-pull-requests?wt.mc_id=shopathome-github-jopapa)
- [Azure Free Trial](https://azure.microsoft.com/free/?wt.mc_id=shopathome-github-jopapa)
