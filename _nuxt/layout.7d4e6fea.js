import{U as r,ab as p,a as m,bL as y,H as c,u as f,bM as l,bN as d,bO as u,p as L,a6 as _}from"./entry.3afca6ad.js";const b=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(o,t){const e=await l[o.name]().then(a=>a.default||a);return()=>_(e,t.attrs,t.slots)}}),v=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(o,t){const e=p("_route"),a=e===m()?y():e,n=c(()=>f(o.name)??a.meta.layout??"default");return()=>{const s=n.value&&n.value in l,i=a.meta.layoutTransition??d;return u(L,s&&i,{default:()=>u(b,s&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}});export{v as _};
