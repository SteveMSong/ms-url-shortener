<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <meta charset="UTF-8">
    <link rel="shortcut icon" href="http://learnersdictionary.com/media/ld/images/legacy_print_images/rubberstREV.gif">
</head>
<body>
<div class="container">
    <h1 class="header">API Basejump: URL Shortener Microservice</h1>
    <p>By Steve M Song</p>
    <blockquote>User Stories:
        <ol>
            <li>I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
            </li>
            <li>If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</li>
            <li>When I visit that shortened URL, it will redirect me to my original link.</li>
        </ol>
    </blockquote>
    <h2>example usage:</h2>
    <code>https://ms-url-shortener.herokuapp.com/addURL/https://www.yahoo.com </code><br>
    <code>https://ms-url-shortener.herokuapp.com/addURL/http://freecodecamp.com/news</code>
    <h2>example output:</h2>
    <code>{ "original_url": "https://www.yahoo.com", "short_url": "https://ms-url-shotener.herokuapp.com/shorten" }</code><br>
    <code>{"unix": null, "natural": null}</code>
    <h2>usage:</h2>
    <code>https://ms-url-shortener.herokuapp.com/shorten</code><br>
    <h2>will redirect to:</h2>
    <code>https://www.yahoo.com</code><br>
</div>
</body>
</html>
