<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="/css/app.css" rel="stylesheet">
    <!-- Styles -->
    @yield('styles')
</head>
<body>
    @yield('content')
    <!-- Scripts -->
    @yield('scripts')
</body>
</html>
