if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>i(e,r),t={module:{uri:r},exports:l,require:c};s[r]=Promise.all(a.map((e=>t[e]||c(e)))).then((e=>(d(...e),l)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1_week.html-CgR875ao.js",revision:"67e10ce83b3e0b99371fa999667c2aad"},{url:"assets/1_week.html-DLZNKWmm.js",revision:"70eff5043ed8155d5487e7f58e186b69"},{url:"assets/1-DDNS-GO.html-DIdkDEeV.js",revision:"e8f02bc044efe5fb3eb51f9a3bc889ba"},{url:"assets/10_week.html-B804BOL0.js",revision:"c7e0e65f1fb87391bb2b08320c5d2f65"},{url:"assets/11_week.html-CZp_93Dj.js",revision:"ec2c003927b95576b9b20ae7e9eae006"},{url:"assets/11to20.html-Dw1hXnSk.js",revision:"a207f9ffbd7d43e29be94690d0dd8ec6"},{url:"assets/12_week.html-DX0zwMRj.js",revision:"ecf36b2e75850374678338f5732ca20a"},{url:"assets/13_week.html-BAFx7h_P.js",revision:"985b622663ae3d5a409abb4e99fdfa62"},{url:"assets/14_week.html-CfAX3Bod.js",revision:"4d08cd296cf06c500266a5717861ac1f"},{url:"assets/15_week.html-Bb7DYl8l.js",revision:"b0273590d6481def57c0deb48093fb83"},{url:"assets/16_week.html-BxNrAs_S.js",revision:"7ef9238c2b52247a4cff6820bfa5a3e7"},{url:"assets/17_week.html-C6nz1lFE.js",revision:"d8d8cf890de8ae6522f80666782578c9"},{url:"assets/18_week.html-CutUWKm6.js",revision:"cae7d990dbc98205c98144068b4ad51b"},{url:"assets/19_week.html-D2DswK6L.js",revision:"b3fb1bbc5b1d56ec7d240e3cc905df14"},{url:"assets/1to10.html-DkFzcwmd.js",revision:"2303fdaa8f5c5d7e80f2dc3b85c1f202"},{url:"assets/2_week.html-BvLVhrol.js",revision:"2210d9982d1d5d9f812a0768c8c2596d"},{url:"assets/2_week.html-BW7csnEn.js",revision:"7722bd568da0bb93b6c9ec6f3adacfc1"},{url:"assets/2.html-DGGFrX4p.js",revision:"2d2de72f13a0c11a04696fa13247ebf9"},{url:"assets/20_week.html-I7t_v6cz.js",revision:"1581eba58e724ac87824608cd83436c6"},{url:"assets/2024.html-BYCFuc_a.js",revision:"632e93b368fa4515786f790231e2e02a"},{url:"assets/202402.html-R_7LL7cD.js",revision:"1af3893d86046e227203133214a450dc"},{url:"assets/20240718.html-Da35iWX7.js",revision:"c9622d955d2777dc27f225104c40c92c"},{url:"assets/20240719.html-Csg4RREf.js",revision:"9627409d9146f37dfe2a6319c7cf01a1"},{url:"assets/20240720.html-DdMR4Hjt.js",revision:"5e9b27187b86bfd7eb3eba3fe54dca3c"},{url:"assets/20240721.html-tXTMzhJt.js",revision:"c381962cdb65668688194aee5c03714d"},{url:"assets/20240724.html-CeeyKATR.js",revision:"70a9d0186c9237cef712e02032adb720"},{url:"assets/202407280.html-3JxBEhpA.js",revision:"d07cb6bfa6a3e954e6644770c578aac1"},{url:"assets/202408.html-HBhi1Kku.js",revision:"77db31f48aa381bdb87efc4b720ed32f"},{url:"assets/20240802.html-o3Vjz92a.js",revision:"46b79f581cd206fa7c1f8d43281366bd"},{url:"assets/20240803.html-BG6DsDs_.js",revision:"f73540b60011c5ebabadaca1faf44053"},{url:"assets/202408190.html-bEPdyGe6.js",revision:"65e20d41ba164391c7d1db42c8cb08fb"},{url:"assets/20240820.html-B_vDtKbY.js",revision:"12c178a6ad86216f12458f9b9fa0d002"},{url:"assets/20240824.html-mGG26CQZ.js",revision:"5485d61a11d5b6d7c046593bdde7c05a"},{url:"assets/20240827.html-DeiNvvPX.js",revision:"dddb00988e4ce74859ffb2e9dfe33d11"},{url:"assets/20240921.html-CnJW1mU0.js",revision:"2f0af5206111aaa8d6379c19afc0cd50"},{url:"assets/20241004.html-fh4KQBrx.js",revision:"e5678636872786c13b2cdc095f0bf6c2"},{url:"assets/202410120.html-BlwZpWA5.js",revision:"03f0cf81474d1ebab8362fd43ac2e4e8"},{url:"assets/202410260.html-DWLYMRBa.js",revision:"c5eb15b6c65651ad2178586687c3c3b5"},{url:"assets/3_week.html-CXge18Tm.js",revision:"18d36f19a4bd12a44885fe7f3f648fbd"},{url:"assets/3_week.html-UfRGNpEb.js",revision:"4bebb64d91c971d743e26f3469efd0c5"},{url:"assets/4_week.html-BaKD9cl3.js",revision:"14e993b7448143d8e5df1b8204879673"},{url:"assets/4_week.html-CMG9jZQL.js",revision:"13f8766207d9f8f25226ca6ba93a8e83"},{url:"assets/404.html-BYeqoX23.js",revision:"25c54220f0978cbd74e0c44cc4065f41"},{url:"assets/5_week.html-CYz13ZR0.js",revision:"5c3c625fefceba81f167c6bc2961d758"},{url:"assets/5_week.html-DPU8ZJqK.js",revision:"77d69c7f363eb842e386c7fecb462095"},{url:"assets/6_week.html-9QuBPsxM.js",revision:"eb128f65ca33aa8dcf06dac38aa94f43"},{url:"assets/6_week.html-jg-T7NZV.js",revision:"439c349fa142c2322e876997ddc82d79"},{url:"assets/7_week.html-Bzfk3Izw.js",revision:"18158073339d3b0f138704357dd54a39"},{url:"assets/7_week.html-pqhOtrk_.js",revision:"7125d88c3c99d9375cb83aeaef5da8cd"},{url:"assets/8_week.html-BN9IBlzq.js",revision:"57597c7c04a805477f7ac20ac4d1fe8f"},{url:"assets/8_week.html-ClQ6nqLb.js",revision:"5d8c8ef0d42225a09a95583dcd057a2a"},{url:"assets/9_week.html-D7YQwF_g.js",revision:"f0bc2e57e1c1a53307332f943b5d8797"},{url:"assets/9_week.html-pXkHsNPN.js",revision:"b86e5aaa068b6cac97f1cdab9c66ccdc"},{url:"assets/about_me.html-CheGL-hh.js",revision:"9eeedc07a28438950a4153bab838d5fb"},{url:"assets/app-CuZb1uoe.js",revision:"755f095b93002581f476e89d818f00d4"},{url:"assets/artplayer-CYLSgUjv.js",revision:"3ab153fa5f107350a41a8d711cb51664"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/copyright.html-DWppgziD.js",revision:"9513f775acd813282a72349a01354400"},{url:"assets/dash.all.min-CXnJ7hU8.js",revision:"718ec47069e52c190b9533b18dc8a2a2"},{url:"assets/Disclaimer.html-DQEHXBQC.js",revision:"017a343195db66cd49edd28733ca7d2a"},{url:"assets/file.html-BrzqnpOC.js",revision:"7e3eb60bc1dab42ec3e8a67015d80893"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hls.min-Drnit47W.js",revision:"f4fdfbbd5e3c7b6e44f7e7d5fba5b8fe"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html--tfcwLlq.js",revision:"299617552e44562e639390e56608312f"},{url:"assets/index.html-1TMm7UAo.js",revision:"381ee285b2d041870283a4f6ab72d232"},{url:"assets/index.html-BEYMoe-a.js",revision:"64669cc52928cf352b0b610d027fc56e"},{url:"assets/index.html-BMOJZHvM.js",revision:"ccf633f976ae69ccb3978de211fc98fc"},{url:"assets/index.html-BnHMIogJ.js",revision:"dca5142ea8e28d4cb188ac2fecf954b5"},{url:"assets/index.html-BPa7GXJ2.js",revision:"d067a4d2b974a9988988634e14f7c4bd"},{url:"assets/index.html-BtAQ4GIp.js",revision:"45eb5353e1c859a31fab232224aea58f"},{url:"assets/index.html-Bw1Emqek.js",revision:"5295602e7ff1756577ef0e4da4e3e398"},{url:"assets/index.html-BWaHjNCq.js",revision:"256e44ba86aa9fe101b21abe6e96c5bc"},{url:"assets/index.html-BY1DMC71.js",revision:"bff8521e1e89cd06ee1a31d8e5b8ac31"},{url:"assets/index.html-BZQIJ-TF.js",revision:"dc23784ff58f903a019188cab9015dcf"},{url:"assets/index.html-C3eaO_hP.js",revision:"c5a35c0fb61e4ed27a488aa161b9d751"},{url:"assets/index.html-CBH-j5m5.js",revision:"3cd66835878ce75e157710583d2f3c09"},{url:"assets/index.html-CC4JitQp.js",revision:"bdaa2585bcb4e0612f82e0e59a77461d"},{url:"assets/index.html-CklDVvEU.js",revision:"5b94f40abfa7b7125a73fa153d18d592"},{url:"assets/index.html-CLgIlbXN.js",revision:"d8e19a592b0ea138afd26dd8def2fb0d"},{url:"assets/index.html-CnGoVPba.js",revision:"1255d097f74a8e0ffca33ee7e024e694"},{url:"assets/index.html-Cpef7Zxp.js",revision:"694088318326db54bb157d0a965704ae"},{url:"assets/index.html-Cr8VIvbC.js",revision:"4f8ac44d3eb87f13e2947e93dd0c6690"},{url:"assets/index.html-CTuVNO1X.js",revision:"0e96d7e2222ddfb33d7d4c2a9392e8c5"},{url:"assets/index.html-D64Qv3xO.js",revision:"3bc3836d4b530182ac84e6431a47ccc8"},{url:"assets/index.html-DAvmgHqq.js",revision:"cd08ce8d28b34d5b2b5afb3671cc663a"},{url:"assets/index.html-DhyQ2NIM.js",revision:"0a283ae16c2b133da3aefc9e2866247a"},{url:"assets/index.html-Dm_ZNT5Z.js",revision:"85e8cd25d76764352bb561b6e159fcd7"},{url:"assets/index.html-DMubHUDX.js",revision:"3ff1de47c02e3a70994b2d68c6ac716e"},{url:"assets/index.html-eCTv9kHq.js",revision:"1ed35735365d089b6c022f3ed52d04fc"},{url:"assets/index.html-fPKfmTbq.js",revision:"fe35250ae6f6895e500cf35001e143f5"},{url:"assets/index.html-gsttGs-L.js",revision:"9b2ec056dbcbcc4a4110756a556796b8"},{url:"assets/index.html-mh73g2HY.js",revision:"f20656ea255cae3b5f993dcb23c16ac8"},{url:"assets/index.html-pUsvVAK-.js",revision:"ceb5939772814d5ebd9377e2931f3b3a"},{url:"assets/index.html-qJRF7Ajm.js",revision:"3d3f5f3464a2545648c3c6c7084a5992"},{url:"assets/index.html-Y9VclPPH.js",revision:"29bd5f7014396500b6d8664d8d81e355"},{url:"assets/index.html-Y9Y9O6ri.js",revision:"d487496b21666c89e90b5ee65036b926"},{url:"assets/intro.html-e8lNC0at.js",revision:"7e9d33597b07106d8bc700562702fd87"},{url:"assets/introduction.html-DundvgOm.js",revision:"441f16dceee4b396bb179e8df021d8b1"},{url:"assets/introduction.html-vKwpSFfu.js",revision:"298829c60a522b40bff50281659a280f"},{url:"assets/links.html-Dv37jKC5.js",revision:"f00c177ceac2db7ce793463c19cf3367"},{url:"assets/merge.html-C3n3AklS.js",revision:"20473c49b2bc22d1d025e91df6c556a9"},{url:"assets/mpegts-DC5zlZYy.js",revision:"e58ff746740a93a354bde3ec3a966d3d"},{url:"assets/my_first_novel.html-CbrhoOkZ.js",revision:"d5c590e97a48aeff0acb5466b26fb7f6"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy.html-CKLj7Exp.js",revision:"5bfd3ca978ef12282b726ae6af7f27f2"},{url:"assets/setupDevtools-7MC2TMWH-BTukkZlO.js",revision:"6889c66170cc923e808197fd69de5a66"},{url:"assets/special_1.html-BpJzVt8x.js",revision:"15bcb73856f3e352e6141a65805eb7f5"},{url:"assets/style-DpiHDaM0.css",revision:"b6fae0177d15b5494d7c04cc92449a24"},{url:"assets/summerholiday.html-BdL2hO4P.js",revision:"e999a3b4453ad5e722510ac011691b0d"},{url:"assets/winterholiady.html-ORHLWbIg.js",revision:"b39c652d4fa0c6985f3168cb0454a19c"},{url:"assets/yh_group_rule.html-DKhqlP7H.js",revision:"c0b148cfc9e471738e3e6a3d704b9d49"},{url:"assets/yh_true_name_internet.html-CT4jKoN-.js",revision:"7a97a67d8fb142579fed9528095b35a8"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"17564bcea4f96bd89cd2d5d983843878"},{url:"articles/article/2024/07/202407280.html",revision:"9d15f3c06ae73d887b4870a08d76fe33"},{url:"articles/article/2024/07/index.html",revision:"02470c432470430e8ad531591b6b2c5e"},{url:"articles/article/2024/08/202408190.html",revision:"c251504fa2575d8e78292e92a1bde459"},{url:"articles/article/2024/08/index.html",revision:"5f56beb18c8d94294841ce5993f42196"},{url:"articles/article/2024/10/202410120.html",revision:"76c24d9e0bcb08606973ae1c2222da0e"},{url:"articles/article/2024/10/202410260.html",revision:"9b88f520cc38654493a834fe63417f0f"},{url:"articles/article/2024/10/index.html",revision:"9e9221da023efcde96030b267ac98bf1"},{url:"articles/article/2024/index.html",revision:"e3292dd6461e1d112d128a89639cef88"},{url:"articles/article/index.html",revision:"fea4880b474ade12442c53c921e6ad49"},{url:"articles/index.html",revision:"11d6338230db403db03404e132f69449"},{url:"articles/novel/file.html",revision:"825c9aa46b9b252a2cca280fd2b6f75f"},{url:"articles/novel/file/index.html",revision:"9c93f3e6448e9a17db08da8205a978e6"},{url:"articles/novel/file/my_first_novel.html",revision:"ca079261866b32400a2ad81939ca1103"},{url:"articles/novel/index.html",revision:"0a36cd46fd2c89da858ede5f6c481f4b"},{url:"blog/index.html",revision:"013d605b97dd12a8035cd33d77d04197"},{url:"blog/music_updata_log/11to20.html",revision:"e0e345e66f7507d532488ebecdb942de"},{url:"blog/music_updata_log/1to10.html",revision:"77b28171bdafe85cff7960d5bf406d7a"},{url:"blog/music_updata_log/index.html",revision:"6f505808c504d5ae26170f3c7f17a528"},{url:"blog/music_updata_log/introduction.html",revision:"2d58766ce8c13c2b137318fc8689c058"},{url:"blog/photo/2024/202402.html",revision:"a66d591312022ffa996110b3a8f78a35"},{url:"blog/photo/2024/202408.html",revision:"832c3dc4ba819ce489c59216b31b073f"},{url:"blog/photo/2024/index.html",revision:"539859221acbf79c0431172da83ea413"},{url:"blog/photo/2025/index.html",revision:"de5ccb6af8f6cd567eb8b3ce89bd1e51"},{url:"blog/photo/index.html",revision:"ef5fd53951840f547281142d8349ac17"},{url:"blog/photo/intro.html",revision:"76a1a2ca3cc628fb22a514b15603bcf1"},{url:"blog/the_second_high_school/first_grade/down_term/1_week.html",revision:"92b73eabf2508694e4d3dcbde58c40de"},{url:"blog/the_second_high_school/first_grade/down_term/10_week.html",revision:"2bba09c68dd8daaf58885ba2451abb7a"},{url:"blog/the_second_high_school/first_grade/down_term/11_week.html",revision:"9186ce04385f5e41be6e376f640124a7"},{url:"blog/the_second_high_school/first_grade/down_term/12_week.html",revision:"0b3555d1ff83b58f797762987bb4f65e"},{url:"blog/the_second_high_school/first_grade/down_term/13_week.html",revision:"8fa3d7fa302ec625bbf1ee231e1e8758"},{url:"blog/the_second_high_school/first_grade/down_term/14_week.html",revision:"01d39991a8f559eaa297236906b2858f"},{url:"blog/the_second_high_school/first_grade/down_term/15_week.html",revision:"2e7200e1e79de6e80eca5f00ea902a21"},{url:"blog/the_second_high_school/first_grade/down_term/16_week.html",revision:"01b52c4329b4170800e896055ce5173e"},{url:"blog/the_second_high_school/first_grade/down_term/17_week.html",revision:"22721dc01e18740c1d7b2fc1015a5758"},{url:"blog/the_second_high_school/first_grade/down_term/18_week.html",revision:"ce397a65be522d562defdf495ccc65fd"},{url:"blog/the_second_high_school/first_grade/down_term/19_week.html",revision:"6ab00cd69e75d117e8569d7d7ae5599e"},{url:"blog/the_second_high_school/first_grade/down_term/2_week.html",revision:"0d12f662072870c185c21e8fd7193882"},{url:"blog/the_second_high_school/first_grade/down_term/20_week.html",revision:"fb520e968a08970175ffe37088ae67f9"},{url:"blog/the_second_high_school/first_grade/down_term/3_week.html",revision:"b14d49b8ac6a787d70f5df13d308ecac"},{url:"blog/the_second_high_school/first_grade/down_term/4_week.html",revision:"37aa130fa9d4430d0adf1686f7fc92b9"},{url:"blog/the_second_high_school/first_grade/down_term/5_week.html",revision:"58f8b47126b851d84194e0527c778eb9"},{url:"blog/the_second_high_school/first_grade/down_term/6_week.html",revision:"f025cf891efd75af43d627e749c5d34b"},{url:"blog/the_second_high_school/first_grade/down_term/7_week.html",revision:"4361f1e1671c102b263a7e1cdd3a0d13"},{url:"blog/the_second_high_school/first_grade/down_term/8_week.html",revision:"269b6b6104ccc6a7e297b96e96fc06f3"},{url:"blog/the_second_high_school/first_grade/down_term/9_week.html",revision:"faaf1a9c7dc1772b57e5de9f95c61dd2"},{url:"blog/the_second_high_school/first_grade/down_term/index.html",revision:"6d9f881dca482f953a491a24225367b4"},{url:"blog/the_second_high_school/first_grade/index.html",revision:"48ae8f5bf80b5cda2cc1bfa3347d93ce"},{url:"blog/the_second_high_school/first_grade/summerholiday.html",revision:"cb0170f079de97382623574d512f822a"},{url:"blog/the_second_high_school/first_grade/winterholiady.html",revision:"ad1d6fd5deff3d6b5c42ffaaba7a2e1f"},{url:"blog/the_second_high_school/index.html",revision:"789c4a733dd936a2105fae94ee3b49d9"},{url:"blog/the_second_high_school/introduction.html",revision:"87acc31940d0e9ca595a3d7997c0cf81"},{url:"blog/the_second_high_school/second_grade/index.html",revision:"6449aa1b8177ba2abf7ba96dca638e96"},{url:"blog/the_second_high_school/second_grade/up_term/1_week.html",revision:"8351a15133aa97b3d736b9a045c512ca"},{url:"blog/the_second_high_school/second_grade/up_term/2_week.html",revision:"53b4979ca03ed053605136b5551ba66e"},{url:"blog/the_second_high_school/second_grade/up_term/3_week.html",revision:"b85a9315f68089393d74042868008ea1"},{url:"blog/the_second_high_school/second_grade/up_term/4_week.html",revision:"5fec2b72e5b785988069ddbe6314e778"},{url:"blog/the_second_high_school/second_grade/up_term/5_week.html",revision:"132a64a0b9c73b5d1c259ef33ff47311"},{url:"blog/the_second_high_school/second_grade/up_term/6_week.html",revision:"083f8e0af998ecf04d5579e4b814863d"},{url:"blog/the_second_high_school/second_grade/up_term/7_week.html",revision:"04b119e515c2ee7bdb0e177a09b80e77"},{url:"blog/the_second_high_school/second_grade/up_term/8_week.html",revision:"a5b20f060c260d8b450ea34f3bc4e9f1"},{url:"blog/the_second_high_school/second_grade/up_term/9_week.html",revision:"8eb9a18b5dcee534f55ee7762093345c"},{url:"blog/the_second_high_school/second_grade/up_term/index.html",revision:"6118c872aaf5a489d83cf39c7eba7ce0"},{url:"blog/the_second_high_school/special/index.html",revision:"c63a0a10f6fccc1ee5e4581572e1e3a0"},{url:"blog/the_second_high_school/special/special_1.html",revision:"30cfeac687a0e8c9b1f92a8995d72b69"},{url:"blog/yh/events/2024/20240718.html",revision:"1422e78bc8af78803a520aa2a36f863e"},{url:"blog/yh/events/2024/20240719.html",revision:"bcf1ec78d99463fcad377dc9d4ffac79"},{url:"blog/yh/events/2024/20240720.html",revision:"27cae98b03fb20e34d7f9ae0fd24783c"},{url:"blog/yh/events/2024/20240721.html",revision:"d44a956b35d89e9f42f994fb092f25f4"},{url:"blog/yh/events/2024/20240724.html",revision:"5e7e0068fa80caf8c8678d3ea7c8b1e6"},{url:"blog/yh/events/2024/20240802.html",revision:"3e8d4cfae08ddf804f4deb06c985828d"},{url:"blog/yh/events/2024/20240803.html",revision:"4aadb439c5742b56838f620955a0613e"},{url:"blog/yh/events/2024/20240820.html",revision:"6030e2deeb78a7958e76ae88c210b70d"},{url:"blog/yh/events/2024/20240824.html",revision:"42a05c92ea2019baddce635ff93d39b8"},{url:"blog/yh/events/2024/20240827.html",revision:"424695858bea393d95f03dcefad4e035"},{url:"blog/yh/events/2024/20240921.html",revision:"5cd195cde6ce5f3645db91762225d90b"},{url:"blog/yh/events/2024/20241004.html",revision:"b882b3a8bba0eac1470f6339724bc248"},{url:"blog/yh/events/2024/index.html",revision:"6b2dfc9756730de79de850dd1b4f2942"},{url:"blog/yh/events/index.html",revision:"855fbc6647030057f38ae1d83d053dbb"},{url:"blog/yh/index.html",revision:"cbe5dbf1b2c797111193bf04c8221488"},{url:"blog/yh/update_log/Android/2024.html",revision:"69fdd5db2d42f5bea0f66c196708b86b"},{url:"blog/yh/update_log/Android/index.html",revision:"8cef97d7943b4d31bec4c9301da4b34f"},{url:"blog/yh/update_log/index.html",revision:"5e8f18c4660da208d6b19acf6a0035e6"},{url:"blog/yh/update_log/Windows/index.html",revision:"9a236fdca5daf65a32f22e2bcccae762"},{url:"blog/yh/yh_true_name_internet.html",revision:"9cd46782834e7355af61fb8b9f4e421c"},{url:"guide/app_share/index.html",revision:"77b67a460ba360179fb7acc3d635efc4"},{url:"guide/index.html",revision:"68306adffcae8ef4791fa57f7ceacb32"},{url:"guide/my_project/index.html",revision:"cd3f81066d889b7348f24081b7b9ea15"},{url:"guide/my_project/merge.html",revision:"250b34b0942be2f796e6cee1bf77a25e"},{url:"guide/someguide/1-DDNS-GO.html",revision:"836b86b3c171e12f6c6782cc62c437e3"},{url:"guide/someguide/2.html",revision:"ec1e0449fb38c66315093573ccabb245"},{url:"guide/someguide/index.html",revision:"a3f3d81991351d82bc07973ea22f311c"},{url:"index.html",revision:"7f4d3c7fd9a98e92bee7088c60c52982"},{url:"others/about_me.html",revision:"8d3e1b928444900ed996a0c21e348e71"},{url:"others/copyright.html",revision:"99902990547c7621d52ed7ff2d065345"},{url:"others/Disclaimer.html",revision:"a13d6b4ea32ce0826121cbe15715a2fe"},{url:"others/index.html",revision:"4f22e0cb21a3215bae4e1aecfbcf2eea"},{url:"others/links.html",revision:"1ba22552cfe95b155e4729d926e19494"},{url:"others/notice/index.html",revision:"eeff773a2860e32b79e8836026e04314"},{url:"others/privacy.html",revision:"b4afac546d89965b17678dde4e67c151"},{url:"others/rules/index.html",revision:"cc8775d30710403af626e99a2c40b113"},{url:"others/rules/yh_group_rule.html",revision:"ca285449f3dd2f5148f4c1133454d570"}],{}),e.cleanupOutdatedCaches()}));