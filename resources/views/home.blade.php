@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                    <push-notification-form-component>

                        {!! Form::open(array('route' => 'notification', 'method' => 'get')) !!}

                        @csrf
                        <button id="button_form" type="button" class="btn btn-primary" >Push Notification</button>

                        {!!  Form::close() !!}

                    </push-notification-form-component>


                </div>
            </div>
        </div>
    </div>
</div>
@endsection
