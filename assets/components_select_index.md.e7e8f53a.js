import{_ as h,o as B,c as M,a as _,w as g,b as n,d as t,r as E,V as f}from"./app.f68ae0bf.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{renderList:r,Fragment:i,openBlock:s,createElementBlock:l,resolveComponent:u,createBlock:k,withCtx:p,createVNode:c,createElementVNode:b}=f,y={class:"demo-button"};function C(e,o){const m=u("MOption"),v=u("MSelect");return s(),l("div",null,[b("div",y,[c(v,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},{default:p(()=>[(s(!0),l(i,null,r(e.options,a=>(s(),k(m,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])}const{ref:d}=f;return{render:C,...{setup(e,{expose:o}){o();const a={value:d(""),options:[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"},{value:"\u9009\u98793",label:"\u86B5\u4ED4\u714E"}],ref:d};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}}}()}},O=JSON.parse('{"title":"Select \u9009\u62E9\u5668\u63A7\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"components/select/index.md"}'),D=n("h1",{id:"select-\u9009\u62E9\u5668\u63A7\u4EF6",tabindex:"-1"},[t("Select \u9009\u62E9\u5668\u63A7\u4EF6 "),n("a",{class:"header-anchor",href:"#select-\u9009\u62E9\u5668\u63A7\u4EF6","aria-hidden":"true"},"#")],-1),S=n("p",null,"\u57FA\u7840\u7684\u9009\u62E9\u5668\u7ED3\u6784\u5C55\u793A\u3002",-1),x=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("MSelect")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("MOption")]),t(`
      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in options"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.label"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("MOption")]),n("span",{class:"token punctuation"},">")]),t(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("MSelect")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9EC4\u91D1\u7CD5'"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98792'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u53CC\u76AE\u5976'"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98793'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u86B5\u4ED4\u714E'"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function A(r,i,s,l,u,k){const p=E("render-demo-0"),c=E("demo");return B(),M("div",null,[D,S,_(c,{sourceCode:`<template>
  <div class="demo-button">
   <MSelect v-model="value">
    <MOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </MOption>
   </MSelect>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref('')
  const options = [{
    value: '\u9009\u98791',
    label: '\u9EC4\u91D1\u7CD5'
  }, {
    value: '\u9009\u98792',
    label: '\u53CC\u76AE\u5976'
  }, {
    value: '\u9009\u98793',
    label: '\u86B5\u4ED4\u714E'
  }]
<\/script>
`},{highlight:g(()=>[x]),default:g(()=>[_(p)]),_:1})])}var F=h(V,[["render",A]]);export{O as __pageData,F as default};
