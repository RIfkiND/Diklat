@foreach($berkas as $item)
    <ul>
        @foreach($item->photo_berkas as $image)
            <li>
                <img src="{{ asset( $image->url) }}" alt="Image" class="w-32 h-32">
            </li>
        @endforeach
    </ul>
@endforeach
