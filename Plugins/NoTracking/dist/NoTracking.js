function r(t){window.enmity.plugins.registerPlugin(t)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const y=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function p(t){return window.enmity.patcher.create(t)}var g="NoTracking",f="1.1.3",h="Remove tracking parameters from links you send",v=[{name:"iCraze",id:"883412614699446283"}],_={name:g,version:f,description:h,authors:v};const u=p("no-tracking");function w(t){let i={},c=t.replace(/.*?\?/,"").split("&");for(let s in c){let m=c[s].split("=")[0];!m.length||(typeof i[m]=="undefined"&&(i[m]=[]),i[m].push(c[s].split("=")[1]))}return i}const k={..._,onStart(){u.before(y,"sendMessage",(t,i,c)=>{var s;let m=i[1].content;const a=/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;(s=m.match(a))==null||s.forEach(o=>{let e;if(o.match(/http(s)?:\/\/(www\.)?(twitter\.com|x\.com)\//gi))e=o.split("t=")[0].split("s=")[0];else if(o.includes("reddit.com/"))e=o.replace(/utm_medium(=[^&]*)?|^utm_medium(=[^&]*)?&?/g,""),e=e.replace(/utm_source(=[^&]*)?|^utm_source(=[^&]*)?&?/g,""),e=e.replace(/utm_name(=[^&]*)?|^utm_name(=[^&]*)?&?/g,""),e=e.replace("&&",""),e=e.replace("?&","?"),e.endsWith("&")&&(e=e.slice(0,-1));else if(o.includes("ebay.co")){e=o.split("?")[0];let n=w(o);n._nkw&&(e+="?_nkw="+n._nkw)}else if(o.includes("soundcloud.com/"))e=o.split("?")[0];else if(o.includes("instagram.com/"))e=o.split("?")[0];else if(o.includes("youtube.com/")){e=o.split("?")[0];let n=w(o);n.si&&delete n.si;let l="";for(let d in n)l+=d+"="+n[d][0]+"&";e+="?"+l}else if(o.includes("youtu.be/")){e=o.split("?")[0];let n=w(o);n.si&&delete n.si;let l="";for(let d in n)l+=d+"="+n[d][0]+"&";e+="?"+l}e&&(e.endsWith("?")&&(e=e.slice(0,-1)),m=m.replace(o,e))}),i[1].content=m})},onStop(){u.unpatchAll()}};r(k);
