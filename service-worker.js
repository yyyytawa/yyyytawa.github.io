if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>i(e,r),o={module:{uri:r},exports:l,require:c};s[r]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(d(...e),l)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1_week.html-2baXf3K4.js",revision:"8d96fe43fb2cc41b139804dbbb8888e8"},{url:"assets/1_week.html-zpz0qqj6.js",revision:"224d7619ecaf6335bff2a638637ffd36"},{url:"assets/1-DDNS-GO.html-C-m8e1-s.js",revision:"0555faf4a85c8171b141d24a6e3d57f5"},{url:"assets/10_week.html-BpHbR25C.js",revision:"55187060b653be432c861191a9fc5e3b"},{url:"assets/11_week.html-DNPrwck4.js",revision:"6e001219c43708e5f3dbec332793b473"},{url:"assets/11to20.html-ifZjEd0P.js",revision:"5690c11b866419170430efed103ee8e8"},{url:"assets/12_week.html-zmziPEzn.js",revision:"f3eb6e15f39522521db4ac307ac4b167"},{url:"assets/13_week.html-DwGG7MPP.js",revision:"83954aa00490ad6819014df6be0a8d7e"},{url:"assets/14_week.html-CnhFPZur.js",revision:"50a90c61c7793b5e0344af03d78110d9"},{url:"assets/15_week.html-IdT-2eW9.js",revision:"2a3f596eb9534f009198b35e7f14fda6"},{url:"assets/16_week.html-D2tQZCX4.js",revision:"fca6d471c85c1428ac0557cfff8d983c"},{url:"assets/17_week.html-DUK6Kz0U.js",revision:"e9e306436b3702743db9937663c945ee"},{url:"assets/18_week.html-BzpwnqdS.js",revision:"2e20602187b9349583b50728867e0f70"},{url:"assets/19_week.html-RdaWDpbD.js",revision:"0b86ab84e734186243573cba3b65edbc"},{url:"assets/1to10.html-B9nZwhr1.js",revision:"e37f423f29d3866a9c70bb080170c163"},{url:"assets/2_week.html-COvEQFQW.js",revision:"13d7adea97e165b314fecaf13307d01a"},{url:"assets/2_week.html-DF8dUV3E.js",revision:"2e740002e6037477a2756180c9479817"},{url:"assets/2.html-KsL5GaVP.js",revision:"266c4f60ec0fdd76d39446c035432fb4"},{url:"assets/20_week.html-Bo-Lx87r.js",revision:"e15269b15f6631bd8a2a37dee70bd94b"},{url:"assets/2024.html-Drrb5oO0.js",revision:"c787d74ea46c555d1e35a730c3146a44"},{url:"assets/202402.html-q4p16f6s.js",revision:"c82df942da2a62d8577f619b6942d70d"},{url:"assets/20240718.html-qz-1F6wu.js",revision:"300cc00cca93598370892ce70883a62e"},{url:"assets/20240719.html-D1oxs-lw.js",revision:"4a9efe2c67449319f16454225af3f6a0"},{url:"assets/20240720.html-CVaFyWXU.js",revision:"5e9f5cca0642440927e10ba083a81996"},{url:"assets/20240721.html-zzHi4_QQ.js",revision:"1811fb757df07be97f829dfc2c404951"},{url:"assets/20240724.html-MsmOFf46.js",revision:"5a02681e898c3fcff0e6f41020fa37cc"},{url:"assets/202407280.html-BirxVaF8.js",revision:"ec418e4fe820d4a2c5762407d194c132"},{url:"assets/202408.html-DLXsbzT-.js",revision:"6da01402d103a23450a9d5dfeb2be776"},{url:"assets/20240802.html-BgoymuHv.js",revision:"3716dba97cd35e173a2fffd79fee86e2"},{url:"assets/20240803.html-CRmBewdY.js",revision:"2c3877ea8d7da3e4eac5d769d772a07f"},{url:"assets/202408190.html-BcaA5v7h.js",revision:"467b5a4e8ba6a25c6f0c8ff348930cca"},{url:"assets/20240820.html-DKWACFAh.js",revision:"fe98206aa992e48eb68ba94942e525ef"},{url:"assets/20240824.html-CIOXAPI7.js",revision:"11ce4a5adea8fbf4df9fd931e1875bf4"},{url:"assets/20240827.html-C9TgWazi.js",revision:"ecb068e432d4950ba2ed2a49299d646b"},{url:"assets/20240921.html-DkPMquSb.js",revision:"c564de0f15bfe181d60d76ce0dab18c5"},{url:"assets/20241004.html-DSiC3LH6.js",revision:"4d5d7e320edbd9b5f5acf757134aa849"},{url:"assets/20241012.html-DVZPgBwS.js",revision:"b05a3f91e7b3f4952f2c25d1aef1c0ae"},{url:"assets/3_week.html-CQBVeepn.js",revision:"c2fd62064fd6ccf10dbf96862fbffebe"},{url:"assets/3_week.html-Df-AkHiB.js",revision:"31745fc807b8fabafe9061ae765754ca"},{url:"assets/4_week.html-CiZAXm-d.js",revision:"3f5e90c8635f031573cfc129c7264963"},{url:"assets/4_week.html-DpP4bTHx.js",revision:"3ce5b8ba7689d22f3d50bc24d3986a24"},{url:"assets/404.html-C_wpDG_4.js",revision:"8207a5190301a117528b81ff1c289a84"},{url:"assets/5_week.html-bLHR2GaR.js",revision:"c596875eb73e1504bdb71f4be893b4fd"},{url:"assets/5_week.html-Dz_m2Gbh.js",revision:"daa76d799ce4706d565926c3c4e14465"},{url:"assets/6_week.html-BHFaPcsg.js",revision:"be4bcc49d7321bb6bbd4b118c33d7b24"},{url:"assets/6_week.html-D5xMzVjr.js",revision:"3beb3b81f5e0293112ec13f3bfb0c574"},{url:"assets/7_week.html-CYKQzwmQ.js",revision:"c84f7d4571ee42424cd61d8f740269d9"},{url:"assets/7_week.html-EvH6SYUX.js",revision:"7d854b1995b6640048570825e125bbeb"},{url:"assets/8_week.html-C9yeh5W_.js",revision:"51d255dde64cfbdc133d5709e8707b20"},{url:"assets/9_week.html-Dp8rrfq_.js",revision:"ec19a454c11c9cfd406735861f4f9d3b"},{url:"assets/about_me.html-WUjTj2ob.js",revision:"5526aab932d7a56870511cc7bdac9d9c"},{url:"assets/app-6tHsIicE.js",revision:"cd2406b24658db94ec489370f145b10b"},{url:"assets/artplayer-EWpKW89S.js",revision:"b166da85cf7a53bfc82aa805160739fd"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/copyright.html-BrX0IG_8.js",revision:"eb68b11f5a0c38369d983096936961bc"},{url:"assets/dash.all.min-CXnJ7hU8.js",revision:"718ec47069e52c190b9533b18dc8a2a2"},{url:"assets/Disclaimer.html-BDmPRQep.js",revision:"0779828b8659d9e4e1cb63f36b1142fa"},{url:"assets/file.html-ByMtR7PS.js",revision:"d8890742d4eb7e957fc07998051c431f"},{url:"assets/giscus-C26m1eXs.js",revision:"4dfb0caa5cea7db9d2fe3ee43868495b"},{url:"assets/hls.min-CcQQscCC.js",revision:"ff3084b6fcd64b0f7efbba5f2b9f0eb9"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-318ARagd.js",revision:"2a45ba0a869de466d15d1a944b040e4e"},{url:"assets/index.html-AU84Lid6.js",revision:"ae591b65b897e06648f47c33042d608a"},{url:"assets/index.html-B8gu-v4c.js",revision:"968241acc035e77a3b1390df6ce74ef0"},{url:"assets/index.html-baLtb0jo.js",revision:"67effc66595bb93129b521294390d0a9"},{url:"assets/index.html-BeudYN6L.js",revision:"0911915d059d5844e0bc9e9f71c1a109"},{url:"assets/index.html-BMu-QKq-.js",revision:"be5accd3694e0e4d958c826bca2063ac"},{url:"assets/index.html-Bn31d0hl.js",revision:"3eb0edcc85fe62837c0dfb51f971b9e1"},{url:"assets/index.html-BVUA_9j3.js",revision:"a174d90a43b41367862b2fd0734a9730"},{url:"assets/index.html-C3TngAU9.js",revision:"b3486d2724339ac5717deed7d7e96641"},{url:"assets/index.html-CckVFAkc.js",revision:"917fba552a76696b64ce5b255ec20124"},{url:"assets/index.html-Cd-w3SFt.js",revision:"79b5b232b251aca9630a135bcae579d2"},{url:"assets/index.html-CetpOuPW.js",revision:"d25d288b48764da484b5336634187cf9"},{url:"assets/index.html-Cf7Hn8QI.js",revision:"99c39088818b22310baaad391ada59e3"},{url:"assets/index.html-CiKezP0w.js",revision:"081c86465f105b3c72b1412ad5f39a59"},{url:"assets/index.html-CuBsQPPp.js",revision:"c956c252069683a80b9f4c782c56662a"},{url:"assets/index.html-D4iijPlq.js",revision:"1d30c7c59cbebb32cdf28b983101e258"},{url:"assets/index.html-D8NX13yH.js",revision:"d09c5a03c76c62cca4567fd36a95a94a"},{url:"assets/index.html-DAXi6cHd.js",revision:"1d77a7afe55747eae1c7fee9ded261b9"},{url:"assets/index.html-DeRhBWvl.js",revision:"80e6f7d1a93b9507f6f347d84ad75c4f"},{url:"assets/index.html-Dm2yw44B.js",revision:"a8949956e20543a5d5003650cca76596"},{url:"assets/index.html-DmrE1yzE.js",revision:"13761ba954303b6c455fb604319cd921"},{url:"assets/index.html-DpjnHB_4.js",revision:"cb597581599de325cf1b3a779d494427"},{url:"assets/index.html-Dtw_ZT53.js",revision:"8aee9c61c43a2515ee108fa4122c8505"},{url:"assets/index.html-DwyPQLDn.js",revision:"aa7d78795f2c0d46183947adef39f550"},{url:"assets/index.html-EjIzyvAt.js",revision:"1d554cda6d7e83057ea631a38c9022ff"},{url:"assets/index.html-s4X9n1XP.js",revision:"8b80c1d1fea8c073f3ccc603b448fd77"},{url:"assets/index.html-VUnXVBFu.js",revision:"37e42ee047acb9b0cb082163d8192037"},{url:"assets/index.html-zbArLgtV.js",revision:"b4f425c57082c1575134001c0e6245cd"},{url:"assets/intro.html-DVijYq2s.js",revision:"908eaea9c98025df1716801b6a2dc599"},{url:"assets/introduction.html-CNB-Zs1-.js",revision:"eeaa51656134dd20fdb9d21ddf77c210"},{url:"assets/introduction.html-l5i8LyM6.js",revision:"5e2bfc26e829b03d26cdfe0296a12afc"},{url:"assets/links.html-B3QBxS1A.js",revision:"d21dbebe9edaa52ad5582a7a18c5bb34"},{url:"assets/merge.html-V7XAwJF6.js",revision:"1f1e2f392b9ba4d1601d23de3641b91a"},{url:"assets/mpegts-DC5zlZYy.js",revision:"e58ff746740a93a354bde3ec3a966d3d"},{url:"assets/my_first_novel.html-dckSatRL.js",revision:"55d867b6214bd34b1a52efee0b07f108"},{url:"assets/notice.html-CBIG7kwO.js",revision:"cf5b6f223671d64ff24b10ffb8528471"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy.html-BC9PMpKe.js",revision:"4b59ca1443716fd8b43c7bedb9eb00ef"},{url:"assets/setupDevtools-7MC2TMWH-D3k2jF65.js",revision:"4a5c3c6f0be1b7e2ea1a6b27d510c8ff"},{url:"assets/special_1.html-DOsJrmFT.js",revision:"368bdcafa8f038856d6289cb654b2882"},{url:"assets/style-B0Qtasut.css",revision:"22089917d48dbd8637830918c41b0297"},{url:"assets/summerholiday.html-D2UgHbvM.js",revision:"4aed55fdeb3af471b94786c26cd4f72c"},{url:"assets/winterholiady.html-CmaDsgWW.js",revision:"1dc06da8091d1596414efcdc0f4b7532"},{url:"assets/yh_true_name_internet.html-BZW5vifo.js",revision:"6a053ebe6e4835db915ce10684bd35aa"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"36bca4edee87a65987b8f4abf5628bca"},{url:"article/daily/2024/202407280.html",revision:"ed874b3138abc59d8f09eea80d7c267d"},{url:"article/daily/2024/202408190.html",revision:"f6ba86491b9975abaab29ef94348dfda"},{url:"article/daily/2024/20241012.html",revision:"698f3d33e63165a2eaa3e2eb375ab0a0"},{url:"article/daily/2024/index.html",revision:"2da79f8d2ce1f951b4f319ca7df89e66"},{url:"article/daily/index.html",revision:"126a81a71a0be7e8334f2188bb2c9500"},{url:"article/index.html",revision:"45ba6f9950c88019d635bbaa08b736cb"},{url:"article/novel/file.html",revision:"935911ab1393bc9d4ce2565fbee3d7c6"},{url:"article/novel/file/index.html",revision:"099f12c47c20dc35b820b6f7296157f2"},{url:"article/novel/file/my_first_novel.html",revision:"48c81a1b0b5a917407a3d3e04a41d20d"},{url:"article/novel/index.html",revision:"a9c2a2ed42532419597eb887f9461360"},{url:"blog/index.html",revision:"920e41e5af13da91d6fc177a258048f3"},{url:"blog/music_updata_log/11to20.html",revision:"00af18a784e7d9b346a66eea231783f8"},{url:"blog/music_updata_log/1to10.html",revision:"a0672e42f4dbfa0af39140884f27f1dd"},{url:"blog/music_updata_log/index.html",revision:"73004a9846a549fdb39e968c75338075"},{url:"blog/music_updata_log/introduction.html",revision:"03a2f8e4de9fc13ff556edb76831000c"},{url:"blog/photo/2024/202402.html",revision:"986b4f955f562b9b1b4e129b6e3087c3"},{url:"blog/photo/2024/202408.html",revision:"8f77325f6ae442d922bbb96b073cc845"},{url:"blog/photo/2024/index.html",revision:"3a9a2827e566b6bbf3ad1b94a10f7083"},{url:"blog/photo/2025/index.html",revision:"9ca1651d3f5806f2e351e985f6f675fc"},{url:"blog/photo/index.html",revision:"283cf376e526e3b225aff24729539571"},{url:"blog/photo/intro.html",revision:"71454765c09a672b195b1e2685f709db"},{url:"blog/the_second_high_school/first_grade/down_term/1_week.html",revision:"88cc6e0b91a4901f5edf94e26a74bb54"},{url:"blog/the_second_high_school/first_grade/down_term/10_week.html",revision:"32a0d9fa072d703011bdbd0e04755b59"},{url:"blog/the_second_high_school/first_grade/down_term/11_week.html",revision:"1cd8c77e6e063a29d7b9c5d8f109d8ef"},{url:"blog/the_second_high_school/first_grade/down_term/12_week.html",revision:"6e853a0b7ee4bfe97379ade1c3eb32e1"},{url:"blog/the_second_high_school/first_grade/down_term/13_week.html",revision:"b973a6b8794cc357efebd408dea93431"},{url:"blog/the_second_high_school/first_grade/down_term/14_week.html",revision:"77655045cbb7a13c3f9b1a31bcc88954"},{url:"blog/the_second_high_school/first_grade/down_term/15_week.html",revision:"89bc34dd7a0213b67c36b500ca671fd6"},{url:"blog/the_second_high_school/first_grade/down_term/16_week.html",revision:"f296d3e8496e2bebd018e11cf4239500"},{url:"blog/the_second_high_school/first_grade/down_term/17_week.html",revision:"3e7826324043afba9afc5cec91bdb700"},{url:"blog/the_second_high_school/first_grade/down_term/18_week.html",revision:"85997f713985ec2ad6f21d4b36957ac9"},{url:"blog/the_second_high_school/first_grade/down_term/19_week.html",revision:"e35d0d9f33347392f561d9616391887f"},{url:"blog/the_second_high_school/first_grade/down_term/2_week.html",revision:"55481e07596893f973f30b1faa986bcf"},{url:"blog/the_second_high_school/first_grade/down_term/20_week.html",revision:"39103c04319c7d289fb30d3b78a53fc7"},{url:"blog/the_second_high_school/first_grade/down_term/3_week.html",revision:"200f1969b1ffe2c847590cee967111fb"},{url:"blog/the_second_high_school/first_grade/down_term/4_week.html",revision:"d12209158ec964e5e2fc5f8a17871dc9"},{url:"blog/the_second_high_school/first_grade/down_term/5_week.html",revision:"91e0cb2f252dfb3517da6f5e757d2eb1"},{url:"blog/the_second_high_school/first_grade/down_term/6_week.html",revision:"087e24d27de9ec23c898f551cf910faa"},{url:"blog/the_second_high_school/first_grade/down_term/7_week.html",revision:"9bb1377f62e9a61378cfc2269ca5e39e"},{url:"blog/the_second_high_school/first_grade/down_term/8_week.html",revision:"3400759fa288cad9ed8bd7f7d0cc9fc9"},{url:"blog/the_second_high_school/first_grade/down_term/9_week.html",revision:"18ee10c9d375ad0ab8036ccdb7556318"},{url:"blog/the_second_high_school/first_grade/down_term/index.html",revision:"1fa01a1439cbe56881ef23dece647586"},{url:"blog/the_second_high_school/first_grade/index.html",revision:"3945df5b039177fef1ea273919ba2ca7"},{url:"blog/the_second_high_school/first_grade/summerholiday.html",revision:"9e0471e04da607f0b6878209846812b8"},{url:"blog/the_second_high_school/first_grade/winterholiady.html",revision:"621a5af09118d1a296d7660c0109a12a"},{url:"blog/the_second_high_school/index.html",revision:"eebafbb4cf31eea2a25d5fe64359a0ed"},{url:"blog/the_second_high_school/introduction.html",revision:"027cc6a629b40f8737027c40dc3e7a85"},{url:"blog/the_second_high_school/second_grade/index.html",revision:"6dae5be3c1dbab41e9870cd25a37824a"},{url:"blog/the_second_high_school/second_grade/up_term/1_week.html",revision:"223c42d9e5572a935313b7807bf5eb7b"},{url:"blog/the_second_high_school/second_grade/up_term/2_week.html",revision:"73e294651186eeb1b1fbd7eeb3ab3154"},{url:"blog/the_second_high_school/second_grade/up_term/3_week.html",revision:"c02c6e11d052631467b19ac2f088acd9"},{url:"blog/the_second_high_school/second_grade/up_term/4_week.html",revision:"481ced35e84380bae14f5747ec10dd0e"},{url:"blog/the_second_high_school/second_grade/up_term/5_week.html",revision:"53678d6b1e34d4d0fec5cf4f54ade266"},{url:"blog/the_second_high_school/second_grade/up_term/6_week.html",revision:"cffaa277d24807a364dcca7a95bc7b74"},{url:"blog/the_second_high_school/second_grade/up_term/7_week.html",revision:"949ec1098a0e9152369ddb174894c19b"},{url:"blog/the_second_high_school/second_grade/up_term/index.html",revision:"d3886c1ac1feda4769d25592f93b8cc2"},{url:"blog/the_second_high_school/special/index.html",revision:"74bf2390eefe58748a0a37d5ae1bf8f1"},{url:"blog/the_second_high_school/special/special_1.html",revision:"0efc46bba8d9ab8c4a4c666215ae0aad"},{url:"blog/yh/events/2024/20240718.html",revision:"73d50f6de885fccab58863843c8520f4"},{url:"blog/yh/events/2024/20240719.html",revision:"10fbe2ccc53a9c85936e4dbc98ab4bc5"},{url:"blog/yh/events/2024/20240720.html",revision:"eda1e35e4b7f42ae712a709afd4637a8"},{url:"blog/yh/events/2024/20240721.html",revision:"1271c0fa6b2a98ac1964dccecd8c3ac0"},{url:"blog/yh/events/2024/20240724.html",revision:"2b6630f23cc13895af693a1dcff360fe"},{url:"blog/yh/events/2024/20240802.html",revision:"a252f21a90da2b4874898c9aed289175"},{url:"blog/yh/events/2024/20240803.html",revision:"eb1314208336552adb98edc661b01220"},{url:"blog/yh/events/2024/20240820.html",revision:"0faaa879ec00c119c2aa9cd284696250"},{url:"blog/yh/events/2024/20240824.html",revision:"b5a38a31fe76ceb2159789c7332bf12a"},{url:"blog/yh/events/2024/20240827.html",revision:"ef7c38c21e13133aa06fe9780d218657"},{url:"blog/yh/events/2024/20240921.html",revision:"f402379e2e7be46eb3779402ff872790"},{url:"blog/yh/events/2024/20241004.html",revision:"bc33aee966a7b0ae47a59ed840bcc94a"},{url:"blog/yh/events/2024/index.html",revision:"006e0ac13ffee0e43ea7e6a15c699f42"},{url:"blog/yh/events/index.html",revision:"34bcfbe2b0c4a0551fe0861082434d2d"},{url:"blog/yh/index.html",revision:"8751245aac4eca55480c5d10651e03b6"},{url:"blog/yh/update_log/Android/2024.html",revision:"8e1b7b39f8836e39a256898b138b93c8"},{url:"blog/yh/update_log/Android/index.html",revision:"975f51be4700946cfa66c322209c65db"},{url:"blog/yh/update_log/index.html",revision:"4afedff2050cac016c4ea7ade32e86b8"},{url:"blog/yh/update_log/Windows/index.html",revision:"08f16bb1e2edec156e8e4d02e481a8e7"},{url:"blog/yh/yh_true_name_internet.html",revision:"a30737953d3cd1f0f946f41959f43a9b"},{url:"guide/app_share/index.html",revision:"e84423fb5e3332dad85ec57a05aaf69a"},{url:"guide/index.html",revision:"0c6786f464fe9dbd9a67c18dd6f6b8f1"},{url:"guide/my_project/index.html",revision:"e3c6c1c1ab6e0411b30ee21961890d2e"},{url:"guide/my_project/merge.html",revision:"3ac80053d44a051551de0121798a3a25"},{url:"guide/someguide/1-DDNS-GO.html",revision:"30099f25fa33c6d88fd406968ac01196"},{url:"guide/someguide/2.html",revision:"16113f0b95158024c76ff5202098d7f8"},{url:"guide/someguide/index.html",revision:"1a01a9995bceca57cfd9234f183f8590"},{url:"index.html",revision:"febf105ecde46afd8b19e0c8f8745d38"},{url:"others/about_me.html",revision:"6fee2b6917409e838aaa16485eab0e0b"},{url:"others/copyright.html",revision:"4d9626803843cd42f3c94aa04f668dba"},{url:"others/Disclaimer.html",revision:"31f47ef8e50b63a6423a1a1114e92952"},{url:"others/index.html",revision:"de00bb748ca36d12e096338b5e356d69"},{url:"others/links.html",revision:"9927282d13fe8ae9652b85aef40880e2"},{url:"others/notice.html",revision:"bbffe7de59ed14a199f224e77ba744d6"},{url:"others/privacy.html",revision:"0992a9c4d0021d801d8a3f5662d8d40d"}],{}),e.cleanupOutdatedCaches()}));
