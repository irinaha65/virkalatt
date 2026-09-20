let maskar = [
  {
    svg: ` <ellipse cx="256" cy="256" rx="240.655" ry="113.285" style="fill:none;stroke:#000;stroke-width:30px"> </ellipse>
`,
    name: 'Luftmaska',
    abbr: 'ch',
    desc: 'chain'
  },
  {
    svg: ' <ellipse cx="256" cy="256" rx="240.655" ry="113.285" style="stroke:#000;stroke-width:30px"></ellipse> ',
    abbr: 'sl st',
    name: 'Smygmaska',
    desc: 'smygmaska'
  },
  {
    svg: ` <path d="M15.216 496.784 496.784 15.216m-481.568 0 481.568 481.568"
    style="fill:none;stroke:#000;stroke-width:30px"> </path> `,
    abbr: 'sc',
    desc: 'single_crochet',
    name: 'Fast maska '
  },
  {
    svg: ` <path d="M106 15.122h300m-150 0v481.756" style="fill:none;stroke:#000;stroke-width:30px">
 </path>`,

    abbr: 'hdc',
    desc: 'Halvstolpe',
    name: 'Halvstolpe'
  },
  {
    svg: ` <path d="M106 15.122h300M178.049 173.465l155.902 90.01M256 15.122v481.756"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,

    abbr: 'dc',
    desc: 'Stolpe',
    name: 'Stolpe'
  },
  {
    svg: ` <path d="M106 15.122h300M178.049 133.455l155.902 90.01m-155.902 0 155.902 90.01M256 15.122v481.756"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: 'trc',
    desc: 'Dubbelstolpe',
    name: 'Dubbelstolpe'
  },
  {
    svg: ` <path
    d="M106 15.122h300M178.049 83.455l155.902 90.01m-155.902 0 155.902 90.01m-155.902 0 155.902 90.01M256 15.122v481.756"
    style="fill:none;stroke:#000;stroke-width:30px">
      </path> `,
    abbr: 'dtrc',
    desc: 'Tredubbel_stolpe',
    name: 'Trippel stolpe'
  },
  {
    svg: ` <path d="M106 15.122h300M106 496.654h300M256 15.122v407.227" style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'hdc blo',
    desc: 'Half_double_crochet_back_loop_only',
    name: 'Halvstolpe i bakre maskbågen'
  },
  {
    svg: ` <path d="M106 15.122h300M106 496.654h300M256 15.122v407.227M178.049 117.465l155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'dc blo',
    desc: 'Stolpe_bakre_maskbagen',
    name: 'Stolpe i bakre maskbågen'
  },
  {
    svg: ` <path
    d="M106 15.122h300M106 496.654h300M256 15.122v407.227M178.049 97.465l155.902 90.01m-155.902 11.26 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'trc blo',
    desc: 'Treble_crochet_back',
    name: 'Dubbelstolpe i bakre maskbågen'
  },
  {
    svg: ` <path
    d="M106 15.122h300M106 496.654h300M256 15.122v407.227M178.049 84.465l155.902 90.01m-155.902 11.26 155.902 90.01m-155.902 0 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'dtrc blo',
    desc: 'Treble_crochet_back',
    name: 'Trippelstolpe i bakre maskbågen'
  },

  {
    svg: ` <path
    d="M86.044 496.784 425.956 156.87m-339.912 0 339.912 339.914M86.044 50.376s52.108-42.074 91.51-33.843c39.514 8.254 95.573 64.685 141.727 68.146 29.62 2.221 68.965-11.943 106.675-51.045"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'Crab',
    desc: 'Crab_stitch',
    name: 'Kräftmaska'
  },

  {
    svg: ` <path d="M66.766 393.937 445.234 15.467M66.766 474.947h378.468M66.766 15.467l378.468 378.47"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'sc blo',
    desc: 'Single_crochet_back',
    name: 'Fast maska i den bakre maskbågen '
  },
  {
    svg: ` <path
    d="M105.645 310.018 420.352 15.467m-328.704 0 314.707 294.551m0 75.669C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'sc flo',
    desc: 'Single_crochet_fram',
    name: 'Fast maska i den främre maskbågen'
  },
  {
    svg: ` <path
    d="M106 15.122h300m.355 370.565C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687M256 15.122v407.227"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'hdc flo ',
    desc: 'Half_double_crochet_fram_loop_only',
    name: 'Halvstolpe i främre maskbågen '
  },
  {
    svg: ` <path
    d="M106 15.122h300m.355 370.565C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687M256 15.122v407.227M178.049 117.465l155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'dc flo',
    desc: 'Stolpe_framre_maskbagen',
    name: 'Stolpe i främre maskbågen '
  },
  {
    svg: ` <path
    d="M106 15.122h300m.355 370.565C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687M256 15.122v407.227M178.049 97.465l155.902 90.01m-155.902 11.26 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'trc flo',
    desc: 'Dubbelstolpe_fram',
    name: 'Dubbelstolpe i främre maskbågen'
  },
  {
    svg: ` <path
    d="M106 15.122h300m.355 370.565C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687M256 15.122v407.227M178.049 84.465l155.902 90.01m-155.902 11.26 155.902 90.01m-155.902 0 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'dtrc flo',
    desc: 'Trippelstolpe_fram',
    name: 'Trippelstolpe i främre maskbågen'
  },
  {
    svg: ` <path
    d="M105.645 310.018 420.352 15.467m-328.704 0 314.707 294.551m0 75.669C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687m0-75.669v75.669"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'bpsc',
    desc: 'Bakre_relief-fast_maska',
    name: 'Relief fastmaska bakifrån'
  },
  {
    svg: ` <path
    d="M105.645 310.018 420.352 15.467m-328.704 0 314.707 294.551m0 75.669C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687m300.71-75.669v75.669"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'ftpsc',
    desc: 'front_post_single_crochet',
    name: 'Relief fastmaska framifrån'
  },
  {
    svg: ` <path
    d="M256 322.267c-49.419 0-89.541 40.122-89.541 89.541s40.122 89.54 89.541 89.54 89.541-40.121 89.541-89.54M256 15.382v306.885M345.541 15.382H166.459"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'bphdc',
    desc: 'reliefhalvstolpe_bakifran',
    name: 'Relief halvstolpe bakifrån '
  },
  {
    svg: ` <path
    d="M256 322.267c-49.419 0-89.541 40.122-89.541 89.541s40.122 89.54 89.541 89.54 89.541-40.121 89.541-89.54M256 15.382v306.885M345.541 15.382H166.459m11.59 102.083 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'bpdc',
    desc: 'Relief_stolpe_bakifran',
    name: 'Relief stolpe bakifrån'
  },
  {
    svg: ` <path
    d="M256 322.267c-49.419 0-89.541 40.122-89.541 89.541s40.122 89.54 89.541 89.54 89.541-40.121 89.541-89.54M256 15.382v306.885M345.541 15.382H166.459m11.59 66.083 155.902 90.01m-155.902 11.26 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'bptrc',
    desc: 'reliefdubbelstolpe_bakifran',
    name: 'Relief dubbelstolpe bakifrån '
  },
  {
    svg: ` <path
    d="M256 322.267c-49.419 0-89.541 40.122-89.541 89.541s40.122 89.54 89.541 89.54 89.541-40.121 89.541-89.54M256 15.382v306.885M345.541 15.382H166.459m11.59 45.446 155.902 90.01m-155.902-18.74 155.902 90.01m-155.902-19 155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'bpdtrc',
    desc: 'reliefhalvstolpe_bakifran',
    name: 'Relief dubbelstolpe bakifrån '
  },
  {
    svg: ` <path
    d="M256 322.267c49.419 0 89.541 40.122 89.541 89.541s-40.122 89.54-89.541 89.54-89.541-40.121-89.541-89.54M256 15.382v306.885M166.459 15.382h179.082"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'fphdc',
    desc: 'reliefhalvstolpe_framifran',
    name: 'Relief halvstolpe framifrån'
  },
  {
    svg: ` <path
    d="M256 322.267c49.419 0 89.541 40.122 89.541 89.541s-40.122 89.54-89.541 89.54-89.541-40.121-89.541-89.54M256 15.382v306.885M166.459 15.382h179.082m-11.59 102.083-155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
  </path> `,
    abbr: 'fpdc',
    desc: 'relief_stolpe_framifran',
    name: ' Relief stolpe framifrån '
  },
  {
    svg: ` <path
    d="M256 322.267c49.419 0 89.541 40.122 89.541 89.541s-40.122 89.54-89.541 89.54-89.541-40.121-89.541-89.54M256 15.382v306.885M166.459 15.382h179.082m-11.59 66.083-155.902 90.01m155.902 11.26-155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: 'fptrc',
    desc: 'reliefdubbelstolpe_framifran',
    name: 'Relief dubbelstolpe framifrån '
  },
  {
    svg: ` <path
    d="M256 322.267c49.419 0 89.541 40.122 89.541 89.541s-40.122 89.54-89.541 89.54-89.541-40.121-89.541-89.54M256 15.382v306.885M166.459 15.382h179.082m-11.59 45.446-155.902 90.01m155.902-18.74-155.902 90.01m155.902-19-155.902 90.01"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: 'fpdtrc',
    desc: 'relieftrippelstolpe_framifran',
    name: 'Relief tripelstolpe framifrån '
  },
  {
    svg: ` <path
    d="M135.608 256 376.392 15.216M17.081 256 256 494.919M494.919 256 256 494.919M135.608 15.216 376.392 256"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: '2sc shell',
    desc: '2_single_crochet_shell',
    name: 'Snäcka av två fasta maskor '
  },
  {
    svg: ` <path
    d="M135.608 256 376.392 15.216M17.081 256 256 494.919M494.919 256 256 494.919m0-213.365v213.365M135.608 15.216 376.392 256"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: '3sc shell',
    desc: '3_single_crochet_shell',
    name: 'Snäcka av tre fasta maskor'
  },
  {
    svg: `
<path
    d="m135.608 254.135 240.784 240.784M17.081 254.135 256 15.216m238.919 238.919L256 15.216M135.608 494.919 376.392 254.135"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: 'sc2tog',
    desc: ' ',
    name: '2 single crochet closed together'
  },
  {
    svg: ` <path
    d="m135.608 254.135 240.784 240.784M17.081 254.135 256 15.216m238.919 238.919L256 15.216m0 213.365V15.216M135.608 494.919 376.392 254.135"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: 'sc3tog',
    desc: ' ',
    name: '3 single crochet closed together'
  },
  {
    svg: ` <path d="M80.993 15.817 256 496.228m0 0L431.007 15.817m57.5 0h-115m-235.014 0h-115"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: '2hdc shell',
    desc: '2_halvstolpe_shell',
    name: 'Snäcka av två halvstolpar'
  },
  {
    svg: ` <path
    d="M80.993 15.817 256 496.228m0 0L431.007 15.817m-175.007 0v480.388M313.5 15.817h-115m290.007 0h-115m-235.014 0h-115"
    style="fill:none;stroke:#000;stroke-width:30px">
</path> `,
    abbr: '3hdc shell',
    desc: '3_halvstolpe_shell',
    name: 'Snäcka av tre halvstolpar '
  },

  {
    svg: ` <path
    d="M80.993 15.817 256 496.228m0 0L431.007 15.817m57.5 0h-115m-235.014 0h-115m320.011 96.482 115 66.395M53.496 112.299l115.001 66.395"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: '2dc shell',
    desc: '2_double_crochet_shell',
    name: 'Snäcka av 2 stolpar'
  },
  {
    svg: ` <path
    d="M80.993 15.817 256 496.228m0 0L431.007 15.817m-175.007 0v480.388M313.5 15.817h-115m290.007 0h-115m-235.014 0h-115M198.5 112.299l115 66.395m30.004-66.395 115 66.395M53.496 112.299l115.001 66.395"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
`,
    abbr: '3dc shell',
    desc: '3_stolpe_shell',
    name: 'Snäcka av tre  stolpar'
  },

  {
    svg: ` <path
    d="M80.993 15.817 256 496.228m0 0L431.007 15.817m57.5 0h-115m-235.014 0h-115m320.011 96.482 115 66.395M53.496 112.299l115.001 66.395"
    style="fill:none;stroke:#000;stroke-width:30px">
</path>
<ellipse cx="256" cy="42.334" rx="65.658" ry="30.907" style="fill:none;stroke:#000;stroke-width:22px">
</ellipse>
`,
    abbr: '1 dc, ch1, 1dc shell',
    desc: 'V_shell',
    name: 'V-snäcka '
  }
  ,
  {
    svg: `
   <path
                                                                    d="M80.993 15.817 256 496.228m0 0L431.007 15.817m57.5 0h-115m-235.014 0h-115m320.011 96.482 115 66.395M53.496 112.299l115.001 66.395"
                                                                    style="fill:none;stroke:#000;stroke-width:30px">
                                                                </path>
                                                                <ellipse cx="181.067" cy="24.409" rx="37.466"
                                                                    ry="17.637"
                                                                    style="fill:none;stroke:#000;stroke-width:12.55px">
                                                                </ellipse>
                                                                <ellipse cx="256" cy="24.409" rx="37.466" ry="17.637"
                                                                    style="fill:none;stroke:#000;stroke-width:12.55px">
                                                                </ellipse>
                                                                <ellipse cx="330.933" cy="24.409" rx="37.466"
                                                                    ry="17.637"
                                                                    style="fill:none;stroke:#000;stroke-width:12.55px">
                                                                </ellipse>
`,
    abbr: '1dc, ch3, 1dc shell',
    desc: ' ',
    name: '1 dc, ch 3, 1 dc shell'
  },
  {
    svg: ` <path
                                                                    d="m42.559 80.362 213.486 419.981m0 0L175.24 19.414"
                                                                    style="fill:none;stroke:#000;stroke-width:21.76px">
                                                                </path>
                                                                <path
                                                                    d="m73.413 53.159-61.709 54.405M215.919 11.969 134.561 26.86"
                                                                    style="fill:none;stroke:#000;stroke-width:22.06px">
                                                                </path>
                                                                <path d="m148.21 144.22 97.425 10.145"
                                                                    style="fill:none;stroke:#000;stroke-width:18.8px">
                                                                </path>
                                                                <path d="m52.836 188.257 96.59 16.152"
                                                                    style="fill:none;stroke:#000;stroke-width:18.76px">
                                                                </path>
                                                                <path
                                                                    d="M469.531 80.206 256.045 500.187m0 0L336.85 19.259"
                                                                    style="fill:none;stroke:#000;stroke-width:21.76px">
                                                                </path>
                                                                <path
                                                                    d="m438.677 53.003 61.709 54.405M296.171 11.813l81.358 14.891"
                                                                    style="fill:none;stroke:#000;stroke-width:22.06px">
                                                                </path>
                                                                <path d="m347.595 185.839-64.856-73.405"
                                                                    style="fill:none;stroke:#000;stroke-width:18.8px">
                                                                </path>
                                                                <path d="m434.431 239.15-46.943-85.946"
                                                                    style="fill:none;stroke:#000;stroke-width:18.76px">
                                                                </path>`
    ,
    abbr: '4dc shell',
    desc: ' ',
    name: '4 double crochet shell'
  },
  {
    svg: `<path  d="m42.559 80.362 213.486 419.981m0 0L175.24 19.414"
                                                                    style="fill:none;stroke:#000;stroke-width:21.76px">
                                                                </path>
                                                                <path
                                                                    d="m73.413 53.159-61.709 54.405M215.919 11.969 134.561 26.86"
                                                                    style="fill:none;stroke:#000;stroke-width:22.06px">
                                                                </path>
                                                                <path d="m148.21 144.22 97.425 10.145"
                                                                    style="fill:none;stroke:#000;stroke-width:18.8px">
                                                                </path>
                                                                <path d="m52.836 188.257 96.59 16.152"
                                                                    style="fill:none;stroke:#000;stroke-width:18.76px">
                                                                </path>
                                                                <path
                                                                    d="M469.531 80.206 256.045 500.187m0 0L336.85 19.259"
                                                                    style="fill:none;stroke:#000;stroke-width:21.76px">
                                                                </path>
                                                                <path
                                                                    d="m438.677 53.003 61.709 54.405M296.171 11.813l81.358 14.891"
                                                                    style="fill:none;stroke:#000;stroke-width:22.06px">
                                                                </path>
                                                                <path d="m347.595 185.839-64.856-73.405"
                                                                    style="fill:none;stroke:#000;stroke-width:18.8px">
                                                                </path>
                                                                <path d="m434.431 239.15-46.943-85.946"
                                                                    style="fill:none;stroke:#000;stroke-width:18.76px">
                                                                </path>
                                                                <ellipse cx="256.045" cy="59.554" rx="43.873"
                                                                    ry="20.652"
                                                                    style="fill:none;stroke:#000;stroke-width:14.7px">
                                                                </ellipse>`
    ,
    abbr: '2dc, ch1, 2 dc shell',
    desc: ' ',
    name: '2 dc, ch 1, 2 dc shell'
  },
  {
    svg: `   <path  d="m256 446.011 512-380m-512 0v380m57.5-380h-115m627 0h-115m-512 76.32 115 52.52m261.12-52.52 115 52.52"
                                                                    style="fill:none;stroke:#000;stroke-width:24px">
                                                                </path>
                                  `
    ,
    abbr: '2dc lr',
    desc: ' ',
    name: '2 dc in same stitch, leaning right'
  },
  {
    svg: ` <path  d="m256 66.011 512 380m0-380v380m57.5-380h-115m-397 0h-115m512 76.32 115 52.52M327.91 181.908l128.451-26.634"
                                                                    style="fill:none;stroke:#000;stroke-width:24px">
                                                                </path>`
    ,
    abbr: '2dc ll',
    desc: ' ',
    name: ' 2 dc in same stitch, leaning left'
  }
  ,
  {
    svg: `   <path   d="m256 446.011 1024-380m-1024 380 512-380m-512 0v380m57.5-380h-115m627 0h-115m627 0h-115m-1024 76.32 115 52.52m628.12-52.52 115 52.52m-484-52.52 115 52.52"
                                                                    style="fill:none;stroke:#000;stroke-width:24px">
                                                                </path>
                                                           `
    ,
    abbr: '3dc lr',
    desc: ' ',
    name: '3 dc in same stitch, leaning right'
  }, {
    svg: `  <path  d="m1280 446.011-1024-380m1024 380-512-380m512 0v380m-57.5-380h115m-627 0h115m-627 0h115m1024 76.32-115 52.52m-260-52.52-115 52.52m-253.12-52.52-115 52.52"
                                                                    style="fill:none;stroke:#000;stroke-width:24px">
                                                                </path>
                                                         `
    ,
    abbr: '3dc ll',
    desc: ' ',
    name: '3 dc in same stitch, leaning left '
  }, {
    svg: `    <path    d="M44.842 14.105C25.112 13.599 8.78 29.997 8.521 49.362 8.245 70.038 25.82 87.151 46.512 87.347 68.344 87.556 86.328 69.33 86.38 47.829 86.435 25.328 67.244 6.764 44.673 6.722 21.197 6.679 1.901 26.331 1.98 49.491c.082 23.982 20.58 43.733 44.665 43.67 24.847-.066 45.242-20.9 45.068-45.438C91.545 23.858 72.151 3.685 48.208 1.98"
                                                                    style="fill:none;stroke:#000;stroke-width:3.96px">
                                                                </path>
                                                         `
    ,
    abbr: '',
    desc: ' ',
    name: 'Magic ring'
  }, {
    svg: `   <circle cx="47.372" cy="47.371" r="45.328"
              style="fill:none;stroke:#000;stroke-width:4.09px">
      </circle>  `
    ,
    abbr: '',
    desc: ' ',
    name: 'Ring'
  }, {
    svg: `  <path  d="M105.645 310.018 420.352 15.467m-328.704 0 314.707 294.551m0 0L256 496.772M105.645 310.018 256 496.772"
                                                                    style="fill:none;stroke:#000;stroke-width:30px">
                                                                </path>
                                                       `
    ,
    abbr: '',
    desc: ' ',
    name: 'Waistcoat'
  }, {
    svg: `  <path
                                                                    d="M105.645 310.018 420.352 15.467m-328.704 0 314.707 294.551m0 75.669C381.85 450.864 323.728 496.738 256 496.738S130.15 450.864 105.645 385.687m300.71-75.669v75.669m-300.71-75.669v75.669"
                                                                    style="fill:none;stroke:#000;stroke-width:30px">
                                                                </path>
                                                             `
    ,
    abbr: '',
    desc: ' ',
    name: ' '
  }
]

