(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),l=a.n(i),c=a(63),o=a(64),s=a(62),m=a(13),u=a(6),p=a(7),h=a(9),v=a(8),g=a(10),d=a(65),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.searchTerm.trim())return!1;a.props.history.push("/search/".concat(a.state.searchTerm)),a.setState({searchTerm:""})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleChange,placeholder:"Search movie"}))}}]),t}(n.Component),E=Object(d.a)(f),b=a(11),N=a.n(b),y=a(61),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={trending:void 0,loading:!0},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=b0994f6029743a2f030a3fed34413897").then(function(t){var a=t.data.results;e.setState({trending:a,loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"trending"},this.state.loading?r.a.createElement("div",{className:"loader"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Trending "),r.a.createElement("div",{className:"movie-list"},this.state.trending.map(function(e){return r.a.createElement(y.a,{to:"/movie/".concat(e.id),key:e.id},r.a.createElement("div",null,r.a.createElement("img",{alt:e.original_title,src:"http://image.tmdb.org/t/p/w342/".concat(e.poster_path),className:"movie-img"}),r.a.createElement("p",{className:"movie-title"},e.original_title)))}))))}}]),t}(n.Component),w=(a(57),function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(E,null),r.a.createElement(_,null))}),M=a(28),O=a.n(M),j=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",{className:"center"},"Error :( Get back to ",r.a.createElement(y.a,{to:"/"},"homepage")))},k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={singleMovie:void 0,error:!1,loading:!0},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;N.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=b0994f6029743a2f030a3fed34413897&language=en-US&append_to_response=credits")).then(function(t){var a=t.data;e.setState({singleMovie:a,loading:!1})}).catch(function(t){console.log("error: "+t),e.setState({error:!0})})}},{key:"render",value:function(){return this.state.error?r.a.createElement(j,null):r.a.createElement("div",{className:"singleMovie"},this.state.loading?r.a.createElement("div",{className:"loader"}):r.a.createElement(r.a.Fragment,null,null!==this.state.singleMovie.backdrop_path&&r.a.createElement("div",{className:"bg",style:{background:"linear-gradient(rgba(0, 0, 0, 0), rgba(27, 33, 47, 0.9)), url(http://image.tmdb.org/t/p/w1280/".concat(this.state.singleMovie.backdrop_path,") top center / cover no-repeat")}}),r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"poster"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185/".concat(this.state.singleMovie.poster_path),className:"poster-img",alt:this.state.singleMovie.original_title})),r.a.createElement("div",{className:"movie-details"},r.a.createElement("p",{className:"movie-details-date"},this.state.singleMovie.release_date),r.a.createElement("h1",null,this.state.singleMovie.original_title),0!==this.state.singleMovie.vote_average&&r.a.createElement("div",{className:"star"},r.a.createElement(O.a,{name:"rate2",editing:!1,starCount:10,value:this.state.singleMovie.vote_average,emptyStarColor:"000"}),r.a.createElement("span",null,this.state.singleMovie.vote_average," / 10")),r.a.createElement("div",null,r.a.createElement("ul",{className:"genres"},this.state.singleMovie.genres.map(function(e){return r.a.createElement("li",null,e.name)})))),r.a.createElement("div",{className:"overview"},r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,this.state.singleMovie.overview)),0!==this.state.singleMovie.credits.cast.length&&r.a.createElement("div",{className:"cast"},r.a.createElement("h3",null,"Cast"),r.a.createElement("ul",{className:"cast_list"},this.state.singleMovie.credits.cast.slice(0,10).filter(function(e){return e.profile_path}).map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("img",{className:"cast_img",src:"http://image.tmdb.org/t/p/w185/".concat(e.profile_path),alt:e.original_title}),r.a.createElement("p",{className:"actor-title"},e.character),r.a.createElement("p",null,e.name))}))))))}}]),t}(r.a.Component),S=a(18),C=a(29),T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={movies:{},page:1,loading:!0},a.getMovie=function(){var e=a.props.match.params.term;return N.a.get("https://api.themoviedb.org/3/search/movie?api_key=b0994f6029743a2f030a3fed34413897&language=en-US&query=".concat(e,"&page=").concat(a.state.page,"&include_adult=false"))},a.performSearch=function(){a.getMovie().then(function(e){var t=e.data;a.setState({movies:t,loading:!1})})},a.performSearchMore=function(){a.getMovie().then(function(e){var t=e.data;a.setState({movies:Object(C.a)({},t,{results:Object(S.a)(a.state.movies.results).concat(Object(S.a)(t.results))}),loading:!1})})},a.loadMore=function(){a.setState(function(e,t){return{page:e.page+1}},function(){return a.performSearchMore()})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"componentDidUpdate",value:function(e){var t=this;e.match.params.term!==this.props.match.params.term&&this.setState(function(e){return{page:1}},function(){return t.performSearch()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(E,null),this.state.loading?r.a.createElement("div",{className:"loader"}):r.a.createElement(r.a.Fragment,null,0===this.state.movies.results.length?r.a.createElement("p",null,"No movies found"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,'Results for "',this.props.match.params.term,'"'),r.a.createElement("div",{className:"movie-list"},this.state.movies.results.filter(function(e){return e.poster_path}).map(function(e){return r.a.createElement(y.a,{to:"/movie/".concat(e.id),key:e.id},r.a.createElement("div",null,r.a.createElement("img",{alt:e.original_title,src:"http://image.tmdb.org/t/p/w342/".concat(e.poster_path),className:"movie-img"}),r.a.createElement("p",{className:"movie-title"},e.original_title)))})))),r.a.createElement("div",{className:"load"},this.state.movies.page<this.state.movies.total_pages&&r.a.createElement("div",{className:"load-button",onClick:this.loadMore},"Load more")))}}]),t}(r.a.Component),D=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{path:"/",component:w,exact:!0}),r.a.createElement(s.a,{path:"/movie/:movieId",component:k}),r.a.createElement(s.a,{path:"/search/:term",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(function(){return r.a.createElement(D,null)},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.2de3e1da.chunk.js.map