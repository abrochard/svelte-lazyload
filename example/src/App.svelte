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
