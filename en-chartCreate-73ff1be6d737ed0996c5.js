'use strict'
;(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push(
  [
    [3169],
    {
      88631 (e, t, r) {
        r.d(t, { $: () => n })
        const n = {
          categoryId: '',
          title: '',
          craft: 'other',
          hasSolids: !0,
          brandId: '',
          productCountAvailable: 0,
          available: 'no',
          link: '',
          productIds: [],
          defaultProductIds: [],
          isFetching: !1,
          fetchFailed: !1
        }
      },
      1561 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(53525)
        const a = async (e, t, r, a = !0, o = void 0, c = void 0) =>
          (0, n.A)(e, t, r, a, o, c)
      },
      53525 (e, t, r) {
        r.d(t, { A: () => o })
        var n = r(17243)
        const a = e =>
            (0, n.deburr)(
              e
                .replace("'", '')
                .replace('-', '')
                .replace('.', '')
                .replace("'", '')
                .replace('`', '')
                .replace(' & ', ' and ')
                .replace('&', '')
                .trim()
            )
              .trim()
              .toLowerCase()
              .replace('grey', 'gray'),
          o = (e, t, r, o = !0, c = void 0, l = void 0) => {
            const i = a(t),
              s = i.split(' ', 10).filter(e => !!e),
              u =
                '' === i
                  ? e
                  : e.filter(e =>
                      ((e, t, r = !0) =>
                        r
                          ? t.every(t => -1 !== e.indexOf(t))
                          : t.some(t => -1 !== e.indexOf(t)))(
                        ((e, t, r) =>
                          a(
                            ((e, t, r) =>
                              t.reduce((t, r) => t + ' ' + e[r], '') +
                              ((e, t) =>
                                t
                                  ? t.reduce(
                                      (t, r) =>
                                        ((e, t) => {
                                          const r = e[t[1]],
                                            n = t[0][r]
                                          return n
                                            ? ((e, t) =>
                                                1 === t.length
                                                  ? e[t[0]]
                                                  : t.reduce(
                                                      (t, r) => t + ' ' + e[r],
                                                      ''
                                                    ))(n, t[2])
                                            : ''
                                        })(e, r),
                                      ''
                                    )
                                  : '')(e, r))(e, t, r)
                          ))(e, r, c),
                        s,
                        o
                      )
                    )
            return l ? (0, n.orderBy)(u, ...l) : u
          }
      },
      87734 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.Y8p, payload: { details: e } })
      },
      46443 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.DYi, saveChart: !0, payload: { gauge: e } })
      },
      38251 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({
          type: n.Ipd,
          saveChart: !0,
          payload: { gridLines: e }
        })
      },
      81160 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = (e, t, r) => ({
          type: n.Lvb,
          saveChart: !0,
          payload: { columnCount: e, rowCount: t, styleId: r }
        })
      },
      42654 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.jL3, saveChart: !0, payload: { title: e } })
      },
      83252 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({
          type: n.$SA,
          saveChart: !0,
          payload: { productCategoryId: e }
        })
      },
      72645 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.XfM, saveChart: !0, payload: { craft: e } })
      },
      77969 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.$bo, saveChart: !0, payload: { subtype: e } })
      },
      63459 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.TT7, saveChart: !0, payload: { type: e } })
      },
      56918 (e, t, r) {
        r.d(t, { A: () => c })
        var n = r(51818),
          a = r(86096),
          o = r(3968)
        const c =
          (e = !1) =>
          async (t, r) => {
            const c = r()
            if (!(0, a.A)(c)) throw new Error('Not logged in')
            if (!e && Object.keys(c.folders).length > 0) return c.folders
            const l = await (0, n.A)('folders/get')
            return (
              t(
                ((i = l.folders),
                { type: o.bU2, broadcast: !0, payload: { folders: i } })
              ),
              r().folders.folders
            )
            var i
          }
      },
      30750 (e, t, r) {
        r.d(t, { A: () => i })
        var n = r(56071),
          a = r(51818),
          o = r(44051),
          c = r(16525),
          l = r(3968)
        const i =
          (e = !1) =>
          async (t, r) => {
            if (!e && r().products.status.categoriesAvailable)
              return r().products.categories
            t((0, c.A)({ categoriesFetching: !0, categoriesFailed: !1 }))
            try {
              const e = await (0, a.A)('products/categories')
              return (
                t((0, o.A)(e.categories)),
                t(
                  ((s = e.popularProductCategoryIds),
                  { type: l.eW2, payload: { popularProductCategoryIds: s } })
                ),
                t(
                  ((i = e.favoriteProductCategoryIds),
                  { type: l.pyo, payload: { favoriteProductCategoryIds: i } })
                ),
                t(
                  (0, c.A)({
                    categoriesAvailable: !0,
                    categoriesFetching: !1,
                    categoriesFailed: !1
                  })
                ),
                r().products.categories
              )
            } catch (e) {
              throw (
                ((0, n.A)(e),
                t(
                  (0, c.A)({
                    categoriesAvailable: !1,
                    categoriesFetching: !1,
                    categoriesFailed: !0
                  })
                ),
                e)
              )
            }
            var i, s
          }
      },
      16525 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(3968)
        const a = e => ({ type: n.Nuo, payload: e })
      },
      98339 (e, t, r) {
        r.d(t, { A: () => n })
        const n = e => {
          switch (e) {
            case 'knitting':
            case 'crochet':
              return 'knittingCrochet'
            default:
              return e
          }
        }
      },
      49889 (e, t, r) {
        r.d(t, { A: () => n })
        const n = (e, t) => {
          switch (t) {
            case 'colors':
              return 'knitting' === e ? 'Colors ' : 'Crochet colorwork'
            case 'lace':
              return 'Lace'
            case 'cables':
              return 'Cables'
            case 'brioche':
              return 'Brioche'
            case 'mosaic':
              return 'Mosaic'
            case 'mosaicOverlay':
              return 'Overlay mosaic crochet'
            case 'mosaicInset':
              return 'Inset mosaic crochet'
            case 'machineColors':
              return 'Machine (colors)'
            case 'machineSymbols':
              return 'Machine (stitch symbols)'
            case 'c2c':
              return 'Corner 2 corner crochet (C2C)'
            case 'filet':
              return 'Filet crochet'
            case 'tunisian1':
              return 'Tunisian crochet colorwork'
            case 'tunisian2':
              return 'Tunisian crochet with return pass'
            case 'freeform':
              return 'Free form'
            case 'other':
              switch (e) {
                case 'knitting':
                  return 'Other (chart with stitch symbols)'
                case 'crochet':
                  return 'Other - Chart with general crochet stitch symbols'
                default:
                  return 'General symbols chart (Other)'
              }
            default:
              return 'General symbols chart (Other)'
          }
        }
      },
      61686 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(96405)
        const a = e => ((0, n.A)(e) ? 0 : 2)
      },
      79251 (e, t, r) {
        r.d(t, { A: () => n })
        const n = (e, t) =>
          t
            ? e.find(
                e =>
                  t.swatchLengthHorizontal === e.swatchLengthHorizontal &&
                  t.swatchLengthVertical === e.swatchLengthVertical &&
                  t.swatchCountHorizontal === e.swatchCountHorizontal &&
                  t.swatchCountVertical === e.swatchCountVertical &&
                  t.unit === e.unit
              )
            : void 0
      },
      32660 (e, t, r) {
        r.d(t, { A: () => o })
        var n = r(36973),
          a = r.n(n)
        const o = (e, t) => (
          (e.consumes = t.consumes),
          (e.produces = t.produces),
          (e.showInWritten = 0 !== t.consumes || 0 !== t.produces),
          (e.writtenStitchCountSingle = t.writtenStitchCountSingle),
          (e.writtenStitchEnclosed = t.writtenStitchEnclosed),
          'string' != typeof e.abbreviation &&
            ((e.abbreviation = t.abbreviation),
            (e.alternativeAbbreviation = t.alternativeAbbreviation)),
          'string' != typeof e.description &&
            ((e.description = t.description),
            (e.alternativeDescription = t.alternativeDescription)),
          e.colorBackground
            ? e.colorForeground ||
              (e.colorForeground = a()(e.colorBackground, !0))
            : ((e.colorBackground = t.colorBackground),
              (e.colorForeground = a()(t.colorBackground, !0))),
          e
        )
      },
      57457 (e, t, r) {
        r.d(t, { A: () => o })
        var n = r(36973),
          a = r.n(n)
        const o = (e, t) =>
          e
            .map(e => t[e])
            .filter(e => e && 'yes' === e.available)
            .map(e => ({
              colorBackground: e.color,
              colorForeground: a()(e.color, !0),
              abbreviation: e.description,
              description: e.title,
              productId: e.productId
            }))
      },
      36900 (e, t, r) {
        r.d(t, { A: () => n })
        const n = (0, r(20910).Mz)(
          e => e.folders,
          e => Object.keys(e).map(t => e[t])
        )
      },
      95808 (e, t, r) {
        r.d(t, { A: () => n })
        const n = (0, r(20910).Mz)(
          e => e.products.categories,
          e => Object.keys(e).map(t => e[t])
        )
      },
      24313 (e, t, r) {
        r.d(t, { A: () => n })
        const n = (0, r(20910).Mz)(
          [e => e.products.categories, e => e.products.favoriteCategoryIds],
          (e, t) => t.map(t => e[t]).filter(e => !!e)
        )
      },
      72376 (e, t, r) {
        r.d(t, { A: () => n })
        const n = (0, r(20910).Mz)(
          [e => e.products.categories, e => e.products.popularCategoryIds],
          (e, t) => t.map(t => e[t]).filter(e => !!e)
        )
      },
      84661 (e, t, r) {
        r.d(t, { A: () => u })
        var n = r(63696),
          a = r(62787),
          o = r(51369),
          c = r(30582),
          l = r(10275),
          i = r(88004)
        const s = ({
            presetId: e,
            mirrorHorizontal: t,
            mirrorVertical: r,
            style: a
          }) => {
            const o = c.Yr[e].preview
            let s = o.slice()
            if (
              (r &&
                ((s = s.slice()),
                (s[1] = s[1].slice()),
                (s[2] = s[2].slice()),
                (s[3] = s[3].slice()),
                (s[4] = s[4].slice()),
                [0, 1, 6, 7].forEach(e => {
                  ;(s[1][e] = o[4][e]),
                    (s[2][e] = o[3][e]),
                    (s[3][e] = o[2][e]),
                    (s[4][e] = o[1][e])
                })),
              t)
            )
              if ('disabled' === c.Yr[e].settings.rulerDeviationSideVertical)
                s = s.slice().map(e =>
                  e
                    .slice()
                    .reverse()
                    .map(e => {
                      switch (e) {
                        case -1:
                          return -2
                        case -2:
                          return -1
                        default:
                          return e
                      }
                    })
                )
              else {
                s = s.slice()
                const e = s[0].indexOf(4)
                ;(s[0] = s[0].slice()),
                  (s[0][e + 0] = o[0][e + 3]),
                  (s[0][e + 1] = o[0][e + 2]),
                  (s[0][e + 2] = o[0][e + 1]),
                  (s[0][e + 3] = o[0][e + 0]),
                  (s[5] = s[5].slice()),
                  (s[5][e + 0] = o[5][e + 3]),
                  (s[5][e + 1] = o[5][e + 2]),
                  (s[5][e + 2] = o[5][e + 1]),
                  (s[5][e + 3] = o[5][e + 0])
              }
            return n.createElement(
              'table',
              {
                style: {
                  tableLayout: 'fixed',
                  textAlign: 'center',
                  fontSize: 14,
                  lineHeight: '100%',
                  margin: '0 auto',
                  ...a
                }
              },
              n.createElement(
                'tbody',
                null,
                s.map((e, t) =>
                  n.createElement(
                    'tr',
                    { key: t, style: { height: 20 } },
                    e.map((e, r) =>
                      -99 === e
                        ? null
                        : n.createElement(
                            'td',
                            {
                              key: r,
                              style: {
                                height: 20,
                                minWidth: 20,
                                border:
                                  0 === t || 5 === t || r < 2 || r > 5
                                    ? 'none'
                                    : '1px solid #999',
                                textAlign:
                                  'string' == typeof e ? 'left' : 'center'
                              }
                            },
                            -1 === e &&
                              n.createElement(i.A, {
                                size: 20,
                                style: { verticalAlign: 'middle' }
                              }),
                            -2 === e &&
                              n.createElement(l.A, {
                                size: 20,
                                style: { verticalAlign: 'middle' }
                              }),
                            (Number(e) > 0 || 'string' == typeof e) &&
                              n.createElement('span', null, e)
                          )
                    )
                  )
                )
              )
            )
          },
          u = ({
            craft: e,
            type: t,
            mirrorHorizontal: r,
            mirrorVertical: l,
            showCheckboxes: i = !0,
            rulerPresetId: u,
            onRulerPresetChange: d
          }) => {
            let h = e
            if ('knitting' === e)
              switch (t) {
                case 'colors':
                  h = 'knittingColors'
                  break
                case 'lace':
                  h = 'knittingLace'
                  break
                case 'cables':
                  h = 'knittingCables'
                  break
                case 'brioche':
                  h = 'knittingBrioche'
                  break
                case 'mosaic':
                  h = 'knittingMosaic'
              }
            return n.createElement(
              'div',
              {
                className: 'rulerPresets clearfix',
                style: { lineHeight: 1.42857143 }
              },
              c.vF[h].map(t =>
                n.createElement(
                  'div',
                  {
                    key: t,
                    className:
                      'rulerPresetContainer' +
                      (u === t ? ' rulerPresetContainerActive' : ''),
                    onClick: () => {
                      d && d(t)
                    }
                  },
                  i &&
                    u === t &&
                    n.createElement(a.A, {
                      size: 20,
                      className: 'radioButton',
                      style: { verticalAlign: 'middle' }
                    }),
                  i &&
                    u !== t &&
                    n.createElement(o.A, {
                      size: 20,
                      className: 'radioButton',
                      style: { verticalAlign: 'middle' }
                    }),
                  n.createElement(
                    'div',
                    { style: { fontSize: 16 } },
                    c.Yr[t].titles[e].title
                  ),
                  n.createElement(
                    'div',
                    { style: { fontSize: 14 } },
                    c.Yr[t].titles[e].subtitle
                  ),
                  n.createElement(
                    'div',
                    { style: { marginTop: 6, marginRight: 5 } },
                    n.createElement(s, {
                      presetId: t,
                      mirrorHorizontal: r,
                      mirrorVertical: l
                    })
                  )
                )
              )
            )
          }
      },
      75693 (e, t, r) {
        r.d(t, { A: () => o })
        var n = r(63696),
          a = r(725)
        const o = ({ style: e }) =>
          n.createElement(
            'p',
            { style: e },
            n.createElement('span', null, 'Loading...'),
            n.createElement(a.A, { size: 24 })
          )
      },
      89200 (e, t, r) {
        r.d(t, { A: () => o })
        var n = r(63696),
          a = r(16723)
        const o = ({ targetBlank: e }) =>
          n.createElement(
            'p',
            { style: { color: '#999', fontSize: 14, marginTop: 25 } },
            n.createElement('span', null, 'By continuing, you agree to the '),
            n.createElement(
              a.N_,
              {
                to: '/en/legal',
                target: e ? '_blank' : '',
                style: { color: '#999' }
              },
              'Terms & Conditions and Privacy Policy'
            ),
            n.createElement('span', null, '.')
          )
      },
      3348 (e, t, r) {
        r.d(t, { A: () => C })
        var n = r(63696),
          a = r(86096),
          o = r(56918),
          c = r(75102),
          l = r(36900),
          i = r(78990),
          s = r(94513),
          u = r(66340),
          d = r(98269)
        const h = ({ folderId: e, title: t, isSelected: r }) =>
          n.createElement(u.A, {
            link: `/en/browse/${e}`,
            icon: d.A,
            text: t,
            isActive: r
          })
        var g = r(14575)
        const m = ({ activeSection: e, selectedFolderId: t }) => {
          const r = (0, g.A)(l.A)
          return n.createElement(
            'div',
            null,
            n.createElement(u.A, {
              link: '/en/search',
              icon: i.A,
              text: 'Search',
              isActive: 'search' === e
            }),
            n.createElement(h, {
              folderId: 'all',
              title: 'My charts (all)',
              isSelected: 'all' === t
            }),
            r.map(e =>
              n.createElement(h, {
                key: e.folderId,
                folderId: e.folderId,
                title: e.title,
                isSelected: e.folderId === t
              })
            ),
            n.createElement('hr', null),
            n.createElement(h, {
              folderId: 'shared-with-me',
              title: 'Shared charts',
              isSelected: 'shared-with-me' === t
            }),
            n.createElement(h, {
              folderId: 'no-folder',
              title: 'Charts without folder',
              isSelected: 'no-folder' === t
            }),
            n.createElement(h, {
              folderId: 'deleted',
              title: 'Deleted charts',
              isSelected: 'deleted' === t
            }),
            n.createElement(u.A, {
              link: `/en/browse/${t || 'all'}/add-folder`,
              icon: s.A,
              text: 'Add folder'
            })
          )
        }
        var p = r(77623),
          y = r(16723)
        const b = ({
            folderId: e,
            title: t,
            selectedFolderId: r,
            isCustomFolder: a
          }) => {
            const o = (0, y.Zp)(),
              c = e === r,
              l =
                c && a
                  ? `/en/browse/${r}/folder-properties/${e}`
                  : `/en/browse/${e}`
            return n.createElement(p.A, {
              text: t,
              link: l,
              isActive: c,
              onContextMenu: t => {
                t.preventDefault(),
                  a && o(`/en/browse/${r}/folder-properties/${e}`)
              }
            })
          },
          f = ({ selectedFolderId: e, activeSection: t }) => {
            const r = (0, g.A)(a.A),
              o = (0, g.A)(l.A)
            return n.createElement(
              'div',
              null,
              r &&
                n.createElement(
                  'div',
                  {
                    onDragStart: e => {
                      e.preventDefault()
                    }
                  },
                  n.createElement('h4', null, 'My folders'),
                  n.createElement(b, {
                    folderId: 'all',
                    title: 'My charts (all)',
                    selectedFolderId: e,
                    isCustomFolder: !1
                  }),
                  o.map(t =>
                    n.createElement(b, {
                      key: t.folderId,
                      folderId: t.folderId,
                      title: t.title,
                      selectedFolderId: e,
                      isCustomFolder: !0
                    })
                  ),
                  n.createElement('h4', null, 'Other folders'),
                  n.createElement(b, {
                    folderId: 'shared-with-me',
                    title: 'Shared charts',
                    selectedFolderId: e,
                    isCustomFolder: !1
                  }),
                  n.createElement(b, {
                    folderId: 'no-folder',
                    title: 'Charts without folder',
                    selectedFolderId: e,
                    isCustomFolder: !1
                  }),
                  n.createElement(b, {
                    folderId: 'deleted',
                    title: 'Deleted charts',
                    selectedFolderId: e,
                    isCustomFolder: !1
                  }),
                  n.createElement(p.A, {
                    link: `/en/browse/${e || 'all'}/add-folder`,
                    text: 'Add folder'
                  })
                ),
              n.createElement('h4', null, r ? 'More' : 'Stitch Fiddle'),
              n.createElement(p.A, {
                link: '/en/chart/create',
                text: 'Create new chart',
                isActive: 'chartCreate' === t
              }),
              !r &&
                n.createElement(p.A, {
                  link: '/en/login',
                  text: 'Signup / Login'
                }),
              r &&
                n.createElement(p.A, {
                  link: '/en/search',
                  text: 'Search',
                  isActive: 'search' === t
                }),
              n.createElement(p.A, {
                link: '/en/products',
                text: 'Products / Yarns'
              }),
              n.createElement(p.A, { link: '/en/stitches', text: 'Stitches' }),
              r &&
                n.createElement(p.A, {
                  link: '/en/account/profile',
                  text: 'Profile & Settings'
                }),
              n.createElement(p.A, { link: '/en/help', text: 'Help Center' }),
              !r &&
                n.createElement(p.A, {
                  link: '/en/company/about',
                  text: 'About Stitch Fiddle'
                })
            )
          }
        var w = r(66188)
        const C = ({
          title: e,
          activeSection: t,
          folderId: r,
          children: l,
          breadcrumbTitle1: i,
          breadcrumbLink1: s
        }) => {
          const u = (0, g.A)(a.A),
            d = (0, w.A)()
          ;(0, n.useEffect)(() => {
            u && d((0, o.A)(!0))
          }, [])
          const h = u
              ? n.createElement(m, { activeSection: t, selectedFolderId: r })
              : null,
            p = n.createElement(f, { activeSection: t, selectedFolderId: r })
          return n.createElement(
            c.A,
            {
              breadcrumbTitle1: 'Charts',
              breadcrumbLink1: '/en/browse',
              breadcrumbTitle2: i,
              breadcrumbLink2: s,
              sidebar: h,
              navigation: p,
              title: e,
              fullWidth: !0
            },
            l
          )
        }
      },
      29883 (e, t, r) {
        r.r(t), r.d(t, { DEFAULT_STATE: () => Sn, default: () => In })
        var n = r(63696),
          a = r(16723),
          o = r(56071),
          c = r(74818),
          l = r(7e3),
          i = r(17097),
          s = r(50963),
          u = r(96513),
          d = r(85165),
          h = r(79890)
        const g = (e, t, r) => {
          const n = (0, s.A)(t)
          if (n[2]) {
            const t = (0, u.A)(n[2])
            ;(a = t), -1 !== h.YG.indexOf(a) && (e.craft = t)
          }
          var a, o, c
          if (n[3]) {
            const t = (0, d.A)(n[3])
            ;(c = t),
              -1 !== h.QE.indexOf(c) && (e.type = t),
              r.subtype &&
                ((o = r.subtype), -1 !== h._3.indexOf(o)) &&
                (e.subtype = r.subtype)
          }
          return e
        }
        var m = r(63776)
        const p = e => {
          const t = (0, m.A)(e.craft, e.type, e.subtype, e.unit, e.handedness)
          return (
            (e.columnCount = t.columnCount.toString()),
            (e.rowCount = t.rowCount.toString()),
            (e.gridSizeCustomized = !1),
            t.productCategoryId && (e.productCategoryId = t.productCategoryId),
            (e.gaugeHorizontal = t.gaugeHorizontal),
            (e.gaugeVertical = t.gaugeVertical),
            (e.isSwatchCustomized = !1),
            (e.swatchCountHorizontal = t.swatchCountHorizontal.toString()),
            (e.swatchCountVertical = t.swatchCountVertical.toString()),
            (e.swatchLengthHorizontal = t.swatchLengthHorizontal.toString()),
            (e.swatchLengthVertical = t.swatchLengthVertical.toString()),
            t.rulerPresetAutoSelect && (e.rulerPresetId = t.rulerPresetId),
            e
          )
        }
        var y = r(37818),
          b = r(83838)
        const f = (e, t) => {
          if ('knitting' === e.craft || 'crochet' === e.craft) {
            const r = (0, y.A)(t, e.craft)
            if (r) {
              const n = (0, b.A)(t.settings.swatches, r)
              n &&
                ((e.unit = n.unit),
                (e.swatchId = n.swatchId),
                (e.swatchLengthHorizontal =
                  n.swatchLengthHorizontal.toString()),
                (e.swatchLengthVertical = n.swatchLengthVertical.toString()),
                (e.swatchCountHorizontal = n.swatchCountHorizontal.toString()),
                (e.swatchCountVertical = n.swatchCountVertical.toString()),
                (e.isSwatchCustomized = !0))
            }
          }
          return e
        }
        var w = r(42059),
          C = r(79251),
          A = r(35598)
        var v = r(17243),
          E = r(61686),
          S = r(85191)
        const I = e => {
            ;(e.gaugeHorizontal = (0, S.A)(
              e.swatchCountHorizontal,
              e.swatchLengthHorizontal,
              e.unit
            )),
              (e.gaugeVertical = (0, S.A)(
                e.swatchCountVertical,
                e.swatchLengthVertical,
                e.unit
              ))
            const t = (0, E.A)(e.craft)
            return (
              (e.projectWidth =
                (0, w.A)(e.swatchCountHorizontal) > 0 &&
                (0, w.A)(e.swatchLengthHorizontal) > 0
                  ? (0, v.round)(
                      (0, w.A)(e.columnCount) /
                        ((0, w.A)(e.swatchCountHorizontal) /
                          (0, w.A)(e.swatchLengthHorizontal)),
                      t
                    ).toString()
                  : '0'),
              (e.projectHeight =
                (0, w.A)(e.swatchCountVertical) > 0 &&
                (0, w.A)(e.swatchLengthVertical) > 0
                  ? (0, v.round)(
                      (0, w.A)(e.rowCount) /
                        ((0, w.A)(e.swatchCountVertical) /
                          (0, w.A)(e.swatchLengthVertical)),
                      t
                    ).toString()
                  : '0'),
              e
            )
          },
          k = (e, t) => {
            const r = { ...Sn },
              n = t()
            ;(r.unit =
              'metric' === n.settings.settings.lengthUnits ? 'cm' : 'in'),
              (r.handedness = n.settings.settings.handedness)
            const a = (0, i.A)(e.search)
            return (
              g(r, e.pathname, a),
              p(r),
              f(r, n),
              ((e, t, r) => {
                if (
                  (('none' === r.productCategory ||
                    (0, c.A)(r.productCategory)) &&
                    (e.productCategoryId = r.productCategory),
                  (0, c.A)(r.brand) && (e.brandId = r.brand),
                  (0, w.A)(r.columnCount) > 0 &&
                    (0, w.A)(r.rowCount) > 0 &&
                    ((e.columnCount = (0, w.A)(r.columnCount).toString()),
                    (e.rowCount = (0, w.A)(r.rowCount).toString()),
                    (e.gridSizeCustomized = !0)),
                  !r.unit ||
                    ('cm' !== r.unit && 'in' !== r.unit) ||
                    (e.unit = r.unit),
                  r.swatch)
                ) {
                  const n = r.swatch.split('x')
                  if (4 === n.length) {
                    const r = {
                        unit: e.unit,
                        swatchLengthHorizontal: (0, w.A)(n[0]),
                        swatchLengthVertical: (0, w.A)(n[2]),
                        swatchCountHorizontal: (0, w.A)(n[1]),
                        swatchCountVertical: (0, w.A)(n[3])
                      },
                      a = (0, C.A)(t.settings.swatches, r) || r
                    ;(e.swatchId =
                      'number' == typeof a.swatchId ? a.swatchId : 0),
                      (e.swatchLengthHorizontal =
                        a.swatchLengthHorizontal.toString()),
                      (e.swatchLengthVertical =
                        a.swatchLengthVertical.toString()),
                      (e.swatchCountHorizontal =
                        a.swatchCountHorizontal.toString()),
                      (e.swatchCountVertical =
                        a.swatchCountVertical.toString()),
                      (e.isSwatchCustomized = !0)
                  }
                }
                switch (r.template) {
                  case 'blank':
                  case 'empty':
                    e.template = 'blank'
                    break
                  case 'qr':
                  case 'qrcode':
                  case 'qrCode':
                    e.template = 'qrCode'
                    break
                  case 'macstitch':
                  case 'macStitch':
                  case 'macStitchOxs':
                  case 'winstitch':
                  case 'oxs':
                    e.template = 'macStitchOxs'
                    break
                  case 'png1px':
                    e.template = 'png1px'
                }
                r.submit &&
                  e.gridSizeCustomized &&
                  e.craft &&
                  e.type &&
                  (0, A.A)(t) &&
                  (e.apiSubmit = !0)
              })(r, n, a),
              I(r),
              r
            )
          }
        var z = r(97268),
          x = r(8253)
        const H = (e, t) => {
          if ('freeform' === e.type) return !1
          const r = t ? z.jJ : z.ki,
            n = (0, x.A)(e.columnCount),
            a = (0, x.A)(e.rowCount)
          return n < 1 || a < 1 || n > r || a > r
        }
        var L = r(12790),
          B = r(31591),
          P = r(9501)
        const V = (e, t) => {
          if (-1 === ['knitting', 'crochet'].indexOf(e)) return 'other'
          if ('string' != typeof t) return ''
          switch (t) {
            case 'c2c':
              return 'corner2corner'
            case 'mosaicOverlay':
              return 'overlay-mosaic'
            case 'mosaicInset':
              return 'inset-mosaic'
            case 'machineColors':
              return 'machine-colors'
            case 'machineSymbols':
              return 'machine-symbols'
            default:
              return t
          }
        }
        var N = r(86096),
          j = r(30471),
          T = r(72542),
          F = r(20285),
          O = r(25497),
          q = r(83957),
          G = r(20403),
          R = r(3968)
        const W = () => ({ type: R.SuY })
        var M = r(71725),
          D = r(82431),
          U = r(67742),
          $ = r(76030),
          Y = r(30582),
          J = r(13506),
          _ = r(76170)
        const K = (e, t) =>
          'crochet' === e && 'freeform' === t
            ? ['crochetFreeform', 'other']
            : e
            ? t
              ? [e, t]
              : [e, 'other']
            : ['other', 'other']
        var Z = r(59278)
        var Q = r(62654)
        const X = (e, t) => {
            const r = t()
            ;(0, N.A)(r) && e((0, Q.A)())
          },
          ee = async (e, t, r, n) => {
            if (
              (((e, t, r) => {
                const [n, a] = K(t.craft, t.type)
                ;(e.chart.settings.craft = n), (e.chart.settings.type = a)
                const o = r()
                ;(e.chart.details = {
                  ownerUserId: o.user.userId,
                  ownerPremium: o.user.premium,
                  dateCreated: (0, _.A)()
                }),
                  e.chart.grid.settings || (e.chart.grid.settings = {}),
                  e.chart.grid.settings.ruler ||
                    -1 === t.rulerPresetId ||
                    (e.chart.grid.settings.ruler =
                      Y.Yr[t.rulerPresetId].settings),
                  e.chart.grid.settings.gauge ||
                    (e.chart.grid.settings.gauge = {})
                const c = ((e, t) =>
                    e.chart &&
                    e.chart.grid &&
                    e.chart.grid.settings &&
                    e.chart.grid.settings.gauge &&
                    e.chart.grid.settings.gauge.unit
                      ? e.chart.grid.settings.gauge.unit
                      : 'imperial' === t().settings.lengthUnits
                      ? 'in'
                      : 'cm')(e, r),
                  l = (0, m.A)(
                    n,
                    a,
                    t.subtype,
                    c,
                    o.settings.settings.handedness
                  )
                e.chart.grid.settings.gauge ||
                  (e.chart.grid.settings.gauge = {}),
                  (e.chart.grid.settings.gauge = {
                    ...e.chart.grid.settings.gauge,
                    unit: c,
                    adjustGrid: l.gaugeAdjustGrid,
                    horizontal: l.gaugeHorizontal,
                    vertical: l.gaugeVertical,
                    swatchCountHorizontal: l.swatchCountHorizontal,
                    swatchCountVertical: l.swatchCountVertical,
                    swatchLengthHorizontal: l.swatchLengthHorizontal,
                    swatchLengthVertical: l.swatchLengthVertical
                  }),
                  e.chart.grid.halfStitches ||
                    (e.chart.grid.halfStitches = (0, J.A)(
                      Number(t.rowCount),
                      []
                    )),
                  e.chart.grid.quarterStitches ||
                    (e.chart.grid.quarterStitches = (0, J.A)(
                      Number(t.rowCount),
                      []
                    )),
                  e.chart.grid.settings || (e.chart.grid.settings = {}),
                  e.chart.grid.settings.settings ||
                    (e.chart.grid.settings.settings = {}),
                  e.chart.grid.settings.settings.mainColorColumn ||
                    (e.chart.grid.settings.settings.mainColorColumn =
                      l.mainColorColumn),
                  e.chart.grid.progressTracker ||
                    (e.chart.grid.progressTracker = {}),
                  (e.chart.grid.progressTracker.done = (0, Z.A)(
                    e.chart.grid.settings.size.columnCount,
                    e.chart.grid.settings.size.rowCount
                  )),
                  e.chart.grid.progressTracker.mode ||
                    (e.chart.grid.progressTracker.mode = l.progressTrackerMode)
              })(t, e, n),
              r((0, j.A)()),
              r((0, T.A)('new')),
              r((0, F.A)({ ignoreActionSave: !0 })),
              r((0, O.A)(t)),
              await r((0, q.A)()),
              r((0, G.A)()),
              r(W()),
              r((0, F.A)({ ignoreActionSave: !1 })),
              r((0, M.A)()),
              (0, N.A)(n()))
            ) {
              const e = await r((0, D.A)())
              await r((0, U.A)(`/en/c/${e}`))
            } else await r((0, U.A)('/en/c/new'))
            r((0, $.A)('both')), X(r, n)
          }
        var te = r(45717),
          re = r(51409),
          ne = r(82573)
        var ae = r(99159)
        const oe = (e, t, r, n) => {
          switch (r) {
            case 'craft':
            case 'type':
              ;((e, t, r, n) => {
                ;(e[r] = n),
                  'craft' === r &&
                    ('crochet' === e.craft || 'knitting' === e.craft
                      ? (e.type = '')
                      : (e.type = 'other')),
                  !e.craft && e.productCategoryId && (e.productCategoryId = ''),
                  (e.template = ''),
                  p(e),
                  f(e, t()),
                  I(e)
              })(e, t, r, n)
              break
            case 'columnCount':
              ;((e, t) => {
                ;(e.columnCount = t), (e.gridSizeCustomized = !0), I(e)
              })(e, n)
              break
            case 'rowCount':
              ;((e, t) => {
                ;(e.rowCount = t), (e.gridSizeCustomized = !0), I(e)
              })(e, n)
              break
            case 'projectWidth':
              ;((e, t) => {
                if (
                  ((e.projectWidth = t),
                  (e.gridSizeCustomized = !0),
                  (0, w.A)(e.swatchCountHorizontal) > 0 &&
                    (0, w.A)(e.swatchLengthHorizontal) > 0)
                ) {
                  const r = Math.round(
                    (0, w.A)(t) *
                      ((0, w.A)(e.swatchCountHorizontal) /
                        (0, w.A)(e.swatchLengthHorizontal))
                  )
                  r > 0 && (e.columnCount = r.toString())
                }
              })(e, n)
              break
            case 'projectHeight':
              ;((e, t) => {
                if (
                  ((e.projectHeight = t),
                  (e.gridSizeCustomized = !0),
                  (0, w.A)(e.swatchCountHorizontal) > 0 &&
                    (0, w.A)(e.swatchLengthHorizontal) > 0)
                ) {
                  const r = Math.round(
                    (0, w.A)(t) *
                      ((0, w.A)(e.swatchCountVertical) /
                        (0, w.A)(e.swatchLengthVertical))
                  )
                  r > 0 && (e.rowCount = r.toString())
                }
              })(e, n)
              break
            case 'gaugeHorizontal':
            case 'gaugeVertical':
              ;(e[r] = n), (e.isSwatchCustomized = !0)
              break
            case 'gauge':
              ;(e.gaugeHorizontal = n.gaugeHorizontal),
                (e.gaugeVertical = n.gaugeVertical),
                (e.isSwatchCustomized = !0)
              break
            case 'unit':
              ;((e, t) => {
                const r = (0, ne.A)(
                  e.unit,
                  t,
                  e.swatchLengthHorizontal,
                  e.swatchLengthVertical
                )
                if (((e.unit = t), 'diamondPainting' === e.craft)) {
                  const r = 'in' === t ? re.Jj : re.ZJ
                  ;(e.swatchLengthHorizontal = r.toString()),
                    (e.swatchLengthVertical = r.toString()),
                    (e.swatchCountHorizontal = '1'),
                    (e.swatchCountVertical = '1')
                } else
                  (e.swatchLengthHorizontal = (0, v.round)(
                    (0, w.A)(e.swatchLengthHorizontal) * r,
                    te.fK
                  ).toString()),
                    (e.swatchLengthVertical = (0, v.round)(
                      (0, w.A)(e.swatchLengthVertical) * r,
                      te.fK
                    ).toString())
                ;(e.projectWidth = (0, v.round)(
                  (0, w.A)(e.projectWidth) * r,
                  te.fK
                ).toString()),
                  (e.projectHeight = (0, v.round)(
                    (0, w.A)(e.projectHeight) * r,
                    te.fK
                  ).toString())
              })(e, n)
              break
            case 'swatch':
              ;((e, t) => {
                t
                  ? ((e.swatchId = t.swatchId),
                    (e.swatchLengthHorizontal =
                      t.swatchLengthHorizontal.toString()),
                    (e.swatchLengthVertical =
                      t.swatchLengthVertical.toString()),
                    (e.swatchCountHorizontal =
                      t.swatchCountHorizontal.toString()),
                    (e.swatchCountVertical = t.swatchCountVertical.toString()),
                    (e.unit = t.unit),
                    (e.isSwatchCustomized = !0))
                  : ((e.swatchId = 0),
                    (e.swatchLengthHorizontal = '0'),
                    (e.swatchLengthVertical = '0'),
                    (e.swatchCountHorizontal = '0'),
                    (e.swatchCountVertical = '0'),
                    (e.gaugeHorizontal = 0),
                    (e.gaugeVertical = 0),
                    (e.isSwatchCustomized = !1)),
                  I(e)
              })(e, n)
              break
            case 'resetSwatchId':
              return void (e.swatchId = 0)
            default:
              e[r] = n
          }
          switch (e.craft) {
            case 'knitting':
              ;((e, t, r) => {
                'type' !== t ||
                  ('mosaic' !== r && 'brioche' !== r) ||
                  (e.rulerPresetId = -1)
              })(e, r, n)
              break
            case 'pixelhobby':
              ;((e, t) => {
                if ('swatchLengthHorizontal' === t) {
                  const t = (0, ae.A)(e.swatchLengthHorizontal, e.unit)
                  t && (e.productCategoryId = t)
                }
              })(e, r)
              break
            case 'macramePixel':
              ;((e, t) => {
                'craft' !== t ||
                  e.productCategoryId ||
                  (e.productCategoryId = 'none')
              })(e, r)
          }
          return e
        }
        var ce = r(8634),
          le = r(72645),
          ie = r(63459),
          se = r(77969)
        var ue = r(87734)
        const de = (e, t, r) => {
          t((0, j.A)()),
            t((0, T.A)('new')),
            t((0, F.A)({ ignoreActionSave: !0 })),
            t(
              (0, ue.A)({
                ownerUserId: r().user.userId,
                ownerPremium: r().user.premium,
                dateCreated: (0, _.A)()
              })
            )
          const [n, a] = K(e.craft, e.type)
          var o
          t((0, le.A)(n)),
            t((0, ie.A)(a)),
            t((0, se.A)(e.subtype)),
            t(
              ((o = 'empty'),
              { type: R.JZ$, saveChart: !0, payload: { template: o } })
            )
        }
        var he = r(28638),
          ge = r(64736),
          me = r(32081),
          pe = r(899),
          ye = r(31853),
          be = r(38251),
          fe = r(46443)
        var we = r(42654)
        const Ce = (e, t, r) => {
          de(e, t, r)
          const n = (0, m.A)(
            r().chart.settings.craft,
            r().chart.settings.type,
            e.subtype,
            e.unit,
            e.handedness
          )
          return (
            (0, ce.A)(r())
              ? ((e, t, r) => {
                  if ('diagonal' !== t.direction1.substr(0, 8)) {
                    const n =
                      t.allowCustomRulerPreset && -1 !== e.rulerPresetId
                        ? e.rulerPresetId
                        : t.rulerPresetId
                    r((0, me.A)(Y.Yr[n].settings))
                  }
                  r(
                    (0, pe.A)({
                      direction1: t.direction1,
                      direction2: t.direction2,
                      validationMaxUniqueStylesPerRow:
                        t.validationMaxUniqueStylesPerRow
                    })
                  ),
                    r(
                      (0, ye.A)({
                        ignoreStitchesLeft: t.ignoreStitchesLeft,
                        ignoreStitchesRight: t.ignoreStitchesRight
                      })
                    )
                  const n = t.direction2.replace('Alternating', '')
                  ;(0, he.A)(n) && r((0, me.A)({ rulerDirectionHorizontal: n }))
                  const a = t.direction1.replace('Alternating', '')
                  ;(0, ge.A)(a) && r((0, me.A)({ rulerDirectionVertical: a }))
                  const o = (0, S.A)(
                      e.swatchCountHorizontal,
                      e.swatchLengthHorizontal,
                      e.unit
                    ),
                    c = (0, S.A)(
                      e.swatchCountVertical,
                      e.swatchLengthVertical,
                      e.unit
                    )
                  r(
                    (0, fe.A)({
                      gaugeHorizontal: o,
                      gaugeVertical: c,
                      unit: e.unit,
                      adjustGrid: t.gaugeAdjustGrid,
                      swatchCountHorizontal: (0, w.A)(e.swatchCountHorizontal),
                      swatchCountVertical: (0, w.A)(e.swatchCountVertical),
                      swatchLengthHorizontal: (0, w.A)(
                        e.swatchLengthHorizontal
                      ),
                      swatchLengthVertical: (0, w.A)(e.swatchLengthVertical)
                    })
                  ),
                    r(
                      (0, be.A)({
                        default: { color: '#dddddd', thickness: 1 },
                        highlight1: {
                          color: '#aaaaaa',
                          thickness: t.showGridLineHighlights ? 16 : 0,
                          interval: 5
                        },
                        highlight2: {
                          color: '#000000',
                          thickness: t.showGridLineHighlights ? 16 : 0,
                          interval: 10
                        }
                      })
                    ),
                    'number' == typeof t.rulerStartNumberHorizontal &&
                      r(
                        (0, me.A)({
                          rulerStartNumberHorizontal:
                            t.rulerStartNumberHorizontal
                        })
                      ),
                    'number' == typeof t.rulerStartNumberVertical &&
                      r(
                        (0, me.A)({
                          rulerStartNumberVertical: t.rulerStartNumberVertical
                        })
                      )
                })(e, n, t)
              : (e => {
                  e((0, we.A)(''))
                })(t),
            n
          )
        }
        var Ae = r(36973),
          ve = r.n(Ae),
          Ee = r(2619)
        var Se = r(40356),
          Ie = r(78212),
          ke = r(57457)
        var ze = r(48482)
        const xe = async e => {
            switch (e) {
              case 'colors':
              case 'c2c':
              case 'tunisian1':
                return (async () => ({
                  styles: [
                    {
                      colorBackground: '#ff1212',
                      abbreviation: 'r',
                      description: 'Red'
                    },
                    {
                      colorBackground: '#ff950a',
                      abbreviation: 'o',
                      description: 'Orange'
                    },
                    {
                      colorBackground: '#fff429',
                      abbreviation: 'y',
                      description: 'Yellow'
                    },
                    {
                      colorBackground: '#12de12',
                      abbreviation: 'g',
                      description: 'Green'
                    },
                    {
                      colorBackground: '#1696f2',
                      abbreviation: 'b',
                      description: 'Blue'
                    },
                    {
                      colorBackground: '#9800eb',
                      abbreviation: 'pu',
                      description: 'Purple'
                    },
                    {
                      colorBackground: '#fa82d2',
                      abbreviation: 'pi',
                      description: 'Pink'
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'w',
                      description: 'White'
                    }
                  ],
                  defaultStyleId: 7,
                  selectedStyleId: 0,
                  writtenStitchCountSingle: !0,
                  writtenStitchEnclosed: 'always'
                }))()
              case 'filet':
                return (async () => ({
                  styles: [
                    { colorBackground: '#ffffff', abbreviation: 'O' },
                    { colorBackground: '#000000', abbreviation: 'X' }
                  ],
                  defaultStyleId: 0,
                  selectedStyleId: 1,
                  writtenStitchCountSingle: !1,
                  writtenStitchEnclosed: 'no'
                }))()
              case 'mosaicOverlay':
                return (async () => ({
                  styles: [
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'sc',
                      description: 'Single crochet'
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'sc',
                      description: 'Single crochet'
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'dc',
                      description: 'Double crochet',
                      symbolId: 'obl23vf-c45p6l'
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'dc',
                      description: 'Double crochet',
                      symbolId: 'obl23vf-c45p6l'
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'bs',
                      description: 'Border stitch',
                      symbolId: 'obl23rr-23b3cs',
                      writtenStitchCountSingle: !1,
                      showInTotal: !1
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'bs',
                      description: 'Border stitch',
                      symbolId: 'obl23rr-23b3cs',
                      writtenStitchCountSingle: !1,
                      showInTotal: !1
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'Use color A',
                      description: 'Color A',
                      symbolId: 'obl23kf-bxucl8',
                      writtenStitchCountSingle: !1,
                      showInTotal: !1
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'Use color B',
                      description: 'Color B',
                      symbolId: 'obl23ke-10po92',
                      writtenStitchCountSingle: !1,
                      showInTotal: !1
                    }
                  ],
                  defaultStyleId: 0,
                  selectedStyleId: 1,
                  writtenStitchCountSingle: !0,
                  writtenStitchEnclosed: 'no',
                  symbolCategoryId: ze.wP
                }))()
              case 'mosaicInset':
                return (async () => ({
                  styles: [
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'sc',
                      description: 'Single crochet'
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'sc',
                      description: 'Single crochet'
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'dc',
                      description: 'Double crochet',
                      symbolId: 'obl23vf-c45p6l'
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'dc',
                      description: 'Double crochet',
                      symbolId: 'obl23vf-c45p6l'
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'ch2',
                      description: 'Chain 2',
                      symbolId: 'obl23vh-jdsq51'
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'ch2',
                      description: 'Chain 2',
                      symbolId: 'obl23vh-jdsq51'
                    },
                    {
                      colorBackground: '#ffffff',
                      abbreviation: 'Use color A',
                      description: 'Color A',
                      symbolId: 'obl23kf-bxucl8',
                      writtenStitchCountSingle: !1
                    },
                    {
                      colorBackground: '#cccccc',
                      abbreviation: 'Use color B',
                      description: 'Color B',
                      symbolId: 'obl23ke-10po92',
                      writtenStitchCountSingle: !1
                    }
                  ],
                  defaultStyleId: 0,
                  selectedStyleId: 1,
                  writtenStitchCountSingle: !0,
                  writtenStitchEnclosed: 'no',
                  symbolCategoryId: ze.wP
                }))()
              case 'tunisian2':
                return (async () => ({
                  styles: [
                    { symbolId: 'obl22xi-5wq3rk' },
                    { symbolId: 'obl22ys-4yoloi' },
                    { symbolId: 'obl22xj-dqtnqk' },
                    { symbolId: 'obl22uj-ej3eou' },
                    { symbolId: 'obl22uv-c1jfc1' },
                    { symbolId: 'obl22up-adrjn6' },
                    { symbolId: 'obl22uo-j4fmse' },
                    { symbolId: 'obl22ur-e4l39a' },
                    { symbolId: 'obl22uq-7nre95' },
                    { symbolId: 'obl22up-adrjn6' },
                    { symbolId: 'obl22uo-j4fmse' },
                    { symbolId: 'obl22vy-3otupi' },
                    { symbolId: 'obl22us-j543e8' },
                    { symbolId: 'obl23ci-21qgrt' },
                    { symbolId: 'obl22yt-4pierq' },
                    { symbolId: 'obl22yy-hknu47' },
                    { symbolId: 'obl22x9-9p5y1d' },
                    { symbolId: 'obl22x8-jkw9pk' },
                    { symbolId: 'obl22xd-7l5v68' },
                    { symbolId: 'obl22xe-f44weh' },
                    { symbolId: 'obl22vx-c5pyob' },
                    { symbolId: 'obl22uu-e0y4av' }
                  ],
                  defaultStyleId: 13,
                  selectedStyleId: 0,
                  writtenStitchCountSingle: !1,
                  writtenStitchEnclosed: 'no'
                }))()
              default:
                return (async () => ({
                  styles: [
                    { symbolId: 'obl23ci-21qgrt' },
                    { symbolId: 'obl23uc-in0tlc' },
                    { symbolId: 'obl23ue-d36r81' },
                    { symbolId: 'obl23ua-doyp4' },
                    { symbolId: 'obl23u9-ahk9ic' },
                    { symbolId: 'obl23u8-jttt4s' },
                    { symbolId: 'obl23u7-jdrl3d' }
                  ],
                  defaultStyleId: 0,
                  selectedStyleId: 2,
                  writtenStitchCountSingle: !1,
                  writtenStitchEnclosed: 'no'
                }))()
            }
          },
          He = async (e, t, r, n, a, o, c) =>
            (0, Se.A)(e, t) &&
            -1 === h.H$.indexOf(t) &&
            n &&
            'none' !== n &&
            'none.' !== n
              ? (async (e, t, r, n, a, o) => {
                  const c = await a((0, Ie.A)(r)),
                    l = o().products.products
                  let i = (0, ke.A)(c.defaultProductIds, l)
                  if (
                    (i.length < 2 &&
                      (i = (0, v.sampleSize)((0, ke.A)(c.productIds, l), 7)),
                    i.length < 2)
                  )
                    throw new Error('No default products available')
                  return (
                    i.unshift({
                      colorBackground: '#ffffff',
                      description: 'No stitch',
                      consumes: 0,
                      produces: 0,
                      showInWritten: !1
                    }),
                    {
                      styles: i,
                      defaultStyleId: 0,
                      selectedStyleId: 1,
                      productCategoryId: c.categoryId,
                      writtenStitchCountSingle: !0,
                      writtenStitchEnclosed: 'always'
                    }
                  )
                })(0, 0, n, 0, o, c)
              : (async (e, t, r, n, a) => {
                  switch (e) {
                    case 'knitting':
                      return (async (e, t, r) => {
                        switch (e) {
                          case 'colors':
                            return (async () => ({
                              styles: [
                                {
                                  colorBackground: '#ff1212',
                                  abbreviation: 'r',
                                  description: 'Red'
                                },
                                {
                                  colorBackground: '#ff950a',
                                  abbreviation: 'o',
                                  description: 'Orange'
                                },
                                {
                                  colorBackground: '#fff429',
                                  abbreviation: 'y',
                                  description: 'Yellow'
                                },
                                {
                                  colorBackground: '#12de12',
                                  abbreviation: 'g',
                                  description: 'Green'
                                },
                                {
                                  colorBackground: '#1696f2',
                                  abbreviation: 'b',
                                  description: 'Blue'
                                },
                                {
                                  colorBackground: '#9800eb',
                                  abbreviation: 'pu',
                                  description: 'Purple'
                                },
                                {
                                  colorBackground: '#fa82d2',
                                  abbreviation: 'pi',
                                  description: 'Pink'
                                },
                                {
                                  colorBackground: '#ffffff',
                                  abbreviation: 'w',
                                  description: 'White'
                                }
                              ],
                              defaultStyleId: 7,
                              selectedStyleId: 0,
                              writtenStitchCountSingle: !0,
                              writtenStitchEnclosed: 'always'
                            }))()
                          case 'lace':
                            return (async () => ({
                              styles: [
                                { symbolId: 'obl23cj-embhc9' },
                                { symbolId: 'obl235s-8wo4ct' },
                                { symbolId: 'obl2364-1bt631' },
                                { symbolId: 'obl2363-83q4rq' },
                                { symbolId: 'obl234v-inonfx' },
                                { symbolId: 'obl234u-3qtxs8' },
                                { symbolId: 'obl231p-4l33gn' },
                                { symbolId: 'obl235n-bl8b9w' },
                                { symbolId: 'obl23ci-21qgrt' },
                                { colorBackground: '#ff1212' }
                              ],
                              defaultStyleId: 0,
                              selectedStyleId: 7,
                              writtenStitchCountSingle: !1,
                              writtenStitchEnclosed: 'no'
                            }))()
                          case 'cables':
                            return (async () => ({
                              styles: [
                                { symbolId: 'obl23cj-embhc9' },
                                { symbolId: 'obl235s-8wo4ct' },
                                { symbolId: 'obl234a-9exgs3' },
                                { symbolId: 'obl2349-jrtn0n' },
                                { symbolId: 'obl2332-eutrtv' },
                                { symbolId: 'obl2331-1wd5yw' },
                                { symbolId: 'obl23ci-21qgrt' },
                                { colorBackground: '#ff1212' }
                              ],
                              defaultStyleId: 0,
                              selectedStyleId: 2,
                              writtenStitchCountSingle: !1,
                              writtenStitchEnclosed: 'no'
                            }))()
                          case 'brioche':
                            return (async () => ({
                              styles: [
                                { symbolId: 'obl23cj-embhc9' },
                                { symbolId: 'obl235s-8wo4ct' },
                                { symbolId: 'obl237a-4af3ie' },
                                { symbolId: 'obl2379-9paixw' },
                                { symbolId: 'obl237b-ctoshe' },
                                { symbolId: 'obl2374-hk82kq' },
                                { symbolId: 'obl2378-j0j6rt' },
                                { symbolId: 'obl236y-e3j7nt' },
                                { symbolId: 'obl236v-68rnpl' },
                                { symbolId: 'obl2373-b2a7rq' },
                                { symbolId: 'obl236x-6dtacl' },
                                { symbolId: 'obl236w-6x8ynj' },
                                { symbolId: 'obl2372-1tw6o1' },
                                { symbolId: 'obl2371-f4dd40' },
                                { symbolId: 'obl2401-21kyit' },
                                { symbolId: 'obl2400-fb3m12' },
                                { colorBackground: '#ff1212' },
                                { symbolId: 'obl23ci-21qgrt' }
                              ],
                              defaultStyleId: 0,
                              selectedStyleId: 2,
                              writtenStitchCountSingle: !1,
                              writtenStitchEnclosed: 'no'
                            }))()
                          case 'mosaic':
                            return (async e =>
                              16 === e
                                ? {
                                    styles: [
                                      {
                                        colorBackground: '#ffffff',
                                        symbolId: 'obl23cj-embhc9'
                                      },
                                      {
                                        colorBackground: '#ffffff',
                                        symbolId: 'obl235s-8wo4ct'
                                      },
                                      {
                                        colorBackground: '#ffffff',
                                        symbolId: 'obl235r-14wfn5'
                                      },
                                      {
                                        colorBackground: '#a2c4c9',
                                        symbolId: 'obl23cj-embhc9'
                                      },
                                      {
                                        colorBackground: '#a2c4c9',
                                        symbolId: 'obl235s-8wo4ct'
                                      },
                                      {
                                        colorBackground: '#a2c4c9',
                                        symbolId: 'obl235r-14wfn5'
                                      },
                                      { colorBackground: '#ff1212' },
                                      {
                                        colorBackground: '#999999',
                                        symbolId: 'obl23ci-21qgrt'
                                      }
                                    ],
                                    defaultStyleId: 0,
                                    selectedStyleId: 3,
                                    writtenStitchCountSingle: !1,
                                    writtenStitchEnclosed: 'no'
                                  }
                                : {
                                    styles: [
                                      {
                                        colorBackground: '#ffffff',
                                        abbreviation: 'CC',
                                        description: 'Contrastkleur (CC)'
                                      },
                                      {
                                        colorBackground: '#000000',
                                        abbreviation: 'MC',
                                        description: 'Hoofdkleur (MC)'
                                      },
                                      { colorBackground: '#ff1212' },
                                      {
                                        colorBackground: '#999999',
                                        symbolId: 'obl23ci-21qgrt'
                                      }
                                    ],
                                    defaultStyleId: 0,
                                    selectedStyleId: 1,
                                    writtenStitchCountSingle: !1,
                                    writtenStitchEnclosed: 'no'
                                  })(r)
                          case 'machineColors':
                            return (async e =>
                              'punch' === e
                                ? {
                                    styles: [
                                      {
                                        colorBackground: '#ffffff',
                                        abbreviation: '-',
                                        description: 'MC'
                                      },
                                      {
                                        colorBackground: '#000000',
                                        symbolId: 'obl23k9-gwv6la',
                                        abbreviation: 'x',
                                        description: 'CC'
                                      }
                                    ],
                                    defaultStyleId: 0,
                                    selectedStyleId: 1,
                                    writtenStitchCountSingle: !1,
                                    writtenStitchEnclosed: 'no'
                                  }
                                : {
                                    styles: [
                                      {
                                        colorBackground: '#ff1212',
                                        abbreviation: 'r',
                                        description: 'Red'
                                      },
                                      {
                                        colorBackground: '#ff950a',
                                        abbreviation: 'o',
                                        description: 'Orange'
                                      },
                                      {
                                        colorBackground: '#fff429',
                                        abbreviation: 'y',
                                        description: 'Yellow'
                                      },
                                      {
                                        colorBackground: '#12de12',
                                        abbreviation: 'g',
                                        description: 'Green'
                                      },
                                      {
                                        colorBackground: '#1696f2',
                                        abbreviation: 'b',
                                        description: 'Blue'
                                      },
                                      {
                                        colorBackground: '#9800eb',
                                        abbreviation: 'pu',
                                        description: 'Purple'
                                      },
                                      {
                                        colorBackground: '#fa82d2',
                                        abbreviation: 'pi',
                                        description: 'Pink'
                                      },
                                      {
                                        colorBackground: '#ffffff',
                                        abbreviation: 'w',
                                        description: 'White'
                                      }
                                    ],
                                    defaultStyleId: 7,
                                    selectedStyleId: 0,
                                    writtenStitchCountSingle: !1,
                                    writtenStitchEnclosed: 'no'
                                  })(t)
                          default:
                            return (async () => ({
                              styles: [
                                { symbolId: 'obl23cj-embhc9' },
                                { symbolId: 'obl235s-8wo4ct' },
                                { symbolId: 'obl235n-bl8b9w' },
                                { symbolId: 'obl2364-1bt631' },
                                { symbolId: 'obl2363-83q4rq' },
                                { symbolId: 'obl23ci-21qgrt' }
                              ],
                              defaultStyleId: 0,
                              selectedStyleId: 1,
                              writtenStitchCountSingle: !1,
                              writtenStitchEnclosed: 'no'
                            }))()
                        }
                      })(t, r, a)
                    case 'crochet':
                      return xe(t)
                    case 'crochetFreeform':
                      return (async () => ({
                        styles: [
                          { symbolId: 'obl235e-jjpa33' },
                          { symbolId: 'obl2355-cisy5p' },
                          { symbolId: 'obl2353-2be942' },
                          { symbolId: 'obl2352-jk5cjp' },
                          { symbolId: 'obl2354-3yy0k7' },
                          { symbolId: 'obl2359-b4ekpl' },
                          { symbolId: 'obl2358-gtmynx' },
                          { symbolId: 'obl2357-axxxuf' },
                          { symbolId: 'obl231o-3aahf2' },
                          { symbolId: 'obl231n-2n86q9' },
                          { symbolId: 'obl231m-3f9ggy' },
                          { symbolId: 'obl231t-96mr73' },
                          { symbolId: 'obl231s-foecv9' },
                          { symbolId: 'obl231r-b11ahi' },
                          { symbolId: 'obl231q-81xdto' },
                          { symbolId: 'obl231h-76n2qu' },
                          { symbolId: 'obl231g-brf7b6' },
                          { symbolId: 'obl231f-he5olw' },
                          { symbolId: 'obl231e-brfnsm' },
                          { symbolId: 'obl231l-6oqa8a' },
                          { symbolId: 'obl231k-i4fifp' }
                        ],
                        defaultStyleId: 0,
                        selectedStyleId: 15,
                        writtenStitchCountSingle: !1,
                        writtenStitchEnclosed: 'no'
                      }))()
                    case 'crossStitch':
                      return (async () => ({
                        styles: [
                          {
                            colorBackground: '#ffffff',
                            description: 'No stitch',
                            consumes: 0,
                            produces: 0,
                            showInWritten: !1
                          },
                          {
                            colorBackground: '#ff1212',
                            abbreviation: 'r',
                            description: 'Red'
                          },
                          {
                            colorBackground: '#ff950a',
                            abbreviation: 'o',
                            description: 'Orange'
                          },
                          {
                            colorBackground: '#fff429',
                            abbreviation: 'y',
                            description: 'Yellow'
                          },
                          {
                            colorBackground: '#12de12',
                            abbreviation: 'g',
                            description: 'Green'
                          },
                          {
                            colorBackground: '#1696f2',
                            abbreviation: 'b',
                            description: 'Blue'
                          },
                          {
                            colorBackground: '#9800eb',
                            abbreviation: 'pu',
                            description: 'Purple'
                          },
                          {
                            colorBackground: '#fa82d2',
                            abbreviation: 'pi',
                            description: 'Pink'
                          }
                        ],
                        defaultStyleId: 0,
                        selectedStyleId: 1,
                        writtenStitchCountSingle: !0,
                        writtenStitchEnclosed: 'always'
                      }))()
                    default:
                      return (async () => ({
                        styles: [
                          {
                            colorBackground: '#ff1212',
                            abbreviation: 'r',
                            description: 'Red'
                          },
                          {
                            colorBackground: '#ff950a',
                            abbreviation: 'o',
                            description: 'Orange'
                          },
                          {
                            colorBackground: '#fff429',
                            abbreviation: 'y',
                            description: 'Yellow'
                          },
                          {
                            colorBackground: '#12de12',
                            abbreviation: 'g',
                            description: 'Green'
                          },
                          {
                            colorBackground: '#1696f2',
                            abbreviation: 'b',
                            description: 'Blue'
                          },
                          {
                            colorBackground: '#9800eb',
                            abbreviation: 'pu',
                            description: 'Purple'
                          },
                          {
                            colorBackground: '#fa82d2',
                            abbreviation: 'pi',
                            description: 'Pink'
                          },
                          {
                            colorBackground: '#ffffff',
                            abbreviation: 'w',
                            description: 'White'
                          }
                        ],
                        defaultStyleId: 7,
                        selectedStyleId: 0,
                        writtenStitchCountSingle: !0,
                        writtenStitchEnclosed: 'always'
                      }))()
                  }
                })(e, t, r, 0, a)
        var Le = r(32660)
        const Be = async (e, t, r, n, a, o, c) => {
          const i = !(0, l.A)(e),
            s = await He(e, t, r, n, a, o, c)
          var u
          await o(
            ((u = s.styles),
            e => e((0, Ee.A)(u.map(e => e.symbolId).filter(e => !!e))))
          )
          const d = c().symbols.symbols
          return (
            (s.styles = s.styles.map(e => {
              const t = { ...e }
              'boolean' != typeof e.writtenStitchCountSingle &&
                (t.writtenStitchCountSingle = s.writtenStitchCountSingle),
                'string' != typeof e.writtenStitchEnclosed &&
                  (t.writtenStitchEnclosed = s.writtenStitchEnclosed)
              const r = d[e.symbolId]
              return (
                r && (0, Le.A)(t, r),
                i &&
                  (t.colorForeground = e.colorBackground
                    ? ve()(e.colorBackground, !0)
                    : '#000000'),
                t
              )
            })),
            ((e, t, r) => {
              'crochet' === t &&
                ((e, t) => {
                  switch (t) {
                    case 'mosaicOverlay':
                    case 'mosaicInset':
                      ;(e => {
                        for (let t = 0; t < e.styles.length; t++)
                          e.styles[t].writtenStitchEnclosed = 'no'
                      })(e)
                  }
                })(e, r)
            })(s, e, t),
            s
          )
        }
        var Pe = r(83252),
          Ve = r(16270),
          Ne = r(52438),
          je = r(11986)
        const Te = async (e, t, r, n) => {
          const a = await r(
            ((o = n().chart.settings.craft),
            (c = n().chart.settings.type),
            (l = n().chart.settings.subtype),
            (i = e.productCategoryId),
            (s = e.rulerPresetId),
            async (e, t) => Be(o, c, l, i, s, e, t))
          )
          var o, c, l, i, s
          return (
            await r(
              (0, Ee.A)(
                a.styles.map(e => e.symbolId).filter(e => e && '' !== e)
              )
            ),
            a.productCategoryId && r((0, Pe.A)(a.productCategoryId)),
            a.symbolCategoryId && r((0, Ve.A)(a.symbolCategoryId)),
            a.styles.forEach(e => r((0, Ne.A)(e))),
            r((0, je.A)(a.selectedStyleId)),
            a
          )
        }
        var Fe = r(46579),
          Oe = r(13531),
          qe = r(21468),
          Ge = r(48870),
          Re = r(81160),
          We = r(16451),
          Me = r(43330)
        var De = r(82868),
          Ue = r(50195)
        var $e = r(76644),
          Ye = r(9946),
          Je = r(28277)
        const _e = (e, t) => {
            const r = t(),
              n = r.chart.grid.settings.size,
              a = r.chart.settings.type,
              [o, c, l, i] = (0, $e.A)(r, '#ffffff', '#cccccc')
            if (-1 === o || -1 === c || -1 === l || -1 === i) return
            const s = ((
              e,
              t,
              r,
              n,
              a = 1,
              o = !0,
              c = 'unused',
              l = -1,
              i = -1,
              s = 1
            ) => {
              o && (([r, n] = [n, r]), ([l, i] = [i, l]))
              const u = (0, J.A)(e, r),
                d = (0, J.A)(e, n)
              ;('left' !== c && 'both' !== c) ||
                (-1 !== l && (u[0] = l), -1 !== i && (d[0] = i)),
                ('right' !== c && 'both' !== c) ||
                  (-1 !== l && (u[e - 1] = l), -1 !== i && (d[e - 1] = i))
              const h = []
              let g = !0,
                m = 0,
                p = s > 1
              for (let e = 0; e < t; e++)
                (h[e] = g ? d.slice() : u.slice()),
                  m++,
                  p
                    ? m >= s && ((g = !g), (m = 0), (p = !1))
                    : m >= a && ((g = !g), (m = 0))
              return o && h.reverse(), h
            })(
              n.columnCount,
              n.rowCount,
              l,
              i,
              r.chart.grid.settings.ruler.rulerSkipCountVertical,
              !0,
              r.chart.grid.settings.settings.mainColorColumn,
              o,
              c,
              'mosaicOverlay' === a ? 2 : 1
            )
            e((0, O.A)({ chart: { grid: { rows: s } } })),
              'mosaicOverlay' === a && (e((0, Ye.A)(!0)), e((0, Je.A)(!1)))
          },
          Ke = (e, t) => {
            'crochet' === t().chart.settings.craft &&
              ((e, t) => {
                switch (t().chart.settings.type) {
                  case 'mosaicInset':
                  case 'mosaicOverlay':
                    _e(e, t)
                }
              })(e, t)
          },
          Ze = (e, t, r, n, a) => {
            ;(0, ce.A)(n())
              ? ((e, t, r, n, a) => {
                  const o = n().user.premium ? z.jJ : z.ki
                  let c = (0, Fe.A)((0, x.A)(e.columnCount), 1, o),
                    l = (0, Fe.A)((0, x.A)(e.rowCount), 1, o)
                  0 === t.rulerStartNumberVertical && l++,
                    (0, Oe.A)(t.mainColorColumn) && c++,
                    (0, qe.A)(t.mainColorColumn) && c++,
                    r((0, Re.A)(c, l, a.defaultStyleId)),
                    r((0, Ge.A)('drawCells')),
                    r((0, We.A)()),
                    r(
                      (0, ye.A)({
                        ignoreStitchesLeft: t.ignoreStitchesLeft,
                        ignoreStitchesRight: t.ignoreStitchesRight
                      })
                    ),
                    r(
                      (0, me.A)({
                        rulerIgnoreColumnsLeft: t.rulerIgnoreColumnsLeft,
                        rulerIgnoreColumnsRight: t.rulerIgnoreColumnsRight
                      })
                    ),
                    r((0, Me.A)(t.progressTrackerMode)),
                    r((0, pe.A)({ mainColorColumn: t.mainColorColumn }))
                })(e, t, r, n, a)
              : (e => {
                  e((0, Ue.A)(De.Zx)), e((0, Ge.A)(''))
                })(r),
              r((0, G.A)()),
              Ke(r, n),
              r(W()),
              r((0, F.A)({ ignoreActionSave: !1 })),
              r((0, M.A)())
          },
          Qe = async (e, t, r) => {
            try {
              const n = Ce(e, t, r),
                a = await Te(e, 0, t, r)
              Ze(e, n, t, r, a),
                await (async (e, t) => {
                  if ((0, N.A)(t())) {
                    const t = await e((0, D.A)())
                    await e((0, U.A)(`/en/c/${t}`))
                  } else await e((0, U.A)('/en/c/new'))
                })(t, r),
                X(t, r)
            } catch (e) {
              throw ((0, o.A)(e), t((0, F.A)({ ignoreActionSave: !1 })), e)
            }
          }
        var Xe = r(90453),
          et = r(59977),
          tt = r(48583),
          rt = r(29690),
          nt = r(3348),
          at = r(75102)
        const ot = () =>
          n.createElement(
            at.A,
            null,
            n.createElement(
              'p',
              {
                className: 'jumbotron',
                style: { marginTop: 50, fontSize: 18, textAlign: 'center' }
              },
              'Preparing your chart...'
            )
          )
        var ct = r(5738),
          lt = r(89200),
          it = r(70055),
          st = r(93348),
          ut = r(80513)
        const dt = ({ craft: e, type: t, label: r, info: a, onChange: o }) => {
            const c = '/en/chart/create/' + (0, P.A)(e) + '/' + V(e, t)
            return n.createElement(
              'a',
              {
                className: 'option optionWithListItems',
                href: c,
                onClick: e => o('type', t, e)
              },
              n.createElement(st.A, { size: 20 }),
              n.createElement('span', null, r),
              a &&
                n.createElement(
                  'div',
                  null,
                  n.createElement(
                    'ul',
                    { className: 'list-unstyled', style: { marginBottom: 0 } },
                    n.createElement(
                      'li',
                      { style: { marginTop: 0, marginBottom: 0 } },
                      n.createElement(ut.A, { size: 20 }),
                      n.createElement('span', null, a)
                    )
                  )
                )
            )
          },
          ht = () =>
            n.createElement(
              'p',
              { style: { marginTop: 5, fontSize: 15 } },
              "Don't know exactly what you need? Work with a combination of techniques? Choose what fits best, you can still adjust and customize everything later."
            ),
          gt = ({ onlyColorWork: e, onChange: t }) =>
            n.createElement(
              'div',
              null,
              n.createElement('h4', null, 'What kind of knitting project?'),
              n.createElement(dt, {
                craft: 'knitting',
                type: 'colors',
                label: 'Colors ',
                info: 'For example, fair isle, intarsia, twined, duplicate stitch',
                onChange: t
              }),
              !e &&
                n.createElement(dt, {
                  craft: 'knitting',
                  type: 'lace',
                  label: 'Lace',
                  onChange: t
                }),
              !e &&
                n.createElement(dt, {
                  craft: 'knitting',
                  type: 'cables',
                  label: 'Cables',
                  onChange: t
                }),
              !e &&
                n.createElement(dt, {
                  craft: 'knitting',
                  type: 'brioche',
                  label: 'Brioche',
                  onChange: t
                }),
              n.createElement(dt, {
                craft: 'knitting',
                type: 'mosaic',
                label: 'Mosaic',
                onChange: t
              }),
              n.createElement(dt, {
                craft: 'knitting',
                type: 'machineColors',
                label: 'Machine (colors)',
                onChange: t
              }),
              n.createElement(dt, {
                craft: 'knitting',
                type: 'machineSymbols',
                label: 'Machine (stitch symbols)',
                onChange: t
              }),
              !e &&
                n.createElement(dt, {
                  craft: 'knitting',
                  type: 'other',
                  label: 'Other (chart with stitch symbols)',
                  onChange: t
                }),
              n.createElement(ht, null)
            )
        var mt = r(14575)
        const pt = ({ onlyColorWork: e, onChange: t }) => {
            const r = (0, mt.A)(e => e.user.showBetaFeatures)
            return n.createElement(
              'div',
              null,
              n.createElement('h4', null, 'What kind of crochet project?'),
              n.createElement(dt, {
                craft: 'crochet',
                type: 'c2c',
                label: 'Corner 2 corner crochet (C2C)',
                info: 'Crochet colorwork in diagonal direction, e.g. 2 or 3 hdc/dc stitches',
                onChange: t
              }),
              n.createElement(dt, {
                craft: 'crochet',
                type: 'colors',
                label: 'Crochet colorwork',
                info: 'For example, graphgan, pixel crochet, picture crochet, tunisian colorwork, tapestry',
                onChange: t
              }),
              n.createElement(dt, {
                craft: 'crochet',
                type: 'filet',
                label: 'Filet crochet',
                onChange: t
              }),
              n.createElement(dt, {
                craft: 'crochet',
                type: 'mosaicOverlay',
                label: 'Overlay mosaic crochet',
                info: 'One color for one row and change color every row, starting on same side each time',
                onChange: t
              }),
              r &&
                n.createElement(dt, {
                  craft: 'crochet',
                  type: 'mosaicInset',
                  label: 'Inset mosaic crochet',
                  info: 'One color for two rows',
                  onChange: t
                }),
              !e &&
                n.createElement(dt, {
                  craft: 'crochet',
                  type: 'freeform',
                  label: 'Free form',
                  info: 'Place symbols in all shapes and directions',
                  onChange: t
                }),
              n.createElement(dt, {
                craft: 'crochet',
                type: 'tunisian1',
                label: 'Tunisian crochet colorwork',
                info: 'Use multiple colors',
                onChange: t
              }),
              !e &&
                n.createElement(dt, {
                  craft: 'crochet',
                  type: 'tunisian2',
                  label: 'Tunisian crochet with return pass',
                  info: 'Single color / chart with symbols only / with return pass',
                  onChange: t
                }),
              !e &&
                n.createElement(dt, {
                  craft: 'crochet',
                  type: 'other',
                  label: 'Other - Chart with general crochet stitch symbols',
                  onChange: t
                }),
              n.createElement(ht, null)
            )
          },
          yt = ({ craft: e, onlyColorWork: t, onChange: r }) => {
            switch (e) {
              case 'knitting':
                return n.createElement(gt, { onlyColorWork: t, onChange: r })
              case 'crochet':
                return n.createElement(pt, { onlyColorWork: t, onChange: r })
              default:
                return null
            }
          }
        var bt = r(33068),
          ft = r(49889)
        const wt = ({ craft: e, type: t, onClick: r }) => {
            const a = `/en/chart/create/${(0, P.A)(e)}`,
              o = (0, ft.A)(e, t)
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'a',
                { className: 'option', href: a, onClick: r },
                n.createElement(
                  'span',
                  { className: 'active', style: { marginRight: 10 } },
                  n.createElement(bt.A, {
                    size: 20,
                    style: { verticalAlign: 'middle' }
                  }),
                  n.createElement('span', null, 'Project:')
                ),
                n.createElement('span', null, o)
              )
            )
          },
          Ct = ({
            craft: e,
            type: t,
            onlyColorWork: r,
            isActive: a,
            onChange: o
          }) =>
            n.createElement(
              'section',
              { className: a ? 'active' : '' },
              a
                ? n.createElement(yt, {
                    craft: e,
                    onlyColorWork: r,
                    onChange: o
                  })
                : n.createElement(wt, {
                    craft: e,
                    type: t,
                    onClick: e => o('type', '', e)
                  })
            ),
          At = ({
            craft: e,
            type: t,
            subtype: r,
            label: a,
            info: o,
            onChange: c
          }) => {
            const l =
              '/en/chart/create/' +
              (0, P.A)(e) +
              '/' +
              V(e, t) +
              '?subtype=' +
              r
            return n.createElement(
              'a',
              {
                className: 'option optionWithListItems',
                href: l,
                onClick: e => c('subtype', r, e)
              },
              n.createElement(st.A, { size: 20 }),
              n.createElement('span', null, a),
              o &&
                n.createElement(
                  'div',
                  null,
                  n.createElement(
                    'ul',
                    { className: 'list-unstyled', style: { marginBottom: 0 } },
                    n.createElement(
                      'li',
                      { style: { marginTop: 0, marginBottom: 0 } },
                      n.createElement(ut.A, { size: 20 }),
                      n.createElement('span', null, o)
                    )
                  )
                )
            )
          },
          vt = ({ craft: e, type: t, onChange: r }) =>
            n.createElement(
              'div',
              null,
              n.createElement(
                'h4',
                null,
                'What kind of machine knitting project?'
              ),
              n.createElement(At, {
                craft: e,
                type: t,
                subtype: 'colors',
                label: 'Colors ',
                onChange: r
              }),
              n.createElement(At, {
                craft: e,
                type: t,
                subtype: 'punch',
                label: 'Punch card',
                onChange: r
              })
            ),
          Et = ({ craft: e, type: t, onChange: r }) =>
            'knitting' === e
              ? n.createElement(vt, { craft: e, type: t, onChange: r })
              : null,
          St = ({ craft: e, type: t, subtype: r, onClick: a }) => {
            const o = `/en/chart/create/${(0, P.A)(e)}/${V(e, t)}`,
              c = ((e, t, r) => {
                switch (r) {
                  case 'punch':
                    return 'Punch card'
                  case 'colors':
                    return 'Colors '
                  default:
                    return 'General symbols chart (Other)'
                }
              })(0, 0, r)
            return n.createElement(
              'a',
              { className: 'option', href: o, onClick: a },
              n.createElement(
                'span',
                { className: 'active', style: { marginRight: 10 } },
                n.createElement(bt.A, {
                  size: 20,
                  style: { verticalAlign: 'middle' }
                }),
                n.createElement('span', null, 'Type:')
              ),
              n.createElement('span', null, c)
            )
          },
          It = ({ craft: e, type: t, subtype: r, isActive: a, onChange: o }) =>
            n.createElement(
              'section',
              { className: a ? 'active' : '' },
              a
                ? n.createElement(Et, { craft: e, type: t, onChange: o })
                : n.createElement(St, {
                    craft: e,
                    type: t,
                    subtype: r,
                    onClick: e => o('subtype', '', e)
                  })
            )
        var kt = r(84661)
        const zt = ({ craft: e, type: t, rulerPresetId: r, onChange: a }) =>
            n.createElement(
              'div',
              null,
              n.createElement('h4', null, 'How do you work?'),
              n.createElement(kt.A, {
                craft: e,
                type: t,
                rulerPresetId: r,
                onRulerPresetChange: e => a('rulerPresetId', e)
              })
            ),
          xt = ({ craft: e, rulerPresetId: t, onClick: r }) => {
            const a = ((e, t) => {
              const r = Y.Yr[e]
              return r && r.titles && r.titles[t] && r.titles[t].title
                ? r.titles[t].title
                : ''
            })(t, e)
            return n.createElement(
              'div',
              { className: 'option', onClick: r },
              n.createElement(
                'span',
                { className: 'active', style: { marginRight: 10 } },
                n.createElement(bt.A, {
                  size: 20,
                  style: { verticalAlign: 'middle' }
                }),
                n.createElement('span', null, 'How to work:')
              ),
              n.createElement('span', null, a)
            )
          },
          Ht = ({
            craft: e,
            type: t,
            isActive: r,
            rulerPresetId: a,
            onChange: o
          }) =>
            n.createElement(
              'section',
              { className: r ? 'active' : '' },
              r
                ? n.createElement(zt, {
                    craft: e,
                    type: t,
                    rulerPresetId: a,
                    onChange: o
                  })
                : n.createElement(xt, {
                    craft: e,
                    rulerPresetId: a,
                    onClick: () => o('rulerPresetId', -1)
                  })
            )
        var Lt = r(30750),
          Bt = r(72280),
          Pt = r(48204),
          Vt = r(725),
          Nt = r(95808),
          jt = r(72376),
          Tt = r(24313),
          Ft = r(98339)
        const Ot = (e, t, r) => {
          const n = e.filter(e => 'yes' === e.available)
          return r
            ? n.filter(e => e.brandId === r)
            : 'latchHook' === t
            ? e.filter(
                e => 'knittingCrochet' === e.craft || 'latchHook' === e.craft
              )
            : n
        }
        var qt = r(88631),
          Gt = r(1561)
        var Rt = r(53525)
        const Wt = (e, t, r) => {
            if (t.length < 3) return r ? e : []
            const n = (0, Rt.A)(e, t, ['title', 'categoryId'], !0).slice(0, 100)
            return (
              n.push({ ...qt.$, categoryId: 'none', title: 'No preference' }), n
            )
          },
          Mt = (e, t) => {
            const r = e.filter(e => 'yes' === e.available && e.craft === t)
            return (
              r.unshift({
                ...qt.$,
                categoryId: 'none',
                title: 'No preference'
              }),
              r
            )
          },
          Dt = (e, t) => {
            const r = (0, v.orderBy)(
              e
                .filter(e => 'yes' === e.available && e.craft === t)
                .map(e => ({
                  ...e,
                  titleSortable: (0, v.deburr)(e.title).toLowerCase()
                })),
              'titleSortable'
            )
            return (
              r.length >= 3 &&
                r.unshift({
                  ...qt.$,
                  categoryId: 'none',
                  title: 'No preference'
                }),
              r
            )
          }
        var Ut = r(84501),
          $t = r(58213)
        const Yt = ({ productCategory: e, onClick: t }) =>
          n.createElement(
            'div',
            { onClick: () => t(e.categoryId), className: 'option' },
            n.createElement(st.A, {
              size: 18,
              style: { verticalAlign: 'middle' }
            }),
            n.createElement('span', null, e.title),
            e.productCountAvailable > 0 &&
              n.createElement(
                'small',
                null,
                ' (' + e.productCountAvailable.toString() + ' colors)'
              )
          )
        var Jt = r(7728)
        const _t = () =>
            n.createElement(
              'span',
              {
                onClick: () => {
                  const e = document.getElementById('createChartProductSearch')
                  e &&
                    ((0, Jt.A)(e, { block: 'center', inline: 'start' }),
                    e.focus())
                },
                style: { cursor: 'pointer' }
              },
              n.createElement('span', null, 'Use '),
              n.createElement('u', null, 'search feature'),
              n.createElement('span', null, ' for more options!')
            ),
          Kt = ({ craft: e }) => {
            const t = (0, mt.A)(N.A),
              r = (0, a.zy)(),
              o = r.pathname + r.search,
              c = t
                ? `/en/products/${(e => {
                    switch (e) {
                      case 'knitting':
                      case 'crochet':
                        return 'knitting-crochet'
                      case 'crossStitch':
                        return 'cross-stitch'
                      case 'diamondPainting':
                        return 'diamond-painting'
                      case 'latchHook':
                        return 'latch-hook'
                      default:
                        return 'other'
                    }
                  })(e)}/request?redirectUrl=${encodeURIComponent(o)}`
                : `/en/login?redirectUrl=${encodeURIComponent(o)}`
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'span',
                null,
                "Is what you're looking for not in this list? "
              ),
              n.createElement(
                a.N_,
                { to: c, style: { textDecoration: 'underline' } },
                'Please let us know'
              )
            )
          },
          Zt = ({ craft: e, brandId: t, onChange: r }) => {
            const a = (0, et.A)(),
              [o, c] = (0, n.useState)(''),
              [l, i] = (0, Ut.A)(),
              s = o.trim().toLowerCase(),
              u = !!t,
              d = (0, mt.A)(N.A),
              h = (0, mt.A)(Nt.A),
              g = (0, mt.A)(jt.A),
              m = (0, mt.A)(Tt.A),
              p = (0, Ft.A)(e),
              [y, b] = (0, n.useState)(() => Ot(h, p, t)),
              [f, w] = (0, n.useState)(() => Mt(g, p)),
              [C, A] = (0, n.useState)(() => Dt(m, p)),
              [v, E] = (0, n.useState)(() => Wt(y, s, u)),
              S = s.length >= 3
            return (
              (0, n.useEffect)(() => {
                a || b(Ot(h, p, t))
              }, [h, p, t]),
              (0, n.useEffect)(() => {
                a || w(Mt(g, p))
              }, [g, p]),
              (0, n.useEffect)(() => {
                a || (async (e, t) => Dt(e, t))(m, p).then(A)
              }, [m, p]),
              (0, n.useEffect)(() => {
                a ||
                  (async (e, t, r) => {
                    if (t.length < 3) return r ? e : []
                    const n = (
                      await (0, Gt.A)(e, t, ['title', 'categoryId'], !0)
                    ).slice(0, 100)
                    return (
                      n.push({
                        ...qt.$,
                        categoryId: 'none',
                        title: 'No preference'
                      }),
                      n
                    )
                  })(y, s, u).then(E)
              }, [y, s, u]),
              n.createElement(
                'div',
                { style: { fontSize: 16, lineHeight: '140%' } },
                n.createElement(
                  'div',
                  { className: 'row' },
                  n.createElement(
                    'div',
                    { className: 'col-sm-6', style: { marginBottom: 5 } },
                    n.createElement($t.A, {
                      id: 'createChartProductSearch',
                      searchQuery: o,
                      onChange: c,
                      onSubmit: e => {
                        const t = e.trim().toLowerCase()
                        if (e.length < 3) return
                        const n = Wt(y, t, u)
                        0 !== n.length && r(n[0].categoryId)
                      },
                      resetSearchQuery: l,
                      autoFocusOnKeyDown: !0
                    })
                  )
                ),
                !S &&
                  !u &&
                  C.length > 0 &&
                  n.createElement(
                    n.Fragment,
                    null,
                    C.map(e =>
                      n.createElement(Yt, {
                        key: e.categoryId,
                        productCategory: e,
                        onClick: r
                      })
                    ),
                    C.length <= 3
                      ? n.createElement('hr', {
                          style: {
                            marginTop: 4,
                            marginBottom: 4,
                            borderTop: '1px solid #9fc4e4'
                          }
                        })
                      : n.createElement(_t, null)
                  ),
                !S &&
                  !u &&
                  C.length <= 3 &&
                  n.createElement(
                    n.Fragment,
                    null,
                    f.map(e =>
                      n.createElement(Yt, {
                        key: e.categoryId,
                        productCategory: e,
                        onClick: r
                      })
                    ),
                    n.createElement(_t, null)
                  ),
                (S || u) &&
                  n.createElement(
                    n.Fragment,
                    null,
                    v.map(e =>
                      n.createElement(Yt, {
                        key: e.categoryId,
                        productCategory: e,
                        onClick: r
                      })
                    ),
                    n.createElement(
                      'p',
                      null,
                      v.length < 2 &&
                        n.createElement(
                          n.Fragment,
                          null,
                          n.createElement(
                            'i',
                            {
                              onClick: i,
                              style: { cursor: 'pointer', marginRight: 15 }
                            },
                            'Nothing found'
                          ),
                          n.createElement(
                            'a',
                            {
                              href: '#',
                              onClick: e => {
                                e.preventDefault(), i()
                              }
                            },
                            'Cancel'
                          ),
                          n.createElement('br', null)
                        ),
                      d && n.createElement(Kt, { craft: e })
                    )
                  )
              )
            )
          }
        var Qt = r(66188)
        const Xt = ({
            craft: e,
            brandId: t,
            isFetching: r,
            hasFetchError: a,
            retry: o,
            title: c,
            onChange: l
          }) => {
            const i = (0, Qt.A)()
            return n.createElement(
              'div',
              null,
              n.createElement('h4', null, c),
              r &&
                n.createElement(
                  'p',
                  null,
                  n.createElement('span', null, 'Loading...'),
                  n.createElement(Vt.A, { size: 20 })
                ),
              !r &&
                a &&
                n.createElement(
                  'p',
                  null,
                  n.createElement('span', null, 'Load failed'),
                  n.createElement('br', null),
                  n.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-default',
                      onClick: o,
                      style: { width: 'auto' }
                    },
                    n.createElement(Pt.A, {
                      size: 20,
                      style: { float: 'left' }
                    }),
                    n.createElement('span', null, 'Try again')
                  )
                ),
              !r &&
                !a &&
                n.createElement(Zt, {
                  craft: e,
                  brandId: t,
                  onChange: e => {
                    l('productCategoryId', e),
                      e && 'none' !== e && i((0, Bt.A)(e, !0))
                  }
                })
            )
          },
          er = ({ title: e, productCategoryId: t, onClick: r }) => {
            const a = (0, mt.A)(e => e.products.categories[t])
            return n.createElement(
              'div',
              { className: 'option', onClick: r },
              n.createElement(
                'span',
                { className: 'active', style: { marginRight: 10 } },
                n.createElement(bt.A, {
                  size: 20,
                  style: { verticalAlign: 'middle' }
                }),
                n.createElement('span', null, e)
              ),
              n.createElement('span', null, a ? a.title : 'No preference')
            )
          },
          tr = ({
            craft: e,
            type: t,
            brandId: r,
            isActive: a,
            productCategoryId: o,
            onChange: c
          }) => {
            const l = (0, mt.A)(e => e.products.status.categoriesAvailable),
              [i, s] = (0, n.useState)(!l),
              [u, d] = (0, n.useState)(!1),
              h = (0, Qt.A)(),
              g = async () => {
                if (!l) {
                  s(!0), d(!1)
                  try {
                    await h((0, Lt.A)()), s(!1), d(!1)
                  } catch (e) {
                    s(!1), d(!0)
                  }
                }
              }
            ;(0, n.useEffect)(() => {
              g()
            }, [])
            const m = ((e, t) => {
              if ('filet' === t) return 'Colors:'
              switch (e) {
                case 'knitting':
                case 'crochet':
                  return 'Yarn:'
                case 'crossStitch':
                  return 'Floss:'
                default:
                  return 'Colors:'
              }
            })(e, t)
            return n.createElement(
              'section',
              { className: a ? 'active' : '' },
              a
                ? n.createElement(Xt, {
                    craft: e,
                    brandId: r,
                    isFetching: i,
                    hasFetchError: u,
                    retry: g,
                    title: m,
                    onChange: c
                  })
                : n.createElement(er, {
                    title: m,
                    productCategoryId: o,
                    onClick: () => c('productCategoryId', '')
                  })
            )
          },
          rr = () =>
            n.createElement('hr', {
              style: {
                marginTop: 5,
                marginBottom: 5,
                marginRight: 15,
                borderTopColor: '#555'
              }
            }),
          nr = ({ onClick: e }) =>
            n.createElement(
              'div',
              { className: 'option', onClick: e },
              n.createElement(st.A, {
                size: 20,
                style: { verticalAlign: 'middle' }
              }),
              n.createElement('span', null, 'Empty (own design)')
            )
        var ar = r(60578),
          or = r(23063),
          cr = r(65972)
        const lr = ({ productCategoryId: e, onClick: t }) => {
            const [r, a] = (0, n.useState)(!1),
              c = (0, mt.A)(t => t.products.categories[e]),
              l = (0, Qt.A)(),
              i = (0, cr.A)()
            return c && !c.hasSolids
              ? null
              : n.createElement(
                  'div',
                  {
                    className: 'option',
                    onClick: async n => {
                      if (((0, or.A)(n), !r)) {
                        if (c && !(0, ar.A)(i(), e)) {
                          a(!0)
                          try {
                            await l((0, Ie.A)(e))
                          } catch (e) {
                            ;(0, o.A)(e)
                          }
                          return a(!1), void ((0, ar.A)(i(), e) && t())
                        }
                        t()
                      }
                    }
                  },
                  n.createElement(st.A, {
                    size: 20,
                    style: { verticalAlign: 'middle' }
                  }),
                  n.createElement('span', null, 'From picture'),
                  r && n.createElement('span', null, ': Processing...'),
                  r && n.createElement(Vt.A, { size: 20 })
                )
          },
          ir = ({ onClick: e }) =>
            n.createElement(
              'div',
              { className: 'option', onClick: e },
              n.createElement(st.A, {
                size: 20,
                style: { verticalAlign: 'middle' }
              }),
              n.createElement('span', null, 'Create QR code')
            ),
          sr = ({ onClick: e }) =>
            n.createElement(
              'div',
              { className: 'option', onClick: e },
              n.createElement(st.A, {
                size: 20,
                style: { verticalAlign: 'middle' }
              }),
              n.createElement('span', null, 'MacStitch / WinStitch')
            ),
          ur = ({ onClick: e }) =>
            n.createElement(
              'div',
              { className: 'option', onClick: e },
              n.createElement(st.A, {
                size: 20,
                style: { verticalAlign: 'middle' }
              }),
              n.createElement('span', null, 'PNG pattern (1px)')
            ),
          dr = ({ craft: e, type: t, productCategoryId: r, onChange: a }) => {
            const o = ((e, t) => 'crochet' !== e || 'mosaicOverlay' !== t)(
                e,
                t
              ),
              c = ((e, t) => 'crochet' !== e || 'mosaicOverlay' !== t)(e, t),
              l = ((e, t) => 'crochet' !== e || 'mosaicOverlay' !== t)(e, t),
              i = o || c || l
            return n.createElement(
              'div',
              null,
              n.createElement('h4', null, 'How to start:'),
              n.createElement(nr, { onClick: () => a('template', 'blank') }),
              n.createElement(lr, {
                productCategoryId: r,
                onClick: () => a('template', 'picture')
              }),
              i && n.createElement(rr, null),
              o &&
                n.createElement(ir, { onClick: () => a('template', 'qrCode') }),
              c &&
                n.createElement(sr, {
                  onClick: () => a('template', 'macStitchOxs')
                }),
              l &&
                n.createElement(ur, { onClick: () => a('template', 'png1px') })
            )
          },
          hr = ({ template: e, onClick: t }) =>
            n.createElement(
              'div',
              { className: 'option', onClick: t },
              n.createElement(
                'span',
                { className: 'active', style: { marginRight: 10 } },
                n.createElement(bt.A, {
                  size: 20,
                  style: { verticalAlign: 'middle' }
                }),
                n.createElement('span', null, 'Template:')
              ),
              n.createElement(
                'span',
                null,
                (e => {
                  switch (e) {
                    case 'qrCode':
                      return 'QR Code'
                    case 'macStitchOxs':
                      return 'MacStitch / WinStitch'
                    case 'png1px':
                      return 'PNG pattern (1px)'
                    case 'blank':
                      return 'Empty (own design)'
                    default:
                      return ''
                  }
                })(e)
              )
            ),
          gr = ({
            craft: e,
            type: t,
            productCategoryId: r,
            template: a,
            onChange: o,
            isActive: c
          }) =>
            n.createElement(
              'section',
              { className: c ? 'active' : '' },
              c
                ? n.createElement(dr, {
                    craft: e,
                    type: t,
                    productCategoryId: r,
                    onChange: o
                  })
                : n.createElement(hr, {
                    template: a,
                    onClick: () => o('template', '')
                  })
            )
        var mr = r(33284)
        const pr = ({ craft: e, type: t, showGauges: r, onClick: a }) => {
          const o = (0, mr.A)(e, t),
            c = r ? 'Gauge:' : 'Grid size (' + o.gridCellsLC + '):'
          return n.createElement(
            'h4',
            { onClick: a, style: { cursor: 'pointer', userSelect: 'none' } },
            c
          )
        }
        var yr = r(12223)
        const br = ({
            icon: e,
            label: t,
            labelAbbreviated: r,
            appendix: a,
            showAppendix: o,
            children: c,
            onClick: l,
            onLabelClick: i
          }) => {
            const s = (0, n.useRef)(null),
              u = () => {
                i
                  ? i()
                  : s.current &&
                    s.current.children &&
                    s.current.children.length >= 1 &&
                    s.current.children[0].focus &&
                    ('INPUT' === s.current.children[0].tagName ||
                      'SELECT' === s.current.children[0].tagName) &&
                    s.current.children[0].focus()
              }
            return n.createElement(
              'tr',
              {
                onClick: l,
                style: {
                  lineHeight: '100%',
                  minHeight: 34,
                  cursor: l ? 'pointer' : null
                }
              },
              n.createElement(
                'td',
                { onClick: u },
                e &&
                  e({
                    size: 20,
                    style: {
                      verticalAlign: 'middle',
                      marginTop: 2,
                      marginRight: 0,
                      cursor: i ? 'pointer' : null
                    }
                  })
              ),
              t &&
                n.createElement(
                  'td',
                  {
                    onClick: u,
                    style: {
                      verticalAlign: 'middle',
                      whiteSpace: 'nowrap',
                      cursor: i ? 'pointer' : null
                    }
                  },
                  r && !o ? r : t
                ),
              n.createElement(
                'td',
                { ref: s, style: { minWidth: o ? 170 : null } },
                c
              ),
              o &&
                n.createElement(
                  'td',
                  {
                    onClick: u,
                    style: {
                      width: '100%',
                      verticalAlign: 'middle',
                      whiteSpace: 'nowrap'
                    }
                  },
                  a
                ),
              n.createElement('td', null)
            )
          },
          fr = ({ state: e, showAppendix: t, onChange: r }) => {
            const a = (0, mr.A)(e.craft, e.type)
            return n.createElement(
              br,
              {
                icon: yr.A,
                label: 'Width:',
                appendix: a.gridCellsLC + ' horizontal',
                showAppendix: t
              },
              n.createElement('input', {
                type: 'number',
                id: 'createChartColumnCount',
                className: 'form-control',
                min: 1,
                max: z.jJ,
                step: 1,
                value: e.columnCount,
                onChange: e => {
                  r('columnCount', e.currentTarget.value)
                },
                style: { width: '100%' }
              })
            )
          }
        var wr = r(6621)
        const Cr = ({ state: e, showAppendix: t, onChange: r }) => {
          const a = (0, mr.A)(e.craft, e.type)
          return n.createElement(
            br,
            {
              icon: wr.A,
              label: 'Height:',
              appendix: a.gridCellsLC + ' vertical',
              showAppendix: t
            },
            n.createElement('input', {
              type: 'number',
              id: 'createChartRowCount',
              className: 'form-control',
              min: 1,
              max: z.jJ,
              step: 1,
              value: e.rowCount,
              onChange: e => {
                r('rowCount', e.currentTarget.value)
              },
              style: { width: '100%' }
            })
          )
        }
        var Ar = r(17671),
          vr = r(90690)
        const Er = ({ state: e }) => {
            const t = Math.round((0, w.A)(e.columnCount)),
              r = Math.round((0, w.A)(e.rowCount))
            if (t <= 0 || r <= 0) return null
            const a = (0, mr.A)(e.craft, e.type),
              o =
                (0, vr.A)(t * r) +
                ' (' +
                (0, Ar.A)(t) +
                ' x ' +
                (0, Ar.A)(r) +
                ')'
            return n.createElement(
              'tr',
              { style: { marginLeft: 30, marginTop: 10 } },
              n.createElement('td', null),
              n.createElement(
                'td',
                { colSpan: 2, style: { whiteSpace: 'nowrap' } },
                n.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  n.createElement(
                    'div',
                    { style: { paddingRight: 10 } },
                    a.gridCountTextUC + ':'
                  ),
                  n.createElement(
                    'div',
                    {
                      style: {
                        whiteSpace: 'nowrap',
                        textAlign: 'right',
                        flexGrow: 1
                      }
                    },
                    o
                  )
                )
              )
            )
          },
          Sr = ({ state: e, showAppendix: t, onChange: r }) =>
            n.createElement(
              n.Fragment,
              null,
              n.createElement(fr, { state: e, showAppendix: t, onChange: r }),
              n.createElement(Cr, { state: e, showAppendix: t, onChange: r }),
              n.createElement(Er, { state: e })
            )
        var Ir = r(96405),
          kr = r(97284)
        const zr = ({ unit: e, showAppendix: t }) => {
          const r = 'Project size (' + (0, kr.A)(e, !1, !0) + '): '
          return n.createElement(
            'tr',
            null,
            n.createElement(
              'td',
              { colSpan: t ? 5 : 4, style: { paddingTop: 15 } },
              n.createElement('h4', null, r)
            )
          )
        }
        var xr = r(47699)
        const Hr = ({ unit: e, showAppendix: t, onChange: r }) =>
          n.createElement(
            br,
            { icon: xr.A, label: 'Unit:', showAppendix: t },
            n.createElement(
              'select',
              {
                className: 'form-control',
                value: e,
                onChange: e => {
                  ;(0, or.A)(e), r('unit', e.currentTarget.value)
                },
                style: { width: '100%' }
              },
              n.createElement('option', { value: 'cm' }, 'centimeters (cm)'),
              n.createElement('option', { value: 'in' }, 'inches (in)')
            )
          )
        var Lr = r(12321),
          Br = r(76284)
        const Pr = () =>
            n.createElement(
              'button',
              {
                type: 'button',
                className: 'btn btn-default btn-sm',
                style: { width: 'auto', marginTop: 0 }
              },
              'Change'
            ),
          Vr = 'CUSTOM',
          Nr = ({
            swatchId: e,
            gaugeHorizontal: t,
            gaugeVertical: r,
            showAppendix: a,
            onToggleGauges: o,
            onChange: c
          }) => {
            const l = (0, mt.A)(Lr.A),
              i = !e && t > 0 && r > 0
            return n.createElement(
              br,
              {
                icon: Br.A,
                label: 'Gauge:',
                labelAbbreviated: 'Gauge:',
                appendix: n.createElement(Pr, null),
                showAppendix: a,
                onLabelClick: o
              },
              n.createElement(
                'select',
                {
                  className: 'form-control',
                  value: i ? Vr : e,
                  onChange: e => {
                    const t = Number(e.currentTarget.value)
                    if (-1 === t) return void o()
                    const r = (0, b.A)(l, t)
                    c('swatch', r)
                  },
                  style: { width: '100%' }
                },
                n.createElement('option', { value: 0 }, '(none)'),
                i &&
                  n.createElement(
                    'option',
                    { value: Vr },
                    t.toString() + ' / ' + r.toString()
                  ),
                l.map(e =>
                  n.createElement(
                    'option',
                    { key: e.swatchId, value: e.swatchId },
                    e.nameDisplayed
                  )
                ),
                n.createElement('option', { value: -1 }, 'Add gauge / swatch')
              )
            )
          },
          jr = ({
            gaugeHorizontal: e,
            gaugeVertical: t,
            showAppendix: r,
            onToggleGauges: a
          }) => {
            const o = (0, Ar.A)(e) + ' / ' + (0, Ar.A)(t)
            return n.createElement(
              br,
              {
                icon: Br.A,
                label: 'Gauge:',
                labelAbbreviated: 'Gauge:',
                showAppendix: r,
                onClick: a
              },
              n.createElement('span', { style: { marginRight: 10 } }, o),
              n.createElement(Pr, null)
            )
          },
          Tr = ({
            swatchId: e,
            gaugeHorizontal: t,
            gaugeVertical: r,
            showAppendix: a,
            onToggleGauges: o,
            onChange: c
          }) => {
            const l = (0, mt.A)(N.A),
              i = (0, mt.A)(e => e.settings.swatches.length > 0)
            return l && i
              ? n.createElement(Nr, {
                  swatchId: e,
                  gaugeHorizontal: t,
                  gaugeVertical: r,
                  showAppendix: a,
                  onToggleGauges: o,
                  onChange: c
                })
              : n.createElement(jr, {
                  gaugeHorizontal: t,
                  gaugeVertical: r,
                  showAppendix: a,
                  onToggleGauges: o
                })
          }
        var Fr = r(53937)
        const Or = ({
          unit: e,
          showAppendix: t,
          swatchLengthHorizontal: r,
          swatchCountHorizontal: a,
          onChange: o
        }) =>
          n.createElement(
            br,
            { icon: Br.A, label: 'Fabric:', showAppendix: t },
            n.createElement(Fr.A, {
              unit: e,
              swatchCount: (0, Ar.A)(a),
              swatchLength: (0, Ar.A)(r),
              onChangeSwatch: e => {
                o('swatch', e)
              },
              condensed: !0,
              hideLabel: !0,
              small: !0
            })
          )
        var qr = r(56936)
        const Gr = ({
          unit: e,
          showAppendix: t,
          swatchLengthHorizontal: r,
          swatchCountHorizontal: a,
          onChange: o
        }) =>
          n.createElement(
            br,
            { icon: Br.A, label: 'Diamonds:', showAppendix: t },
            n.createElement(qr.A, {
              unit: e,
              swatchCount: (0, Ar.A)(a),
              swatchLength: (0, Ar.A)(r),
              onChangeSwatch: e => {
                o('swatch', e)
              },
              condensed: !0,
              hideLabel: !0,
              small: !0
            })
          )
        var Rr = r(53262)
        const Wr = ({
          unit: e,
          showAppendix: t,
          swatchLengthHorizontal: r,
          swatchCountHorizontal: a,
          onChange: o
        }) =>
          n.createElement(
            br,
            { icon: Br.A, label: 'Canvas:', showAppendix: t },
            n.createElement(Rr.A, {
              unit: e,
              swatchCount: (0, Ar.A)(a),
              swatchLength: (0, Ar.A)(r),
              onChangeSwatch: e => {
                o('swatch', e)
              },
              condensed: !0,
              hideLabel: !0,
              small: !0
            })
          )
        var Mr = r(97626)
        const Dr = ({
          unit: e,
          showAppendix: t,
          swatchLengthHorizontal: r,
          swatchCountHorizontal: a,
          onChange: o
        }) =>
          n.createElement(
            br,
            { icon: Br.A, label: 'Size:', showAppendix: t },
            n.createElement(Mr.A, {
              unit: e,
              swatchCount: (0, Ar.A)(a),
              swatchLength: (0, Ar.A)(r),
              onChangeSwatch: e => {
                o('swatch', e)
              },
              condensed: !0,
              hideLabel: !0,
              small: !0
            })
          )
        var Ur = r(7535)
        const $r = ({
            unit: e,
            showAppendix: t,
            swatchLengthHorizontal: r,
            swatchCountHorizontal: a,
            onChange: o
          }) =>
            n.createElement(
              br,
              { icon: Br.A, label: 'Size:', showAppendix: t },
              n.createElement(Ur.A, {
                unit: e,
                swatchCount: (0, Ar.A)(a),
                swatchLength: (0, Ar.A)(r),
                onChangeSwatch: e => {
                  o('swatch', e)
                },
                condensed: !0,
                hideLabel: !0,
                small: !0
              })
            ),
          Yr = ({
            craft: e,
            unit: t,
            showAppendix: r,
            swatchLengthHorizontal: a,
            swatchCountHorizontal: o,
            onChange: c
          }) => {
            switch (e) {
              case 'crossStitch':
                return n.createElement(Or, {
                  unit: t,
                  showAppendix: r,
                  swatchLengthHorizontal: a,
                  swatchCountHorizontal: o,
                  onChange: c
                })
              case 'diamondPainting':
                return n.createElement(Gr, {
                  unit: t,
                  showAppendix: r,
                  swatchLengthHorizontal: a,
                  swatchCountHorizontal: o,
                  onChange: c
                })
              case 'latchHook':
                return n.createElement(Wr, {
                  unit: t,
                  showAppendix: r,
                  swatchLengthHorizontal: a,
                  swatchCountHorizontal: o,
                  onChange: c
                })
              case 'fuseBeads':
                return n.createElement(Dr, {
                  unit: t,
                  showAppendix: r,
                  swatchLengthHorizontal: a,
                  swatchCountHorizontal: o,
                  onChange: c
                })
              case 'pixelhobby':
                return n.createElement($r, {
                  unit: t,
                  showAppendix: r,
                  swatchLengthHorizontal: a,
                  swatchCountHorizontal: o,
                  onChange: c
                })
              default:
                return null
            }
          },
          Jr = ({ projectWidth: e, unit: t, showAppendix: r, onChange: a }) =>
            n.createElement(
              br,
              {
                icon: yr.A,
                label: 'Width:',
                appendix: (0, kr.A)(t) + ' horizontal',
                showAppendix: r
              },
              n.createElement('input', {
                type: 'number',
                id: 'createChartProjectWidth',
                className: 'form-control',
                value: e,
                onChange: e => {
                  a('projectWidth', e.currentTarget.value)
                },
                style: { width: '100%' }
              })
            ),
          _r = ({ projectHeight: e, unit: t, showAppendix: r, onChange: a }) =>
            n.createElement(
              br,
              {
                icon: wr.A,
                label: 'Height:',
                appendix: (0, kr.A)(t) + ' vertical',
                showAppendix: r
              },
              n.createElement('input', {
                type: 'number',
                id: 'createChartProjectHeight',
                className: 'form-control',
                value: e,
                onChange: e => {
                  a('projectHeight', e.currentTarget.value)
                },
                style: { width: '100%' }
              })
            ),
          Kr = ({ craft: e, unit: t, projectWidth: r, projectHeight: a }) => {
            const o = (0, E.A)(e),
              c =
                (0, vr.A)(r, o) +
                ' x ' +
                (0, vr.A)(a, o) +
                ' ' +
                (0, kr.A)(t, 'cm' === t)
            return n.createElement(
              'tr',
              null,
              n.createElement('td', null),
              n.createElement(
                'td',
                { colSpan: 2, style: { whiteSpace: 'nowrap' } },
                n.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  n.createElement(
                    'div',
                    { style: { paddingRight: 10 } },
                    'Project size:'
                  ),
                  n.createElement(
                    'div',
                    {
                      style: {
                        whiteSpace: 'nowrap',
                        textAlign: 'right',
                        flexGrow: 1
                      }
                    },
                    c
                  )
                )
              )
            )
          },
          Zr = ({ showAppendix: e }) =>
            n.createElement(
              'tr',
              null,
              n.createElement('td', null),
              n.createElement(
                'td',
                {
                  colSpan: e ? 5 : 4,
                  style: { fontStyle: 'italic', fontSize: 16 }
                },
                'The project size is a rough estimate based on the gauge/swatch.'
              )
            ),
          Qr = ({
            state: e,
            showAppendix: t,
            onToggleGauges: r,
            onChange: a
          }) => {
            const o = (0, Ir.A)(e.craft),
              c =
                (0, w.A)(e.swatchLengthHorizontal) > 0 &&
                (0, w.A)(e.swatchLengthVertical) > 0 &&
                (0, w.A)(e.swatchCountHorizontal) > 0 &&
                (0, w.A)(e.swatchCountVertical) > 0,
              l =
                c &&
                (0, w.A)(e.projectWidth) > 0 &&
                (0, w.A)(e.projectHeight) > 0
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(zr, { unit: e.unit, showAppendix: t }),
              n.createElement(Hr, {
                unit: e.unit,
                showAppendix: t,
                onChange: a
              }),
              o
                ? n.createElement(Tr, {
                    swatchId: e.swatchId,
                    gaugeHorizontal: e.gaugeHorizontal,
                    gaugeVertical: e.gaugeVertical,
                    showAppendix: t,
                    onToggleGauges: r,
                    onChange: a
                  })
                : n.createElement(Yr, {
                    craft: e.craft,
                    unit: e.unit,
                    showAppendix: t,
                    swatchLengthHorizontal: e.swatchLengthHorizontal,
                    swatchCountHorizontal: e.swatchCountHorizontal,
                    onChange: a
                  }),
              c &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(Jr, {
                    projectWidth: e.projectWidth,
                    unit: e.unit,
                    showAppendix: t,
                    onChange: a
                  }),
                  n.createElement(_r, {
                    projectHeight: e.projectHeight,
                    unit: e.unit,
                    showAppendix: t,
                    onChange: a
                  })
                ),
              l &&
                n.createElement(Kr, {
                  craft: e.craft,
                  unit: e.unit,
                  projectWidth: e.projectWidth,
                  projectHeight: e.projectHeight
                }),
              l && o && n.createElement(Zr, { showAppendix: t })
            )
          }
        var Xr = r(32568)
        const en = ({ columnCount: e }) => {
            const t = (0, mt.A)(N.A),
              r = (0, mt.A)(e => e.user.premium)
            return n.createElement(
              'p',
              {
                className: 'alert alert-warning',
                style: { marginTop: 10, marginBottom: 0, fontSize: 16 }
              },
              r
                ? Number(e) > z.jJ
                  ? n.createElement(
                      'span',
                      null,
                      "You can't exceed the maximum grid size of [count] columns.".replace(
                        '[count]',
                        z.jJ
                      )
                    )
                  : n.createElement(
                      'span',
                      null,
                      "You can't exceed the maximum grid size of [count] rows.".replace(
                        '[count]',
                        z.jJ
                      )
                    )
                : Number(e) > z.jJ
                ? n.createElement(
                    'span',
                    null,
                    'The maximum grid size is [count] columns in the free version.'.replace(
                      '[count]',
                      z.ki
                    )
                  )
                : n.createElement(
                    'span',
                    null,
                    'The maximum grid size is [count] rows in the free version.'.replace(
                      '[count]',
                      z.ki
                    )
                  ),
              n.createElement('br', null),
              !r &&
                n.createElement(
                  'span',
                  null,
                  Number(e) > z.jJ
                    ? n.createElement(
                        'span',
                        null,
                        'Upgrade to the Premium version to add up to [count] columns.'.replace(
                          '[count]',
                          z.jJ
                        )
                      )
                    : n.createElement(
                        'span',
                        null,
                        'Upgrade to the Premium version to add up to [count] rows.'.replace(
                          '[count]',
                          z.jJ
                        )
                      ),
                  n.createElement('br', null),
                  n.createElement(
                    a.N_,
                    {
                      className: 'btn btn-primary btn-lg',
                      to: t ? '/en/premium/order?s=34' : '/en/login',
                      style: { marginTop: 10 }
                    },
                    n.createElement(Xr.A, {
                      size: 26,
                      style: {
                        float: 'right',
                        verticalAlign: 'middle',
                        marginLeft: 10,
                        marginRight: 0
                      }
                    }),
                    n.createElement('span', null, 'Upgrade now')
                  )
                )
            )
          },
          tn = ({ state: e, onToggleGauges: t, onChange: r }) => {
            const a = (0, mt.A)(e => e.ui.windowSize.width >= 650),
              o = (0, mt.A)(e => e.user.premium),
              c = o ? z.jJ : z.ki,
              l =
                'quilt' !== e.craft &&
                'macramePixel' !== e.craft &&
                'other' !== e.craft,
              i = (0, w.A)(e.columnCount) > c || (0, w.A)(e.rowCount) > c
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'table',
                {
                  className: 'table table-borderless table-condensed',
                  style: { width: 'auto', maxWidth: '100%', marginBottom: 0 }
                },
                n.createElement(
                  'tbody',
                  null,
                  n.createElement(Sr, {
                    state: e,
                    showAppendix: a,
                    onChange: r
                  }),
                  l &&
                    n.createElement(Qr, {
                      state: e,
                      showAppendix: a,
                      onToggleGauges: t,
                      onChange: r
                    })
                )
              ),
              i && n.createElement(en, { columnCount: e.columnCount })
            )
          }
        var rn = r(54607)
        const nn = ({
          craft: e,
          type: t,
          swatchId: r,
          onChange: a,
          onToggleGauges: o
        }) =>
          n.createElement(rn.A, {
            craft: e,
            type: t,
            swatchId: r,
            onChange: e => {
              a('swatch', e), o()
            },
            onCancel: () => {
              o()
            }
          })
        var an = r(45704)
        const on = ({
            craft: e,
            type: t,
            unit: r,
            swatchLengthHorizontal: a,
            swatchLengthVertical: o,
            swatchCountHorizontal: c,
            swatchCountVertical: l,
            onChange: i,
            onToggleGauges: s
          }) => {
            const u = {
              swatchId: 0,
              name: '',
              unit: r,
              swatchLengthHorizontal: (0, w.A)(a),
              swatchLengthVertical: (0, w.A)(o),
              swatchCountHorizontal: (0, w.A)(c),
              swatchCountVertical: (0, w.A)(l)
            }
            return n.createElement(an.A, {
              craft: e,
              type: t,
              swatch: u,
              onSave: e => {
                i('swatch', e), s()
              },
              onCancel: () => {
                s()
              },
              skipSave: !0
            })
          },
          cn = ({
            craft: e,
            type: t,
            unit: r,
            swatchId: a,
            swatchLengthHorizontal: o,
            swatchLengthVertical: c,
            swatchCountHorizontal: l,
            swatchCountVertical: i,
            onChange: s,
            onToggleGauges: u
          }) => {
            const d = (0, mt.A)(N.A)
            return n.createElement(
              'div',
              null,
              n.createElement('br', null),
              n.createElement(
                'p',
                null,
                "To calculate the project size, make a sample swatch with the yarn and needles you're going to use."
              ),
              d
                ? n.createElement(nn, {
                    craft: e,
                    type: t,
                    swatchId: a,
                    onChange: s,
                    onToggleGauges: u
                  })
                : n.createElement(on, {
                    craft: e,
                    type: t,
                    unit: r,
                    swatchLengthHorizontal: o,
                    swatchLengthVertical: c,
                    swatchCountHorizontal: l,
                    swatchCountVertical: i,
                    onChange: s,
                    onToggleGauges: u
                  })
            )
          },
          ln = ({ state: e, onChange: t }) => {
            const [r, a] = (0, n.useState)(!1),
              o = () => {
                a(!r), t('hideSubmitButton', !r)
              }
            return (
              (0, n.useEffect)(() => {
                e.hideSubmitButton && t('hideSubmitButton', !1)
              }, []),
              n.createElement(
                'div',
                null,
                n.createElement(pr, {
                  craft: e.craft,
                  type: e.type,
                  showGauges: r,
                  onClick: () => {
                    r
                      ? (a(!1), t('hideSubmitButton', !1))
                      : t('gridSizeClosed', !0)
                  }
                }),
                r
                  ? n.createElement(cn, {
                      craft: e.craft,
                      type: e.type,
                      unit: e.unit,
                      swatchId: e.swatchId,
                      swatchLengthHorizontal: e.swatchLengthHorizontal,
                      swatchLengthVertical: e.swatchLengthVertical,
                      swatchCountHorizontal: e.swatchCountHorizontal,
                      swatchCountVertical: e.swatchCountVertical,
                      onToggleGauges: o,
                      onChange: t
                    })
                  : n.createElement(tn, {
                      state: e,
                      onToggleGauges: o,
                      onChange: t
                    })
              )
            )
          },
          sn = ({ columnCount: e, rowCount: t, onClick: r }) =>
            n.createElement(
              'div',
              { className: 'option', onClick: r },
              n.createElement(
                'span',
                { className: 'active', style: { marginRight: 10 } },
                n.createElement(bt.A, {
                  size: 20,
                  style: { verticalAlign: 'middle' }
                }),
                n.createElement('span', null, 'Grid size:')
              ),
              n.createElement('span', null, e + ' x ' + t)
            ),
          un = ({ state: e, isActive: t, onChange: r }) =>
            n.createElement(
              'section',
              { className: t ? 'active' : '' },
              t
                ? n.createElement(ln, { state: e, onChange: r })
                : n.createElement(sn, {
                    columnCount: e.columnCount,
                    rowCount: e.rowCount,
                    onClick: () => r('gridSizeClosed', !1)
                  })
            ),
          dn = ({ highlight: e, isProcessing: t, onClick: r }) => {
            const a =
              'btn' +
              (e ? ' btn-lg btn-primary' : ' btn-default') +
              (t ? ' disabled' : '')
            return n.createElement(
              'button',
              { type: 'button', className: a, disabled: t, onClick: r },
              t
                ? n.createElement(
                    'span',
                    null,
                    n.createElement('span', null, 'Processing...'),
                    n.createElement(Vt.A, {
                      size: 20,
                      style: { marginLeft: 5 }
                    })
                  )
                : n.createElement(
                    'span',
                    null,
                    n.createElement(Xr.A, {
                      size: e ? 26 : 20,
                      style: {
                        float: 'right',
                        verticalAlign: 'middle',
                        marginLeft: 10,
                        marginRight: -10
                      }
                    }),
                    n.createElement('span', null, 'Create chart')
                  )
            )
          }
        var hn = r(16896),
          gn = r(21216),
          mn = r(75693),
          pn = r(62067)
        class yn extends n.Component {
          constructor (e) {
            super(e),
              (this.state = { hasError: !1 }),
              (this.retry = this.retry.bind(this))
          }
          static getDerivedStateFromError () {
            return { hasError: !0 }
          }
          componentDidCatch (e, t) {
            ;(0, L.A)(e, t)
          }
          retry () {
            this.setState({ hasError: !1 })
          }
          render () {
            return this.state.hasError
              ? n.createElement(
                  'div',
                  null,
                  n.createElement(
                    'p',
                    null,
                    'Something went wrong while loading the page.'
                  ),
                  n.createElement(
                    'p',
                    null,
                    n.createElement(
                      'button',
                      {
                        type: 'button',
                        className: 'btn btn-primary',
                        onClick: this.retry
                      },
                      n.createElement(pn.A, {
                        size: 20,
                        style: {
                          float: 'left',
                          verticalAlign: 'middle',
                          marginRight: 10
                        }
                      }),
                      n.createElement('span', null, 'Try again')
                    )
                  )
                )
              : this.props.children
          }
        }
        const bn = yn
        var fn = (0, hn.Ay)(
          {
            resolved: {},
            chunkName: function () {
              return 'qrCode'
            },
            isReady: function (e) {
              var t = this.resolve(e)
              return !0 === this.resolved[t] && !!r.m[t]
            },
            importAsync: function () {
              return (0, gn.A)(
                Promise.all([r.e(2231), r.e(7155), r.e(3285)]).then(
                  r.bind(r, 94298)
                )
              )
            },
            requireAsync: function (e) {
              var t = this,
                r = this.resolve(e)
              return (
                (this.resolved[r] = !1),
                this.importAsync(e).then(function (e) {
                  return (t.resolved[r] = !0), e
                })
              )
            },
            requireSync: function (e) {
              var t = this.resolve(e)
              return r(t)
            },
            resolve: function () {
              return 94298
            }
          },
          { fallback: n.createElement(mn.A, null) }
        )
        const wn = function (e) {
          var t = e.productCategoryId,
            r = e.createChartFromState
          return n.createElement(
            bn,
            null,
            n.createElement(fn, {
              productCategoryId: t,
              createChartFromState: r
            })
          )
        }
        var Cn = (0, hn.Ay)(
          {
            resolved: {},
            chunkName: function () {
              return 'macStitch'
            },
            isReady: function (e) {
              var t = this.resolve(e)
              return !0 === this.resolved[t] && !!r.m[t]
            },
            importAsync: function () {
              return (0, gn.A)(r.e(4259).then(r.bind(r, 53605)))
            },
            requireAsync: function (e) {
              var t = this,
                r = this.resolve(e)
              return (
                (this.resolved[r] = !1),
                this.importAsync(e).then(function (e) {
                  return (t.resolved[r] = !0), e
                })
              )
            },
            requireSync: function (e) {
              var t = this.resolve(e)
              return r(t)
            },
            resolve: function () {
              return 53605
            }
          },
          { fallback: n.createElement(mn.A, null) }
        )
        const An = function (e) {
          var t = e.productCategoryId,
            r = e.createChartFromState
          return n.createElement(
            bn,
            null,
            n.createElement(Cn, {
              productCategoryId: t,
              createChartFromState: r
            })
          )
        }
        var vn = (0, hn.Ay)(
          {
            resolved: {},
            chunkName: function () {
              return 'png1px'
            },
            isReady: function (e) {
              var t = this.resolve(e)
              return !0 === this.resolved[t] && !!r.m[t]
            },
            importAsync: function () {
              return (0, gn.A)(r.e(9765).then(r.bind(r, 92305)))
            },
            requireAsync: function (e) {
              var t = this,
                r = this.resolve(e)
              return (
                (this.resolved[r] = !1),
                this.importAsync(e).then(function (e) {
                  return (t.resolved[r] = !0), e
                })
              )
            },
            requireSync: function (e) {
              var t = this.resolve(e)
              return r(t)
            },
            resolve: function () {
              return 92305
            }
          },
          { fallback: n.createElement(mn.A, null) }
        )
        const En = function (e) {
            var t = e.productCategoryId,
              r = e.createChartFromState,
              a = e.showImportPicturePage
            return n.createElement(
              bn,
              null,
              n.createElement(vn, {
                productCategoryId: t,
                createChartFromState: r,
                showImportPicturePage: a
              })
            )
          },
          Sn = {
            craft: '',
            type: '',
            subtype: '',
            brandId: '',
            productCategoryId: '',
            rulerPresetId: -1,
            template: '',
            columnCount: '20',
            rowCount: '20',
            gridSizeCustomized: !1,
            gridSizeClosed: !1,
            unit: 'cm',
            handedness: 'right',
            projectWidth: '0',
            projectHeight: '0',
            swatchId: 0,
            swatchLengthHorizontal: '0',
            swatchLengthVertical: '0',
            swatchCountHorizontal: '0',
            swatchCountVertical: '0',
            gaugeHorizontal: 0,
            gaugeVertical: 0,
            isSwatchCustomized: !1,
            gaugeClosed: !0,
            hideSubmitButton: !1,
            apiSubmit: !1
          },
          In = () => {
            const e = (0, a.zy)(),
              t = (0, a.Zp)(),
              r = (0, et.A)(),
              i = (0, Xe.A)(),
              s = (0, cr.A)(),
              u = (0, mt.A)(e => e.ui.device.isMobileDevice),
              d = (0, mt.A)(N.A),
              h = (0, mt.A)(e => e.user.premium),
              g = (0, mt.A)(A.A),
              [m, p] = (0, n.useState)(() => k(e, s)),
              [y, b] = (0, n.useState)(!1),
              f = (0, n.useRef)(m),
              w = (0, tt.A)(m),
              C = (0, mt.A)(e => e.products.brands[f.current.brandId]),
              v = (0, mt.A)(
                e => e.products.categories[f.current.productCategoryId]
              ),
              E = (0, Qt.A)(),
              S = () => H(f.current, h),
              I = async () => {
                if (!y && !S()) {
                  b(!0)
                  try {
                    await Qe(f.current, E, s)
                  } catch (e) {
                    ;(0, o.A)(e), b(!1)
                  }
                }
              },
              z = ((e, t) => {
                const r = {
                  showType: !1,
                  showSubtype: !1,
                  showTemplate: !1,
                  showProductCategory: !1,
                  showRulerPreset: !1,
                  showGauge: !1,
                  showSize: !1,
                  showGenerator: '',
                  showMobileWarning: !1,
                  showSubmitButton: !0,
                  active: '',
                  highlightSubmitButton: !1
                }
                if (!e.craft) return (r.active = 'craft'), r
                switch (
                  ('' !== e.template &&
                    'blank' !== e.template &&
                    (r.showSubmitButton = !1),
                  e.craft)
                ) {
                  case 'knitting':
                    ;((e, t) => {
                      if (((e.showType = !0), !t.type))
                        return (e.active = 'type'), e
                      if (
                        'colors' === t.type &&
                        ((e.showProductCategory = !0), !t.productCategoryId)
                      )
                        return (e.active = 'productCategory'), e
                      if (
                        'machineColors' === t.type ||
                        'machineSymbols' === t.type
                      )
                        (e.showRulerPreset = !1),
                          (e.showSubtype = 'machineColors' === t.type)
                      else if (
                        ((e.showRulerPreset = !0), -1 === t.rulerPresetId)
                      )
                        return (e.active = 'rulerPreset'), e
                      e.showSubtype && !t.subtype
                        ? (e.active = 'subtype')
                        : ('colors' !== t.type && 'machineColors' !== t.type) ||
                          ((e.showTemplate = !0), t.template)
                        ? (t.template ||
                            'colors' !== t.type ||
                            (e.showGauge = !0),
                          (t.template && 'blank' !== t.template) ||
                            ((e.showSize = !0), (e.highlightSubmitButton = !0)))
                        : (e.active = 'template')
                    })(r, e)
                    break
                  case 'crochet':
                    ;((e, t, r) => {
                      if (((e.showType = !0), !t.type))
                        return (e.active = 'type'), e
                      if (
                        ('freeform' === t.type &&
                          r &&
                          ((e.showMobileWarning = !0),
                          (e.showSubmitButton = !1)),
                        'c2c' === t.type ||
                          'colors' === t.type ||
                          'filet' === t.type ||
                          'tunisian1' === t.type ||
                          'mosaicOverlay' === t.type)
                      ) {
                        if (
                          'filet' !== t.type &&
                          'mosaicOverlay' !== t.type &&
                          ((e.showProductCategory = !0),
                          '' === t.productCategoryId)
                        )
                          return (e.active = 'productCategory'), e
                        if (((e.showTemplate = !0), '' === t.template))
                          return (e.active = 'template'), e
                      }
                      e.showSubtype && !t.subtype
                        ? (e.active = 'subtype')
                        : ('' === t.template ||
                            ('colors' !== t.type && 'filet' !== t.type) ||
                            (e.showGauge = !0),
                          (t.template && 'blank' !== t.template) ||
                            ((e.showSize = 'freeform' !== t.type),
                            (e.highlightSubmitButton = !0)))
                    })(r, e, t)
                    break
                  case 'crossStitch':
                  case 'latchHook':
                  case 'fuseBeads':
                  case 'macramePixel':
                    ;((e, t) => {
                      ;(e.showProductCategory = !0),
                        t.productCategoryId
                          ? ((e.showTemplate = !0),
                            t.template
                              ? (t.template && 'blank' !== t.template) ||
                                ((e.showSize = !0),
                                (e.highlightSubmitButton = !0))
                              : (e.active = 'template'))
                          : (e.active = 'productCategory')
                    })(r, e)
                    break
                  case 'quilt':
                    ;(e => {
                      ;(e.showTemplate = !1),
                        (e.showSize = !0),
                        (e.highlightSubmitButton = !0)
                    })(r)
                    break
                  default:
                    ;((e, t) => {
                      ;(e.showTemplate = !0),
                        t.template
                          ? (t.template && 'blank' !== t.template) ||
                            ((e.showSize = !0), (e.highlightSubmitButton = !0))
                          : (e.active = 'template')
                    })(r, e)
                }
                return (
                  r.showTemplate &&
                    e.template &&
                    (r.showGenerator = e.template),
                  r
                )
              })(f.current, u),
              x = (e, r, n = void 0) => {
                if ((n && n.preventDefault(), e !== f.current[e])) {
                  if (
                    'template' === e &&
                    'picture' === r &&
                    !(0, l.A)(f.current.craft)
                  ) {
                    const e = ((e, t, r) => {
                      ;(0, l.A)(e) &&
                        ((0, L.A)('Invalid craft'),
                        (e = 'crochet'),
                        (t = 'colors'))
                      let n =
                        '/en/chart/create/' +
                        (0, P.A)(e) +
                        '/' +
                        V(e, t) +
                        '/convert-picture-photo-image'
                      const a = {}
                      return (
                        r &&
                          'none' !== r &&
                          'none.' !== r &&
                          (a.productCategory = r),
                        (n += (0, B.A)(a)),
                        n
                      )
                    })(
                      f.current.craft,
                      f.current.type,
                      f.current.productCategoryId
                    )
                    return void t(e)
                  }
                  oe(f.current, s, e, r), p({ ...f.current })
                }
              },
              j = async e => {
                if (!y) {
                  b(!0)
                  try {
                    await ee(f.current, e, E, s)
                  } catch (e) {
                    throw ((0, o.A)(e), b(!1), e)
                  }
                }
              },
              T = ((e, t, r) => {
                let n = 'Create new chart'
                switch (e) {
                  case 'knitting':
                    n = 'Create knitting chart pattern'
                    break
                  case 'crochet':
                    n = 'Create crochet chart pattern'
                    break
                  case 'crossStitch':
                    n = 'Create cross stitch chart pattern'
                    break
                  case 'quilt':
                    n = 'Create quilt chart pattern'
                    break
                  case 'latchHook':
                    n = 'Create latch hook pattern'
                    break
                  case 'diamondPainting':
                    n = 'Create diamond painting pattern'
                    break
                  case 'fuseBeads':
                    n = 'Create fuse beads pattern'
                    break
                  case 'pixelhobby':
                    n = 'Create Pixelhobby pattern'
                }
                return (
                  r && -1 === ['diamondPainting', 'pixelHobby'].indexOf(e)
                    ? (n += ' with ' + r.title)
                    : t && (n += ' with ' + t.name),
                  n
                )
              })(f.current.craft, C, v)
            if (
              ((0, n.useEffect)(() => {
                !f.current.productCategoryId ||
                  !(0, c.A)(f.current.productCategoryId) ||
                  (v && v.productIds) ||
                  E((0, Ie.A)(f.current.productCategoryId))
              }, [f.current.productCategoryId]),
              (0, n.useEffect)(() => {
                f.current.apiSubmit && I()
              }, []),
              (0, n.useEffect)(() => {
                if (r) return
                if (!i()) return
                const [n, a] = (e => {
                  let t = '/en/chart/create'
                  const r = {}
                  switch (
                    (e.craft &&
                      ((t += '/' + (0, P.A)(e.craft)),
                      e.type &&
                        ((t += '/' + V(e.craft, e.type)),
                        e.subtype && (r.subtype = e.subtype))),
                    e.brandId && (r.brand = e.brandId),
                    e.productCategoryId &&
                      (r.productCategory = e.productCategoryId),
                    e.gridSizeCustomized &&
                      Number(e.columnCount) > 0 &&
                      Number(e.rowCount) > 0 &&
                      ((r.columnCount = e.columnCount),
                      (r.rowCount = e.rowCount)),
                    e.isSwatchCustomized &&
                      Number(e.swatchCountHorizontal) > 0 &&
                      Number(e.swatchCountVertical) > 0 &&
                      Number(e.swatchLengthHorizontal) > 0 &&
                      Number(e.swatchLengthVertical) > 0 &&
                      ((r.unit = e.unit),
                      (r.swatch =
                        e.swatchLengthHorizontal +
                        'x' +
                        e.swatchCountHorizontal +
                        'x' +
                        e.swatchLengthVertical +
                        'x' +
                        e.swatchCountVertical)),
                    e.template)
                  ) {
                    case 'blank':
                      r.template = 'blank'
                      break
                    case 'qrCode':
                      r.template = 'qrCode'
                      break
                    case 'macStitchOxs':
                      r.template = 'macStitchOxs'
                      break
                    case 'png1px':
                      r.template = 'png1px'
                  }
                  return [t, (0, B.A)(r)]
                })(f.current)
                ;(e.pathname === n && e.search === a) ||
                  t(n + a, { replace: !0 })
              }, [
                f.current.craft,
                f.current.type,
                f.current.productCategoryId,
                f.current.template,
                w
              ]),
              (0, n.useEffect)(() => {
                r && f.current.apiSubmit && I()
              }, [f.current.apiSubmit]),
              f.current.apiSubmit)
            )
              return n.createElement(ot, null)
            const F = H(f.current, h),
              O =
                !m.hideSubmitButton &&
                z.showSubmitButton &&
                z.highlightSubmitButton &&
                !S()
            return n.createElement(
              nt.A,
              {
                folderId: '',
                activeSection: 'chartCreate',
                title: T,
                breadcrumbTitle1: 'Create new chart',
                breadcrumbLink1: '/en/chart/create'
              },
              n.createElement('h2', null, T),
              n.createElement('br', null),
              n.createElement(ct.A, null),
              g &&
                n.createElement(
                  'div',
                  null,
                  n.createElement(
                    'noscript',
                    null,
                    n.createElement(
                      'p',
                      { className: 'alert alert-warning' },
                      n.createElement(rt.A, {
                        size: 20,
                        style: { marginRight: 10, verticalAlign: 'middle' }
                      }),
                      n.createElement(
                        'span',
                        null,
                        'Please enable JavaScript in your browser to use Stitch Fiddle.'
                      )
                    )
                  ),
                  n.createElement(
                    'div',
                    {
                      className: 'wizard',
                      onKeyUp: e => {
                        if (
                          13 === e.which &&
                          'blank' === f.current.template &&
                          e.target &&
                          e.target.id
                        )
                          switch (e.target.id) {
                            case 'createChartColumnCount':
                              document
                                .getElementById('createChartRowCount')
                                ?.focus()
                              break
                            case 'createChartRowCount':
                              I()
                          }
                      }
                    },
                    n.createElement(it.A, {
                      craft: m.craft,
                      onChange: x,
                      onlyKnittingCrochet: v && 'knittingCrochet' === v.craft,
                      isActive: 'craft' === z.active
                    }),
                    z.showType &&
                      n.createElement(Ct, {
                        craft: m.craft,
                        onlyColorWork:
                          m.productCategoryId.length > 0 &&
                          'none' !== m.productCategoryId,
                        type: m.type,
                        onChange: x,
                        isActive: 'type' === z.active
                      }),
                    z.showSubtype &&
                      n.createElement(It, {
                        craft: m.craft,
                        type: m.type,
                        subtype: m.subtype,
                        onChange: x,
                        isActive: 'subtype' === z.active
                      }),
                    z.showProductCategory &&
                      n.createElement(tr, {
                        productCategoryId: m.productCategoryId,
                        onChange: x,
                        craft: m.craft,
                        type: m.type,
                        brandId: m.brandId,
                        isActive: 'productCategory' === z.active
                      }),
                    z.showRulerPreset &&
                      n.createElement(Ht, {
                        craft: m.craft,
                        type: m.type,
                        rulerPresetId: m.rulerPresetId,
                        onChange: x,
                        isActive: 'rulerPreset' === z.active
                      }),
                    z.showTemplate &&
                      n.createElement(gr, {
                        craft: m.craft,
                        type: m.type,
                        productCategoryId: m.productCategoryId,
                        template: m.template,
                        onChange: x,
                        isActive: '' === m.template
                      }),
                    'qrCode' === z.showGenerator &&
                      n.createElement(wn, {
                        productCategoryId: m.productCategoryId,
                        createChartFromState: j
                      }),
                    'macStitchOxs' === z.showGenerator &&
                      n.createElement(An, {
                        productCategoryId: m.productCategoryId,
                        createChartFromState: j
                      }),
                    'png1px' === z.showGenerator &&
                      n.createElement(En, {
                        productCategoryId: m.productCategoryId,
                        createChartFromState: j,
                        showImportPicturePage: () => x('template', 'picture')
                      }),
                    z.showSize &&
                      n.createElement(un, {
                        state: m,
                        isActive: !m.gridSizeClosed || F,
                        onChange: x
                      }),
                    z.showMobileWarning &&
                      n.createElement(
                        'p',
                        null,
                        'The chosen configuration is not available for your device. Choose a different project type or use Stitch Fiddle on your computer.'
                      ),
                    O &&
                      n.createElement(dn, {
                        highlight: z.highlightSubmitButton,
                        isProcessing: y,
                        onClick: I
                      }),
                    n.createElement('br', null),
                    !d && n.createElement(lt.A, null)
                  )
                )
            )
          }
      },
      90453 (e, t, r) {
        r.d(t, { A: () => a })
        var n = r(63696)
        const a = () => {
          const e = (0, n.useRef)(!1)
          return (
            (0, n.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1
                }
              ),
              []
            ),
            () => e.current
          )
        }
      },
      10275 (e, t, r) {
        r.d(t, { A: () => n })
        const n = r(53044).JWD
      },
      88004 (e, t, r) {
        r.d(t, { A: () => n })
        const n = r(53044).uJ
      },
      98269 (e, t, r) {
        r.d(t, { A: () => n })
        const n = r(99241).g1V
      },
      47699 (e, t, r) {
        r.d(t, { A: () => n })
        const n = r(71615).ZzX
      }
    }
  ]
)
