<script>

 import { key } from './util.js';
 import { setContext } from 'svelte';

 let cb = {};

 const config = {
     root: null,
     rootMargin: '0px',
     /* rootMargin: '100px 0px', */
     threshold: 0.01
 };

 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             /* console.log('loading', entry.target.id); */

             cb[entry.target.id]();

             observer.unobserve(entry.target);
         }
     });
 }, config);

 setContext(key, {
	 registerObserver: (el, fct) => {
         cb[el.id] = fct;
         observer.observe(el);
     }
 });

</script>

<slot></slot>
