(this.webpackJsonpsyed_adeeb_test=this.webpackJsonpsyed_adeeb_test||[]).push([[0],{24:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a.n(c),r=a(11),s=a.n(r),o=(a(38),a(39),a(9)),u=a(10),l=a(26),d=a(7),j=a(27),b=a.n(j),h="FETCH_ANIME_REQUEST",m="FETCH_ANIME_SUCCESS",p="FETCH_ANIME_FAILURE ",g="PAGE_RESET",O="SEARCH_TEXT",f=function(){return{type:h}},v=function(e){return{type:m,payload:e}},x=function(e){return{type:p,payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,t=arguments.length>1?arguments[1]:void 0;return console.log("fetchAnimeData -> query",t),console.log("fetchAnimeData -> limit",e),function(a){a(f()),b.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&limit=").concat(e)).then((function(e){var t=e.data.results;a(v(t))})).catch((function(e){var t=e.message;a(x(t))}))}},D={animeData:[],isLoading:!1,page:15,searchText:void 0,error:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case m:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,animeData:t.payload,page:e.page+16,error:""});case g:return Object(d.a)(Object(d.a)({},e),{},{animeData:[],page:16});case O:return Object(d.a)(Object(d.a)({},e),{},{searchText:t.payload});case p:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,animeData:[],error:t.payload});default:return e}},N=Object(u.c)(E,Object(u.a)(l.a));N.subscribe((function(){return console.log("subscribe  : ",N.getState())}));var L=N,T=a(28),_=a(29),A=a(32),C=a(30),S=(a(24),a(31)),F=(a(62),function(e){var t=Object(c.useState)(""),a=Object(S.a)(t,2),i=a[0],r=a[1],s=Object(o.c)(),u=function(e){e.preventDefault(),""!==i?(s({type:g}),s(function(e){return{type:O,payload:e}}(i)),s(y(15,i))):alert("Please enter the search string")};return Object(n.jsxs)("div",{className:"header-container",children:[Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("form",{onSubmit:u,children:[Object(n.jsx)("input",{type:"text",value:i,onChange:function(e){r(e.target.value)}}),Object(n.jsx)("button",{className:"button-container",onClick:u,children:"Go"})]})}),Object(n.jsxs)("p",{className:"url-text",children:["Requesting: ","https://api.jikan.moe/v3/search/anime?q=".concat(i)]})]})}),k=i.a.memo(F),M=a(66),H=a(67),I=a(68),P=(a(63),function(e){var t=e.animeDataList,a=t.length?t.map((function(e){return Object(n.jsx)(M.a,{children:Object(n.jsxs)(H.a,{className:"anime-card",children:[Object(n.jsx)("img",{className:"anime-image",src:e.image_url,alt:"img"}),Object(n.jsx)("div",{className:"anime-name",children:e.title})]},e.mal_id)})})):Object(n.jsx)("h1",{children:"No Data Found..."});return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(I.a,{className:"container-list",children:a})})}),R=a.p+"static/media/loader.01b22d1d.gif",q=function(e){Object(A.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){e.props.fetchAnimeData()},e.loadMoreHandler=function(){var t=e.props,a=t.searchText,n=t.page;e.props.fetchAnimeData(n,a)},e}return Object(_.a)(a,[{key:"render",value:function(){var e=this.props,t=e.animeDataList,a=e.isLoading;return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"sub-container",children:[Object(n.jsx)(k,{}),a?Object(n.jsx)("img",{class:"img-container",src:R,alt:"loading"}):Object(n.jsx)(P,{animeDataList:t}),Object(n.jsx)("button",{className:"load-button",onClick:this.loadMoreHandler,children:"Load more..."})]})})}}]),a}(c.PureComponent),w=Object(o.b)((function(e){return{animeDataList:e.animeData,isLoading:e.isLoading,page:e.page,searchText:e.searchText}}),(function(e){return{fetchAnimeData:function(t,a){return e(y(t,a))}}}))(q);var U=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{store:L,children:Object(n.jsx)(w,{})})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),B()}},[[64,1,2]]]);
//# sourceMappingURL=main.182db69a.chunk.js.map