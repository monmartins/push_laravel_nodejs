<?php

namespace PushNotificationLaravel\Http\Controllers;

use Illuminate\Http\Request;
use RedisFacade;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return view('home');
    }

    public function notification()
    {
        $redis = RedisFacade::connection();
        $redis->publish('notification','New notification');
    }
}
