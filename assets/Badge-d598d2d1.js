import{j as e}from"./index-e4c2e406.js";import"./AccordionHeader-44503cb8.js";import{c as s,d as o}from"./Progress-2c935e24.js";import"./jsx-runtime-dbc7f551.js";const d=t=>e.jsxs(e.Fragment,{children:[e.jsx(s,Object.assign({title:"DK"},t)),e.jsx(s,Object.assign({title:"A"},t)),e.jsx(s,Object.assign({title:"M"},t)),e.jsx(s,Object.assign({title:"FR"},t))]});function n(t){const i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{children:"Badges"}),`
`,e.jsx(i.p,{children:"Badges are used to display some info about the specific element like: count etc."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:d.bind({})})}),`
`,e.jsx(i.h2,{children:"API"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-jsx",children:`import { Badge } from 'artific-ui/Badge';
`})}),`
`,e.jsx(i.h2,{children:"Badge Group"}),`
`,e.jsxs(i.p,{children:["If you want to group the badges together use ",e.jsx(i.code,{children:"BadgeGruop"}),". ",e.jsx(i.code,{children:"BadgeGroup"})," has same props as ",e.jsx(i.code,{children:"Badge"})," which act as global ",e.jsx(i.code,{children:"props"})," for its children"]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Badge Group",children:e.jsxs(o,{children:[e.jsx(s,{theme:"primary",title:"REACT"}),e.jsx(s,{theme:"secondary",title:"NEXTJS"}),e.jsx(s,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},title:"JAVASCRIPT"})]})})}),`
`,e.jsx(i.h2,{children:"Badges Theme"}),`
`,e.jsxs(i.p,{children:["If you want to use a different theme for ",e.jsx(i.code,{children:"Badge"})," use the ",e.jsx(i.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(i.code,{children:"primary"}),"|",e.jsx(i.code,{children:"secondary"}),"|",e.jsx(i.code,{children:"dark"}),"|",e.jsx(i.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsxs(i.p,{children:["You can also use ",e.jsx(i.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badges Theme",children:[e.jsx(s,{theme:"primary",title:"DK"}),e.jsx(s,{theme:"secondary",title:"DK"}),e.jsx(s,{theme:"dark",title:"DK"}),e.jsx(s,{theme:"light",title:"DK"}),e.jsx(s,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},title:"DK"})]})}),`
`,e.jsx(i.h2,{children:"Badge Size"}),`
`,e.jsxs(i.p,{children:["you can use a ",e.jsx(i.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(i.p,{children:["Set ",e.jsx(i.code,{children:"size"})," prop with the value of (",e.jsx(i.code,{children:"xs"}),"|",e.jsx(i.code,{children:"sm"}),"|",e.jsx(i.code,{children:"md"}),"|",e.jsx(i.code,{children:"lg"}),",",e.jsx(i.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(i.code,{children:"theme"})," or ",e.jsx(i.code,{children:"layout"})]}),`
`,e.jsxs(i.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(i.code,{children:"xs"}),"|",e.jsx(i.code,{children:"sm"}),"|",e.jsx(i.code,{children:"md"}),"|",e.jsx(i.code,{children:"lg"}),",",e.jsx(i.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badge Size",children:[e.jsx(s,{size:"xl",title:"XL"}),e.jsx(s,{size:"lg",title:"LG"}),e.jsx(s,{size:"md",title:"MD"}),e.jsx(s,{size:"sm",title:"SM"}),e.jsx(s,{size:"xs",title:"XS"})]})}),`
`,e.jsx(i.h2,{children:"Badge Layouts"}),`
`,e.jsx(i.p,{children:"Badge Has basic five layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(i.p,{children:["Set ",e.jsx(i.code,{children:"layout"})," prop with the value of (",e.jsx(i.code,{children:"default"}),"|",e.jsx(i.code,{children:"rounded"}),"|",e.jsx(i.code,{children:"no-radius"}),"|",e.jsx(i.code,{children:"pill"}),",",e.jsx(i.code,{children:"circular"}),")"]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badge Layouts",children:[e.jsx("h5",{children:"Badge Layouts"}),e.jsx(s,{title:"DK",layout:"default"}),e.jsx(s,{title:"DK",layout:"rounded"}),e.jsx(s,{title:"DK",layout:"no-radius"}),e.jsx(s,{title:"DK",layout:"pill"}),e.jsx(s,{title:"DK",layout:"circular"})]})}),`
`,e.jsx(i.h2,{children:"Badge Variants"}),`
`,e.jsxs(i.p,{children:["Artific UI provides a ",e.jsx(i.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(i.p,{children:["Set ",e.jsx(i.code,{children:"variant"})," prop with the value of (",e.jsx(i.code,{children:"default"}),"|",e.jsx(i.code,{children:"dot"}),"|",e.jsx(i.code,{children:"outline"}),"). you can mix them with different supported ",e.jsx(i.code,{children:"theme"})," or ",e.jsx(i.code,{children:"layout"})]}),`
`,e.jsx(i.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Badge Variants",children:[e.jsx("h5",{children:"Badge Variants"}),e.jsx(s,{title:"DK",variant:"default"}),e.jsx(s,{title:"DK",variant:"outline"}),e.jsx(s,{variant:"dot"})]})})]})}function a(t={}){const{wrapper:i}=t.components||{};return i?e.jsx(i,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{d as Template,a as default};
