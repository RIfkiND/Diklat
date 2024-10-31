<?php

use Illuminate\Support\Facades\Route;

Route::get('/', App\Livewire\Home::class)->name('home');
Route::get('/test' , App\Livewire\Test::class)->name("test");
