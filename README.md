Superset v/s Metabase

# Installation

Attached a docker-compose file with bare minimal configuration.

# Connection with Druid

Created a druid proxy-service which acts as a reverse proxy to Druid.

Following endpoints needs to be proxied for a successful connection 

https://github.com/yravinderkumar33/metabase/blob/main/druid-proxy-service/index.js

1 - All API's prefixed with /druid

2 - /status for health check

# Terminologies

**Question** - A question in Metabase is a query, the results of that query, and the visualization and formatting of those results (even if that visualization is just a table). Questions have titles, IDs, and unique URLs you can copy and share with others.

**Answer** -  Result of a question

**X-Ray** - X-ray is a summary or visualization of a table or column generated automatically to give users a quick insight into their data.

**“Dashboards”** are a set of questions organized on a blank canvas.

**Collections** are basically folders in which you can organize both your Questions and Dashboards

# Features

1 - Metabase has the capability to auto suggest some insights on top of the data (X-Ray);

2 - I find it more user friendly and easy to confugure in comparision to superset. Superset has more configuration options.

3 - Sharing Features

- Save a question
- Create Dashboard 
- Dashboards can be grouped under collections
- Alerts over email or slack
- Share dashboard/chart directly over slack or email or using public url.

3 - Alerts feature - Generate alert on some condition - email / slack channel.

We can setup a goal line in a line chart. When you set up a goal line alert on a question, Metabase will notify you when the results go above or below a goal line you define.

![alt text](/resources/images/Screenshot%202024-03-20%20at%2011.39.13 AM.png)

![alt text](/resources/images/Screenshot%202024-03-20%20at%2011.39.30 AM.png)


5 - Easy to create charts and dashboard in comparision to superset

6 - Visual query editor (questions in metabase language)
     - works using native querys under the hood
     - transforms to native druid query 
Each stage can be visualised

6 - Can add custom columns using existing columns (metabase expressions). Support for multiple custom expressions.

Full List - https://www.metabase.com/docs/latest/questions/query-builder/expressions-list

7 - Caching Feature for most frequently used questions (query).

8 - Multiple Table Joins within the same database (user friendly interface).

9 - Adhoc Exploration of custom data - Upload any csv file and perform x ray. Useful feaature to experiment on sample dataset.

10. Metabase uses OpenStreetMaps by default. Auto Inference from data.

11 - Permissions works on a group level. Each group is assigned permissions and users can be assigned to multiple groups. (Most of fine grained permissions are available with enterprise version).

12 - Has support for Google SSO and LDAP. LDAP groups are auto mapped to metabase groups.

# Cons

1 - Sql query is not supported with druid as database. It supports native queries.

![alt text](/resources/images/Screenshot%202024-03-20%20at%2011.43.18 AM.png)

2 - Number of default charts are lesser compared to superset.

3 - Most of fine grained permissions (global and table level) are available in enterprise version but not in open source

4 - Trino is not available in Metabase as default database while its there with superset to query from HMS.

5 - SSO is not available. Available with enterprise version. Open source version supports only Google and LDAP(Basic Auth)

