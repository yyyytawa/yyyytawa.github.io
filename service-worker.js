if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const f=e=>a(e,r),c={module:{uri:r},exports:t,require:f};s[r]=Promise.all(i.map((e=>c[e]||f(e)))).then((e=>(d(...e),t)))}}define(["./workbox-84c915bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0103_img.html-CwAQycZ8.js",revision:"e523befca42cb361814cf8e8bb7c5792"},{url:"assets/030.html-P9n5-jtn.js",revision:"4339cef93d9ff837b92f046a6f5fa82f"},{url:"assets/1_week.html-Cc2_YEeS.js",revision:"755435141a39cf8b180bb1078a4b5be3"},{url:"assets/1_week.html-DhGAo71g.js",revision:"fb52f76eafd178ee910fbcfad827685e"},{url:"assets/1-DDNS-GO.html-Dsr99nX-.js",revision:"467328b836e3695058e6892be2d0296b"},{url:"assets/10_week.html-BW3tk6u2.js",revision:"55e24366e3faaaaeec519e90822e894b"},{url:"assets/10_week.html-D5dL5spW.js",revision:"2b97184457eef0ddfc29154d1831c035"},{url:"assets/11_week.html-DZ5UfO1s.js",revision:"f8abb8775477314a0d0b1f1d993069c0"},{url:"assets/11_week.html-vZJ5qsJ9.js",revision:"30ff722f70cacae80e16952f020d94ff"},{url:"assets/11to20.html-CCvCZAzC.js",revision:"95d397d288503d7cdce25ae7fda77dee"},{url:"assets/12_week.html-C8xT056a.js",revision:"e4128102dcf250e5d57d702fda4d2da3"},{url:"assets/12_week.html-CWI8s0b5.js",revision:"48b227a8330cce1b79dbb7e579bb61a8"},{url:"assets/13_week.html-C_74GsOr.js",revision:"77cc68f2b41e9bb3199c9202bdcdefb8"},{url:"assets/13_week.html-SLyQFA6Y.js",revision:"e66e23cfd59a826a5c12c83bcc4af8ec"},{url:"assets/14_week.html-DX8wjleF.js",revision:"5a34a6700babb64c7a7dfca1663667de"},{url:"assets/14_week.html-vZKldJT3.js",revision:"606bcb8bd0e31ee2902ac13c5bff6e29"},{url:"assets/15_week.html-BqST5exe.js",revision:"b421979fa20983ad81172edd7a7ffe11"},{url:"assets/15_week.html-FTssXLRL.js",revision:"6dd67bcdae17508f76569b7f964e073c"},{url:"assets/16_week.html-Cg4cNZVJ.js",revision:"ac8004a241ce3378443bbd233e142cbf"},{url:"assets/16_week.html-CkLq79FB.js",revision:"60336b0d8d9439d2a7a97c149bbb3af1"},{url:"assets/17_week.html-B-r3R1zM.js",revision:"8d1a179d772a4185936d6123355a938f"},{url:"assets/17_week.html-D9AvysXt.js",revision:"77f304379911695675c24abc117dd107"},{url:"assets/18_week.html-CpFQJmwa.js",revision:"d13e01913803dccfaa3b79c850f0027a"},{url:"assets/18_week.html-sOK3ou7J.js",revision:"f1d475f9f015fd3910f4cab4ee827fba"},{url:"assets/19_week.html-b1vef1ss.js",revision:"b5a567a3553450c18e5025cd2b6909cc"},{url:"assets/19_week.html-DwIewe5u.js",revision:"a2093d7065892bdadd911409ae78daf6"},{url:"assets/1to10.html-ByEjjv7i.js",revision:"be1fb586e9de28159e67cfdaa3a98e3b"},{url:"assets/2_week.html-HgPf7gLy.js",revision:"a3f929b274fb3eaafe12bfcd3052b644"},{url:"assets/2_week.html-skZw1gkG.js",revision:"76d6a00e1393ae066a1c0df5272365b6"},{url:"assets/2.html-CFO5BMsr.js",revision:"fa47341f6f0f4c1fdff4d91713b0e9e0"},{url:"assets/20_week.html-B_SpIm-e.js",revision:"bc727ffb360e5e39380f8e9ce3dd1aa3"},{url:"assets/2024.html-Cz9jtbD_.js",revision:"e2f935863f60294d6e189080544682f8"},{url:"assets/202402.html-CboD0aEA.js",revision:"519a0bf94b9f48af703095b07d56e591"},{url:"assets/20240718.html-Im8r3Gyv.js",revision:"f126de8d6bea7c2402eac9a0c2183bac"},{url:"assets/20240719.html-D50BqqKQ.js",revision:"5114386f6b06e961e69ad3daf13c5a16"},{url:"assets/20240720.html-Da2AMFq2.js",revision:"05f44de9dc2b969fa00a9483510bd6a0"},{url:"assets/20240721.html-BwjHoaW5.js",revision:"7ad3c2200acfadf95683c60b92861f00"},{url:"assets/20240724.html-CPkNnW9V.js",revision:"8540fd442d663f82c210ffd39bad00dd"},{url:"assets/202407280.html-Bt3rxRU5.js",revision:"c14f50faaf24c736849dcd2cc5786e0b"},{url:"assets/202408.html-BcSXVBEE.js",revision:"86172ce586c6d41b3140adcef8973394"},{url:"assets/20240802.html-CSghrSip.js",revision:"c5a2a0d2e1eef3054f3f1e8403bf90fd"},{url:"assets/20240803.html-DGRRgLkZ.js",revision:"0d6afa1030843fce446ef961d0069450"},{url:"assets/202408190.html-BALKjRzO.js",revision:"659acfe3a71d497085f7e1ad3221df54"},{url:"assets/20240820.html-CIwaUb9U.js",revision:"26b025084ad9c8d9e618a220c3a5f0fc"},{url:"assets/20240824.html-CtZxn12J.js",revision:"b2549c1dda2561edc99fbafe0fb92d6d"},{url:"assets/20240827.html-C7Wb1WoN.js",revision:"6d267a469d4939129ac3224873d4fb60"},{url:"assets/20240921.html-DdRQ_h8n.js",revision:"f4fd1211c7607a569916e526e97ce00b"},{url:"assets/20241004.html-p2BDO8b0.js",revision:"61e806952d2c5d205db59e4fc7bd29e1"},{url:"assets/202410120.html-CWlrffL6.js",revision:"733d552d0b7dd704f37522452b9dbe43"},{url:"assets/202410260.html-BY2lCtHD.js",revision:"4f90c987302468590edfe61caf93da81"},{url:"assets/202411170.html-Du0ykVy-.js",revision:"da406affe330ad9842d61d563cd883d1"},{url:"assets/230.html-BUBwtPO3.js",revision:"f49c0daaab8f3b30acc97d432ece40d8"},{url:"assets/240.html-BPS3Xd_u.js",revision:"e3b3c4e2f1aa67d35cd35ab43bc2bcc4"},{url:"assets/240.html-CSe-BHiN.js",revision:"b8df79987c0d462a619ae3fd3bd8885f"},{url:"assets/290.html-B6OQTanX.js",revision:"e29ccaa879c1a42c548d89c91491721a"},{url:"assets/3_week.html-dkESyXD8.js",revision:"6f20b1015b7165858e7d60fbda10cbd6"},{url:"assets/3_week.html-Dn0TNtkC.js",revision:"72bf3521aeb33856c8408c9b6f88d3ab"},{url:"assets/4_week.html-D8CqDjLz.js",revision:"89f10fb9a5f101eb7b45a859151abc24"},{url:"assets/4_week.html-DogKPF9c.js",revision:"cfcb5e9f9061ba7c135b589064a372c2"},{url:"assets/404.html-DkHBjVS2.js",revision:"5775b4c7c3b0985c996b5f0686f3d20e"},{url:"assets/5_week.html-BqpjvcDf.js",revision:"5ba3ab8b549e4b2cc578abdad582c59a"},{url:"assets/5_week.html-CYpbYXTs.js",revision:"1b4f222be7575358f8d0bc7df4562975"},{url:"assets/6_week.html-C8OQewZ3.js",revision:"92724f2677f4eeb2e585eef6a3ef15e7"},{url:"assets/6_week.html-CiHxeB7i.js",revision:"32efdcb70366e7ffe0f75a9c1a95dac6"},{url:"assets/7_week.html-B7Z6vb6k.js",revision:"a4d40540e684d2e68e4f4f3db3842350"},{url:"assets/7_week.html-CcQxPZFs.js",revision:"b337c990752e6b350cc3a15ad7f72c3a"},{url:"assets/8_week.html-Clm9YAAA.js",revision:"463ac1a0759ae35e5e525fd9530a4758"},{url:"assets/8_week.html-zPvT6cSG.js",revision:"349e1e84ab32275f53da7719a96ab3a3"},{url:"assets/9_week.html-CMDF-OWl.js",revision:"04969ed01ce5cb79e296ad2aeebf83d0"},{url:"assets/9_week.html-DOZU_NI9.js",revision:"8d79154a6af923814d3e96996266a6cd"},{url:"assets/about_me.html-zhW6i3Y9.js",revision:"d62eca9f1cd47336e4e89ef355ce8e44"},{url:"assets/app-DQMyWHlt.js",revision:"741e5ca1e0862f9a4cfbf9f7417061a0"},{url:"assets/artplayer-CNWhCQhE.js",revision:"1974c332c8adbccdd4b9cc67892c3636"},{url:"assets/C_01.html-Drm3ak-G.js",revision:"2acf4385f847c6a45cce1444fdfb6c98"},{url:"assets/C_02.html-C9DNEn-a.js",revision:"2604dbdb80a7db85664eb5aa20552981"},{url:"assets/comments.html-Db4anGpU.js",revision:"381ef5ef2943bcccd7971944a0a9fec8"},{url:"assets/copyright.html-BeDntYQ9.js",revision:"2a9ba1ef2a2338673f468b56e01f58ca"},{url:"assets/Disclaimer.html-DNHx06CY.js",revision:"137073d4c8bd1219179b8fa67b46c20a"},{url:"assets/faq.html-CCmT1pPh.js",revision:"01304c29c9e694a356f91eefd0fc5bb9"},{url:"assets/file.html-DhVCpvnp.js",revision:"f4033592d432acff70bc290920e96b05"},{url:"assets/giscus-B3IT9xos.js",revision:"da48598ae29909cd03c4819fcf30a92a"},{url:"assets/hiden.html-DpoWjNDA.js",revision:"7e1cf38bc64bb0fe88be2b3f470c024d"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/index-Cc8Ec0XB.js",revision:"17f91d68b3c225c9f43d412f97812057"},{url:"assets/index.html-008gDrLu.js",revision:"419392f0b4087d0807b8c16de8165950"},{url:"assets/index.html-5q6X7qXb.js",revision:"9d78845d11ee70fef3786f630f84e16c"},{url:"assets/index.html-B1aItc6p.js",revision:"9789c15d3cd2762ec828ee59e4da8f96"},{url:"assets/index.html-B3hXM7J-.js",revision:"cda21fa1eaeda498b2cb89970e151e9e"},{url:"assets/index.html-B7mbF6mx.js",revision:"9a29b1d641acbfd879e739f5b5cb7174"},{url:"assets/index.html-BcGcdpfx.js",revision:"da553d01c1a900821f9721bc694c3733"},{url:"assets/index.html-BefwMfJw.js",revision:"470321faf56881bddbc2dd661aa70719"},{url:"assets/index.html-Bgf6KHvy.js",revision:"74c2954f9c0df2e3e517cc123a2fc931"},{url:"assets/index.html-BGjIeOPx.js",revision:"60c74e609439780b9a49e82bf8cfd787"},{url:"assets/index.html-Bo8_CSLg.js",revision:"92290bcd17fccbd44a6791ccfb72799a"},{url:"assets/index.html-BR_D6Cgy.js",revision:"512311b1b2fe04fe8967b7bc03a2ccd9"},{url:"assets/index.html-BTS3zRmb.js",revision:"9265dcb0776bcf7826cdcf627f85ee3b"},{url:"assets/index.html-BYqgC0_K.js",revision:"171be07c77b93f78d1de95fac2d48fd6"},{url:"assets/index.html-BZJsV5QF.js",revision:"b748beca60c8962e918eda936aec8c87"},{url:"assets/index.html-BzkgWdYy.js",revision:"fabc4e39651efa081bc3b36502e23d0d"},{url:"assets/index.html-C-6U5M0Y.js",revision:"445539e45fdc985d691b0c57d7e0b7fa"},{url:"assets/index.html-C0nbvdS9.js",revision:"4c7f71857e9835b24fbeff3baf5322c7"},{url:"assets/index.html-C1v89MYx.js",revision:"a44326fe1173a295e984fde24894b8c8"},{url:"assets/index.html-C6pDy4oK.js",revision:"dbab9dca10b889de8fa03996e4832393"},{url:"assets/index.html-C7nh6q1y.js",revision:"d7664db86f5f987c928e2a989c71a814"},{url:"assets/index.html-CDNaP9fP.js",revision:"d04d68a1e6b76629fe6486481b132318"},{url:"assets/index.html-CECPI67s.js",revision:"c8ea27d279b1e8b93c8eda062edb9bda"},{url:"assets/index.html-CeMCqtC8.js",revision:"ebc3a66e69a4ccd95ddb649e9afd3b2c"},{url:"assets/index.html-CjTsJAOX.js",revision:"41113953029bc2c67ef44d43699c43ed"},{url:"assets/index.html-CMSwMhEv.js",revision:"8a570506fed27112ec28fbce99b51cd4"},{url:"assets/index.html-CMwe1ilV.js",revision:"d32baeaf0d418ff9e5d08f9c205150fc"},{url:"assets/index.html-CO-dF5cG.js",revision:"c5a8ff8def9042d4c90bb1aaa6e329b6"},{url:"assets/index.html-CQTqU6PJ.js",revision:"d77c3aa9efc596a67dbd63979b922ca4"},{url:"assets/index.html-CrERoqgV.js",revision:"5326f4fbb1e40f1e6f47117b479f7ccb"},{url:"assets/index.html-CrijXb-N.js",revision:"5a30bfbd542d18d7d0700fe5b437a61e"},{url:"assets/index.html-Cs-zWr4Z.js",revision:"9360d59e44ac53f8a66cfb102968331c"},{url:"assets/index.html-CsjvZXJG.js",revision:"57f90197147385504196eb9f01134196"},{url:"assets/index.html-CTgF4u9i.js",revision:"3c533544717af3c6e75c50972c96c399"},{url:"assets/index.html-CtIYVje0.js",revision:"eccd2eb4087398a5d1c6e84b84b896fc"},{url:"assets/index.html-Cwwf1cd_.js",revision:"d875d56fa339de1ed32eeb46f3add96e"},{url:"assets/index.html-CXG30M7Y.js",revision:"d29aefc9500decdbdc98482b012de8b4"},{url:"assets/index.html-CZ0e2pv-.js",revision:"1e2144fdfceaeda754a1880a7dacb671"},{url:"assets/index.html-CzC0PtB0.js",revision:"682abe523cceee887a5e8c587f749131"},{url:"assets/index.html-CzjmMC1H.js",revision:"c10b0c78321742c35ae67ab115788ae8"},{url:"assets/index.html-D-_-Vrig.js",revision:"e1eeb2590c3c8ff26e9fcfdde1487a45"},{url:"assets/index.html-D22tpVC7.js",revision:"9fe0f12c5ea904638e4cf689e937c1e5"},{url:"assets/index.html-Db4MDvPo.js",revision:"3c9be75cec9e3fdbf04115e31a574429"},{url:"assets/index.html-DDJflehS.js",revision:"600e5e2434fe7eb6e842b2b573149736"},{url:"assets/index.html-DFSY7HH6.js",revision:"71270b31c5d89f1c2224126e3c99a980"},{url:"assets/index.html-DHsD4VQK.js",revision:"14970ead10280d93d955158f7e60ad1b"},{url:"assets/index.html-DjsjKUrs.js",revision:"df0bae8a66a30ad132dc1ba4de17f424"},{url:"assets/index.html-DK_9GdnG.js",revision:"577944edcae0c6380f10eefa42d3c96a"},{url:"assets/index.html-DKSNs69L.js",revision:"2b5435c2d782de4ef34f8429a2c4aee1"},{url:"assets/index.html-DOhOyi2Z.js",revision:"f2b9d16c5252784f325fd730ecec593d"},{url:"assets/index.html-DUrTLXjL.js",revision:"34ccb5564ed530ff38626f77cf71a43c"},{url:"assets/index.html-DXQJygoc.js",revision:"e08ded291c0ef23be56eb8f451b680fb"},{url:"assets/index.html-DXY_B3vP.js",revision:"b8e8c1a10f16196b31aa2e6c5cc34969"},{url:"assets/index.html-HezcZ5Lk.js",revision:"355e2a08b3dbf6e54eeb42eb12193fb7"},{url:"assets/index.html-KDqmjF1U.js",revision:"f1ffbe9299b763ebec66f48d5caaa3f1"},{url:"assets/index.html-LafpbSAD.js",revision:"a275585eb9c5d8f374499fea44ae52d8"},{url:"assets/index.html-oJtGS6_l.js",revision:"5cd97aeaa5d03bcf664a51a0a9679c9a"},{url:"assets/index.html-pilk-Hns.js",revision:"99621a8de53e631961208a52b702aa2a"},{url:"assets/index.html-ygAXPhos.js",revision:"be50f8f91e27c179325709579101e286"},{url:"assets/intro.html-BYaxjxxH.js",revision:"64c83de63127df9d1ee21fc409c08923"},{url:"assets/introduction.html-BYUxtIuG.js",revision:"02bee382afae3018d48d1b39ce3ed44a"},{url:"assets/introduction.html-hrG0J2LD.js",revision:"741fdf30b54522aa3f62dd80c58b6793"},{url:"assets/links.html-Babh6-xl.js",revision:"8ea184f4b3113fea28914fc09b92ca89"},{url:"assets/merge.html-DeMbZaOb.js",revision:"528d8dbf59748ebd51c1fcf02bd52640"},{url:"assets/my_first_novel.html-BTPVm452.js",revision:"d9fd0f36a075133055837b3d3be8da0e"},{url:"assets/photoswipe.esm-CMg0yb1C.js",revision:"db710d3cad6b3910c961f69d701b069a"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy.html-Bzgd1l_O.js",revision:"40efe45f531aa5c20719513bbf6eaff2"},{url:"assets/Qrasa同人表情包.html-C6RDQqu9.js",revision:"3d3346688f919edf3f7093ddbe2a955e"},{url:"assets/setupDevtools-7MC2TMWH-BJklCj82.js",revision:"abd8d7d793aeab84365905e789770aba"},{url:"assets/special_1.html-BlR3ygJ8.js",revision:"da273cbfe56a08aa75aa19647ad8bb9e"},{url:"assets/style-BsRb9oxu.css",revision:"2374f385ae318034317efc0e8d34d047"},{url:"assets/summerholiday.html-DYAJJAzv.js",revision:"3553bcc4e0988b0f754c355fd467d373"},{url:"assets/untitled.html-CJC_s_ZO.js",revision:"53e26d823885151ad53ebf26c0ae0c63"},{url:"assets/winterholiady.html-BI-W6djA.js",revision:"fdff7a7de25655950ecf2cb1d64ed54b"},{url:"assets/winterholiday.html-B500Ecat.js",revision:"348f10ac281a58f57b332c6d67a40caf"},{url:"assets/yh_group_rule.html-3Mo67y_c.js",revision:"4a2fb75f5cb90d36ae0c098a8910870c"},{url:"assets/yh_true_name_internet.html-aK4N65Yh.js",revision:"c19c92487e2b88336a59b237a65b128d"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"e17ed615f86a2520cfa4d3f297c951e3"},{url:"404.html",revision:"c8159178d0076470faf70974f65f5650"}],{}),e.cleanupOutdatedCaches()}));
