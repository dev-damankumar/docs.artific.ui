import{j as n}from"./index-3abe8670.js";import"./AccordionHeader-c383cff1.js";import{B as e,S as i}from"./Progress-55df51bb.js";import"./jsx-runtime-c09dc11e.js";const r=t=>{n.jsxs("div",{children:[n.jsxs("h5",{children:["Without ",n.jsx("code",{children:"Space"})," component"]}),n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"}),n.jsx(e,{children:"Button 5"}),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs("h5",{children:["With ",n.jsx("code",{children:"Space"})," component"]}),n.jsxs(i,Object.assign({},t,{children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"}),n.jsx(e,{children:"Button 5"})]})),n.jsx("br",{}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs("h5",{children:[n.jsx("code",{children:"wrap:false"})," component"]}),n.jsxs(i,Object.assign({wrap:!1},t,{children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"}),n.jsx(e,{children:"Button 5"}),n.jsx(e,{children:"Button 5"})]}))]})};function c(t){const s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{children:"Spaces"}),`
`,n.jsx(s.p,{children:"A Space Helps you to set the spacing of its children in a flexible way. It Avoids components clinging together and set a unified space."}),`
`,n.jsxs(s.p,{children:["By Default all the items will wrap if content overflows to make it not wrap the items set ",n.jsx(s.code,{children:"wrap"})," prop to ",n.jsx(s.code,{children:"false"})]}),`
`,n.jsx("div",{children:n.jsx("div",{name:"Default",children:r.bind({})})}),`
`,n.jsx(s.h2,{children:"API"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-jsx",children:`import { Space } from 'artific-ui/Space';
`})}),`
`,n.jsx(s.h2,{children:"Space Gap"}),`
`,n.jsxs(s.p,{children:["A ",n.jsx(s.code,{children:"gap"})," prop is used to define how much spacing the children should have."]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"gap"})," prop value can be any number donating the px unit to define gap or it can be a tuple [number,number]"]}),`
`,n.jsxs(s.p,{children:["donation ",n.jsx(s.code,{children:"horizontal"})," spacing and ",n.jsx(s.code,{children:"verticle"})," spacing respectively"]}),`
`,n.jsx("div",{children:n.jsxs("div",{name:"Space Gap",children:[n.jsxs("div",{children:[n.jsxs(i,{gap:30,children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"}),n.jsx(e,{children:"Button 5"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(i,{gap:[30,0],children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"}),n.jsx(e,{children:"Button 5"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(i,{gap:[0,30],children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"}),n.jsx(e,{children:"Button 5"}),n.jsx(e,{children:"Button 5"})]})]}),n.jsx(s.p,{children:";"})]})}),`
`,n.jsx(s.h2,{children:"Space Direction"}),`
`,n.jsxs(s.p,{children:["A ",n.jsx(s.code,{children:"direction"})," prop is used to define on which direction the spacing should be applied. by default it applies on ",n.jsx(s.code,{children:"both"})]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"direction"})," prop values can be : (",n.jsx(s.code,{children:"horizontal"}),",",n.jsx(s.code,{children:"verticle"}),",",n.jsx(s.code,{children:"both"}),")"]}),`
`,n.jsx("div",{children:n.jsxs("div",{name:"Space Direction",children:[n.jsxs("div",{children:[n.jsxs(i,{children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(i,{direction:"horizontal",children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(i,{direction:"vertical",children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 3"})]})]}),n.jsx(s.p,{children:";"})]})}),`
`,n.jsx(s.h2,{children:"Space Align"}),`
`,n.jsxs(s.p,{children:["A ",n.jsx(s.code,{children:"align"})," prop is used to align items on y-axis. its is same as the ",n.jsx(s.code,{children:"align-item"})," css property"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"align"})," prop value can be: (",n.jsx(s.code,{children:"start"}),"|",n.jsx(s.code,{children:"end"}),"|",n.jsx(s.code,{children:"baseline"}),"|",n.jsx(s.code,{children:"center"}),")"]}),`
`,n.jsx("div",{children:n.jsxs("div",{name:"Space Align",children:[n.jsxs("div",{children:[n.jsxs(i,{children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{style:{height:"100px"},children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(i,{align:"end",children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{style:{height:"100px"},children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsxs(i,{align:"center",children:[n.jsx(e,{children:"Button 1"}),n.jsx(e,{style:{height:"100px"},children:"Button 2"}),n.jsx(e,{children:"Button 3"}),n.jsx(e,{children:"Button 4"})]})]}),n.jsx(s.p,{children:";"})]})})]})}function x(t={}){const{wrapper:s}=t.components||{};return s?n.jsx(s,Object.assign({},t,{children:n.jsx(c,t)})):c(t)}export{r as Template,x as default};
