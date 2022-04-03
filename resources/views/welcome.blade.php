@extends('layouts.GuestLayout')

@section('styles')
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

<style>
    body {
        font-family: 'Nunito', sans-serif;
    }
</style>
@endsection

@section('content')
<div id="app">
    <div >
        <hello-world/>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ mix('js/map.js') }}"></script>

@endsection
