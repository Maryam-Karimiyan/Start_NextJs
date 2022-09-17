# public folder is for pulic resources like imgs,svgs,...
# pages makes routes and pages

# index.js is the file that get served we see in the browser
# _app.js is where we can define the layout for our app
# api is where we can define apis for our app



## define dynamic routes by ==>>   [id].js or [antthingid].js
## by using routes the route first try to find a page and if not found then a dynamic rout

## [...params].js for catching all the files in the url: for exp=>
        /docs/......... => anything in here shows the same page.

http://localhost:3000/docs/feture1/concept1/exp1 in this url the params is an array of feture1 , concept1 , exp1

## [[...params]].js for not having error for just (/docs)

# Link Component just for client side routing
### for going to another website use a tags



# Pre-rendering
1.static generation
2. server-side rendering


1)static generation:
        the html pages are generated at build time

a)without data
b)with data

a)By default, Next.js pre-renders pages using Static Generation without fetching data.

b)Some pages require fetching external data for pre-rendering. There are two scenarios, and one or both might apply. In each case, you can use these functions that Next.js provides:

Your page content depends on external data: Use getStaticProps.
Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).

## getStaticProps only in server side not client.only in pages not components.should return an object. it runs at build time
