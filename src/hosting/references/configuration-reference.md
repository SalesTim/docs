# Configuration Reference
📆 *Generated: Wed, 29 Jun 2022 18:59:34 GMT*

This document lists all the configuration options supported by the platform.

Options are grouped by category, then by domain, and each option is specified with:
- **Environment Variable**: The corresponging environment variable to be set.
- **Status**: Defines if the option is required or optional.
- **Description**: Description of the option mentionning its type and default value

To help you get started, you can also download our [.env file template](/hosting/references/environment-variables-reference.md) that you can use with any infrastructure-as-code solution.


**TABLE OF CONTENTS:**

[[toc]]

---

## Backing services
*Mandatory infrastructure*

### Redis
*Redis service used for caching and queuing*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `REDIS_HOST` | Optional ☑️ | (string) Redis server host. Defaults to "localhost". |
| `REDIS_PORT` | Optional ☑️ | (number) Redis server port. Defaults to "6379". |
| `REDIS_DB` | Optional ☑️ | (number) Redis server db. Defaults to "0". |
| `REDIS_TLS` | Optional ☑️ | (boolean) Use TLS to connect to the redis server. Defaults to "false". |
| `REDIS_TIMEOUT` | Optional ☑️ | (number) Redis connection timeout in ms. Defaults to "30000". |
| `REDIS_SECRET_KEY` | Optional ☑️ | (string) Key used to connect to Redis server. Defaults to "". |
| `REDIS_KEYS_PREFIX` | Optional ☑️ | (string) Global partition key for all redis keys. Defaults to "st:". |



### Configuration database
*Main data storage for the application configuration (PostgreSQL)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `DB_DATA_CLIENT` | Optional ☑️ | (string) Database engine client among "mysql" / "mariadb" / "postgres" / "mssql" (Currently only supports "postgres"). Defaults to "postgres". |
| `DB_DATA_DIALECT_OPTIONS` | Optional ☑️ | (string) Database engine specific dialect options as a stringified json. Defaults to "{}". |
| `DB_DATA_HOST` | Optional ☑️ | (string) Database server host. Defaults to "localhost". |
| `DB_DATA_PORT` | Optional ☑️ | (number) Database server port. Defaults to "5432". |
| `DB_DATA_USERNAME` | Optional ☑️ | (string) Database user name. Defaults to "nb_user". |
| `DB_DATA_PASSWORD` | Optional ☑️ | (string) Database password. Defaults to "nb_password". |
| `DB_DATA_DATABASE_NAME` | Optional ☑️ | (string) Database name. Defaults to "nb_data_db". |
| `DB_DATA_LOGGING` | Optional ☑️ | (boolean) Enable database advanced logging. Defaults to "false". |



### Microsoft Azure Storage
*Blob storage used for storing images (templates pictures and screenshots).*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_AZURE_STORAGE_CONNECTION_STRING` | Optional ☑️ | (string) Microsoft Azure Storage connection string. Defaults to the default Azure Storage emulator connection string. |
| `MICROSOFT_AZURE_STORAGE_TEMPLATES_PICTURES_CONTAINER` | Optional ☑️ | (string) Name of the container that hosts catalog templates pictures (Has to be created manually), for instance "sttemplatespictures". Defaults to "sttemplatespictures". |



### Microsoft Cosmos DB
*Nosql database used to manage user and organization data.*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_COSMOSDB_ENDPOINT` | Optional ☑️ | (string) Microsoft Cosmos DB endpoint URL. Defaults to "https://localhost:8081". |
| `MICROSOFT_COSMOSDB_SECRET_KEY` | Optional ☑️ | (string) Secret key used to connect to Microsoft Cosmos DB. Defaults to the default Cosmos DB emulator secret key. |
| `MICROSOFT_COSMOSDB_DATABASE` | Optional ☑️ | (string) Name of the Microsoft Cosmos DB database (Has to be created manually and include four collections named: "users", "customers", "requests" and "apps"), for instance "st_app_db". No defaults. |
| `MICROSOFT_COSMOSDB_CONTAINER_PARTITION_KEY` | Optional ☑️ | (string) Property action as a partition key in each collection. Defaults to "/tenantId". |
| `MICROSOFT_COSMOSDB_MAXRETRYATTEMPTSONTHROTTLEDREQUESTS` | Optional ☑️ | (number) Maximum number of retries in the case where the request fails because the Azure Cosmos DB service has applied rate limiting on the client. Defaults to "9". |
| `MICROSOFT_COSMOSDB_MAXRETRYWAITTIMEINSECONDS` | Optional ☑️ | (number) Maximum retry time in seconds for the Azure Cosmos DB service. Defaults to "60". |
| `MICROSOFT_COSMOSDB_DISABLE_SSL_VERIFICATION` | Optional ☑️ | (boolean) Disable SSL verification when connecting to Cosmos DB. This option should not be set to `true` in production. Defaults to "false". |



