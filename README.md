# svelte-lazyload


## Getting Started

Look at the example folder for a simple setup.


## Installation

```
npm i svelte-lazyload
```

## Usage

```
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

The element inside the `<LazyLoad>` tags must be able to render immediately or at least have a min-height. If not, during loading time, your component will have a height of 0, making the component under it visible and repeating the same problem. This cascade will end up loading more components than you wish for.
