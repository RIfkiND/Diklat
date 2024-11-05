<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'peserta' => $request->user('peserta') ? [
                    'id' => $request->user('peserta')->id,
                    'name' => $request->user('peserta')->name,
                    'role' => 'peserta'
                ] : null,
                'admins' => $request->user('admins') ? [
                    'id' => $request->user('admins')->id,
                    'name' => $request->user('admins')->name,
                    'role' => 'admin'
                ] : null,
                'petugas' => $request->user('petugas') ? [
                    'id' => $request->user('petugas')->id,
                    'name' => $request->user('petugas')->name,
                    'role' => 'petugas'
                ] : null,
                'user' => $request->user('peserta') ?? $request->user('admins') ?? $request->user('petugas'),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
