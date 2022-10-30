"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3141],{98863:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(61839);const l={},i="App Data Model Reference",m={unversionedId:"api/references/app-data-model-reference",id:"api/references/app-data-model-reference",title:"App Data Model Reference",description:"\ud83d\udcc6 Generated57:33 GMT",source:"@site/contents/75-api/references/app-data-model-reference.md",sourceDirName:"75-api/references",slug:"/api/references/app-data-model-reference",permalink:"/api/references/app-data-model-reference",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/75-api/references/app-data-model-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Rate Limits",permalink:"/api/rate-limits"},next:{title:"Configuration Reference",permalink:"/api/references/configuration-reference"}},p={},d=[{value:"ORGANIZATIONS",id:"organizations",level:2},{value:"MICROSOFT_MARKETPLACE_SUBSCRIPTIONS",id:"microsoft_marketplace_subscriptions",level:2},{value:"USERS",id:"users",level:2},{value:"MICROSOFT_GRAPH_SUBSCRIPTIONS",id:"microsoft_graph_subscriptions",level:2},{value:"MICROSOFT_TEAMS_TEAMS",id:"microsoft_teams_teams",level:2},{value:"MICROSOFT_TEAMS_CHANNELS",id:"microsoft_teams_channels",level:2},{value:"MICROSOFT_TEAMS_TABS",id:"microsoft_teams_tabs",level:2},{value:"MICROSOFT_TEAMS_CHANNEL_MESSAGES",id:"microsoft_teams_channel_messages",level:2}],N={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-data-model-reference"},"App Data Model Reference"),(0,r.kt)("p",null,"\ud83d\udcc6 ",(0,r.kt)("em",{parentName:"p"},"Generated: Sun, 30 Oct 2022 14:57:33 GMT")),(0,r.kt)("p",null,"This document lists all the tables and their columns available from our database."),(0,r.kt)("p",null,"Each table is specified with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": Table name.")),(0,r.kt)("p",null,"Each column is specified with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": Column name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": Column type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Allow null"),": Does the column allows null values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Auto increment"),": Does the column is an auto-increment ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primary key"),": Is the column a primary key.")),(0,r.kt)("h2",{id:"organizations"},"ORGANIZATIONS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: organizations")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tenant_initial_domain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tenant_default_domain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"microsoft_marketplace_subscriptions"},"MICROSOFT_MARKETPLACE_SUBSCRIPTIONS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: subscriptions")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publisherId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"offerId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"planId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"quantity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"users"},"USERS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: users")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"microsoft_graph_subscriptions"},"MICROSOFT_GRAPH_SUBSCRIPTIONS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: graph_subscriptions")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"change_type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"notification_url")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resource")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expiration")),(0,r.kt)("td",{parentName:"tr",align:"left"},"DATE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"microsoft_teams_teams"},"MICROSOFT_TEAMS_TEAMS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: teams")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"visibility")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isArchived")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"template_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSONB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"microsoft_teams_channels"},"MICROSOFT_TEAMS_CHANNELS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: microsoft_teams_channels")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"team_oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"membershipType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSONB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"microsoft_teams_tabs"},"MICROSOFT_TEAMS_TABS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: tabs")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"team_oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"channel_oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSONB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"microsoft_teams_channel_messages"},"MICROSOFT_TEAMS_CHANNEL_MESSAGES"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Table: microsoft_teams_channel_chat_messages")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Allow null"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Auto increment"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Primary key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"team_oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"channel_oid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSONB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))))}k.isMDXComponent=!0}}]);