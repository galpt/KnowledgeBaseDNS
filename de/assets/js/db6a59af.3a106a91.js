"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[773],{4137:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),o=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=o(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=o(r),g=i,h=p["".concat(l,".").concat(g)]||p[g]||c[g]||a;return r?t.createElement(h,s(s({ref:n},u),{},{components:r})):t.createElement(h,s({ref:n},u))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,s[1]=d;for(var o=2;o<a;o++)s[o]=r[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1191:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return c}});var t=r(3117),i=r(102),a=(r(7294),r(4137)),s=["components"],d={title:"DNS-Filterung",sidebar_position:1},l=void 0,o={unversionedId:"general/dns-filtering",id:"general/dns-filtering",title:"DNS-Filterung",description:"Der einfachste Weg, die Vorteile der DNS-Filterung zu entdecken, ist die Installation von AdGuard Werbeblocker oder das Ausprobieren von AdGuard DNS. Wenn Sie DNS auf Netzwerkebene filtern m\xf6chten, ist AdGuard Home Ihr Werkzeug",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/de/general/dns-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DNS-Filterung",sidebar_position:1},sidebar:"sidebar",previous:{title:"\xdcberblick",permalink:"/KnowledgeBaseDNS/de/"},next:{title:"Syntax der DNS-Filterregeln",permalink:"/KnowledgeBaseDNS/de/general/dns-filtering-syntax"}},u={},c=[{value:"Was bedeutet DNS?",id:"was-bedeutet-dns",level:2},{value:"Wie funktioniert die DNS-Filterung?",id:"wie-funktioniert-die-dns-filterung",level:2},{value:"DNS-Server",id:"dns-server",level:3},{value:"Lokale DNS-Blocklisten",id:"lokale-dns-blocklisten",level:3},{value:"DNS-Filterung im Vergleich zur Netzwerkfilterung",id:"dns-filterung-im-vergleich-zur-netzwerkfilterung",level:2}],p={toc:c};function g(e){var n=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Der einfachste Weg, die Vorteile der DNS-Filterung zu entdecken, ist die Installation von AdGuard Werbeblocker oder das Ausprobieren von AdGuard DNS. Wenn Sie DNS auf Netzwerkebene filtern m\xf6chten, ist AdGuard Home Ihr Werkzeug"),(0,a.kt)("p",{parentName:"div"},"Quick links: ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome#getting-started"},"Get AdGuard Home"),", ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Try AdGuard DNS")))),(0,a.kt)("p",null,"Um die DNS-Filterung besser zu verstehen, sollten wir zun\xe4chst die Frage \u201eWas ist DNS?\u201d beantworten."),(0,a.kt)("h2",{id:"was-bedeutet-dns"},"Was bedeutet DNS?"),(0,a.kt)("p",null,"DNS steht f\xfcr \u201eDomain Name System\u201c und hat die Aufgabe, die Namen von Websites in etwas zu \xfcbersetzen, das Browser verstehen k\xf6nnen, n\xe4mlich in IP-Adressen. Jedes Mal, wenn Sie eine Website aufrufen, sendet Ihr Browser eine Anfrage an einen speziellen Servertyp (DNS-Server). Dieser Server pr\xfcft den angeforderten Domainnamen und antwortet mit einer entsprechenden IP-Adresse. Sehr schematisch l\xe4sst sich das so darstellen:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"Wie DNS funktioniert"})),(0,a.kt)("p",null,"Das Gleiche gilt nat\xfcrlich f\xfcr alle Anwendungen und Programme, die Webanfragen senden, nicht nur f\xfcr Browser."),(0,a.kt)("h2",{id:"wie-funktioniert-die-dns-filterung"},"Wie funktioniert die DNS-Filterung?"),(0,a.kt)("p",null,"Wenn Sie eine der AdGuard-Apps verwenden, die DNS-Filterung unterst\xfctzen, fungiert sie als Puffer zwischen Ihrem Ger\xe4t und dem DNS-Server. Alle DNS-Anfragen, die Ihre Browser oder Anwendungen senden, werden zuerst von AdGuard verarbeitet. Wenn Sie den Standard-DNS-Server Ihres Internetanbieters verwenden, ist Ihr DNS-Datenverkehr wahrscheinlich nicht verschl\xfcsselt und anf\xe4llig f\xfcr Snooping (herumspionieren) und Hijacking (entf\xfchren). AdGuard verschl\xfcsselt alle Ihre DNS-Anfragen, bevor sie Ihr Ger\xe4t verlassen, so dass kein Angreifer Zugriff auf deren Inhalt erhalten kann. Dar\xfcber hinaus kann AdGuard Anfragen an Werbe-, Tracking- und/oder Erwachsenen-Domains erkennen und sie zu verwerfen, anstatt sie an den DNS-Server weiterzuleiten. Mehr dazu ",(0,a.kt)("a",{parentName:"p",href:"#local-dns-blocklists"},"sp\xe4ter"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"So funktioniert DNS-Filterung"})),(0,a.kt)("p",null,"DNS-Filterung ist ein leistungsf\xe4higes Werkzeug und wird von allen wichtigen AdGuard-Anwendungen unterst\xfctzt: ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-windows/overview.html"},"AdGuard f\xfcr Windows"),", ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-mac/overview.html"},"AdGuard f\xfcr Mac"),", ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard f\xfcr Android")," und ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-ios/overview.html"},"AdGuard f\xfcr iOS"),"."),(0,a.kt)("p",null,"Die DNS-Filterung kann in zwei separate Funktionen unterteilt werden: Verschl\xfcsselung und Umleitung des DNS-Verkehrs zu DNS-Servern und lokale Sperrung bestimmter Domains durch Anwendung von DNS-Blocklisten."),(0,a.kt)("h3",{id:"dns-server"},"DNS-Server"),(0,a.kt)("p",null,"Es stehen Tausende von DNS-Servern zur Auswahl, die sich alle durch ihre Eigenschaften und ihren Zweck unterscheiden. Die meisten geben einfach die IP-Adresse der angefragten Domain zur\xfcck, aber einige haben zus\xe4tzliche Funktionen: Sie sperren Werbung, Tracking, Domains f\xfcr Erwachsene und so weiter. Heutzutage verwenden alle gro\xdfen DNS-Server ein oder mehrere zuverl\xe4ssige Verschl\xfcsselungsprotokolle: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"DNS service"),", and it was the world's first to offer the brand new and very promising ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC")," encryption protocol. AdGuard stellt verschiedene Server f\xfcr unterschiedliche Ziele bereit. Dieses Diagramm veranschaulicht die Funktionsweise der Sperr-Server von AdGuard:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,a.kt)("p",null,"Andere DNS-Anbieter arbeiten m\xf6glicherweise anders. Informieren Sie sich daher \xfcber sie, bevor Sie sich auf diesen oder einen anderen DNS-Server festlegen. Die Liste der beliebtesten DNS-Anbieter finden Sie unter ",(0,a.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/general/dns-providers"},"in diesem Artikel"),". Alle AdGuard-Anwendungen, die DNS-Funktionen unterst\xfctzen, verf\xfcgen \xfcber eine Liste von DNS-Servern, aus der Sie ausw\xe4hlen k\xf6nnen, oder erlauben sogar die Auswahl eines beliebigen benutzerdefinierten DNS-Servers, den Sie w\xfcnschen."),(0,a.kt)("h3",{id:"lokale-dns-blocklisten"},"Lokale DNS-Blocklisten"),(0,a.kt)("p",null,"Aber wenn Sie sich nur auf DNS-Server verlassen, um Ihren DNS-Verkehr zu filtern, verlieren Sie jegliche Flexibilit\xe4t. Wenn der gew\xe4hlte Server eine Domain sperrt, k\xf6nnen Sie nicht auf diese zugreifen. Mit AdGuard m\xfcssen Sie nicht einmal einen bestimmten DNS-Server konfigurieren, um den DNS-Verkehr zu filtern. Alle AdGuard-Produkte erm\xf6glichen den Einsatz von DNS-Blocklisten, seien es einfache Hosts-Dateien oder Listen mit der ",(0,a.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/de/general/dns-filtering-syntax"},"erweiterten Syntax"),". Sie funktionieren \xe4hnlich wie normale Blocklisten: Wenn eine DNS-Anfrage mit einer der Regeln in der aktiven Filterliste \xfcbereinstimmt, wird sie sperrt. To be more precise, the DNS server gives a non-routable IP address for such a request."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In AdGuard for iOS, first you have to enable ",(0,a.kt)("em",{parentName:"p"},"Advanced mode")," in ",(0,a.kt)("em",{parentName:"p"},"Settings")," in order to get access to DNS blocking."))),(0,a.kt)("p",null,"You can add as many custom blocklists as you wish. For instance, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS filter"),'. It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.'),(0,a.kt)("p",null,"There are hundreds of different DNS blocklists, you can look for them ",(0,a.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"here"),"."),(0,a.kt)("h2",{id:"dns-filterung-im-vergleich-zur-netzwerkfilterung"},"DNS-Filterung im Vergleich zur Netzwerkfilterung"),(0,a.kt)("p",null,"Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/"},"this article"),"."),(0,a.kt)("p",null,"First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pros of DNS filtering:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Auf einigen Plattformen ist dies die einzige M\xf6glichkeit, eine systemweite Filterung zu erreichen. Unter iOS unterst\xfctzt beispielsweise nur der Safari-Browser das Sperren von Inhalten im bekannten Sinne, f\xfcr alles andere gibt es nur DNS-Filterung."),(0,a.kt)("li",{parentName:"ol"},"Einige Formen der Verfolgung (wie ",(0,a.kt)("a",{parentName:"li",href:"https://adguard.com/blog/cname-tracking.html"},"CNAME-cloaked tracking"),") k\xf6nnen nur durch DNS-Filterung bek\xe4mpft werden."),(0,a.kt)("li",{parentName:"ol"},"Die Phase der Verarbeitung einer DNS-Anfrage ist die fr\xfcheste Phase, in der Sie m\xf6glicherweise mit einer Anzeige oder einem Tracker umgehen k\xf6nnen. Dies hilft, ein wenig Akkulaufzeit und Datenverkehr zu sparen.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cons of DNS filtering:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"DNS filtering is \"coarse\", which means it doesn't remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes)."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Example of difference"})," ",(0,a.kt)("em",{parentName:"p"},"An example of the difference between DNS filtering and network filtering"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules."))),(0,a.kt)("p",null,"We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible."))}g.isMDXComponent=!0}}]);