import{j as e,N as i,x as o}from"./index-98bc8b1e.js";const l=s=>e.jsx(i,{title:"This is tooltip",children:e.jsx(o,{children:"Default Tooltip"})});function n(s){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},s.components),{Meta:r}=t;return r||c("Meta",!0),e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Tooltip",component:i}),`
`,e.jsx(t.h1,{children:"Tooltip"}),`
`,e.jsx(t.p,{children:"Tooltips display informative text when users hover over, focus on, or tap an element."}),`
`,`
`,e.jsx("div",{children:e.jsx("div",{name:"Default",children:l.bind({})})}),`
`,e.jsx(t.h2,{children:"API"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Tooltip } from 'artific-ui/Tooltip';
`})}),`
`,e.jsx(t.h2,{children:"Tooltip Theme"}),`
`,e.jsxs(t.p,{children:["If you want to use a different theme for ",e.jsx(t.code,{children:"Tooltip"})," use the ",e.jsx(t.code,{children:"theme"}),` prop to set the theme\r
Note: All components have basic four themes ie. (`,e.jsx(t.code,{children:"primary"}),"|",e.jsx(t.code,{children:"secondary"}),"|",e.jsx(t.code,{children:"dark"}),"|",e.jsx(t.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsxs(t.p,{children:["You can also use ",e.jsx(t.code,{children:"colorScheme"})," prop to define a custom theme."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Tooltip Theme",children:[e.jsx(i,{title:"This is tooltip",children:e.jsx(o,{children:"Default Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{theme:"secondary",title:"This is tooltip",children:e.jsx(o,{children:"Secondary Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{theme:"dark",title:"This is tooltip",children:e.jsx(o,{children:"Dark Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{theme:"light",title:"This is tooltip",children:e.jsx(o,{children:"Light Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{colorScheme:{background:"linear-gradient(45deg, #e736f4, #673ab7)",backgroundColor:"#e736f4",color:"white"},title:"This is tooltip",children:e.jsx(o,{children:"Light Tooltip"})}),e.jsx("br",{}),e.jsx("br",{})]})}),`
`,e.jsx(t.h2,{children:"Tooltip Placements"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"placement"})," prop to set where the tooltip should appear"]}),`
`,e.jsxs(t.p,{children:["possible values are (",e.jsx(t.code,{children:"bottom"}),"|",e.jsx(t.code,{children:"bottom-start"}),"|",e.jsx(t.code,{children:"bottom-end"}),"|",e.jsx(t.code,{children:"top"}),"|",e.jsx(t.code,{children:"top-start"}),"|",e.jsx(t.code,{children:"top-end"}),"|",e.jsx(t.code,{children:"right"}),"|",e.jsx(t.code,{children:"right-start"}),"|",e.jsx(t.code,{children:"right-end"}),"|",e.jsx(t.code,{children:"bottom"}),"|",e.jsx(t.code,{children:"bottom-start"}),"|",e.jsx(t.code,{children:"bottom-end"}),")"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Tooltip Placements",children:[e.jsx(i,{variant:"arrow",placement:"bottom",title:"Bottom tooltip",children:e.jsx(o,{children:"Bottom Placement"})}),e.jsx(i,{variant:"arrow",placement:"bottom-start",title:"Bottom tooltip",children:e.jsx(o,{children:"Bottom Start Placement"})}),e.jsx(i,{variant:"arrow",placement:"bottom-end",title:"Bottom tooltip",children:e.jsx(o,{children:"Bottom End Placement"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{variant:"arrow",placement:"left",title:"Left tooltip",children:e.jsx(o,{style:{marginLeft:100},children:"Left Placement"})}),e.jsx(i,{variant:"arrow",placement:"left-start",title:"Left tooltip",children:e.jsx(o,{children:"Left Start Placement"})}),e.jsx(i,{variant:"arrow",placement:"left-end",title:"Left tooltip",children:e.jsx(o,{children:"Left End Placement"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{variant:"arrow",placement:"right",title:"Right tooltip",children:e.jsx(o,{children:"Right Placement"})}),e.jsx(i,{variant:"arrow",placement:"right-start",title:"Right tooltip",children:e.jsx(o,{children:"Right Start Placement"})}),e.jsx(i,{variant:"arrow",placement:"right-end",title:"Right tooltip",children:e.jsx(o,{children:"Right End Placement"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{variant:"arrow",placement:"top",title:"Top tooltip",children:e.jsx(o,{children:"Top Placement"})}),e.jsx(i,{variant:"arrow",placement:"top-start",title:"Top tooltip",children:e.jsx(o,{children:"Top Start Placement"})}),e.jsx(i,{variant:"arrow",placement:"top-end",title:"Top tooltip",children:e.jsx(o,{children:"Top End Placement"})})]})}),`
`,e.jsx(t.h2,{children:"Tooltip Layouts"}),`
`,e.jsx(t.p,{children:"Tooltip Has basic four layouts to choose from to define how you component's structure should look like."}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"layout"})," prop with the value of (",e.jsx(t.code,{children:"default"}),"|",e.jsx(t.code,{children:"rounded"}),"|",e.jsx(t.code,{children:"no-radius"}),"|",e.jsx(t.code,{children:"pill"}),")"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Note:"})," Different components might have addition layouts based on there configuration and flexibility. you can check out the props table to see which layout is supported by the component"]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Tooltip Layouts",children:[e.jsx(i,{layout:"default",title:"This is tooltip",children:e.jsx(o,{children:"Default Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{layout:"rounded",title:"This is tooltip",children:e.jsx(o,{children:"Rounded Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{layout:"no-radius",title:"This is tooltip",children:e.jsx(o,{children:"No Radius Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{layout:"pill",title:"This is tooltip",children:e.jsx(o,{children:"Pill Tooltip"})}),e.jsx("br",{}),e.jsx("br",{})]})}),`
`,e.jsx(t.h2,{children:"Tooltip Variants"}),`
`,e.jsxs(t.p,{children:["Artific UI provides a ",e.jsx(t.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"variant"})," prop with the value of (",e.jsx(t.code,{children:"default"}),"|",e.jsx(t.code,{children:"arrow"}),"). you can mix them with different supported ",e.jsx(t.code,{children:"theme"})," or ",e.jsx(t.code,{children:"layout"})]}),`
`,e.jsx(t.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Tooltip Variants",children:[e.jsx(i,{variant:"default",title:"This is tooltip",children:e.jsx(o,{children:"Default Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{variant:"arrow",title:"This is tooltip",children:e.jsx(o,{children:"Arrow Tooltip"})})]})}),`
`,e.jsx(t.h2,{children:"Tooltip Sizes"}),`
`,e.jsxs(t.p,{children:["you can use a ",e.jsx(t.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"size"})," prop with the value of (",e.jsx(t.code,{children:"xs"}),"|",e.jsx(t.code,{children:"sm"}),"|",e.jsx(t.code,{children:"md"}),"|",e.jsx(t.code,{children:"lg"}),",",e.jsx(t.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(t.code,{children:"theme"})," or ",e.jsx(t.code,{children:"layout"})]}),`
`,e.jsxs(t.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(t.code,{children:"xs"}),"|",e.jsx(t.code,{children:"sm"}),"|",e.jsx(t.code,{children:"md"}),"|",e.jsx(t.code,{children:"lg"}),",",e.jsx(t.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsxs("div",{name:"Tooltip Sizes",children:[e.jsx(i,{size:"xs",title:"This is tooltip",children:e.jsx(o,{children:"Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{size:"sm",title:"This is tooltip",children:e.jsx(o,{children:"Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{size:"md",title:"This is tooltip",children:e.jsx(o,{children:"Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{size:"lg",title:"This is tooltip",children:e.jsx(o,{children:"Tooltip"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(i,{size:"xl",title:"This is tooltip",children:e.jsx(o,{children:"Tooltip"})}),e.jsx("br",{}),e.jsx("br",{})]})})]})}function h(s={}){const{wrapper:t}=s.components||{};return t?e.jsx(t,Object.assign({},s,{children:e.jsx(n,s)})):n(s)}function c(s,t){throw new Error("Expected "+(t?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default,l as defaultTemplate};
