if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>i(e,r),t={module:{uri:r},exports:l,require:c};s[r]=Promise.all(d.map((e=>t[e]||c(e)))).then((e=>(a(...e),l)))}}define(["./workbox-84c915bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1_week.html-DafLbRRt.js",revision:"a7cc82153212d5161032f1d2a82f6664"},{url:"assets/1_week.html-DjI2Y4U7.js",revision:"41314fb7cbd5e81e8970c56e5093d09b"},{url:"assets/1-DDNS-GO.html-CMJFGlA-.js",revision:"91331600e3988f69617721809ec0ab72"},{url:"assets/10_week.html-BJ75wcgO.js",revision:"4b40097f153f95ecd2c129abfc1d125d"},{url:"assets/10_week.html-C3RxYfL2.js",revision:"21b035e1df6e6b1791eded680d609219"},{url:"assets/11_week.html-B4GhkBo6.js",revision:"88151ad2fa35ef73d41caa3d07239b2d"},{url:"assets/11_week.html-BISXxWjW.js",revision:"671d48e6a5d03eba8994a9551ad46b94"},{url:"assets/11to20.html-DZF-ea1X.js",revision:"7e4a1c1a805f057759dabe76f62b4d97"},{url:"assets/12_week.html-bKx0EGVh.js",revision:"82d95c8a278a5512cf24259d0d5408d5"},{url:"assets/12_week.html-CDO0qOCn.js",revision:"4ba3d04773a602aae9b30d59122067fe"},{url:"assets/13_week.html-D6Hi3fOw.js",revision:"f34090a3d5d94c80813d044da49b4169"},{url:"assets/13_week.html-ESu4G12O.js",revision:"0a3b3a4abb6703f4ad53fa264df65f62"},{url:"assets/14_week.html-D_QDBkM-.js",revision:"af92a19bd8562e72e3c6e42c7754faf6"},{url:"assets/15_week.html-CG7wpzjr.js",revision:"a61c79ca89a639b2651eb77a5c31b5ed"},{url:"assets/16_week.html-D7Fc61KL.js",revision:"98c4b61a930846a5f6520f427d490fa3"},{url:"assets/17_week.html-Bd7E6QlG.js",revision:"2c8f5b8e2a607e09becabf463b434d82"},{url:"assets/18_week.html-Dnm7Q9hK.js",revision:"3e5fc5a42183a6d2edafdb67a561f7b4"},{url:"assets/19_week.html-CLJJYrBj.js",revision:"1f5ba83612fe8a2dab18ee0976450615"},{url:"assets/1to10.html-BqQyTBCy.js",revision:"934618e0a14bfec2ec46ff096a0fd017"},{url:"assets/2_week.html-C4f4Gy2T.js",revision:"1ec40a00b4a5e598152abe178fc4ce1a"},{url:"assets/2_week.html-DZDNY2Rv.js",revision:"f1a7548d83ffc4748867d5b8d66d0285"},{url:"assets/2.html-DJpc5jpF.js",revision:"38fa8935b9dd437f862be948fe63b8b2"},{url:"assets/20_week.html-DfUgxN22.js",revision:"00e2b661dfdb3ac31581847cb944467c"},{url:"assets/2024.html-BrTGrK0_.js",revision:"5c8532efb802554ce46237a79d12236f"},{url:"assets/202402.html-BFGWB_Z7.js",revision:"2f95c3e6432c68e5da4cb074659b06eb"},{url:"assets/20240718.html-BeP3qwxN.js",revision:"26f5c2515e130f217952eec8dd626238"},{url:"assets/20240719.html-CXwW0Kpq.js",revision:"ad444f4a4d7feb9006a0572ea48b60f6"},{url:"assets/20240720.html-CVionD_W.js",revision:"3d62216c00850ba051e2c85aefaf0373"},{url:"assets/20240721.html-DlC7h9QU.js",revision:"b0920d4303abc718ae3c0de6d0a86bb9"},{url:"assets/20240724.html-BlW3NwfE.js",revision:"9592a02b534a8e71e6d6f9bff0fe54e3"},{url:"assets/202407280.html-Bs5HcAJL.js",revision:"b780232f53d31060e0121b5cd6f0ec67"},{url:"assets/202408.html-BXFqtYE2.js",revision:"057737413f62c46741a31269576af66e"},{url:"assets/20240802.html-D_6oSc1B.js",revision:"e109aef106a38e66191533ea162cccc2"},{url:"assets/20240803.html-CE-fJ113.js",revision:"ea5a0d1192a6a9f32fc1153896efd735"},{url:"assets/202408190.html-Bhf6gc94.js",revision:"6c2a8fe0150fad38ea87455e92dfdbe9"},{url:"assets/20240820.html-CvretziW.js",revision:"1de160dbf508a43ba2e2dfc4d0648462"},{url:"assets/20240824.html-C1ajL006.js",revision:"e4380af1c2944bf447449c3df6efba20"},{url:"assets/20240827.html-8JapfIpy.js",revision:"62862af1f1ce4a67c1eb53d31be05656"},{url:"assets/20240921.html-B_D_tfyU.js",revision:"78b742c188e06ebc48ae97cb43d0505d"},{url:"assets/20241004.html-CtLZQsKO.js",revision:"19004c7bbdc20bf98157466aeac0b8a3"},{url:"assets/202410120.html-JrxDBuZN.js",revision:"2fd4f51791d0bce7d7b57f8270bfa25f"},{url:"assets/202410260.html-DgAQUg5i.js",revision:"0e09e475cf485f2fae56a8ec0294083b"},{url:"assets/202411170.html-BoSCplDk.js",revision:"b8e9ae0f398b5bc80a63c31038c28f68"},{url:"assets/240.html-Z3S__UXl.js",revision:"dfab8a19f7b62b983548828075fe6e92"},{url:"assets/3_week.html-DccWeRuP.js",revision:"7233231e20d01667d4b28b2dffca6ccd"},{url:"assets/3_week.html-DiAchRt5.js",revision:"c153ad45ea5d6926345aa435ef9b06bb"},{url:"assets/4_week.html-BAY-anQi.js",revision:"9641aebba0e12d9a54740194eb447096"},{url:"assets/4_week.html-DGyq6cYx.js",revision:"ac4ad57a98cda40bc2e0205488312262"},{url:"assets/404.html-BpbmswLY.js",revision:"8686232a274f665df28cfdffa6130a65"},{url:"assets/5_week.html-BdW9O8qI.js",revision:"925fa8e7bf4a558e93f7dcd82b358d1c"},{url:"assets/5_week.html-Chcla1lO.js",revision:"8187217ff8777328e84d226064a9b983"},{url:"assets/6_week.html-5QXyTsSt.js",revision:"53840c5f61309a2b7b5270e17540f1ee"},{url:"assets/6_week.html-DP3GkYaZ.js",revision:"20c9d69bfe6f2205bd5338073e7f6ee3"},{url:"assets/7_week.html-C_w7UTFk.js",revision:"2ee2914c5e13f389c8974e4d0c0d712c"},{url:"assets/7_week.html-CYzCxpuT.js",revision:"0f5fa9dd3ae97e21d491f6b0238b87e8"},{url:"assets/8_week.html-knO6k_9q.js",revision:"32826c4a590681d0488ab3617ba35a6e"},{url:"assets/8_week.html-o58t219A.js",revision:"f28bec8a741245003f838d46d766e576"},{url:"assets/9_week.html-BVEoHknm.js",revision:"9610e5e7c8607b180c1c19ca23a58262"},{url:"assets/9_week.html-DRdB59S9.js",revision:"0131d8eb114be60d9238a7d8ae0d7575"},{url:"assets/about_me.html-C_lOz0uq.js",revision:"6d0b68b97178419a21e3557b6994cc2d"},{url:"assets/app-Bdvpj8nL.js",revision:"c3a0b0d88484e68f89f353484f42eabe"},{url:"assets/artplayer-CYLSgUjv.js",revision:"3ab153fa5f107350a41a8d711cb51664"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/copyright.html-DiNdbOZ6.js",revision:"e5092e61a6650f13e40e2a7ebe7a34ab"},{url:"assets/dash.all.min-CXnJ7hU8.js",revision:"718ec47069e52c190b9533b18dc8a2a2"},{url:"assets/Disclaimer.html-CCqqRj-O.js",revision:"4c3867430e2af74b2d12ffae996ec05d"},{url:"assets/file.html-CqegkMQV.js",revision:"689e4dea613e4b9b164b31c8db86b1d8"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hls.min-Drnit47W.js",revision:"f4fdfbbd5e3c7b6e44f7e7d5fba5b8fe"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-1CjWsjJW.js",revision:"4cd124784174219faffa38163b762f23"},{url:"assets/index.html-B-0InjC5.js",revision:"93639e02852117cd0a3270a41de0f3d0"},{url:"assets/index.html-BaWSjuF3.js",revision:"c936304e8ba38dfb9e32553ffddf3558"},{url:"assets/index.html-BERRYgDV.js",revision:"8932935a924efd2fb91f0c530e445ed6"},{url:"assets/index.html-BH1ja9rh.js",revision:"b8153c0fab04ba8b2f43fbec020e6949"},{url:"assets/index.html-BN9tSqYn.js",revision:"2917133cdcc96e35fbcf75ce86725b20"},{url:"assets/index.html-BNN1pwx9.js",revision:"9ffca3dbaf1f579ca2d70b346d8c0ef5"},{url:"assets/index.html-BR1_M06T.js",revision:"597881e5920c4b32a6a3c92a5435ae1a"},{url:"assets/index.html-Br32inMu.js",revision:"614674f6d5bdc4736af7a2d7b11d8356"},{url:"assets/index.html-BsFwRVKm.js",revision:"563a705c1b88ca45c19b3f1476897dee"},{url:"assets/index.html-BSg_QFoB.js",revision:"f6e3af9bef8feb06feba4172d7e0b969"},{url:"assets/index.html-BTV9Sn9r.js",revision:"3e34a17efd7686f90e69e865c32f8395"},{url:"assets/index.html-BUo4Cxu-.js",revision:"51c79f8b9208601c443e0310e38ef794"},{url:"assets/index.html-BWCZPj7N.js",revision:"53d879f440a832713b52df220904d3cd"},{url:"assets/index.html-BxRhhd9K.js",revision:"23cb3f36ce364d832e5acd1be8880cb0"},{url:"assets/index.html-BzVDqTwO.js",revision:"099fbd069475e4f9c4bc960ad928214a"},{url:"assets/index.html-C05JeRhZ.js",revision:"2d0d05644f246f27fc03fdba992a955a"},{url:"assets/index.html-C5Syphzk.js",revision:"97b8ca2f1fd52ce3f10f93ef5e0687db"},{url:"assets/index.html-CHipQCd9.js",revision:"f75226d089e70db8a3ae71c668162621"},{url:"assets/index.html-CidjJ7y0.js",revision:"5996e1e2af09d0fba8c13557f3e78edc"},{url:"assets/index.html-COIqjYy_.js",revision:"0ea394202c29b6c9a327c1deec429d2d"},{url:"assets/index.html-COOg6ipr.js",revision:"7af0a56451360153db2fc1bab07bebd3"},{url:"assets/index.html-COSA-chb.js",revision:"61f9cdb63fd3c119027d329a912fbef1"},{url:"assets/index.html-Cpf8F_YR.js",revision:"90c5b001b45883a5402817e862dd2360"},{url:"assets/index.html-CQuQJtWI.js",revision:"dce37cb720c5c5dedc70a9479b22cc87"},{url:"assets/index.html-CqZx9gg_.js",revision:"48c39e92615e500640ba2c6df9c0a58a"},{url:"assets/index.html-CtJFzgvY.js",revision:"48dc843c9536e5ab5da454bb1dcdef79"},{url:"assets/index.html-Cu4hIUUb.js",revision:"0d196dcf23c537b2051235b52041be8b"},{url:"assets/index.html-Cy43LcrP.js",revision:"ccd58b7a2be15e53b16ca293cecb6325"},{url:"assets/index.html-D0XcvMvM.js",revision:"4f1baa5499c0a41f42d312fc1d884019"},{url:"assets/index.html-D1qyYEjV.js",revision:"6e7ca9c186a38b4f31ac5f735b2a8c39"},{url:"assets/index.html-D5MSe-zr.js",revision:"e702af5917287d7085e0915c9f9afe25"},{url:"assets/index.html-D6lmN9zE.js",revision:"d1fd9a50299327749f22acac4821617e"},{url:"assets/index.html-DBIjTd4J.js",revision:"925900b90319c6ff8d99c89d3f858d0d"},{url:"assets/index.html-Dc7NG26I.js",revision:"e5c5289abee7b175233264549960c6db"},{url:"assets/index.html-Diy1jPh5.js",revision:"cae7794867555ee561af4482716d7e0f"},{url:"assets/index.html-DJllj5o7.js",revision:"2922cb2d039132f03eb82b8f0fed00ad"},{url:"assets/index.html-DLDtN3s_.js",revision:"be8e58cdf1a98e5a0af26449c27d4f0c"},{url:"assets/index.html-DNsOoyk2.js",revision:"f920db1558306af0220ef8fd2ac99a8f"},{url:"assets/index.html-DU3kavBu.js",revision:"2cd4f530d025a55aadf7e37962f747dd"},{url:"assets/index.html-DuEAGQLX.js",revision:"693212e60a70c0a7fc625caaaff8f176"},{url:"assets/index.html-J__UNu19.js",revision:"2094e262bf901cb7e561f85cbd9b0837"},{url:"assets/index.html-oMN5cYG_.js",revision:"638eae9369cffacbc372c2780cf10d24"},{url:"assets/index.html-r-QW1UQr.js",revision:"eec1f096d2fc1c8c4e7d2c67e9772292"},{url:"assets/index.html-Tb-MG-KQ.js",revision:"1e95bdc4198cd53a1fee1326c81668ff"},{url:"assets/intro.html-D1QZyYxs.js",revision:"03f8c625f9dcb8a9002ca771cb5ab4f0"},{url:"assets/introduction.html--FM55X9s.js",revision:"acdddfefbe716600c5e489fde5896265"},{url:"assets/introduction.html-C7vVfChb.js",revision:"a2f855ecd72bfc09ef1146c6481d437b"},{url:"assets/links.html-RKpJLoJN.js",revision:"3c0045b133b08a25e934e35c96f59859"},{url:"assets/merge.html-2uBenTnI.js",revision:"bdd8bc1a22d940dd7c359474cc9d912f"},{url:"assets/mpegts-DC5zlZYy.js",revision:"e58ff746740a93a354bde3ec3a966d3d"},{url:"assets/my_first_novel.html-nlY_C-_I.js",revision:"f48de6948d8e931dcc753de13ebcd112"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy.html-z23-8rf-.js",revision:"27c0ac7d946231d4626734a21abc5d31"},{url:"assets/setupDevtools-7MC2TMWH-D_Iou4pG.js",revision:"e5ff2da0de1b334c98b8ff69a7deb1b3"},{url:"assets/special_1.html-DxRU9dmG.js",revision:"909a21bfad9e394e9773010d5dd859f5"},{url:"assets/style-CXSEX6Lj.css",revision:"ca9493a01077305edf41f66a350c3ef8"},{url:"assets/summerholiday.html-BF2cIdNG.js",revision:"55b81644d5d4667663cccd9957654f5a"},{url:"assets/winterholiady.html-pCh6xlJN.js",revision:"dd52549f4082e768eb498d64b8dbe723"},{url:"assets/yh_group_rule.html-Clh0QyCv.js",revision:"bd6a21619c004ccbd321f6b4fd908c53"},{url:"assets/yh_true_name_internet.html-CTC9EyN4.js",revision:"430e7dc7df80923e345bd27401af80f5"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"39ee3e78607d6588f6eb899a0c67c8d5"},{url:"article/index.html",revision:"ab47036c62e11ff301dc660fdd80612e"},{url:"articles/article/2024/07/202407280.html",revision:"a14894eed983625240ee49e7bc018882"},{url:"articles/article/2024/07/index.html",revision:"19fcfec64e24eba2912f78802f6b775b"},{url:"articles/article/2024/08/202408190.html",revision:"cc6a8dee859e813eafd2708e0ffb2e15"},{url:"articles/article/2024/08/index.html",revision:"efe4e4a2a7f7d0cf46621e4afd54cd87"},{url:"articles/article/2024/10/202410120.html",revision:"68c941e7955d6f86ccc32a80c326324b"},{url:"articles/article/2024/10/202410260.html",revision:"dd4ce75b3d842b8c0b80ad3bedcd5aa7"},{url:"articles/article/2024/10/index.html",revision:"bf22d2489364286c5f7428d63a8e84aa"},{url:"articles/article/2024/11/202411170.html",revision:"ff980dcbdf25f30a37af2674aedc895d"},{url:"articles/article/2024/11/240.html",revision:"65debe3a7e6bd64463b9a496f355bc44"},{url:"articles/article/2024/11/index.html",revision:"f06d3078ee2cf7a8d5e96f63c900750e"},{url:"articles/article/2024/index.html",revision:"49bbd1304b297422480e40d0c7564948"},{url:"articles/article/index.html",revision:"4b2a9098065391826c3020ff0177a7a4"},{url:"articles/books/autobiography/index.html",revision:"617f9b36b50978833ba456ab759aa486"},{url:"articles/books/index.html",revision:"29c5bb5f1cb793d78e34bd5e224e9848"},{url:"articles/index.html",revision:"4538491cf6d797d0f6c76129f0fb43ee"},{url:"articles/novel/file.html",revision:"5d137e126cac23e655b7764070a189d0"},{url:"articles/novel/file/index.html",revision:"759b73bb6db207fce59880bbdfd5e616"},{url:"articles/novel/file/my_first_novel.html",revision:"a2fadddeaae4210d647c52584f985d3a"},{url:"articles/novel/index.html",revision:"362ca5e81ad0ee8e979110b2f4ac63c1"},{url:"articles/poems_and_songs/index.html",revision:"12139611c96647a54a40dc90aeb36ad6"},{url:"articles/poems_and_songs/random/index.html",revision:"34b6cf266bc25a143062ebb51b6de5e5"},{url:"blog/index.html",revision:"78267cf9e63ab78a04f98bc4f619ed11"},{url:"blog/music_updata_log/11to20.html",revision:"ca0dfa2b34895313a151f377b3c0a4c8"},{url:"blog/music_updata_log/1to10.html",revision:"6567802d4d64e28b103a83ee8744dc7d"},{url:"blog/music_updata_log/index.html",revision:"6200c698e22f5581193648b18f839780"},{url:"blog/music_updata_log/introduction.html",revision:"9487abb9a52eedc2bfc0cbc4b0f107c3"},{url:"blog/photo/2024/202402.html",revision:"c85ba8b9bd777abe05b8a97475a6755f"},{url:"blog/photo/2024/202408.html",revision:"1080b07801a463080eac8d7425c7bcce"},{url:"blog/photo/2024/index.html",revision:"e6da9cc3cff18dcbf068bcaa5a0e5ce3"},{url:"blog/photo/2025/index.html",revision:"3b6d1cbfde528edbe7c7611cb7ac7a45"},{url:"blog/photo/index.html",revision:"563993b6ac2fabde1b62457ec8182e68"},{url:"blog/photo/intro.html",revision:"74466a5d3b91a841a3bedc44989b0d58"},{url:"blog/the_second_high_school/first_grade/down_term/1_week.html",revision:"ab94fd07fbb57f8db297c7640d007018"},{url:"blog/the_second_high_school/first_grade/down_term/10_week.html",revision:"e3e1747f7097055f408e1d51f239d463"},{url:"blog/the_second_high_school/first_grade/down_term/11_week.html",revision:"b2811bf2816eedba485fba8af57003ee"},{url:"blog/the_second_high_school/first_grade/down_term/12_week.html",revision:"ce69e308bb2ba6969c6ebe1d4de8bd9d"},{url:"blog/the_second_high_school/first_grade/down_term/13_week.html",revision:"c40acc3f66eb9e35895f060245820864"},{url:"blog/the_second_high_school/first_grade/down_term/14_week.html",revision:"b3177b1642c8761e0038e73504424e35"},{url:"blog/the_second_high_school/first_grade/down_term/15_week.html",revision:"fc3e20ac3b8a738416bcac19a0774bcc"},{url:"blog/the_second_high_school/first_grade/down_term/16_week.html",revision:"87f2c32513a89a8ac036e1a7fd7feea2"},{url:"blog/the_second_high_school/first_grade/down_term/17_week.html",revision:"4daf4b6168c46541d5c214c36873fa86"},{url:"blog/the_second_high_school/first_grade/down_term/18_week.html",revision:"3e6ef60ebbad3368bcdb92288d9da111"},{url:"blog/the_second_high_school/first_grade/down_term/19_week.html",revision:"ba2ff13d72182b0d9e8c9dd05929dbb9"},{url:"blog/the_second_high_school/first_grade/down_term/2_week.html",revision:"c3472b91d1269eb7a7e7ccd3c8392155"},{url:"blog/the_second_high_school/first_grade/down_term/20_week.html",revision:"e65ae7c941760720f6ed14e84c86206e"},{url:"blog/the_second_high_school/first_grade/down_term/3_week.html",revision:"a867472c29e822e40a5a069508baada7"},{url:"blog/the_second_high_school/first_grade/down_term/4_week.html",revision:"9a821b88f20cc4baf84095920b18d12e"},{url:"blog/the_second_high_school/first_grade/down_term/5_week.html",revision:"3b1bff8b489fc223aa21c0c45c74c7c1"},{url:"blog/the_second_high_school/first_grade/down_term/6_week.html",revision:"a8bdfa0df55cf25fc48c4b010d44f5d9"},{url:"blog/the_second_high_school/first_grade/down_term/7_week.html",revision:"5236c9830c04ed27688fd336bb6a39c4"},{url:"blog/the_second_high_school/first_grade/down_term/8_week.html",revision:"09c7aebf55c956debae3de0eb7e4bd1f"},{url:"blog/the_second_high_school/first_grade/down_term/9_week.html",revision:"f3dd08c5c6dc668fec25f418b605ced9"},{url:"blog/the_second_high_school/first_grade/down_term/index.html",revision:"8bb4fadc89a51527579dd5a697d31b4f"},{url:"blog/the_second_high_school/first_grade/index.html",revision:"be1deffe8ef518f104921f3c8d58c9b5"},{url:"blog/the_second_high_school/first_grade/summerholiday.html",revision:"08df64183c22f0fb88db690e6c74a774"},{url:"blog/the_second_high_school/first_grade/winterholiady.html",revision:"c03582acc2e2127c8b05568d1b6065ea"},{url:"blog/the_second_high_school/index.html",revision:"96de3a1bb1a67c67a95c750911e7d530"},{url:"blog/the_second_high_school/introduction.html",revision:"fbb6627c0be2ffdc0d8134fd135dcec6"},{url:"blog/the_second_high_school/second_grade/index.html",revision:"a617330741d9e1da4ef19ac60d1d1630"},{url:"blog/the_second_high_school/second_grade/up_term/1_week.html",revision:"971ef7d582b568cee6fce74e0e484dfa"},{url:"blog/the_second_high_school/second_grade/up_term/10_week.html",revision:"c31adaa6d205c50ff81683823b9bdb4a"},{url:"blog/the_second_high_school/second_grade/up_term/11_week.html",revision:"f04ed95c562dbfc9c63b9636fc83bb5d"},{url:"blog/the_second_high_school/second_grade/up_term/12_week.html",revision:"9749ae27029e895207008ef1ace2f808"},{url:"blog/the_second_high_school/second_grade/up_term/13_week.html",revision:"109e9fbb68bfcfc2c0f0115eff024f23"},{url:"blog/the_second_high_school/second_grade/up_term/2_week.html",revision:"6fa7e6f8ec603f59c58be196c86c62f2"},{url:"blog/the_second_high_school/second_grade/up_term/3_week.html",revision:"ddf833fd336913b4c7675e03f88141ff"},{url:"blog/the_second_high_school/second_grade/up_term/4_week.html",revision:"f3a34936245a2c5161598caa0aaa2998"},{url:"blog/the_second_high_school/second_grade/up_term/5_week.html",revision:"9cd90737bb71bffb9f640a8c6bda369b"},{url:"blog/the_second_high_school/second_grade/up_term/6_week.html",revision:"b076abeef81ff1f9ed14537e4d3dc044"},{url:"blog/the_second_high_school/second_grade/up_term/7_week.html",revision:"a86d2d1e22cc159d232f107717cdd5f1"},{url:"blog/the_second_high_school/second_grade/up_term/8_week.html",revision:"30334fa1f561066195e72f17fdc36cba"},{url:"blog/the_second_high_school/second_grade/up_term/9_week.html",revision:"0e72de76d26a7a05252b52064e4891a5"},{url:"blog/the_second_high_school/second_grade/up_term/index.html",revision:"fbbd0f5d207e5f574c40e40a5a4c1ffe"},{url:"blog/the_second_high_school/special/index.html",revision:"041f901ed03f627699bc2ba8349a886b"},{url:"blog/the_second_high_school/special/special_1.html",revision:"5409e24e5c710447735b9cb580097491"},{url:"blog/yh/events/2024/20240718.html",revision:"5692f65b18cc6f0f0cf974ab354d9290"},{url:"blog/yh/events/2024/20240719.html",revision:"886247d68109e3341996e43990ca6169"},{url:"blog/yh/events/2024/20240720.html",revision:"e3364186b355845e7178d53bf2901acd"},{url:"blog/yh/events/2024/20240721.html",revision:"52ba04966cfe5cce83c6d921259aec92"},{url:"blog/yh/events/2024/20240724.html",revision:"c875be775c2d141abd8f67d10bfac73a"},{url:"blog/yh/events/2024/20240802.html",revision:"ca4ea4bfeb8a849a7fdd8a2280256ca0"},{url:"blog/yh/events/2024/20240803.html",revision:"340dbe5e5dba99c9d39fa0d38039b7fb"},{url:"blog/yh/events/2024/20240820.html",revision:"c7d902c0d41c3bdfa69f0f3d9f324ac3"},{url:"blog/yh/events/2024/20240824.html",revision:"011dd79b4823fd46b00c278e5e4cc621"},{url:"blog/yh/events/2024/20240827.html",revision:"e3b02f15ae6ba73c8e46965247f90655"},{url:"blog/yh/events/2024/20240921.html",revision:"214dff150330c8e649686507ccac138e"},{url:"blog/yh/events/2024/20241004.html",revision:"3c7254947dd8ea9d547c836529e86e1e"},{url:"blog/yh/events/2024/index.html",revision:"6c19e7b62ffb6f302e97291895924c0c"},{url:"blog/yh/events/index.html",revision:"6943c4a3436fac10f9e71ad2f5c5d49c"},{url:"blog/yh/index.html",revision:"09fae1379f6f75231ab9c63f0beaecb2"},{url:"blog/yh/update_log/Android/2024.html",revision:"847958e2499f55c3ccdea13ce6d8bbd2"},{url:"blog/yh/update_log/Android/index.html",revision:"46015ad43f7f4b03455fb3e6598f40c3"},{url:"blog/yh/update_log/index.html",revision:"995eb0667161adbec967685899a1bf79"},{url:"blog/yh/update_log/Windows/index.html",revision:"bb8e9e56d4b6220e5f38bf165f35acb7"},{url:"blog/yh/yh_true_name_internet.html",revision:"44d32dbbd9e632569329a5c098781836"},{url:"category/index.html",revision:"ee3b724b40e91f15d0e9635f99dc1d24"},{url:"category/学校/index.html",revision:"663b9ebced228cc65331e7a8925f39c5"},{url:"guide/app_share/index.html",revision:"45fd8c125ae402dd43d3ad3622846080"},{url:"guide/index.html",revision:"cc71ce448f1c3c5cbd2b8eac5293abc6"},{url:"guide/my_project/index.html",revision:"bef5610625bd719ee068f516b5f59cb7"},{url:"guide/my_project/merge.html",revision:"309f213f5bf2aadf612a9a947918f86a"},{url:"guide/someguide/1-DDNS-GO.html",revision:"a1d8fb71f16fd0d03312f32634f34edb"},{url:"guide/someguide/2.html",revision:"3b0399eb51b3577703b5f99e25e5cde2"},{url:"guide/someguide/index.html",revision:"45b83c3ebdd75e34c81ba51707cbd6b9"},{url:"index.html",revision:"4b92194d3d170f4ee9c787be9886d1f7"},{url:"others/about_me.html",revision:"a88dd28c5bb1a9cd6054351d26394f9d"},{url:"others/copyright.html",revision:"2e658aa3ec1d8ce40d62cf15dfa837e7"},{url:"others/Disclaimer.html",revision:"e3681be2c85683520cc1068f5db55b06"},{url:"others/index.html",revision:"83766bc80c54402f16ffd602b8d5972f"},{url:"others/links.html",revision:"3f977ac74619bec063e338a7ed1f15f2"},{url:"others/notice/index.html",revision:"83c2ca5207db455a92c4c545f32454aa"},{url:"others/privacy.html",revision:"ae0c0ca695637a63a5930f28346161a5"},{url:"others/rules/index.html",revision:"7b0be37fe7078745326adf0857797891"},{url:"others/rules/yh_group_rule.html",revision:"f15992d50d4b9d27c387150301619ebc"},{url:"star/index.html",revision:"415b11e1ce1c4adfe8fb4726cb48a4c9"},{url:"tag/index.html",revision:"143bf0918647b4c70b3f6159e8bb037b"},{url:"tag/吃瓜/index.html",revision:"364f712e5fa26d53d640ac91e5950281"},{url:"timeline/index.html",revision:"092d2d642a1769699e3d05b40995f4d0"}],{}),e.cleanupOutdatedCaches()}));
