@extends('layouts.master')

@section('title', $page->title . ' | ')

@section('content')
    {!! $page->parsed_body !!}
@endsection
