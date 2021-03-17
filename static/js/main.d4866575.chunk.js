(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__8p-Tn",Modal:"Modal_Modal__PeHcL"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3OTC_"}},15:function(e,t,a){e.exports={Button:"Button_Button__19KI7"}},20:function(e,t,a){},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),l=(a(20),a(11)),i=a(3),s=a(4),u=a(6),h=a(5),g=(a(21),a(22),a(13)),m=a.n(g),d=a(7),b=a.n(d),f=a(0),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;e.props.onSubmit({query:a}),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(f.jsx)("header",{className:b.a.Searchbar,children:Object(f.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,name:"query",value:e}),Object(f.jsx)("button",{type:"submit",className:b.a.button,children:Object(f.jsx)("span",{className:b.a.button_label,children:"Search"})})]})})}}]),a}(n.Component);var p=function(e,t){var a="https://pixabay.com/api/?key=".concat("19851067-7c860a6e23d51e90a164e5364","&q=").concat(e,"&image_type=photo&orientation=horizontal&page=").concat(t,"&per_page=12");return fetch(a).then((function(e){return e.json()})).then((function(e){return e.hits}))},j=a(14),O=a.n(j),v=a(9),_=a.n(v),x=function(e){var t=e.elem,a=e.getImgForModal,n=t.webformatURL,r=t.tags;return Object(f.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:n,alt:r,className:_.a.image,onClick:function(){return a({elem:t})}})})},S=a(10),w=a.n(S),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){"IMG"===t.target.nodeName&&"Escape"!==t.code||e.props.hideModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:w.a.Overlay,onClick:this.closeModal,children:Object(f.jsx)("div",{className:w.a.Modal,children:this.props.children})})}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={elem:"",showModal:!1},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e.getImgForModal=function(t){var a=t.elem;a&&(e.toggleModal(),e.setState({elem:a}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.showModal,n=t.elem,r=this.props.gallery,o=n.tags,c=n.largeImageURL;return Object(f.jsxs)("ul",{className:O.a.ImageGallery,children:[r.map((function(t){return Object(f.jsx)(x,{elem:t,getImgForModal:e.getImgForModal},t.id)})),a&&Object(f.jsx)(I,{hideModal:this.toggleModal,children:Object(f.jsx)("img",{src:c,alt:o})})]})}}]),a}(n.Component),L=a(15),q=a.n(L),N=function(e){var t=e.getNewPage;return Object(f.jsx)("button",{className:q.a.Button,type:"button","data-action":"load-more",onClick:t,children:"Show more"})},k=function(e){var t=e.fetchLength,a=e.galleryLength,n=e.searchQuery,r=e.error;if(r)return Object(f.jsx)("p",{children:"Oops! Something wrong! Request error!"});if(!r){if(!n)return Object(f.jsx)("p",{children:"Please enter image name!"});if(n){if(!t&&!a)return Object(f.jsx)("p",{children:"Image not found. Please check your request and try again!"});if(t<12&&a>0)return Object(f.jsx)("p",{children:"These are all the images we found!"})}}return Object(f.jsx)("p",{})};k.defaultProps={fetchLength:0,galleryLength:0,searchQuery:"",error:!1};var C=k,B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,gallery:[],fetchLength:null,isLoading:!1,error:!1},e.getQueryByForm=function(t){var a=t.query;e.setState({query:a,page:1,gallery:[]})},e.setNewPage=function(t){t.preventDefault(),e.setState((function(e){return{page:e.page+1}}))},e.fetchImagesByQuery=function(t,a){var n=e.state,r=n.query,o=n.page;e.setState({isLoading:!0}),p(r,o).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t)),fetchLength:t.length}}))})).catch((function(t){e.setState({error:!0})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,r=a.page;(n!==t.query||n===t.query&&r!==t.page)&&this.fetchImagesByQuery(n)}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.fetchLength,n=e.isLoading,r=e.query,o=e.error;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Search image"}),Object(f.jsx)(y,{onSubmit:this.getQueryByForm}),Object(f.jsx)(M,{gallery:t}),n&&Object(f.jsx)(m.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3}),12===a&&!n&&Object(f.jsx)(N,{getNewPage:this.setNewPage}),Object(f.jsx)(C,{fetchLength:a,galleryLength:t.length,searchQuery:r,error:o})]})}}]),a}(n.Component);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1yKEF",SearchForm:"Searchbar_SearchForm__4w_4z",button:"Searchbar_button__2wf8h",button_label:"Searchbar_button_label__2TRaB",input:"Searchbar_input__2ab8B"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__dLnIm",image:"ImageGalleryItem_image__1Wgm6"}}},[[44,1,2]]]);
//# sourceMappingURL=main.d4866575.chunk.js.map