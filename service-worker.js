if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>a(e,r),o={module:{uri:r},exports:l,require:c};s[r]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(d(...e),l)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1_week.html-B4bnq7s0.js",revision:"c6d3cdee130587d01eb10d1f28524b17"},{url:"assets/1_week.html-CMwh6mnW.js",revision:"64db4fcb40781473a8bd8317313c4f24"},{url:"assets/1-DDNS-GO.html-C4thsSR8.js",revision:"8ae588304c63eadbfc5b045d577288d7"},{url:"assets/10_week.html-DYGP-oHJ.js",revision:"43202506bd56346b9a7385343fe551c1"},{url:"assets/11_week.html-DRsnO71t.js",revision:"df0abf3cb02feb28727622adfe9258a8"},{url:"assets/11to20.html-DCD7ulwL.js",revision:"d0a70d6900ba2ae7f409a4641a311f6c"},{url:"assets/12_week.html-BeMur_ty.js",revision:"d55b1d06d96862608f921a477495c1a6"},{url:"assets/13_week.html-F19_SWTS.js",revision:"fa397c845ce4e609536313fd4741f47a"},{url:"assets/14_week.html-C5uNVU3E.js",revision:"ec62221cb2441265587e4c2b39cb5e68"},{url:"assets/15_week.html-BsPvHK3R.js",revision:"db42d345da5d6a8462226a371151f520"},{url:"assets/16_week.html-5iJpKjvZ.js",revision:"7add1259d93440ab1142d0288035ee65"},{url:"assets/17_week.html-4XxmdmgO.js",revision:"9ce56f17660e17862f35187428ef98dd"},{url:"assets/18_week.html-TMMfymGT.js",revision:"fabb1af2ce94efd12f77453c3dd32bec"},{url:"assets/19_week.html-DJxA2-t_.js",revision:"a421d392980f55306401549f0395a7b1"},{url:"assets/1to10.html-DLMTP3W_.js",revision:"e1a8f79c82ffb3c9b20400d05af91050"},{url:"assets/2_week.html-DzqF_TMl.js",revision:"4d20454979e824b7fac27c8c38764e87"},{url:"assets/2_week.html-M0RCPScL.js",revision:"e4e411ee495beac9fc274723aa42258d"},{url:"assets/2.html-ClxXuU20.js",revision:"82dadfa110039b957c94ae23f2a75261"},{url:"assets/20_week.html--hXwIzDt.js",revision:"eb62bdc021f340dcb4f16606ddae7221"},{url:"assets/2024.html-Dd0IroFo.js",revision:"f9e19f4c43f277d22a995b3a9bea1558"},{url:"assets/202402.html-CnvVI737.js",revision:"208f3d688fa6a98447bcb0ace03dc557"},{url:"assets/20240718.html-DB480XDa.js",revision:"0c974686e5caa9e5203f914bd1a60d1f"},{url:"assets/20240719.html-Jz23oG7r.js",revision:"ea6dbc698920abd5ec3aaa2e845d7b05"},{url:"assets/20240720.html-BZDGTBn8.js",revision:"73ac75c4223f78251e91f1ae31b79784"},{url:"assets/20240721.html-CNu89Vrz.js",revision:"8cd18aefd6fbc7e13b62c6acf3a3c3e7"},{url:"assets/20240724.html-3qOMnnHD.js",revision:"67c0462cb58ccc48b0dfc0464d6c3ed2"},{url:"assets/202407280.html-DelbbwD5.js",revision:"206f504106f15c14128e6d7ebf0f51fd"},{url:"assets/202408.html-CWn_oETp.js",revision:"d596fc7d921c056fb9631671e6d20205"},{url:"assets/20240802.html-BGTmqWg4.js",revision:"a491fecfc431b47a7a73bafb5a11cea3"},{url:"assets/20240803.html-Cx6-XHOW.js",revision:"f7770efd03325e27f2f2c70333cafde0"},{url:"assets/202408190.html-f8YHDgE5.js",revision:"ad6a55a3b398e703b40ab0cb510de134"},{url:"assets/20240820.html-_IDU0YZy.js",revision:"210e1b2e4a57767998885d49c3260a9f"},{url:"assets/20240824.html-6a2cn29J.js",revision:"5fe2b2001697fad2029ecb3d10883732"},{url:"assets/20240827.html-C7lofzwE.js",revision:"887f2f3f988230bbca883a64367e1146"},{url:"assets/20240921.html-DdDuij46.js",revision:"c20d424158c48549ea9e41e384a046ef"},{url:"assets/20241004.html-BMwKlqpT.js",revision:"9e56772303caf88558b902ab195448d2"},{url:"assets/202410120.html-ByrSOLzP.js",revision:"8994645b73a470c533c3386b7015bda6"},{url:"assets/202410260.html-CJeSztya.js",revision:"cb5876339641b1da4c50741ea759f8f4"},{url:"assets/3_week.html-5pDoseb8.js",revision:"4ab85a5f26779946e47e64100aacf9f5"},{url:"assets/3_week.html-DXAjjQv7.js",revision:"9c856deef846f6258c1440c7b8c2041e"},{url:"assets/4_week.html-1KnLXg7v.js",revision:"7df5c2dfe494004e998f27d8b92408d3"},{url:"assets/4_week.html-po49-kXq.js",revision:"09ea0d7301bd12b9425c3e73186cdd5e"},{url:"assets/404.html-ClUvBRyl.js",revision:"1366d797bdb1398242adf838387db894"},{url:"assets/5_week.html-LxDCdiTY.js",revision:"dc31f4643d48f6ea4a0917ec7fba9e5e"},{url:"assets/5_week.html-QKWp23PT.js",revision:"7805e8c7cdac20525308a71976d34e44"},{url:"assets/6_week.html-BMFREWJc.js",revision:"e5f223c1150c7f8b28d74a46ee4a0d79"},{url:"assets/6_week.html-BnHnBTzO.js",revision:"e9df6976970870b439702c4a40670003"},{url:"assets/7_week.html-BX9opRbw.js",revision:"8482d9ae938d8b1a608a5bc1bf36248f"},{url:"assets/7_week.html-CkG3P27y.js",revision:"13d314b97372e0f1bf4a7152a42675ad"},{url:"assets/8_week.html-7CUJOt9p.js",revision:"d68a6a9aaea8976305701727fd0f5c90"},{url:"assets/8_week.html-DwPosW1l.js",revision:"6b6bb7b8b865b56ed886b3592ce93194"},{url:"assets/9_week.html-DQ7Zt6t7.js",revision:"abd8a3da75773238e594f4b1f9a1c756"},{url:"assets/about_me.html-BlPFU5SA.js",revision:"c25c9aab27030eee82336d5d7e544d12"},{url:"assets/app-U9-LA3yJ.js",revision:"198e6559ad6ae27252a4772badec415b"},{url:"assets/artplayer-CYLSgUjv.js",revision:"3ab153fa5f107350a41a8d711cb51664"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/copyright.html-Dk7RvHFc.js",revision:"1c072bfb1ec2350ea846c7b2ecb40eb9"},{url:"assets/dash.all.min-CXnJ7hU8.js",revision:"718ec47069e52c190b9533b18dc8a2a2"},{url:"assets/Disclaimer.html-D1UKguLE.js",revision:"49e12892f497137f7f28e63e99571585"},{url:"assets/file.html-Ctgsx6P7.js",revision:"b0fd9d047bf018fa3180f076a0a4d685"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hls.min-Drnit47W.js",revision:"f4fdfbbd5e3c7b6e44f7e7d5fba5b8fe"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html--BMbBGDr.js",revision:"8be71a24cd96e52cfe1545479528b818"},{url:"assets/index.html--NqjfM0F.js",revision:"32ea73c36cf7347ae556deaa30e473ed"},{url:"assets/index.html-B5kgeWMy.js",revision:"89236a45ca32721b90cbf04642d7d77f"},{url:"assets/index.html-BAgKJVmA.js",revision:"ee52d24ca4935c428e387b646a0d9d97"},{url:"assets/index.html-BC1dJd0t.js",revision:"b1c2c33ce13e93c128cf61d0b9e83dc0"},{url:"assets/index.html-BCSQBho_.js",revision:"5a608d41883fd996991803cfa01da471"},{url:"assets/index.html-BGm8PfRc.js",revision:"d376bee909c7db74f994bf9185aa1dba"},{url:"assets/index.html-BgpxeHru.js",revision:"6ad93a52e346bc3a4494bef72d7bc5b3"},{url:"assets/index.html-BkKV8C3i.js",revision:"61c9e91679f7ab3b8871c31b860d89d2"},{url:"assets/index.html-BlNUD-lX.js",revision:"bae9ec6ac7214c8b81c1c7eaf004369f"},{url:"assets/index.html-BmKe6r5Z.js",revision:"024c865ee7ab848a682a33c8dad984f2"},{url:"assets/index.html-BOdFOyhH.js",revision:"9face4577eeea92f59f9478195fe12cd"},{url:"assets/index.html-BSPHcZWl.js",revision:"364bf960575bce5b6d1a7b2ea2fa0493"},{url:"assets/index.html-BtBtFfoT.js",revision:"47c5ffafef003b9ded4db362e6651fda"},{url:"assets/index.html-CcQVyX1R.js",revision:"4e045e5c9e77958148e6f6495a7593d7"},{url:"assets/index.html-CdFI6rY_.js",revision:"9e31faba8f7e2d05674ad8f894d10d4d"},{url:"assets/index.html-CDlYwGIM.js",revision:"add1b2f363c0db97ace9ed6d20c2b23a"},{url:"assets/index.html-CON3jna4.js",revision:"1eb671f80fb4f81b62343f4a040841a3"},{url:"assets/index.html-CSBRnMbk.js",revision:"2c463eee8b6da079c4df891cd09932ab"},{url:"assets/index.html-CSrBz-QE.js",revision:"c7ff92cb92809f92888ee448fb3c4374"},{url:"assets/index.html-DBdGCmAn.js",revision:"783840af78149d878a0e6746b07a6630"},{url:"assets/index.html-DhckX2Nq.js",revision:"0e57e32713f47742f00c6a2531de2e0d"},{url:"assets/index.html-Dm0qNa-m.js",revision:"43ac4a6084a05d4e7355124d81e46b1f"},{url:"assets/index.html-DPdKCJxg.js",revision:"30c93bc3cc2c645db857eea2eb6437e2"},{url:"assets/index.html-DvQnXB_2.js",revision:"fa564b052765749cfea72e448aeb992e"},{url:"assets/index.html-DWXzfRbj.js",revision:"28eec1f0a243396ac95246a9e6db7603"},{url:"assets/index.html-DxIcf0zF.js",revision:"93d0d8f88c73bb3394e9a43d48ae90b1"},{url:"assets/index.html-gp4c_1LS.js",revision:"9023e84ee147e8f019cfa15f3fa1c286"},{url:"assets/index.html-Jmuqt1TQ.js",revision:"8a68263dcee94736d351a6f2c6b5d424"},{url:"assets/index.html-jR02yhiZ.js",revision:"19ab6166f93052fde6e6e90cc5ccae96"},{url:"assets/index.html-LoCG0D1P.js",revision:"b4eb1e77d2bbb6a6dfae247ef9953701"},{url:"assets/intro.html-D5DuyOSH.js",revision:"06106c9a5b9bf5c95b6106ddf67526de"},{url:"assets/introduction.html-DUn0NrFK.js",revision:"5359c0b7c844a48a25066ec9a25f5152"},{url:"assets/introduction.html-mp828gZI.js",revision:"a1eefec7829f69b6e0363673ac1b1ea3"},{url:"assets/links.html-CSFJlhdA.js",revision:"dd9929aaeaa1f3937d51df7430f76097"},{url:"assets/merge.html-DqDHrVxd.js",revision:"58df95b59260f141c913e3b459a4c5fb"},{url:"assets/mpegts-DC5zlZYy.js",revision:"e58ff746740a93a354bde3ec3a966d3d"},{url:"assets/my_first_novel.html-CjpWG2Vc.js",revision:"8dc7cc21e0d81b7ec69a3811ef41442a"},{url:"assets/notice.html-hvh2g5Y_.js",revision:"c25b48f74b84347f4f290adde6d9f148"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy.html-CWokJ3tK.js",revision:"4660d683e9c2f3a6c3f5a4191581dae2"},{url:"assets/setupDevtools-7MC2TMWH-wOKdKamp.js",revision:"fb02ec558ca3a80743f7fe4d32cce423"},{url:"assets/special_1.html-cQAAJttb.js",revision:"20bb3809e2ee41fd3ae2915b3f70b370"},{url:"assets/style-BzHypsA7.css",revision:"3aa8f3152313d0e6c85afc982f00b32a"},{url:"assets/summerholiday.html-UPciPSMn.js",revision:"da236833c7584b7ccfd357f688b31672"},{url:"assets/winterholiady.html-DJAPdr6g.js",revision:"578a47086a119b794aa6a981c45b1e46"},{url:"assets/yh_group_rule.html-DgM1IDHl.js",revision:"1106c0c857e32171a86bb0a86e7dcfda"},{url:"assets/yh_true_name_internet.html-XyR0R0V8.js",revision:"6c72dd44db70f30216fe2757aa7714db"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"9a4006a220da3a008780b49785ec6b99"},{url:"article/2024/07/202407280.html",revision:"70022403b4ce92f78a60f4a9d0752161"},{url:"article/2024/07/index.html",revision:"97839677ff8b037f9514fe5afaaf2035"},{url:"article/2024/08/202408190.html",revision:"fbb2b7af8a563f6f2918ec1a35222200"},{url:"article/2024/08/index.html",revision:"90a8481fa64d948edef2459e1cd6b884"},{url:"article/2024/10/202410120.html",revision:"3940d1ce0197df8efc5f1782ddda7cc8"},{url:"article/2024/10/202410260.html",revision:"cd37d5fd90f99ea8a28ad6ffdb61f6bf"},{url:"article/2024/10/index.html",revision:"93bf05c15d2ef91b0e971381ccdd6a32"},{url:"article/2024/index.html",revision:"6f7ea97d8509210da4982cf200c2b7e4"},{url:"article/index.html",revision:"026ab4d1640f2732f32622f0b877366e"},{url:"blog/index.html",revision:"4694c070df61eab084d5f83c04ee4dd2"},{url:"blog/music_updata_log/11to20.html",revision:"d36c0a420f57387268c28d9bb906a42b"},{url:"blog/music_updata_log/1to10.html",revision:"af97db6d41daffc04487610059305e12"},{url:"blog/music_updata_log/index.html",revision:"dea9b6f4f209460b05df95bfbaeaa41d"},{url:"blog/music_updata_log/introduction.html",revision:"74476142daf356b92cf8fa6ed2ed0e9c"},{url:"blog/photo/2024/202402.html",revision:"ed87a1f11361a4e04f24bc42f71dcbbb"},{url:"blog/photo/2024/202408.html",revision:"033eaff0f0e96efc411570213323a474"},{url:"blog/photo/2024/index.html",revision:"49134c640259b2c42c0cda6a263fd3c6"},{url:"blog/photo/2025/index.html",revision:"2f406ab0d352c7e00fd46f47a6995c68"},{url:"blog/photo/index.html",revision:"cd9ab4b711b4249eb11fee47730753c2"},{url:"blog/photo/intro.html",revision:"fac3d342456c698ecfc44f6098e18649"},{url:"blog/the_second_high_school/first_grade/down_term/1_week.html",revision:"7d1a65e3032a0a74eab06967b52fe627"},{url:"blog/the_second_high_school/first_grade/down_term/10_week.html",revision:"a142d508c76d5a4734d882d7091eecf7"},{url:"blog/the_second_high_school/first_grade/down_term/11_week.html",revision:"a0568867e42137987fdb847b4134a921"},{url:"blog/the_second_high_school/first_grade/down_term/12_week.html",revision:"b324550cb85275c344dfc88c2a0c1a50"},{url:"blog/the_second_high_school/first_grade/down_term/13_week.html",revision:"c930d4776a8a0faa85391acdf009f638"},{url:"blog/the_second_high_school/first_grade/down_term/14_week.html",revision:"08747227af6e75cab7b4e13ce14638a8"},{url:"blog/the_second_high_school/first_grade/down_term/15_week.html",revision:"f1efe734e37ea0b554b1932d19c1c552"},{url:"blog/the_second_high_school/first_grade/down_term/16_week.html",revision:"03502a4847a81711d76182d640025362"},{url:"blog/the_second_high_school/first_grade/down_term/17_week.html",revision:"c9187b49718ffc59c576ef68d8b5894b"},{url:"blog/the_second_high_school/first_grade/down_term/18_week.html",revision:"bd65b33ddf32ce99281fc89f84c68a16"},{url:"blog/the_second_high_school/first_grade/down_term/19_week.html",revision:"8a801b0566bd5aad1d6693986b22d8b3"},{url:"blog/the_second_high_school/first_grade/down_term/2_week.html",revision:"b5eee18926a93d1d18fb453447192f55"},{url:"blog/the_second_high_school/first_grade/down_term/20_week.html",revision:"e66d7911a3e089e6dfef07488f68e487"},{url:"blog/the_second_high_school/first_grade/down_term/3_week.html",revision:"cfee41f6622e076eb09ba94e85074feb"},{url:"blog/the_second_high_school/first_grade/down_term/4_week.html",revision:"4bb33e312ca463c8a7ccb69a3b0b8d64"},{url:"blog/the_second_high_school/first_grade/down_term/5_week.html",revision:"a6e2005d07cae17cb3d2aa49c738b8c7"},{url:"blog/the_second_high_school/first_grade/down_term/6_week.html",revision:"4550fecf878e1ce34a76b6c1fd5a7dde"},{url:"blog/the_second_high_school/first_grade/down_term/7_week.html",revision:"7bb83e287a8aacce7ac1d83d9c7b221e"},{url:"blog/the_second_high_school/first_grade/down_term/8_week.html",revision:"e60c84b5b34c2fa99dc8c5f5dc2b58ca"},{url:"blog/the_second_high_school/first_grade/down_term/9_week.html",revision:"cebf4b50f42128e7eb4b76c7456d2d80"},{url:"blog/the_second_high_school/first_grade/down_term/index.html",revision:"6c73635f0805a82344a4703ede143d4a"},{url:"blog/the_second_high_school/first_grade/index.html",revision:"388cd6ac04ec50887e32ff6be296a3d5"},{url:"blog/the_second_high_school/first_grade/summerholiday.html",revision:"551e6d87c28cbe66937715d16c1e3e68"},{url:"blog/the_second_high_school/first_grade/winterholiady.html",revision:"0dc3c17cb92fb624db41e78993cd3dd9"},{url:"blog/the_second_high_school/index.html",revision:"11b8e6718f9d12733ffdfbcff6f28fcf"},{url:"blog/the_second_high_school/introduction.html",revision:"06bff5b6f9c8451d0e46c8aabe1227d3"},{url:"blog/the_second_high_school/second_grade/index.html",revision:"e044f4e9b874b6eb2d37870ba2ef8d6b"},{url:"blog/the_second_high_school/second_grade/up_term/1_week.html",revision:"bd6783aa4c5c39dd3f1ea233b7be49e8"},{url:"blog/the_second_high_school/second_grade/up_term/2_week.html",revision:"ddfaadb1b26c2178b32734f0bef597f9"},{url:"blog/the_second_high_school/second_grade/up_term/3_week.html",revision:"3a5d987e2363fdc9b0a412f2124fe07d"},{url:"blog/the_second_high_school/second_grade/up_term/4_week.html",revision:"eb982537ae82696ef748b8f809c8566f"},{url:"blog/the_second_high_school/second_grade/up_term/5_week.html",revision:"677a09b809c7b697ecf2a38f1c0f2b0f"},{url:"blog/the_second_high_school/second_grade/up_term/6_week.html",revision:"d2b3afa446ce916a98b147d5e35df30f"},{url:"blog/the_second_high_school/second_grade/up_term/7_week.html",revision:"9f132237a35061ad380924149968217e"},{url:"blog/the_second_high_school/second_grade/up_term/8_week.html",revision:"db2fe23479c514b1edf3b4ea72eca250"},{url:"blog/the_second_high_school/second_grade/up_term/index.html",revision:"7fd4cb844cfe15244ee7f2f7013ee275"},{url:"blog/the_second_high_school/special/index.html",revision:"27cadd8affa537d81794d55f1412bf75"},{url:"blog/the_second_high_school/special/special_1.html",revision:"03e04498f856a0c6a8087ae86093da3f"},{url:"blog/yh/events/2024/20240718.html",revision:"041f6ad47cc7aa4cf3e6a40d8237fcba"},{url:"blog/yh/events/2024/20240719.html",revision:"bd4b414b00de32023d681f344ac6bd9c"},{url:"blog/yh/events/2024/20240720.html",revision:"0135afadee4212a9a86ab8779b665b3b"},{url:"blog/yh/events/2024/20240721.html",revision:"5bc1595d537f0ce963e2f81076a6ebe5"},{url:"blog/yh/events/2024/20240724.html",revision:"43c9cdd8d4f880df95da3f6c18b6942e"},{url:"blog/yh/events/2024/20240802.html",revision:"1f839e1fb989ede40c8f0a26d0ed9ea8"},{url:"blog/yh/events/2024/20240803.html",revision:"e532ddaa801c42bc5111c1e6ed8ed9a6"},{url:"blog/yh/events/2024/20240820.html",revision:"e81926d5bc2fe0e749371237dc4178b0"},{url:"blog/yh/events/2024/20240824.html",revision:"c78cce03dacf6fbe94f2d237c4720a50"},{url:"blog/yh/events/2024/20240827.html",revision:"4c72864d6ebd9f13da6576bdaeed4d13"},{url:"blog/yh/events/2024/20240921.html",revision:"f888c93efcf36943fb2ef3ced4707b9f"},{url:"blog/yh/events/2024/20241004.html",revision:"b2101f0564872518bc8fdde6d749920d"},{url:"blog/yh/events/2024/index.html",revision:"2fe2f5b737d340d6a98ffe68b11c20fb"},{url:"blog/yh/events/index.html",revision:"1a94ea65d6ce22dfc363dc4e25e07b09"},{url:"blog/yh/index.html",revision:"82f26f9fff8e43ce17f9d09986e7ef62"},{url:"blog/yh/update_log/Android/2024.html",revision:"2621ca879fc3c5bcb4080aec03efcefc"},{url:"blog/yh/update_log/Android/index.html",revision:"fdcdddeada0acdf929d42b9fc255510f"},{url:"blog/yh/update_log/index.html",revision:"3fc34ecaa9b4682c64475432ecb35af5"},{url:"blog/yh/update_log/Windows/index.html",revision:"05ee3cdea262d845fb93e6ce3b0d1e77"},{url:"blog/yh/yh_true_name_internet.html",revision:"4636c07007a7e775abca3f52221f47bb"},{url:"guide/app_share/index.html",revision:"e0554eb5f29fc0a2c442aca2520dbc54"},{url:"guide/index.html",revision:"22a6690278a158491052e3ea3dca709b"},{url:"guide/my_project/index.html",revision:"91f31a17fda2727fe2ffb6d2b2fb602b"},{url:"guide/my_project/merge.html",revision:"f4259bdfd597332e64657bd98dc0a3ff"},{url:"guide/someguide/1-DDNS-GO.html",revision:"73098b4b6e6e87c64e6e796200281a8d"},{url:"guide/someguide/2.html",revision:"7cbeb5a0b1b591e30a0ffd73f4e306b2"},{url:"guide/someguide/index.html",revision:"17064e6cb127f580be872bbbac468165"},{url:"index.html",revision:"5aa54576b9b223fb5d7d207a9492a39e"},{url:"novel/file.html",revision:"d8e741030a1b93e019cb99572587682e"},{url:"novel/file/index.html",revision:"7da667a75224ef51bd48956d4b866ffa"},{url:"novel/file/my_first_novel.html",revision:"280110940ef166db37f76c6f44dffd8c"},{url:"novel/index.html",revision:"e89f404ce8402eb6770bd1ed20a02b96"},{url:"others/about_me.html",revision:"118b7dcaf697cdb1d474a17cafbc8a08"},{url:"others/copyright.html",revision:"eb4075102778a33288488dc2171e813e"},{url:"others/Disclaimer.html",revision:"a145a8ee67314c1a16b5b99c07db1cb4"},{url:"others/index.html",revision:"822d9b26e4af4649a86b2fb0152bfb6f"},{url:"others/links.html",revision:"dc81ce16010ef1098c85c9ed86d72725"},{url:"others/notice.html",revision:"f85c3f5a2a10eeb9a643af494b457d9b"},{url:"others/privacy.html",revision:"eb47b377c9bf337a3c37c84fae6f4ffc"},{url:"others/rules/index.html",revision:"25fc13918f857341b622a3b85ae5980c"},{url:"others/rules/yh_group_rule.html",revision:"2cb5f47d2edbb585d83a8db395f8ccb5"}],{}),e.cleanupOutdatedCaches()}));
