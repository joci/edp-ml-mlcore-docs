import{_ as p}from"./nuxt-link.51e3dc00.js";import{a as u,w as g,q as x,o as a,b as r,e as t,F as h,r as m,f as d,t as n,h as f,i as y,u as b}from"./entry.3afca6ad.js";const v={class:"container px-6 py-4 mx-auto"},w={class:"grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-2"},k={class:"flex items-center"},S={class:"-mt-0.5"},C=t("span",{class:"rounded-full bg-gray-400 px-2.5 py-1.5 mx-2 text-xs font-large text-white"},"1",-1),L={class:"p-4 text-xs"},N={class:"flex items-center sticky"},B={class:"pl-4 text-[10px] pr-3"},A={__name:"CardList",props:{title:{type:String,default:"Default title"},number:{type:String,default:"0"},updated:{type:String,default:"updated Date"}},async setup(D){let s,o;const{path:i}=u(),l=i.substring(i.lastIndexOf("/")+1),c=([s,o]=g(()=>x("docs").only(["updated","title","description","tag","_path","_dir","_id"]).where({tag:l}).find()),s=await s,o(),s);return(V,q)=>{const _=p;return a(),r("div",null,[t("section",v,[t("div",w,[(a(!0),r(h,null,m(b(c),e=>(a(),r("div",{key:e.title,class:"p-4 bg-white border-1 border-gray-50 rounded-lg shadow-sm dark:bg-gray-800"},[t("div",k,[t("h4",S,[C,d(" "+n(e.title),1)])]),t("div",L,[t("p",null,n(e.description),1)]),t("div",null,[t("div",N,[t("div",B,n(e.updated),1),f(_,{href:e._path,class:"bg-sky-500 hover:bg-sky-300 text-white text-xs rounded-lg py-2 px-4"},{default:y(()=>[d(" Start ")]),_:2},1032,["href"])])])]))),128))])])])}}};export{A as default};