<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Page Title' }}</title>
    {{-- <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/smea-icon.png" />
    <link rel="icon" type="image/png" href="./assets/img/smea-icon.png" /> --}}
    @vite('resources/css/app.css')
    @livewireStyles
    @vite(['resources/js/app.js'])
</head>
<body>
    
    {{ $slot }}

    @livewireScriptConfig
</body>
</html>
