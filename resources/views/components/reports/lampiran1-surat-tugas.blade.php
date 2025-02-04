@foreach($berkas as $item)
<div class="flex justify-center w-full h-full mt-5">
    <ul class="flex flex-col gap-4">
        
        <li class="">
            <a href="{{ $item->surat_tugas }}" class=" text-bold text-blue-500">liat surat tugas</a>
        </li>
    </ul>
</div>
@endforeach
