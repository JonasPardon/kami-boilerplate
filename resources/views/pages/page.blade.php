@extends('layouts.master')s

@section('title', $page->title . ' | ')

@section('content')
    {!! $page->parsed_body !!}
@endsection
