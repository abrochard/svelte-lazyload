[![npm][npm]][npm-url]
[![CircleCI](https://circleci.com/gh/abrochard/svelte-lazyload.svg?style=svg)](https://circleci.com/gh/abrochard/svelte-lazyload)

# svelte-lazyload

Lazy loading library using the svelte framework


## Getting Started

Look at the [example folder](https://github.com/abrochard/svelte-lazyload/tree/master/example) for a simple setup.


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

## Nota bene

The `id` prop is mandatory for the `<LazyLoad>` tag as it will be used to uniquely observe the element via an intersection observer.

The element inside the `<LazyLoad>` tags must be able to render immediately or at least have a min-height. If not, during loading time, your component will have a height of 0, making the component under it visible and repeating the same problem. This cascade will end up loading more components than you wish for.


[npm]: https://img.shields.io/npm/v/svelte-lazyload.svg
[npm-url]: https://www.npmjs.com/package/svelte-lazyload
