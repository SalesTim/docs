"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1785],{66305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=a(87462),r=(a(67294),a(3905));a(19959);const n={},s="Disable a regular team creation for end users",i={unversionedId:"catalog-manager-guide/governance-policies/Creating-Teams-only-through-Templates",id:"catalog-manager-guide/governance-policies/Creating-Teams-only-through-Templates",title:"Disable a regular team creation for end users",description:"Once you have set up your templates, you would want to make sure that the end users are only using Templates you've set up with nBold to create teams.",source:"@site/contents/35-catalog-manager-guide/40-governance-policies/Creating-Teams-only-through-Templates.md",sourceDirName:"35-catalog-manager-guide/40-governance-policies",slug:"/catalog-manager-guide/governance-policies/Creating-Teams-only-through-Templates",permalink:"/catalog-manager-guide/governance-policies/Creating-Teams-only-through-Templates",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/35-catalog-manager-guide/40-governance-policies/Creating-Teams-only-through-Templates.md",tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Governance policies",permalink:"/catalog-manager-guide/governance-policies/"},next:{title:"Team creation approval workflow",permalink:"/catalog-manager-guide/governance-policies/approval"}},l={},u=[{value:"Is possible to restrict people to create teams in a regular way?",id:"is-possible-to-restrict-people-to-create-teams-in-a-regular-way",level:5},{value:"How can I implement that?",id:"how-can-i-implement-that",level:5}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"disable-a-regular-team-creation-for-end-users"},"Disable a regular team creation for end users"),(0,r.kt)("p",null,"Once you have set up your templates, you would want to make sure that the end users are only using Templates you've set up with nBold to create teams."),(0,r.kt)("p",null,"This is possible! And this document is here to describe what you need to do to enable this."),(0,r.kt)("h5",{id:"is-possible-to-restrict-people-to-create-teams-in-a-regular-way"},"Is possible to restrict people to create teams in a regular way?"),(0,r.kt)("p",null,"Yes, you can. The thing you need to know before proceeding is that you can't restrict people to create Teams only. If you want to do so you would restrict the creation of Office 365 Groups for users, meaning: teams, Planner, Outlook Groups, Yammer Connecter Groups, etc."),(0,r.kt)("h5",{id:"how-can-i-implement-that"},"How can I implement that?"),(0,r.kt)("p",null,"Following this ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/microsoft-365/solutions/manage-creation-of-groups?view=o365-worldwide"},"documentation by Microsoft,")," you'll be able to set only a group user (based on a security group) who will be able to create Office 365 and therefore teams, through the regular way."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important Note!!")," Please make sure that the Service Account is belonging to the security group that can create Office 365 Group in the tenant.")))}p.isMDXComponent=!0}}]);