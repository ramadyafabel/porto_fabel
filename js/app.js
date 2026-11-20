// ===== APP: routing halaman, efek kursor, scroll reveal =====
function App(){const ok=["home","about","portfolio","contact"];const get=()=>{const h=location.hash.slice(1);return ok.includes(h)?h:"home"};
const [pg,setPg]=useState(get);const [chat,setChat]=useState(false);const [ready,setReady]=useState(false);const [busy,setBusy]=useState(false);
useEffect(()=>{const rs=document.documentElement.style;
const mv=e=>{rs.setProperty("--x",e.clientX+"px");rs.setProperty("--y",e.clientY+"px");const t=e.target.closest&&e.target.closest(".tilt");if(t){const r=t.getBoundingClientRect();t.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*14+"deg");t.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*14+"deg")}};
const lv=e=>{const t=e.target.closest&&e.target.closest(".tilt");if(t&&!t.contains(e.relatedTarget)){t.style.removeProperty("--rx");t.style.removeProperty("--ry")}};
const sc=()=>{const h=document.documentElement.scrollHeight-innerHeight;rs.setProperty("--p",(h>0?scrollY/h*100:0)+"%")};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
const scan=()=>document.querySelectorAll("main .box:not(.rv),main .pj:not(.rv)").forEach((e,i)=>{e.classList.add("rv");e.style.transitionDelay=(i%4)*70+"ms";io.observe(e)});
const mo=new MutationObserver(scan);mo.observe(document.body,{childList:true,subtree:true});scan();
addEventListener("pointermove",mv);addEventListener("pointerout",lv);addEventListener("scroll",sc,{passive:true});
return()=>{removeEventListener("pointermove",mv);removeEventListener("pointerout",lv);removeEventListener("scroll",sc);mo.disconnect();io.disconnect()}},[]);
useEffect(()=>{const f=()=>{setPg(get());window.scrollTo(0,0)};addEventListener("hashchange",f);return()=>removeEventListener("hashchange",f)},[]);
const go=p=>{location.hash=p};const P={home:Home,about:About,portfolio:Portfolio,contact:Contact}[pg];
if(!ready)return html`<${Loader} done=${()=>setReady(true)}/>`;
return html`<div><div id="glow" aria-hidden="true"></div><div class="scan" aria-hidden="true"></div><div id="bar" aria-hidden="true"></div>
<nav><a class="logo" href="#home">RAMADYA.DEV</a><ul>${[["home","Home"],["about","About"],["portfolio","Portfolio"],["contact","Contact"]].map(x=>html`<li key=${x[0]}><a class=${"l"+(pg===x[0]?" on":"")} href=${"#"+x[0]}>${x[1]}</a></li>`)}</ul><span class="mono st"><i></i>SYS ONLINE</span></nav>
<main key=${pg} class="pg"><${P} go=${go}/>${pg==="home"&&html`<${Marquee}/>`}</main><footer class="text-center text-neutral-500 font-mono text-xs py-8">© 2026 Ramadya Fabel Putra Athallah. All Rights Reserved.</footer>
${chat&&html`<${Chat} onClose=${()=>setChat(false)} onBusy=${setBusy}/>`}<${Buddy} open=${chat} busy=${busy} onToggle=${()=>setChat(!chat)}/></div>`}
ReactDOM.createRoot(document.getElementById("root")).render(html`<${App}/>`);
