<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel-React</title>
    </head>
    <body>
        <div>
            <li class="bgc-2 ">
                <a class="color-black d-block" href="{{route('movies.index')}}">
                    Películas
                </a>
            </li>
        </div>
    </body>
</html>
