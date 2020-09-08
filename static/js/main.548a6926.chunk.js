(this["webpackJsonpshopify-shoppies"]=this["webpackJsonpshopify-shoppies"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=a(2),s=a(17),l=a(4),u=a.n(l);a(42);var m=function(e){var t=e.handleInput,a=e.search;return r.a.createElement("section",{className:"search-wrap"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),r.a.createElement("input",{type:"text",placeholder:"Search for a movie...",className:"search-bar ",onChange:t,onKeyPress:a}))};var p=function(e){var t=e.choices,a=e.closePopup,n=e.addFavourite;return console.log(n),r.a.createElement("section",{className:"popup"},r.a.createElement("button",{className:"btn-close",onClick:a},r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.Title," ",r.a.createElement("span",null,"(",t.Year,")")),r.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating," ",r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})),r.a.createElement("p",{className:"extra"},"LANGUAGE: ",t.Language),r.a.createElement("p",{className:"extra"},"GENRE: ",t.Genre),r.a.createElement("div",{className:"plot"},r.a.createElement("img",{src:t.Poster}),r.a.createElement("p",null,t.Plot)),r.a.createElement("button",{className:"btn nom",onClick:function(){return n(t.imdbID)},disabled:"true"},"Nominate Me")))};var h=function(e){var t=e.result,a=e.openPopup;return r.a.createElement("div",{className:"movieinfo",onClick:function(){return a(t.imdbID)}},r.a.createElement("img",{src:t.Poster}),r.a.createElement("h4",null,t.Title,r.a.createElement("span",null,"View Details")))};var d=function(e){var t=e.results,a=e.openPopup;return r.a.createElement("section",{className:"dashboard"},t.map((function(e){return r.a.createElement(h,{key:e.imdbID,result:e,openPopup:a})})))},f=(a(43),a(15)),v=a(16),E=a(3),b=a(19),N=a(18),g=function(e){Object(b.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={opened:!1},n.nominate=n.nominate.bind(Object(E.a)(n)),n}return Object(v.a)(a,[{key:"nominate",value:function(){var e=this.state.opened;this.setState({opened:!e})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.title,t.children,this.state.opened);return a?"Hide Favourites":"Show Favourites",r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"nomination",onClick:this.nominate},r.a.createElement("i",{className:"fa fa-trophy","aria-hidden":"true"}),"Nominations"),a&&r.a.createElement("div",{className:"boxcontent"},r.a.createElement("h2",null,"My Nominations"),this.props.favourites.map((function(t){return r.a.createElement("div",{className:"flexfav",key:t.imdbID},r.a.createElement("div",{className:"myfav"},r.a.createElement("img",{src:t.Poster}),r.a.createElement("button",{onClick:e.removeFavourites},"Remove")))}))))}}]),a}(n.Component);var j=function(){var e=this,t=Object(n.useState)({content:"",results:[],favourites:[],choices:{}}),a=Object(s.a)(t,2),c=a[0],o=a[1],l="http://www.omdbapi.com/?apikey=dfe6d885",h=function(e){u()(l+"&i="+e).then((function(e){var t=e.data;console.log(t),o((function(e){return Object(i.a)(Object(i.a)({},e),{},{choices:t})}))}))},f=function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{choices:{}})}))};return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"nomination",onClick:h},r.a.createElement("i",{className:"fa fa-trophy","aria-hidden":"true"}),"Nominations"),r.a.createElement(g,{title:"Show Favourites",closePopup:f,favourites:c.favourites,removeFavourties:function(t){var a=e.state.favourites;a.splice(t,1),e.setState({favourites:a})}}),r.a.createElement("h1",null,"The Shoppies:"),r.a.createElement("h3",null,"Movie awards for Entrepreneurs")),r.a.createElement("main",null,r.a.createElement(m,{handleInput:function(e){var t=e.target.value;o((function(e){return Object(i.a)(Object(i.a)({},e),{},{content:t})}))},search:function(e){"Enter"===e.key&&u()(l+"&s="+c.content).then((function(e){var t=e.data.Search;o((function(e){return Object(i.a)(Object(i.a)({},e),{},{results:t})}))}))}}),r.a.createElement(d,{results:c.results,openPopup:h}),"undefined"!=typeof c.choices.Title&&r.a.createElement(p,{choices:c.choices,closePopup:f,addFavourite:function(e){u()(l+"&i="+e).then((function(e){var t=e.data,a=c.favourites;a.push(t),o((function(e){return Object(i.a)(Object(i.a)({},e),{},{favourites:a})}))}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.548a6926.chunk.js.map