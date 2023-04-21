import"./modulepreload-polyfill-3cfb730f.js";const n="https://rickandmortyapi.com/api/character",l=async a=>{const s=a?`${n}/${a}`:n;try{const c=await fetch(s);return a?await c.json():await c.json()}catch(c){console.log("Fetch Error: ",c);return}},h=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]??"/",A=async()=>{const a=h(),s=await l(a),{image:c,name:t,episode:e,status:m,species:_,gender:E,origin:p,location:g}=s,u=`
		<h5>Episodes: <span class="a-lead-characteristics">${e.length}</span></h5>
		<h5>Status: <span class="a-lead-characteristics">${m}</span></h5>
		<h5>Species: <span class="a-lead-characteristics">${_}</span></h5>
		<h5>Gender: <span class="a-lead-characteristics">${E}</span></h5>
		<h5>Origin: <span class="a-lead-characteristics">${p.name}</span></h5>
		<h5>Last Location: <span class="a-lead-characteristics">${g.name}</span></h5>
	`;return`
		<section class="g-main__character-details">
			<article class="m-card-details">
				<figures>
					<img src="${c}" alt="${t}" class="m-card-details__img" />
				</figures>
				<section class="m-card-details__info-container">
					<h2 class="m-card-details__name">${t}</h2>
					<article class="m-card-details__data-container">
						${u}
					</article>
				</section>
			</article>
		</section>
	`},r=()=>`
	<section>
		<h2 class="u-error-404">Error 404 🤔</h2>
	</section>
	`,T=a=>{const{id:s,image:c,name:t}=a;return`
		<article class="m-card m-card--primary">
			<a href="#/${s}/" class="m-card__link-container m-card--primary__link-container">
				<figure>
					<img src="${c}" alt="${t}" class="m-card__img" />
				</figure>
				<div class="m-card__character-name-container m-card--primary__character-name-container">
					<h2 class="m-card__character-name m-card--primary__character-name">${t}</h2>
				</div>
			</a>
		</article>
	`},$=async()=>{const a=await l(),s=a==null?void 0:a.results;return s?`
		<section class="g-main__characters">
			${s.map(e=>T(e)).join("")}
		</section>
	`:void 0},R=()=>`
		<section class="g-header__logo">
			<a href="./index.html">
				<h1>
					100tifi.co
				</h1>
			</a>
		</section>
		<nav class="g-header__nav">
			<a href="#/about">
				About
			</a>
		</nav>
	`,H=a=>a.length<=3?a==="/"?a:"/:id":`/${a}`,i=a=>document.querySelector(a),o={"/":$,"/:id":A},d=async()=>{const a=i("#header"),s=i("#main__content"),c=h(),t=H(c),e=o[t]?o[t]:r;a.innerHTML=R(),s.innerHTML=await e()??r()};window.addEventListener("load",d);window.addEventListener("hashchange",d);
