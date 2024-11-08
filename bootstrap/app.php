<?php

use App\Http\Middleware\RoleAuthMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            \Illuminate\Cookie\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Illuminate\Session\Middleware\AuthenticateSession::class,
        ]);
        $middleware->use([
          \Illuminate\Http\Middleware\TrustHosts::class,
          \Illuminate\Http\Middleware\TrustProxies::class,
          \Illuminate\Http\Middleware\HandleCors::class,
          \Illuminate\Session\Middleware\StartSession::class,
          \Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
          \Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance::class,
          \Illuminate\Http\Middleware\ValidatePostSize::class,
          \Illuminate\Foundation\Http\Middleware\TrimStrings::class,
          \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
      ]);


        $middleware->alias([
          'role' => RoleAuthMiddleware::class,
      ]);

      $middleware->validateCsrfTokens(except: [
        'resend/*',
        'send/email'
    ]);
    })

    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
