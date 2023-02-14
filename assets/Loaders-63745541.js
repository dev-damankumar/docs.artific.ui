import{j as e}from"./index-e4c2e406.js";import{k as f}from"./AccordionHeader-44503cb8.js";import{B as t}from"./Progress-2c935e24.js";import"./jsx-runtime-dbc7f551.js";const p=`<style data-ati-loader-style>
:root {
	--loader-secondary-bg: white;
	--dark: hsla(218, 36%, 18%, 1);
}

.ati-loader-loading {
	overflow: hidden
}

.ati-loader-modal {
	--dark: hsla(218, 36%, 18%, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: var(--dark);
	align-items: center;
	justify-content: center;
	z-index: var(--z-index-modal-backdrop);
	display: none;
}

.ati-loader-modal.ati-loader-modal-show {
	display: flex
}

.ati-loader-modal.ati-loader-modal-hide {
	display: none
}

@-webkit-keyframes load1 {
	0%, 100%, 80% {
		box-shadow: 0 0;
		height: 4em
	}
	40% {
		box-shadow: 0 -2em;
		height: 5em
	}
}

@keyframes load1 {
	0%, 100%, 80% {
		box-shadow: 0 0;
		height: 4em
	}
	40% {
		box-shadow: 0 -2em;
		height: 5em
	}
}

.ati-loader-light {
	background: #f6f8fad1 !important;
}

.ati-loader-modal.ati-loader-blur {
	backdrop-filter: blur(10px);
}

.ati-loader-modal.ati-loader-solid {
	--dark: hsla(218, 36%, 18%, 1);
	background: var(--dark);
}

.ati-loader-modal.ati-loader-solid.ati-loader-light {
	background: white !important;
}

/*Sizes*/
.ati-loader-xl {
	transform: scale(2);
}

.ati-loader-lg {
	transform: scale(1.5);
}

.ati-loader-sm {
	transform: scale(.6);
}

.ati-loader-xs {
	transform: scale(.4);
}

.ati-loader-light .ati-loader {
	--loader-secondary-bg: var(--dark)
}

.ati-loader {
	height: 50px;
	width: 50px;
}

.ati-loader:before,
.ati-loader:after {
	border-radius: 50%;
	content: "";
	display: block;
	height: 20px;
	width: 20px;
}

.ati-loader:before {
	animation: ball1 1s infinite;
	background-color: var(--loader-secondary-bg);
	box-shadow: 30px 0 0 var(--primary);
	margin-bottom: 10px;
}

.ati-loader:after {
	animation: ball2 1s infinite;
	background-color: var(--primary);
	box-shadow: 30px 0 0 var(--loader-secondary-bg);
}

@keyframes ball1 {
	0% {
		box-shadow: 30px 0 0 var(--primary);
	}
	50% {
		box-shadow: 0 0 0 var(--primary);
		margin-bottom: 0;
		transform: translate(15px, 15px);
	}
	100% {
		box-shadow: 30px 0 0 var(--primary);
		margin-bottom: 10px;
	}
}

@keyframes ball2 {
	0% {
		box-shadow: 30px 0 0 var(--loader-secondary-bg);
	}
	50% {
		box-shadow: 0 0 0 var(--loader-secondary-bg);
		margin-top: -20px;
		transform: translate(15px, 15px);
	}
	100% {
		box-shadow: 30px 0 0 var(--loader-secondary-bg);
		margin-top: 0;
	}
}
</style>`,j=(i,s,a)=>`<div style='${i}' data-ati-loader-modal class="${s} ati-loader-modal"><div class="ati-loader ${a}"></div></div>`,b=i=>{let s="";return i.variant!=="default"&&(s+=` ati-loader-${i.variant}`),i.theme!=="dark"&&(s+=` ati-loader-${i.theme}`),s},o=function(){function i(s=!0){if(typeof window>"u")return;this.dismissible=!1,this.variant="default",this.className="",this.style="",this.size="md",this.theme="dark";function a(r){const h=`ati-loader-${f()}`,u=b({variant:this.variant,size:this.size,theme:this.theme}),g=this.size!=="md"?`ati-loader-${this.size}`:"",c=j(this.style||"",`${this.className} ${h} ${u}`,g);s&&(document.querySelector("[data-ati-loader-style]")||document.head.insertAdjacentHTML("beforeend",p));const m=document.querySelector(`[data-ati-loader-modal].${h}`);return m||document.body.insertAdjacentHTML("afterend",c),r&&(m&&m.remove(),document.body.insertAdjacentHTML("afterend",c)),this.selector=document.querySelector(`[data-ati-loader-modal].${h}`),c}const d=a.call(this,!1);this.show=()=>{this.selector?(this.dismissible&&this.selector&&this.selector.addEventListener("click",()=>{this.hide()}),document.body.classList.add("ati-loader-loading"),this.selector.classList.remove("ati-loader-modal-hide"),this.selector.classList.add("ati-loader-modal-show")):(document.body.innerHTML+=d,this.selector=document.querySelector(".loader-modal"),this.dismissible&&this.selector&&this.selector.addEventListener("click",()=>{this.hide()}),this.show())},this.hide=()=>{this.selector&&(document.body.classList.remove("ati-loader-loading"),this.selector.classList.remove("ati-loader-modal-show"),this.selector.classList.add("ati-loader-modal-hide"))},this.destroy=()=>{this.selector&&(document.body.classList.remove("ati-loader-loading"),this.selector.remove(),this.selector=null)},this.config=r=>(this.dismissible=r.dismissible||!1,this.variant=r.variant||"default",this.className=r.className||"",this.style=r.style||"",this.size=r.size||"md",this.theme=r.theme||"dark",a.call(this,!0),!0)}return function(a=!0){return new i(this)}}(),v=i=>{const s=o();return e.jsx(e.Fragment,{children:e.jsx(t,{onClick:()=>{s.show("Hi ! This is a message")},children:"Submit"})})},y=i=>{const s=o();return s.config({dismissible:!0}),e.jsxs("div",{children:[e.jsx(t,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader"}),e.jsx("br",{})]})},w=i=>{const s=o(),a=o();return s.config({dismissible:!0,theme:"dark"}),a.config({dismissible:!0,theme:"light"}),e.jsxs("div",{children:[e.jsx(t,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader Dark"}),e.jsx(t,{onClick:()=>{a.show("Hi ! This is a message")},children:"Loader Light"}),e.jsx("br",{})]})},k=i=>{const s=o(),a=o(),d=o(),r=o(),n=o(),l=o();return s.config({dismissible:!0}),a.config({dismissible:!0,variant:"blur"}),d.config({dismissible:!0,variant:"solid"}),r.config({dismissible:!0,theme:"light"}),n.config({dismissible:!0,theme:"light",variant:"blur"}),l.config({dismissible:!0,theme:"light",variant:"solid"}),e.jsxs("div",{children:[e.jsx(t,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader Default"}),e.jsx(t,{onClick:()=>{a.show("Hi ! This is a message")},children:"Default Loader Blur"}),e.jsx(t,{onClick:()=>{d.show("Hi ! This is a message")},children:"Default Loader Solid"}),e.jsx(t,{onClick:()=>{r.show("Hi ! This is a message")},children:"Light Loader Default"}),e.jsx(t,{onClick:()=>{n.show("Hi ! This is a message")},children:"Light Loader Blur"}),e.jsx(t,{onClick:()=>{l.show("Hi ! This is a message")},children:"Light Loader Solid"})]})},L=i=>{const s=o(),a=o(),d=o(),r=o(),n=o();return o(),s.config({dismissible:!0,size:"xl"}),a.config({dismissible:!0,size:"lg"}),d.config({dismissible:!0,size:"md"}),r.config({dismissible:!0,size:"sm"}),n.config({dismissible:!0,size:"xs"}),e.jsxs("div",{children:[e.jsx(t,{onClick:()=>{s.show("Hi ! This is a message")},children:"Loader XL"}),e.jsx(t,{onClick:()=>{a.show("Hi ! This is a message")},children:"Loader LG"}),e.jsx(t,{onClick:()=>{d.show("Hi ! This is a message")},children:"Default"}),e.jsx(t,{onClick:()=>{r.show("Hi ! This is a message")},children:"Loader SM"}),e.jsx(t,{onClick:()=>{n.show("Hi ! This is a message")},children:"Loader XS"})]})};function x(i){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Loaders"}),`
`,e.jsx(s.p,{children:"useLoader is used to show that a process is happening on the background and tells user to wait."}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Loaders",children:v.bind({})})}),`
`,e.jsx(s.h2,{children:"API"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-jsx",children:`import { useLoader } from 'artific-ui';
`})}),`
`,e.jsxs(s.p,{children:[e.jsx("b",{children:"useLoader()"})," instance has following methods to use:"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"config()"})," to set the config and supported props to the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"show()"})," method is used to show the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hide()"}),"  method is used to hide the loader."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"destroy()"}),"  method is used to remove the loader from the DOM."]}),`
`,`
`,e.jsx(s.h1,{children:"Dismissible"}),`
`,e.jsx(s.p,{children:"Dismissible Loader can be used to close the loader when user clicks on it."}),`
`,e.jsxs(s.p,{children:["provide ",e.jsx(s.code,{children:"{dismissible: true}"})," to the ",e.jsx(s.code,{children:"config"})," method when instantiating loader."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Dismissible",children:y.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Loader Themes"}),`
`,e.jsxs(s.p,{children:["If you want to use a different theme for ",e.jsx(s.code,{children:"Loader"})," use the ",e.jsx(s.code,{children:"theme"})," prop in ",e.jsx(s.code,{children:"config"})," method to set the theme"]}),`
`,e.jsxs(s.p,{children:["Note: Loader only have basic twi themes ie. (",e.jsx(s.code,{children:"dark"}),"|",e.jsx(s.code,{children:"light"}),"). you can use either of them."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Loader Themes",children:w.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Variants"}),`
`,e.jsxs(s.p,{children:["Artific UI provides a ",e.jsx(s.code,{children:"variant"})," prop to make you choose how your component ui should look like"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"variant"})," prop with the value of (",e.jsx(s.code,{children:"default"}),"|",e.jsx(s.code,{children:"blur"}),"|",e.jsx(s.code,{children:"solid"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})]}),`
`,e.jsx(s.p,{children:`Note: Different components might have addition or different variant based on there configuration and flexibility.\r
you can check out the props table to see which variant is supported by the component`}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Variants",children:k.bind({})})}),`
`,`
`,e.jsx(s.h1,{children:"Sizes"}),`
`,e.jsxs(s.p,{children:["you can use a ",e.jsx(s.code,{children:"size"})," prop to define the size of your components"]}),`
`,e.jsxs(s.p,{children:["Set ",e.jsx(s.code,{children:"size"})," prop with the value of (",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). you can mix them with different supported ",e.jsx(s.code,{children:"theme"})," or ",e.jsx(s.code,{children:"layout"})]}),`
`,e.jsxs(s.p,{children:["Note: Mostly all the components have the same size values ie.(",e.jsx(s.code,{children:"xs"}),"|",e.jsx(s.code,{children:"sm"}),"|",e.jsx(s.code,{children:"md"}),"|",e.jsx(s.code,{children:"lg"}),",",e.jsx(s.code,{children:"xl"}),"). but some of the components might have additional sizes."]}),`
`,e.jsx("div",{children:e.jsx("div",{name:"Sizes",children:L.bind({})})})]})}function S(i={}){const{wrapper:s}=i.components||{};return s?e.jsx(s,Object.assign({},i,{children:e.jsx(x,i)})):x(i)}export{y as DissmissableTemplate,L as SizesTemplate,v as Template,w as ThemeTemplate,k as VariantsTemplate,S as default};
