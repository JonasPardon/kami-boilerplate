<?php

namespace App\Http\Controllers;

use JonasPardon\KamiCore\Repositories\PageRepository;

class PageController extends Controller
{
    protected $pageRepository;

    public function __construct(PageRepository $pageRepository)
    {
        $this->pageRepository = $pageRepository;
    }

    public function show($slug)
    {
        $page = $this->pageRepository
            ->show($slug);

        if (!$page) {
            return abort('404');
        }

        $data = [
            'page' => $page,
        ];

        return view('pages.page', $data);
    }
}
