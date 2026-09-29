const maskar = [
  {
    svg_g: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <ellipse cx="256" cy="256" rx="240.655" ry="113.285" style="fill:none;stroke:#000;stroke-width:30px"> </ellipse>

    </g>
</svg>`,
    name: 'Luftmaska',
    abbr: 'ch',
    desc: 'chain'
  },
  {
    svg_g: ` <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <ellipse cx="256" cy="256" rx="240.655" ry="113.285" style="stroke:#000;stroke-width:30px"></ellipse> 
    </g>
</svg> `,
    abbr: 'sl st',
    name: 'Smygmaska',
    desc: 'smygmaska'
  },
  {
    svg_g: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <path d="M15.216 496.784 496.784 15.216m-481.568 0 481.568 481.568" style="fill:none;stroke:#000;stroke-width:30px"> </path> 
    </g>
</svg> `,
    abbr: 'sc',
    desc: 'single_crochet',
    name: 'Fast maska '
  },
  {
    svg_g: ` <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <path d="M106 15.122h300m-150 0v481.756" style="fill:none;stroke:#000;stroke-width:30px">
 </path>
    </g>
</svg>`,

    abbr: 'hdc',
    desc: 'Halvstolpe',
    name: 'Halvstolpe'
  },
  {
    svg_g: ` <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <path d="M106 15.122h300M178.049 173.465l155.902 90.01M256 15.122v481.756" style="fill:none;stroke:#000;stroke-width:30px">
</path>

    </g>
</svg>
`,

    abbr: 'dc',
    desc: 'Stolpe',
    name: 'Stolpe'
  },
  {
    svg_g: ` <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <path d="M106 15.122h300M178.049 133.455l155.902 90.01m-155.902 0 155.902 90.01M256 15.122v481.756" style="fill:none;stroke:#000;stroke-width:30px">
</path>

    </g>
</svg>
`,
    abbr: 'trc',
    desc: 'Dubbelstolpe',
    name: 'Dubbelstolpe'
  },
  {
    svg_g: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


         <path d="M106 15.122h300M178.049 83.455l155.902 90.01m-155.902 0 155.902 90.01m-155.902 0 155.902 90.01M256 15.122v481.756" style="fill:none;stroke:#000;stroke-width:30px">
      </path> 
    </g>
</svg> `,
    abbr: 'dtrc',
    desc: 'Tredubbel_stolpe',
    name: 'Trippel stolpe'
  },

  /* {
     svg: `  <path d="m50 380 1024-380m-1024 380 512-380m-512 0v380m57.5-380h-115m627 0h-115m627 0h-115m-1024 76.32 115 52.52m628.12-52.52 115 52.52m-484-52.52 115 52.52" style="fill:none;stroke:#000;stroke-width:24px"></path>
    
                                                            `
     ,
     svg_g:`<svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-7.5 -15 1081.5 405" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width: 64px; height: 23px;">
     <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5">
           <!-- Uppdaterad path: Det sista horisontella tak-strecket har förlängts -->
           <path d="m50 380 1024-380m-1024 380 512-380m-512 0v380m57.5-380h-115m627 0h-115m627 0h-170m-1024 76.32 115 52.52m628.12-52.52 115 52.52m-484-52.52 115 52.52" style="fill:none;stroke:#000;stroke-width:24px"></path>
     </g>
 </svg>
 `,
     abbr: '3dc lr', width: 79, 
     desc: ' ',
     name: '3 dc in same stitch, leaning right'
   }, {
     svg: `     <path d="m500 380-1024-380m1024 380-512-380m512 0v380m-57.5-380h115m-627 0h115m-627 0h115m1024 76.32-115 52.52m-260-52.52-115 52.52m-253.12-52.52-115 52.52" style="fill:none;stroke:#000;stroke-width:24px"></path>
                                                          `
     ,
     abbr: '3dc ll', width: 59, 
     desc: ' ',
     name: '3 dc in same stitch, leaning left '
   },*/
  {
    svg_g: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" 
    width="23px" height="23px"
  viewBox="0 0 23.000029 23.00001" version="1.1" id="svg1" xml:space="preserve">
  <defs id="defs1" />
  <g id="layer1" transform="translate(-41.370793,-79.157346)">
    <path style="fill:#000000;stroke-width:0.185415"
      d="m 51.390591,102.10771 c -1.538723,-0.14955 -3.14278,-0.69099 -4.323063,-1.45924 -3.139293,-2.04337 -5.064293,-5.026269 -5.61331,-8.698148 -0.100022,-0.668962 -0.112998,-2.356195 -0.02317,-3.013621 0.185661,-1.358891 0.547038,-2.572858 1.104819,-3.711407 0.599692,-1.224096 1.266758,-2.151377 2.212828,-3.076027 1.662386,-1.624749 3.713844,-2.616595 6.051236,-2.925673 0.88968,-0.117642 2.28347,-0.07476 3.186457,0.09804 1.657072,0.317106 3.273229,1.036299 4.634981,2.06258 0.94618,0.713084 2.423044,2.292147 3.067551,3.279827 0.674688,1.03393 1.33899,2.70031 1.53377,3.847416 0.124755,0.734703 0.134834,2.01311 0.02189,2.776829 -0.449238,3.037808 -2.35022,5.938054 -5.063576,7.725281 -1.010832,0.665811 -2.412008,1.247483 -3.573935,1.483653 -0.509538,0.10356 -0.690905,0.11432 -1.909365,0.11328 -1.274712,-0.001 -1.379059,-0.008 -1.961179,-0.13356 -1.875691,-0.40393 -3.480224,-1.305466 -4.8483,-2.7241 -1.429528,-1.482356 -2.362737,-3.354803 -2.744734,-5.507197 -0.162292,-0.914452 -0.161602,-2.5117 0.0015,-3.431836 0.760893,-4.292994 3.829152,-7.374923 7.881481,-7.916599 3.235591,-0.432501 6.589739,1.098107 8.622134,3.934561 0.963146,1.34419 1.654105,3.088649 1.865267,4.709228 0.05511,0.422972 0.05298,0.482584 -0.02132,0.596451 -0.0998,0.152927 -0.364818,0.175098 -0.483986,0.04049 -0.04545,-0.05134 -0.108564,-0.310059 -0.156538,-0.641694 -0.266752,-1.843994 -1.029357,-3.526259 -2.249978,-4.963327 -1.240417,-1.460374 -3.048197,-2.540562 -4.868161,-2.90883 -1.133524,-0.229369 -2.105369,-0.228399 -3.263756,0.0033 -4.660719,0.932041 -7.625681,5.797967 -6.607992,10.844657 0.57486,2.850715 2.414415,5.31522 4.901242,6.566335 1.133743,0.570382 2.024565,0.800567 3.389124,0.875735 1.760917,0.097 3.027581,-0.139579 4.486337,-0.837936 2.052609,-0.982653 3.859157,-2.718231 4.869623,-4.67832 0.117181,-0.227307 0.237104,-0.429537 0.266494,-0.4494 0.02939,-0.01986 0.03783,-0.03645 0.01877,-0.03687 -0.01907,-3.72e-4 0.03118,-0.148131 0.111672,-0.328257 0.445415,-0.996796 0.742919,-2.281764 0.738038,-3.187712 -0.0081,-1.512746 -0.27728,-2.945869 -0.738437,-3.932175 -0.230632,-0.493267 -0.78576,-1.415013 -1.237392,-2.054596 -1.448771,-2.051688 -3.418207,-3.50077 -5.723735,-4.211439 -0.952908,-0.293731 -2.492298,-0.483734 -3.396662,-0.419241 -2.592187,0.18485 -4.779207,1.190174 -6.537796,3.005272 -0.848962,0.876241 -1.321591,1.540991 -1.847525,2.598534 -0.783677,1.57581 -1.147604,3.155118 -1.144092,4.964928 0.0055,2.85154 1.012605,5.469627 2.926333,7.607595 0.436094,0.487193 1.450573,1.406925 1.927588,1.747562 0.175025,0.124985 0.329243,0.239058 0.342707,0.253497 0.01346,0.01444 0.178696,0.110624 0.367185,0.213744 1.187712,0.64976 2.48464,1.07148 3.739758,1.21604 0.748664,0.0862 2.380865,0.0361 3.065408,-0.0941 1.107896,-0.21073 2.041478,-0.5225 3.035398,-1.0137 2.248486,-1.111198 4.077802,-2.91796 5.177066,-5.113234 0.421467,-0.841685 0.809919,-1.934251 0.943791,-2.654516 0.07834,-0.42147 0.170263,-1.194273 0.170326,-1.431882 1.01e-4,-0.388344 0.118581,-0.627564 0.320652,-0.647416 0.103929,-0.01022 0.178405,0.01765 0.244789,0.09157 0.241218,0.268578 -0.01501,2.087011 -0.498248,3.536201 -0.226582,0.679484 -0.807028,1.86262 -1.229955,2.507043 -1.297875,1.9776 -3.169186,3.584014 -5.242947,4.500754 -1.89577,0.83806 -3.976375,1.19028 -5.917034,1.00166 z"
      id="path1" />
  </g>
</svg>`,
    abbr: 'magic ring',
    desc: 'magic_ring',
    name: 'Den magiska ringen '
  },
  /* {
    svg_g: `  <svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-11.875 -11.875 118.75 118.75" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width: 23px; height: 23px;"><g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"><circle cx="47.372" cy="47.371" r="45.328" style="fill:none;stroke:#000;stroke-width:4.09px"></circle></g></svg> `
    ,
    abbr: '',
    desc: ' ',
    name: 'Ring'
  },*/
  /*, {
    svg_g: ` <svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-320 -320 1440 1440" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width: 23px; height: 23px;"><path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="14.493" stroke-width="57.971" d="M771.014 28.986H28.986L400 771.014z"></path></svg>  `  ,
    abbr: 'dc 2 rows down',
    desc: ' ',
    name: 'Double crochet worked 2 rows down'
  }, {
    svg_g: ` <svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000" style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width: 23px; height: 23px;"><g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"><ellipse cx="256" cy="256" rx="240.655" ry="113.285" style="stroke:#000;stroke-width:30px"></ellipse><path d="M491.664 396.687C453.255 434.158 362.156 460.531 256 460.531S58.745 434.158 20.336 396.687" style="fill:none;stroke:#000;stroke-width:35.42px"></path></g></svg>  `
    ,
    abbr: 'sl st blo',
    desc: ' ',
    name: 'Slip stitch back loop only'
  }, {
    svg: `     <path  d="M0 42.957V0h37.354v42.957zm0 261.267V83.838h37.354v220.386zm94.214 0V83.838h33.618v31.335q24.28-36.315 70.142-36.316 19.922 0 36.627 7.16t25.006 18.78q8.3 11.622 11.621 27.6 2.075 10.377 2.075 36.316v135.511H235.95V170.166q0-22.827-4.358-34.137t-15.46-18.054q-11.103-6.745-26.044-6.745-23.865 0-41.193 15.149-17.328 15.15-17.328 57.483v120.362zM474.39 223.499l36.731 4.772q-6.019 37.977-30.817 59.455t-60.907 21.478q-45.24 0-72.736-29.571t-27.496-84.772q0-35.694 11.829-62.464 11.828-26.769 36.004-40.155 24.177-13.385 52.606-13.385 35.9 0 58.729 18.158 22.827 18.159 29.26 51.569l-36.316 5.603q-5.189-22.204-18.366-33.411Q439.733 109.571 421.057 109.57q-28.222 0-45.862 20.233-17.639 20.233-17.639 64.02 0 44.409 17.017 64.539 17.016 20.129 44.409 20.129 21.997 0 36.731-13.489 14.733-13.488 18.677-41.503"
                  style="fill-rule:nonzero"></path>
                                                           `
    ,
    abbr: 'inc',
    desc: ' ',
    name: 'Increase '
  }, {
    svg: `  <path   d="M119.653 232.642v-21.265Q103.626 236.45 72.522 236.45q-20.154 0-37.054-11.108Q18.566 214.233 9.283 194.318 0 174.402 0 148.535q0-25.232 8.411-45.782 8.41-20.551 25.232-31.501Q50.463 60.303 71.252 60.303q15.235 0 27.137 6.427t19.36 16.742V0h28.406v232.642zM29.358 148.535q0 32.373 13.647 48.401t32.215 16.028q18.725 0 31.817-15.314t13.092-46.734q0-34.596-13.33-50.782T73.95 83.948q-19.043 0-31.817 15.552t-12.775 49.035m277.075 29.834 29.517 3.65q-6.982 25.867-25.867 40.149-18.884 14.282-48.242 14.282-36.975 0-58.637-22.772t-21.661-63.873q0-42.53 21.899-66.016t56.812-23.486q33.8 0 55.225 23.01 21.423 23.01 21.423 64.746 0 2.54-.159 7.617H211.06q1.587 27.771 15.71 42.53 14.124 14.758 35.23 14.758 15.71 0 26.818-8.252 11.11-8.252 17.615-26.343M212.646 132.19h94.104q-1.904-21.264-10.791-31.897Q282.312 83.789 260.571 83.789q-19.677 0-33.087 13.171-13.409 13.172-14.838 35.23m269.141 38.721 28.088 3.65q-4.602 29.04-23.565 45.465-18.964 16.424-46.576 16.424-34.595 0-55.621-22.613t-21.027-64.826q0-27.294 9.045-47.766 9.046-20.47 27.533-30.707 18.488-10.235 40.229-10.235 27.453 0 44.909 13.885t22.376 39.435l-27.771 4.285q-3.968-16.98-14.044-25.55-10.077-8.568-24.36-8.569-21.582 0-35.07 15.472-13.49 15.472-13.489 48.957 0 33.96 13.013 49.353t33.96 15.393q16.82 0 28.088-10.315 11.267-10.315 14.282-31.738"
             style="fill-rule:nonzero"></path>  `
    ,
    abbr: 'dec',
    desc: ' ',
    name: 'Decrease '
  }*/
]

visaMaskar();