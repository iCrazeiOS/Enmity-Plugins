function b(e,r,s,u){window.enmity.clyde.sendReply(e,r,s,u)}function n(e){window.enmity.plugins.registerPlugin(e)}var h;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(h||(h={}));var t;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(t||(t={}));var f;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(f||(f={}));var v;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(v||(v={}));var g;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(g||(g={}));var B;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(B||(B={}));function G(e,r){window.enmity.commands.registerCommands(e,r)}function l(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;var M="GetPFP",P="2.0.0",d="Get a user's profile picture via a slash command",x=[{name:"iCraze",id:"883412614699446283"}],R={name:M,version:P,description:d,authors:x};const{getUser:c}=l("getUser"),{fetchCurrentUser:D}=l("fetchCurrentUser");function N(e){let r=["Error"],s=c(e);return r=[`https://cdn.discordapp.com/avatars/${e}/${s.avatar}.png?size=4096`,s.username],r}const S={id:"pfp-command",name:"pfp",displayName:"pfp",description:"Get a user's profile picture",displayDescription:"Get a user's profile picture",type:t.Chat,inputType:f.BuiltInText,options:[{name:"user",displayName:"user",description:"User",displayDescription:"User",type:g.User,required:!1}],execute:async function(e,r){let s=await D().then(U=>U.id);const u=N(e.length==0?s:e[0].value),w={type:"rich",title:"Here's my profile picture...",image:{proxy_url:u[0],url:u[0],width:4096,height:4096},footer:{text:"Fetched with GetPFP | By iCraze"},color:"0xff0000"};b(r.channel.id,{embeds:[w],components:[]},u[1],u[0])}},a={...R,onStart(){G("pfp",[S])},onStop(){this.comamands=[]}};n(a);
