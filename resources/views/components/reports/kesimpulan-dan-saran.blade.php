<td colspan="3">
  <ol class="list-inside list-[lower-alpha]">
    <li>
      <span class="font-semibold">
        Kesimpulan
      </span>
      <ol class="mx-4 list-decimal list-inside">
        <li>{{ $berkas->first()->kesimpulan }}</li>
       
      </ol>
    </li>
    <li class="mt-4 ">
      <span class="font-semibold">
        Saran
      </span>
 
      <ol class="mx-4 list-decimal list-inside">
        <li>{{ $berkas->first()->saran  }}
        </li>
      </ol>
    </li>
  </ol>
</td>