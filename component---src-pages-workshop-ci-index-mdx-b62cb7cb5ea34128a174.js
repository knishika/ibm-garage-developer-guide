(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),b=a("Wbzz"),o=a("Xrax"),p=a("k4MR"),c=a("TSYQ"),s=a.n(c),m=a("QH2O"),O=a.n(m),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:s()(O.a.pageHeader,(t={},t[O.a.withTabs]=i.length,t[O.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:O.a.text},a)))))},j=a("BAC9"),N=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,o=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("9Hrx"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),i=r===n,o=new RegExp(n+"/?(#.*)?$"),p=a.replace(o,r);return Object(u.b)("li",{key:e,className:s()((t={},t[T.selectedItem]=i,t),T.listItem)},Object(u.b)(b.Link,{className:T.link,to:""+p},e))}));return Object(u.b)("div",{className:T.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:T.list},r))))))},t}(r.a.Component),C=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,s=t.relativePagePath,m=t.titleType,O=c.tabs,j=c.title,h=c.theme,T=c.description,x=c.keywords,w=Object(v.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,y=k?n.pathname.replace(k,""):n.pathname,I=O?y.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"",P=h||w;return Object(u.b)(p.a,{tabs:O,homepage:!1,theme:P,pageTitle:j,pageDescription:T,pageKeywords:x,titleType:m},Object(u.b)(d,{title:r?Object(u.b)(r,null):j,label:"label",tabs:O,theme:P}),O&&Object(u.b)(f,{slug:y,tabs:O,currentTab:I}),Object(u.b)(C.a,{padded:!0},a,Object(u.b)(N,{relativePagePath:s})),Object(u.b)(g.a,{pageContext:t,location:n,slug:y,tabs:O,currentTab:I}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},NWBW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n,r=a("k1TG"),i=a("8o2o"),l=(a("q1tI"),a("7ljp")),b=a("013z"),o=(a("T0C+"),a("qKvR"),{}),p=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),c={_frontmatter:o},s=b.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)(s,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p,{mdxType:"PageDescription"},Object(l.b)("p",null,"Deploy an Application using CI Pipelines with Tekton")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Prerequisites"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The instructor should ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/workshop/setup#3.-setup-ibm-cloud-native-toolkit-workshop"}),"Setup Workshop Environment")),Object(l.b)("li",{parentName:"ul"},"The student should ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/workshop/setup#4-setup-cli-and-terminal-shell"}),"Setup CLI and Terminal Shell")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Instructor will provide the following info:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"OpenShift Console URL (OCP_CONSOLE_URL)"),Object(l.b)("li",{parentName:"ul"},"The username and password for OpenShift and Git Server (default values are user1, user2, etc.. for users and ",Object(l.b)("inlineCode",{parentName:"li"},"password")," for password)."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Set ",Object(l.b)("inlineCode",{parentName:"p"},"TOOLKIT_USERNAME")," environment variable replace ",Object(l.b)("inlineCode",{parentName:"p"},"user1")," or ",Object(l.b)("inlineCode",{parentName:"p"},"userx")," with assigned usernames"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"TOOLKIT_USERNAME=user1\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"(Skip if using KubeAdmin or IBM Cloud)")," Login into OpenShift using ",Object(l.b)("inlineCode",{parentName:"p"},"oc")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If using IBM Cloud cluster then login with your IBM account email and IAM API Key or Token, if using a cluster that was configure with the workshop scripts outside IBM Cloud then use ",Object(l.b)("inlineCode",{parentName:"li"},"user1")," or respective assigned username, and the password is ",Object(l.b)("inlineCode",{parentName:"li"},"password"))),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc login $OCP_URL -u $TOOLKIT_USERNAME -p password\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Set ",Object(l.b)("inlineCode",{parentName:"p"},"TOOLKIT_PROJECT")," environment variable replace ",Object(l.b)("inlineCode",{parentName:"p"},"project1")," or ",Object(l.b)("inlineCode",{parentName:"p"},"projectx")," based on username id assigned"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"TOOLKIT_PROJECT=project1\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create a project/namespace using your project as prefix, and ",Object(l.b)("inlineCode",{parentName:"p"},"-dev")," and suffix"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc sync $TOOLKIT_PROJECT-dev\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Fork application template git repo"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Open Developer Dashboard from the OpenShift Console"),Object(l.b)("li",{parentName:"ul"},"Select Starter Kits"),Object(l.b)("li",{parentName:"ul"},"Select One in our case ",Object(l.b)("strong",{parentName:"li"},"Go Gin Microservice")),Object(l.b)("li",{parentName:"ul"},"Click Fork"),Object(l.b)("li",{parentName:"ul"},"Login into GIT Sever using the provided username and password (ie ",Object(l.b)("inlineCode",{parentName:"li"},"user1")," and ",Object(l.b)("inlineCode",{parentName:"li"},"password"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"IMPORTANT"),": Rename Repository Name to ",Object(l.b)("inlineCode",{parentName:"li"},"app")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Fork Repository")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Setup environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"GIT_URL")," for the git url using the value from previous step or as following"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"GIT_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/$TOOLKIT_USERNAME/app\necho GIT_URL=${GIT_URL}\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Clone the git repository and change directory"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd $HOME\ngit clone $GIT_URL\ncd app\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create a pipeline for the application"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"oc pipeline --tekton\n")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Use down/up arrow and select ",Object(l.b)("inlineCode",{parentName:"li"},"ibm-golang")),Object(l.b)("li",{parentName:"ul"},"Hit Enter to enable image scanning"),Object(l.b)("li",{parentName:"ul"},"Open the url to see the pipeline running in the OpenShift Console"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify that Pipeline Run completeled succesfully")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Review the Pipeline Tasks/Stages"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Test"),Object(l.b)("li",{parentName:"ul"},"Open SonarQube from Console Link"),Object(l.b)("li",{parentName:"ul"},"Open Registry from Console Link"),Object(l.b)("li",{parentName:"ul"},"Open Artifactory from Console Link"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select ",Object(l.b)("strong",{parentName:"p"},"Developer")," perspective, select project ",Object(l.b)("inlineCode",{parentName:"p"},"$TOOLKIT_PROJECT-dev")," and then select ",Object(l.b)("strong",{parentName:"p"},"Topology")," from the Console and verify the application running")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Open the application route url and try out the application using the swagger UI")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Make a change to the application in the git repository and see the pipeline running again from the Console."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git config --global user.email "${TOOLKIT_USERNAME}@example.com"\ngit config --global user.name "${TOOLKIT_USERNAME}"\necho "A change to trigger a new PipelineRun $(date)" >> README.md\ngit add .\ngit commit -m "update readme"\ngit push -u origin master\n\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify that change in Git Server and Git WebHook"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Open Git Dev from Console Link"),Object(l.b)("li",{parentName:"ul"},"Navigate to user app git repository"),Object(l.b)("li",{parentName:"ul"},"Review the recent commit"),Object(l.b)("li",{parentName:"ul"},"Review the webhook recent delivery"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify that a new Pipeline starts succesfully")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify that the App manifests are being updated in the ",Object(l.b)("inlineCode",{parentName:"p"},"gitops")," repo in the git account ",Object(l.b)("inlineCode",{parentName:"p"},"toolkit")," under the ",Object(l.b)("inlineCode",{parentName:"p"},"qa")," directory."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Open Git Ops from Console Link"),Object(l.b)("li",{parentName:"ul"},"Select toolkit/gitops git repository"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Congradulations you finished this lab, continue with lab ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"./cd"}),"Promote an Application using CD with GitOps and ArgoCD")))))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-workshop-ci-index-mdx-b62cb7cb5ea34128a174.js.map