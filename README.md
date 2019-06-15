[![npm][npm]][npm-url]
[![CircleCI](https://circleci.com/gh/abrochard/svelte-lazyload.svg?style=svg)](https://circleci.com/gh/abrochard/svelte-lazyload)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e0c2bdd5-72a8-45d8-8981-0150ad0667b8/deploy-status)](https://app.netlify.com/sites/svelte-lazyload/deploys)

# svelte-lazyload

Lazy loading library using the svelte framework


## Getting Started

Look at the [example folder](https://github.com/abrochard/svelte-lazyload/tree/master/example) for a simple setup or go to the [live demo page](https://svelte-lazyload.netlify.com/).


## Installation

```bash
npm i svelte-lazyload
```

## Usage

```html
<script>

 import { LazyLoadContainer, LazyLoad } from 'svelte-lazyload';

 let statuses = [
     200,
     201,
     202,
     203,
     204,
     206,
     207,
     208,
     226,
     300,
     301,
     400,
     401,
     403,
     500
 ];

</script>

<LazyLoadContainer>
    {#each statuses as status, i}
    <LazyLoad id="{i}">
        <div style="min-height: 500px">
            <img src='https://httpstatusdogs.com/img/{status}.jpg' alt={status}/>
        </div>
    </LazyLoad>
    {/each}
</LazyLoadContainer>
```

### Tuning

`svelte-lazyload` uses an intersection observer to determine when an element comes into the view port. It is possible to tune that behavior in accordance to the [official doc](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer) and pass a prop `threshold` to the `LazyLoadContainer`. This number between 0 and 1 determines at which percentage of the target's visibility the element will be rendered. For example, a value of 0.5 means that the placeholder element has to be halfway visible for it to be swapped out for the child element of the `LazyLoad` tags. The default is 0.01.

## Nota bene

The `id` prop is mandatory for the `<LazyLoad>` tag as it will be used to uniquely observe the element via an intersection observer.

The element inside the `<LazyLoad>` tags must be able to render immediately or at least have a min-height. If not, during loading time, your component will have a height of 0, making the component under it visible and repeating the same problem. This cascade will end up loading more components than you wish for.


[npm]: https://img.shields.io/npm/v/svelte-lazyload.svg
[npm-url]: https://www.npmjs.com/package/svelte-lazyload