## Core Services
*Core platform services*

### Application Services
*Common HTTP Server for all the platform services (Web, API, Jobs...)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `APP_DEPLOY` | Optional ☑️ | (string) Arbitrary string to identify the current deploy, such as "dev", "uat", "production". Defaults to "". |
| `APP_ROLE` | Required ✅ | (string) Server role. Could be "standalone", "web", "api", "jobs", "scheduler". Defaults to "". |
| `APP_PORT` | Optional ☑️ | (number) Application server port. Defaults to the PORT environment variable if defined or to "3000". |



### Web Services
*Web services (Teams web application UI)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `WEB_PUBLICURL` | Optional ☑️ | (string) Web server public URL. Defaults "http://localhost". |
| `WEB_CDN_PUBLICURL` | Optional ☑️ | (string) Root URL of the CDN used by the web server. Defaults to "" (means that the web server is serving the static assets itself). |
| `WEB_SESSION_SECRET` | Optional ☑️ | (string) Secret server-side string used to encrypt session data. Defaults to "secret" |
| `WEB_TIMEOUT` | Optional ☑️ | (string) Web server connection timeout, can be a string accepted by the ms (https://www.npmjs.com/package/ms#readme) module. Defaults to "5s". |



### API Services
*API services (REST API)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `API_PUBLICURL` | Optional ☑️ | (string) API server public URL. Defaults to "http://localhost/api/v1.0". |
| `API_TIMEOUT` | Optional ☑️ | (string) Web server connection timeout, can be a string accepted by the ms (https://www.npmjs.com/package/ms#readme) module. Defaults to "5s". |



### Scheduler Services
*Scheduler services (Manages execution plans for scheduled jobs)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_ENABLED` | Optional ☑️ | (boolean) Enable the RENEW_SERVICE_ACCOUNT_TOKENS scheduling. Defaults to "true" |
| `SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to "0 6 * * 0" (At 06:00 on Sunday). |
| `SCHEDULER_MICROSOFT_TEAMS_PERMANENT_MEMBERSHIP_POLICY_ENABLED` | Optional ☑️ | (boolean) Enable the PERMANENT_MEMBERSHIP_POLICY scheduling. Defaults to "true" |
| `SCHEDULER_MICROSOFT_TEAMS_PERMANENT_MEMBERSHIP_POLICY_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to */15 * * * *" (At every 15th minute). |
| `SCHEDULER_QUEUES_RETENTION_POLICY_ENABLED` | Optional ☑️ | (boolean) Enable the QUEUES_RETENTION scheduling. Defaults to "true" |
| `SCHEDULER_QUEUES_RETENTION_POLICY_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to *0 1 * * *" (Every day at 01:00). |
| `SCHEDULER_MICROSOFT_GRAPH_SUBSCRIPTIONS_MANAGER_ENABLED` | Optional ☑️ | (boolean) Enable the GRAPH_SUBSCRIPTIONS_MANAGER scheduling. Defaults to "true" |
| `SCHEDULER_MICROSOFT_GRAPH_SUBSCRIPTIONS_MANAGER_SCHEDULE` | Optional ☑️ | (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to *0 2 * * *" (Every day at 02:00). |



### Events Collector
*Events Collector*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `EVENTSCOLLECTOR_ENABLED` | Optional ☑️ | (boolean) Enable integration with the events collector service. Defaults to "false". |
| `EVENTSCOLLECTOR_ROOT_URL` | Optional ☑️ | (string) Events collector root URL. Defaults to "https://events.nbold.io". |
| `EVENTSCOLLECTOR_AUTH_HEADER` | Optional ☑️ | (string) HTTP header used to pass the authentication token to the events collector service. Defaults to "X-Auth-Token". |
| `EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN` | Optional ☑️ | (string) Token used to authenticate from clients against the events collector service for tracking operations. Defaults to "". |
| `EVENTSCOLLECTOR_AUTH_SERVER_TOKEN` | Optional ☑️ | (string) Token used to authenticate from servers (s2s) against the events collector service for tracking operations. Defaults to "". |
| `EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN` | Optional ☑️ | (string) Token used to authenticate from servers (s2s) against the events collector service for administration operations. Defaults to "". |
| `EVENTSCOLLECTOR_TRACK_ENDPOINT` | Optional ☑️ | (string) Tracking endpoint of the events collector service. Defaults to "/api/v1/s2s/event". |
| `EVENTSCOLLECTOR_TRACK_METHOD` | Optional ☑️ | (string) HTTP verb used to post events. Defaults to "POST". |



### Reports Server
*Reports Server*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `REPORTS_ENABLED` | Optional ☑️ | (boolean) Enable reporting features. Defaults to "true". |
| `REPORTS_SERVER_URL` | Optional ☑️ | (string) Reports server root URL. Defaults to "http://localhost:5001". |
| `REPORTS_SERVER_SECRET_KEY` | Optional ☑️ | (string) Token used secure access to embedded reports. Defaults to "". |



### Connected Apps
*Connected Apps Server*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `CONNECTEDAPPS_ENABLED` | Optional ☑️ | (boolean) Enable integration with our connected apps platform. Defaults to "true". |
| `CONNECTEDAPPS_URL` | Optional ☑️ | (string) Connected apps server root URL. Defaults to "https://connected-apps.nbold.io/connected-apps". |



### PostgreSQL Events Database
*Database for application events and audit trails*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `DB_EVENTS_CLIENT` | Optional ☑️ | (string) Database engine client among "mysql" / "mariadb" / "postgres" / "mssql" (Currently only supports "postgres"). Defaults to "postgres". |
| `DB_EVENTS_DIALECT_OPTIONS` | Optional ☑️ | (string) Database engine specific dialect options as a stringified json. Defaults to "{}". |
| `DB_EVENTS_SSL_MODE` | Optional ☑️ | (string) Database engine SSL mode among "disable", "allow", "prefer", "require". Defaults to "disable". |
| `DB_EVENTS_HOST` | Optional ☑️ | (string) Database server host. Defaults to "localhost". |
| `DB_EVENTS_PORT` | Optional ☑️ | (number) Database server port. Defaults to "5432". |
| `DB_EVENTS_USERNAME` | Optional ☑️ | (string) Database user name. Defaults to "st_events_user". |
| `DB_EVENTS_PASSWORD` | Optional ☑️ | (string) Database password. Defaults to "st_events_password". |
| `DB_EVENTS_DATABASE_NAME` | Optional ☑️ | (string) Database name. Defaults to "st_events_db". |
| `DB_EVENTS_LOGGING` | Optional ☑️ | (boolean) Enable database advanced logging. Defaults to "false". |



## Core Integrations
*Mandatory platform integrations*

### Microsoft Identity Platform
*Microsoft Identity Platform*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_IDENTITY_PLATFORM_BASEURL` | Optional ☑️ | (string) Base URL of the Microsoft identity platform (May vary in non global environments such as GCC / DOD). Defaults to "https://login.microsoftonline.com". |



### Microsoft App Registration
*Microsoft App Registration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_APP_CLIENT_ID` | Required ✅ | (string) Microsoft Azure AD app registration client ID. No defaults. |
| `MICROSOFT_APP_CLIENT_SECRET` | Required ✅ | (string) Microsoft Azure AD app registration client secret. No defaults. |



### Microsoft Graph
*Microsoft Graph*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_GRAPH_BASEURL` | Optional ☑️ | (string) Base URL of the Microsoft Graph service (May vary in non global environments such as GCC / DOD). Defaults to "https://graph.microsoft.com". |
| `MICROSOFT_GRAPH_DEFAULT_SCOPE` | Optional ☑️ | (string) Default requested scope during authentication to the Microsoft Graph service in client credential authentication mode. Defaults to "https://graph.microsoft.com/.default". |



## Advanced Integrations (Optional)
*Advanced Integrations*

### Mail
*When you want to send approval and other notifications emails from your own tenant using the Microsoft Graph instead of our own mailing service: https://docs.nbold.co/nocode/approval.html#approval-email-sent-by-your-organization*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MAIL_ENABLED` | Optional ☑️ | (boolean) Enable sending emails from the platform. Defaults to "false". |
| `MAIL_PROVIDER` | Optional ☑️ | (string) Mailer service (As of today, only "sendgrid" is supported). Defaults to "sendgrid". |
| `MAIL_SECRET_KEY` | Optional ☑️ | (string) Secret key used to authenticate against the mailer service. Defaults to "". |
| `MAIL_SENDER` | Optional ☑️ | (string) Default email sender (FROM:). Defaults to "notifications@salestim.io". |
| `MAIL_ACTION_MSG_ORIGINATOR` | Optional ☑️ | (string) Message originator used to enable outlook actionalbe messages (as used by the team creation request approval process). See https://docs.nbold.co/nocode/approval.html#approval-email-sent-by-your-organization. Defaults to "". |



### Webhooks
*Webhooks advanced configuration*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `WEBHOOKS_USER_AGENT` | Optional ☑️ | (string) HTTP user agent passed as a header with each request. Defaults to "nBold-Webhook/v[MAJOR].[MINOR].[PATCH]". |
| `WEBHOOKS_RETRY_INTERVAL` | Optional ☑️ | (number) Interval in ms between two attempts. Defaults to "10000". |
| `WEBHOOKS_MAX_RETRY` | Optional ☑️ | (number) Maximum number of retry before failing. Namely if it is set to 2, the module will try 3 times. Defaults to "2". |
| `WEBHOOKS_TIMEOUT` | Optional ☑️ | (number) Timeout in ms before aborting the request if the server is unresponsive. Defaults to "5000". |



### Microsoft Application Insights
*Microsoft Application Insights*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with Azure Application Insights service. Defaults to "false". |
| `MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED` | Optional ☑️ | (boolean) Enable collection and push of live metrics to the Azure Application Insights service. Defaults to "false". |
| `MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET_KEY` | Optional ☑️ | (string) Secret instrumentation key used server-side to authenticate against the Azure Application Insights service. Defaults to "". |
| `MICROSOFT_APPINSIGHTS_CONNECTION_STRING` | Optional ☑️ | (string) Connection string used client-side to connect to the Azure Application Insights service . Defaults to "". |



### Prometheus
*Metrics exporter for Prometheus *

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `PROMETHEUS_EXPORTER_ENABLED` | Optional ☑️ | (boolean) Enable the `/monitoring/metrics` endpoint to expose platform's key metrics and be polled by a Prometheus server. Defaults to "false". |
| `PROMETHEUS_EXPORTER_AUTH_TOKEN` | Optional ☑️ | (boolean) Token used to authenticate against the Prometheus exporter endpoint `/monitoring/metrics` through the `X-Auth-Token` HTTP header or the `token` url parameter (for instance: `/monitoring/metrics?token=YOUR_AUTH_TOKEN`). Defaults to "". |
| `PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS` | Optional ☑️ | (boolean) Collect and expose all the default node.js metrics to Prometheus. Defaults to "true". |
| `PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS` | Optional ☑️ | (boolean) Collect and expose node.js garbage collector metrics to Prometheus. Defaults to "false". |



### GitHub Alerting
*GitHub Alerting*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `GITHUB_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with GitHub for alerting purposes. Defaults to "false". |
| `GITHUB_API_BASE_URL` | Optional ☑️ | (string) Base URL of the Microsoft Graph service (May vary in some environments). Defaults to "https://api.github.com". |
| `GITHUB_USER_AGENT` | Optional ☑️ | (string) HTTP user agent passed as a header to the GitHub API. Defaults to "nBold-GitHub/v[MAJOR].[MINOR].[PATCH]". |
| `GITHUB_OWNER` | Optional ☑️ | (string) Owner (user or organization) of the GitHub repository where to create alert issues. Defaults to "". |
| `GITHUB_REPO` | Optional ☑️ | (string) GitHub repository where to create alert issues. Defaults to "". |
| `GITHUB_TOKEN` | Optional ☑️ | (string) Token used to create issues. Defaults to "". |
| `GITHUB_ISSUES_ASSIGNEES` | Optional ☑️ | (string) Default assignees of the created alert issues as a comma-separated list (Using the user handle, e.g user1,user2). Defaults to "". |
| `GITHUB_ISSUES_LABELS` | Optional ☑️ | (string) Default labels of the created alert issues as a comma-separated list (e.g label1,label2). Defaults to "nBold,alert". |



### Mail Alerting
*Mail Alerting*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MAIL_ALERTS_ENABLED` | Optional ☑️ | (boolean) Enable integration with the mailer service for alerting purposes. Defaults to "false". |
| `MAIL_ALERTS_FROM` | Optional ☑️ | (string) Sender (FROM:) of the alerts emails. Defaults to "notifications@salestim.io". |
| `MAIL_ALERTS_TO` | Optional ☑️ | (string) Recipient(s) (TO:) of the alerts emails.. Defaults to "". |



### Intercom
*Intercom*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `INTERCOM_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with Intercom for in-app end-users chat and support. Defaults to "false". |
| `INTERCOM_CRYPTO_SECRET_KEY` | Optional ☑️ | (string) Secret key used to generate hmac digest to secure connectivity between the client ans the Intercom service. Defaults to "". |
| `INTERCOM_APP_ID` | Optional ☑️ | (string) Intercom application ID used for authentication against the Intercom service. Defaults to "". |
| `INTERCOM_ACCESS_TOKEN` | Optional ☑️ | (string) Intercom access token used for server-side authentication against the Intercom service. Defaults to "". |



### Microsoft Marketplace
*Service used by the [nBold Cloud](https://nbold.co) SAAS environment to enable the "Purchase from Microsoft Teams" scenarios integrated with the [Microsoft Commercial Marketplace](https://docs.microsoft.com/en-us/azure/marketplace/).*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_MARKETPLACE_INTEGRATION_ENABLED` | Optional ☑️ | (boolean) Enable integration with the Microsoft Marketplace. Defaults to "false". |
| `MICROSOFT_MARKETPLACE_LANDING_PAGE_URL` | Optional ☑️ | (string) URL of the Microsoft Marketplace landing page. Defaults to "http://localhost/microsoft-marketplace/order". |
| `MICROSOFT_MARKETPLACE_CONNECTION_WEBHOOK_URL` | Optional ☑️ | (string) URL of the Microsoft Marketplace webhook URL. Defaults to "http://localhost/api/v1.0/microsoft_marketplace/notifications_handler". |
| `MICROSOFT_MARKETPLACE_TENANT_ID` | Optional ☑️ | (string) Tenant ID used for authentication to the Microsoft Marketplace landing page. Defaults to "". |
| `MICROSOFT_MARKETPLACE_FRONTEND_APP_ID` | Optional ☑️ | (string) Microsoft Azure client ID used for authentication to the Microsoft Marketplace landing page. Defaults to "". |
| `MICROSOFT_MARKETPLACE_BACKEND_APP_ID` | Optional ☑️ | (string) Microsoft Azure client ID used for interactions with the Microsoft Marketplace API. Defaults to "". |
| `MICROSOFT_MARKETPLACE_PUBLISHER_ID` | Optional ☑️ | (string) Publisher ID from the Microsoft Marketplace registration. Defaults to "". |
| `MICROSOFT_MARKETPLACE_OFFER_ID` | Optional ☑️ | (string) Offer ID from the Microsoft Marketplace registration. Defaults to "". |



## Advanced Tuning (Optional)
*Performance Tuning*

### Templates Business Rules
*Templates*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `BR_TEMPLATES_APPROVERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be defined as approvers in a template. Defaults to "10". |
| `BR_TEMPLATES_PERMANENTOWNERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be defined as permanent owners in a template. Defaults to "20". |
| `BR_TEMPLATES_PERMANENTMEMBERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be defined as permanent members in a template. Defaults to "20". |



### Requests Business Rules
*Requests*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `BR_REQUEST_REQUESTEDOWNERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be invited as owners as part of a new team creation request. Defaults to "20". |
| `BR_REQUEST_REQUESTEDMEMBERS_MAX` | Optional ☑️ | (number) Maximum number of users that could be invited as members as part of a new team creation request. Defaults to "20". |



### Logging
*Logging*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `LOG_LEVEL` | Optional ☑️ | (string) Logging level. Uses the `npm` logging levels "error" / "warn" / "info" / "http" / "verbose" / "debug" / "silly" (highest to lowest). Defaults to "info". |
| `LOG_PERSISTENCY_ENABLED` | Optional ☑️ | (boolean) Enable logs persistency as files in the directory defined by LOG_PERSISTENCY_DIRECTORY. Defaults to "false". |
| `LOG_PERSISTENCY_DIRECTORY` | Optional ☑️ | (boolean) Defines logs persistency directory location. Defaults to "/volumes/logs". |



### Jobs Services
*Jobs services (Scheduled and on-demand background tasks)*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `JOBS_POLICY_REMOVE_ON_COMPLETE` | Optional ☑️ | (boolean / number) If true, removes the job when it successfully completes. A number specified the amount of jobs to keep. Defaults to "false". |
| `JOBS_POLICY_REMOVE_ON_FAIL` | Optional ☑️ | (boolean / number) If true, removes the job when it fails after all attempts. A number specified the amount of jobs to keep. Defaults to "false". |
| `JOBS_POLICY_RETENTION_GRACE_PERIOD` | Optional ☑️ | (number) Grace retention period for all jobs, defined in ms. Default to "2419200000" (28 days). |
| `JOBS_POLICY_RETENTION_STATUS` | Optional ☑️ | (string) Status of the jobs to delete after the grace period. Accepts "null" / "completed" / "failed". Defaults to "null" |
| `JOBS_POLICY_RETENTION_LIMIT` | Optional ☑️ | (number) Maximum amount of jobs to clean per call to the jobs retention process. If not provided will clean all matching jobs. Defaults to "null" |



### Graph Rate Limiter
*Graph Rate Limiter*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_GRAPH_LIMITER_MAXCONCURRENT` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_MINTIME` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_HIGHWATER` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_STRATEGY` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_PENALTY` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIR` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHINTERVAL` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHAMOUNT` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEINTERVAL` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEAMOUNT` | Optional ☑️ | (number) Microsoft Graph requests limiter |
| `MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEMAXIMUM` | Optional ☑️ | (number) Microsoft Graph requests limiter |



### Planner Rate Limiter
*Planner Rate Limiter*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_PLANNER_LIMITER_MAXCONCURRENT` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_MINTIME` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_HIGHWATER` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_STRATEGY` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_PENALTY` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIR` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHINTERVAL` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHAMOUNT` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEINTERVAL` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEAMOUNT` | Optional ☑️ | (number) Microsoft Planner requests limiter |
| `MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEMAXIMUM` | Optional ☑️ | (number) Microsoft Planner requests limiter |



### Cosmos DB Rate Limiter
*Cosmos DB Rate Limiter*

---
| Environment Variable | Status | Description |
|:---------------------|:-------|:------------|
| `MICROSOFT_COSMOSDB_LIMITER_MAXCONCURRENT` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_MINTIME` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_HIGHWATER` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_STRATEGY` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_PENALTY` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIR` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHINTERVAL` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHAMOUNT` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEINTERVAL` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEAMOUNT` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |
| `MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEMAXIMUM` | Optional ☑️ | (number) Microsoft Cosmos DB requests limiter |


