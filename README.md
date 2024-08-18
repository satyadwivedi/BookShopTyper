# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide

----for cross container access ---
create user provided service like this - 

`ups_bookstore`

`
{
    "password": "xStore=12",
    "schema": "STOREDB",
    "tags": [
        "hana"
    ],
    "user": "BOOK_STORE_USER"
}`

- check roles details of `BookStore` application from the repo and assign roles to granter `User(BOOK_STORE_USER)`.
- for role assignment via hana clockpit , please check etc folder.  

- HANA official documentation - 
https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-developer-guide-for-cloud-foundry-multitarget-applications-sap-business-app-studio/enable-access-to-objects-in-another-hdi-container?q=cross%20container


## Next Steps

- Open a new terminal and run `cds-ts watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
