@foreach($berkas as $item)
<div class="flex justify-center w-full h-full mt-5">
    <ul class="flex flex-col gap-4">
        @foreach($item->photo_berkas as $image)
            <li class="">
                <img src="{{ asset( $image->url) }}" alt="Image" class="w-[500px]">
            </li>
        @endforeach
    </ul>
</div>
@endforeach
