function u(t){window.enmity.plugins.registerPlugin(t)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const a=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function r(t){return window.enmity.patcher.create(t)}var y="NoTracking",p="1.1.2",g="Remove tracking parameters from links you send",h=[{name:"iCraze",id:"883412614699446283"}],v={name:y,version:p,description:g,authors:h};const c=r("no-tracking");function d(t){let i={},l=t.replace(/.*?\?/,"").split("&");for(let s in l){let m=l[s].split("=")[0];!m.length||(typeof i[m]=="undefined"&&(i[m]=[]),i[m].push(l[s].split("=")[1]))}return i}const f={...v,onStart(){c.before(a,"sendMessage",(t,i,l)=>{var s;let m=i[1].content;const w=/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;(s=m.match(w))==null||s.forEach(e=>{let o;if(e.match(/http(s)?:\/\/(www\.)?(twitter\.com|x\.com)\//gi))o=e.split("t=")[0].split("s=")[0];else if(e.includes("reddit.com/"))o=e.replace(/utm_medium(=[^&]*)?|^utm_medium(=[^&]*)?&?/g,""),o=o.replace(/utm_source(=[^&]*)?|^utm_source(=[^&]*)?&?/g,""),o=o.replace(/utm_name(=[^&]*)?|^utm_name(=[^&]*)?&?/g,""),o=o.replace("&&",""),o=o.replace("?&","?"),o.endsWith("&")&&(o=o.slice(0,-1));else if(e.includes("ebay.co")){o=e.split("?")[0];let n=d(e);n._nkw&&(o+="?_nkw="+n._nkw)}else if(e.includes("soundcloud.com/"))o=e.split("?")[0];else if(e.includes("instagram.com/"))o=e.split("?")[0];else if(e.includes("youtube.com/")){o=e.split("?")[0];let n=d(e);n.v&&(o+="?v="+n.v),n.t&&(o+="&t="+n.t),n.list&&(o+="&list="+n.list)}else if(e.includes("youtu.be/")){o=e.split("?")[0];let n=d(e);n.t&&(o+="?t="+n.t)}o&&(o.endsWith("?")&&(o=o.slice(0,-1)),m=m.replace(e,o))}),i[1].content=m})},onStop(){c.unpatchAll()}};u(f);
