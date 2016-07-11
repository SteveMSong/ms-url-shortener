# API Basejump: URL Shortener Microservice
## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

```js
https://ms-url-shortener.herokuapp.com/addURL/https://www.yahoo.com 
https://ms-url-shortener.herokuapp.com/addURL/http://freecodecamp.com/news
```

## Example creation output:

```js
{ "original_url": "https://www.yahoo.com", "short_url": "https://ms-url-shotener.herokuapp.com/shorten" }
```

## Usage:

`https://ms-url-shortener.herokuapp.com/shorten`

### Will redirect to:

`https://www.yahoo.com`
