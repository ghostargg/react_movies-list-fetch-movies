(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(7),s=i.n(c),a=(i(13),i(8)),n=i(2),r=i(1),o=(i(14),i(15),i(16),i(0)),l=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:null===t||void 0===t?void 0:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:null===t||void 0===t?void 0:t.title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[null===t||void 0===t?void 0:t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:null===t||void 0===t?void 0:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(l,{movie:e},e.imdbId)}))})},j=(i(18),i(6)),m=i.n(j),b=function(e){var t=e.query,i=e.setQuery,c=e.onFormSubmit,s=e.isLoading,a=e.hasError,n=e.setHasError,r=e.isMovieFound,d=e.movie,j=e.addMovie;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:function(e){return c(e)},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",value:t,onChange:function(e){n(!1),i(e.target.value)},className:m()("input",{"is-danger":a})})}),a&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":s}),disabled:!t,children:d?"Search again":"Find a movie"})}),r&&Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return j(d)},children:"Add to the list"})})]})]}),d&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(l,{movie:d})]})]})};var u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),i=t[0],c=t[1],s=Object(r.useState)(""),l=Object(n.a)(s,2),j=l[0],m=l[1],u=Object(r.useState)(!1),v=Object(n.a)(u,2),h=v[0],O=v[1],f=Object(r.useState)(!1),x=Object(n.a)(f,2),p=x[0],g=x[1],N=Object(r.useState)(null),y=Object(n.a)(N,2),w=y[0],F=y[1],S=Object(r.useState)(!1),I=Object(n.a)(S,2),E=I[0],M=I[1],C=Object(r.useCallback)((function(){F(null),m(""),M(!1),g(!1)}),[]);return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(b,{movie:w,addMovie:function(e){e&&(i.find((function(t){return t.imdbId===e.imdbId}))||c((function(t){return[].concat(Object(a.a)(t),[e])})),C())},isMovieFound:E,hasError:p,setHasError:g,isLoading:h,query:j,setQuery:m,onFormSubmit:function(e){e.preventDefault(),O(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=8f031f2e","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(j).then((function(e){if("imdbID"in e){var t={title:e.Title,description:e.Plot,imgUrl:"N/A"!==e.Poster?e.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbId:e.imdbID,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID)};M(!0),F(t)}else g(!0)})).catch((function(){return g(!0)})).finally((function(){return O(!1)}))}})})]})};s.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0e19744b.chunk.js.map