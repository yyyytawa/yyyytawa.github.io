if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const c=e=>a(e,r),t={module:{uri:r},exports:l,require:c};s[r]=Promise.all(d.map((e=>t[e]||c(e)))).then((e=>(i(...e),l)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1_week.html-B_cRBrvb.js",revision:"762c991b95732233d8a14aec097fb331"},{url:"assets/1_week.html-CiXrBQMU.js",revision:"ed142b3c1c6b2f5fd54478186f4bb973"},{url:"assets/1-DDNS-GO.html-CgLUxyX9.js",revision:"00473540db3152f6021af7b220f68eaa"},{url:"assets/10_week.html-DilVYDpg.js",revision:"70a527dcd3ee6c6ca30387ed94d750ca"},{url:"assets/10_week.html-Rj-bGr_1.js",revision:"fbce53968706da1f18fd8793047690a8"},{url:"assets/11_week.html-Dq5kaFk2.js",revision:"a1a7ac9cad748db7978a2e2976ce81bc"},{url:"assets/11to20.html-DQYGUxit.js",revision:"c777cb007479aac8ce347af3627a0edc"},{url:"assets/12_week.html-Cx5z_HVK.js",revision:"a5c2d96710997e0949a865161ce90a41"},{url:"assets/13_week.html-CJAUo-Hf.js",revision:"5a947f755811d146f9f232ea181f3c2d"},{url:"assets/14_week.html-BA8wxSCk.js",revision:"6bde3d863884dd38faf44ab000f75f19"},{url:"assets/15_week.html-CUtJlHlI.js",revision:"3064aa2011042d886aaaa5dbf9297faa"},{url:"assets/16_week.html-DrY8aG4I.js",revision:"26090fdf795cafe8c9619078e7a7fb2e"},{url:"assets/17_week.html-C3vPH7IA.js",revision:"57f39b5f747c740b57eadcb7b816caaa"},{url:"assets/18_week.html-OPjdi9CA.js",revision:"731bafed6393e4aa3f79170f09c6c67f"},{url:"assets/19_week.html-OBWoKpbb.js",revision:"00193812c9f2e8b951d4807ac2ca7382"},{url:"assets/1to10.html-nSDfQoKK.js",revision:"0571b180435c90c9c73f488c839aa062"},{url:"assets/2_week.html-BIy_2X5u.js",revision:"806bbad6aaf22ad576a54bf923653b20"},{url:"assets/2_week.html-m90b0mRT.js",revision:"0b4ce90f2a48fda8c57ef725c843eb65"},{url:"assets/2.html-Bc19EWsk.js",revision:"f905c7d0063251aad3cf7d9cf93f932b"},{url:"assets/20_week.html-Bpd0oL6t.js",revision:"2d8756752980cf8a5a64c4baf94aab83"},{url:"assets/2024.html-DDJCN-aB.js",revision:"eed111185a4f32bd199ceabfa77fa055"},{url:"assets/202402.html-6HxLGrES.js",revision:"4d91931609c42af57ef441340614e721"},{url:"assets/20240718.html-CN1K5Eaq.js",revision:"c972a23a6521d710c9791ba297dda8db"},{url:"assets/20240719.html-DzGdqp4t.js",revision:"cfaefb650ec15487857403a313c15b99"},{url:"assets/20240720.html-BkiFa0lB.js",revision:"e138e5033a8e65deddb58ed24fc404d0"},{url:"assets/20240721.html-pvhnbg3G.js",revision:"096a88bf0f088ca98113ec81ac1dbe71"},{url:"assets/20240724.html-Dkod82uY.js",revision:"37ec7401fa8a83033d91b598f865eff4"},{url:"assets/202407280.html-CdoUQ_mA.js",revision:"3d42ead6f1007b6083c9690405bd85e7"},{url:"assets/202408.html-BJMheV0n.js",revision:"649676e41318cf07acb42052c0a738c7"},{url:"assets/20240802.html-BuvxlwQe.js",revision:"cadd673a735c69506d806500761b9d30"},{url:"assets/20240803.html-DpVFIW96.js",revision:"b47f34e6925096293a21087b90d66376"},{url:"assets/202408190.html-EzmHqX3i.js",revision:"a2c999d70e078c8e84d2957cbed00c63"},{url:"assets/20240820.html-DBYrh5sv.js",revision:"7a96c303140deebcba2b498e2592d4e7"},{url:"assets/20240824.html-BgKStFQU.js",revision:"6eb8dbdd1316169a23f068eb375f4144"},{url:"assets/20240827.html-eGPTpUjv.js",revision:"50818b3bc8eb8eddec70462b9bb27ef4"},{url:"assets/20240921.html-BAxFH2gN.js",revision:"00d45b67d1e4b5342c077b213dd2b688"},{url:"assets/20241004.html-BBALZ2Op.js",revision:"5f5eac5f9a8e98522cfb0b988da2ec94"},{url:"assets/202410120.html-CGnv_EP9.js",revision:"3410a6d012f37f9094672def42d9de4e"},{url:"assets/202410260.html-DvQI6fix.js",revision:"791eeb440082512e1ad301430676824f"},{url:"assets/3_week.html-37sZUjn0.js",revision:"e3421df4b6cdbc4a63aebcbfa6c83488"},{url:"assets/3_week.html-Dx-kytri.js",revision:"1e2229d7f714572555bbbd1660e87e1b"},{url:"assets/4_week.html-CKvjYuKG.js",revision:"11dcc1a42f50df218abb9e48088ac37b"},{url:"assets/4_week.html-sxkpePa2.js",revision:"fa5c35d268cb9b97c31eb2c691c08983"},{url:"assets/404.html-CyX5V3M9.js",revision:"62be8c3ef853764e061bc04fb3269ef6"},{url:"assets/5_week.html-F-XpB2_w.js",revision:"03aeb0285a1f0e562448a2ea280503c8"},{url:"assets/5_week.html-tYbzgatE.js",revision:"49c23f1927baa41a12e7c333081ad11c"},{url:"assets/6_week.html-Deo67zzy.js",revision:"d4052ec340d2411a7f01f361d0fd6c86"},{url:"assets/6_week.html-LY0fDUfo.js",revision:"ba9e4216f595deb476abbdfb96f3ef98"},{url:"assets/7_week.html-CmdLiNJD.js",revision:"2b72142989f769d80fe46d9d86e7721a"},{url:"assets/7_week.html-vH_RoLYb.js",revision:"10e89de5be8d0ac6b79a374878d1421d"},{url:"assets/8_week.html-BcQNdsC5.js",revision:"e52dc1b44c952e067685183605179ae4"},{url:"assets/8_week.html-BhGqEMi0.js",revision:"224772f99ccb82e2fa8100255c9ee6ca"},{url:"assets/9_week.html-BJsqSpZW.js",revision:"7a0479dae9e77c36e2c31b13cc19465a"},{url:"assets/9_week.html-BZ1x_vrD.js",revision:"3494e6a28a6ecb40eb687b5e88a1013c"},{url:"assets/about_me.html-BjzS0t6z.js",revision:"6982f87d23334ad02a3befd8ccadfbe2"},{url:"assets/app-_tjvXI8M.js",revision:"18a81e1dc6d1d4e372b16493ec7e8776"},{url:"assets/artplayer-CYLSgUjv.js",revision:"3ab153fa5f107350a41a8d711cb51664"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/copyright.html-DatEzhcr.js",revision:"c4faf67de35d19614340f083e712ea8b"},{url:"assets/dash.all.min-CXnJ7hU8.js",revision:"718ec47069e52c190b9533b18dc8a2a2"},{url:"assets/Disclaimer.html-DjmNHHC6.js",revision:"cbee5845fa54636e74419dc2e26ca92a"},{url:"assets/file.html-r3rJMnEn.js",revision:"47a58d1bcb61b21a292c8f4a6ffc1456"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hls.min-Drnit47W.js",revision:"f4fdfbbd5e3c7b6e44f7e7d5fba5b8fe"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_LK40Bpj.js",revision:"5de99f7e0c25288d7aaf095d6f16c1be"},{url:"assets/index.html-2Z_lwRwU.js",revision:"eb199b02cf1140a8c8ffa9ddc0858c02"},{url:"assets/index.html-6_lUzVkS.js",revision:"281577e70b2a62c7f50ba5fce8899733"},{url:"assets/index.html-91nTFBb_.js",revision:"ddd9db2bdbb60d2c817964817248516f"},{url:"assets/index.html-9ctQCR2e.js",revision:"00d671fb073fdfbee325ba14ccabfbcd"},{url:"assets/index.html-B8GK6wi2.js",revision:"573b7ecf4533977d94d868b2a0ab093c"},{url:"assets/index.html-BBJ6ECtS.js",revision:"d066e909eabcad79ed978413137bf7b4"},{url:"assets/index.html-BDHr8NVM.js",revision:"db6a245eb08d77e1edbe9d482dc574ae"},{url:"assets/index.html-BjqULuM4.js",revision:"7aaa1e4cbb65c45ca0577f40c6ef681d"},{url:"assets/index.html-BkmXi9j-.js",revision:"5c0579927143307743a3a6de78fd44a5"},{url:"assets/index.html-BOOrbeyK.js",revision:"792a7d03fea0808618289f7e14f4f96f"},{url:"assets/index.html-BTORow7I.js",revision:"aa4b15a0ac422b9ae3b57bef9e8f00d7"},{url:"assets/index.html-BUvbEYTV.js",revision:"c44d530445fbb83cf090e115220a4b6e"},{url:"assets/index.html-Bwsp96yV.js",revision:"7575b390c02d0fee46760a8dfdde0177"},{url:"assets/index.html-C-CP6zpO.js",revision:"adfc04735d745e09d1b1d4b34dde82c5"},{url:"assets/index.html-C8b97xQR.js",revision:"44fd6a60bfe44fc2f82807997936a53a"},{url:"assets/index.html-CmZ3yDPX.js",revision:"42c94b92c43e1cd3f280b9214c15be05"},{url:"assets/index.html-CPJlHavI.js",revision:"423eecea3fc65cf2a2137175648479a7"},{url:"assets/index.html-CqusR1QX.js",revision:"e5244480a2a501a8c9daa0c93c35c369"},{url:"assets/index.html-CU-xnKDe.js",revision:"4bf1a7ab9a4f52d792e3363eec621d30"},{url:"assets/index.html-CWZm5Tx5.js",revision:"11415d3aada91fb1b09e35a942c30fa5"},{url:"assets/index.html-CxqvlFIB.js",revision:"c434b69bd3b19d5ed38ef6e0287b53ac"},{url:"assets/index.html-D7BpC8yj.js",revision:"f7a5c3a75fdc686ee674c7f1e764a8f3"},{url:"assets/index.html-DAtRta3c.js",revision:"c9b4b256daf578b784a935ee59bc4104"},{url:"assets/index.html-DcMjVh3n.js",revision:"a06ee7c842f9b2635fb09fd5e3124c5c"},{url:"assets/index.html-Ddb00tgt.js",revision:"1f80d6e1197929a4713d09133eb5fbfa"},{url:"assets/index.html-DgaSrsdi.js",revision:"24234d13f554e554c4ea3c2a5c91ca69"},{url:"assets/index.html-DrRXD04s.js",revision:"71d7b6e1d4014c0e46ecae0600062ba7"},{url:"assets/index.html-DXQpAGvK.js",revision:"d39ab1a565a1c7daafe021dc3a3d4750"},{url:"assets/index.html-DYM3jAuM.js",revision:"96ccca073e49a84efeb41c5f6b0fb4c7"},{url:"assets/index.html-DzBipRSY.js",revision:"74b0ced930c540a4fef353acbc3b7901"},{url:"assets/index.html-HKvqiYqp.js",revision:"485830d1f727af2c69268b38a15fc0b7"},{url:"assets/index.html-iY726FmZ.js",revision:"891918d928145e07eaf1d3b6082ddc33"},{url:"assets/index.html-P9wzhF7B.js",revision:"970511993f724d7b87036229ef4c4873"},{url:"assets/index.html-SidyMsyY.js",revision:"37dd1d293ba7b0a83dfdb990259d3358"},{url:"assets/index.html-U1Nabvps.js",revision:"49da9d24a5aa779c317f87155cc0130b"},{url:"assets/index.html-Z64Fdd3o.js",revision:"b46047a60e8fc7fa0e70d67a7ccdcb37"},{url:"assets/index.html-Zsu992Kh.js",revision:"0acfbb702be81eea441d42d2aec2dc57"},{url:"assets/intro.html-DY2J24gS.js",revision:"55c24b5ba7f52286539702a5f7777806"},{url:"assets/introduction.html-BMNAhBGQ.js",revision:"b47d28cee2812e47dacd43407a003465"},{url:"assets/introduction.html-klT5mJOk.js",revision:"ebbb912efb7162add59c8c8993571598"},{url:"assets/links.html-bCC4q4Oq.js",revision:"7e359f1fe6b73986fd570b506fb4cdb5"},{url:"assets/merge.html-CF256jEi.js",revision:"4f55ebeb2e3ae85a046dd8b62324e027"},{url:"assets/mpegts-DC5zlZYy.js",revision:"e58ff746740a93a354bde3ec3a966d3d"},{url:"assets/my_first_novel.html-DGdIvvOO.js",revision:"7ad03f26a824c193f9273b373bf4e851"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy.html-P1tjx_bm.js",revision:"766ed430bcb3ad0441da625d71b2d93f"},{url:"assets/setupDevtools-7MC2TMWH-DIONUDlg.js",revision:"69094a9e0e3eb4771068ed587a32b32e"},{url:"assets/special_1.html-ZoZglu6T.js",revision:"24555c4081536c106100bc416120cfd5"},{url:"assets/style-CXSEX6Lj.css",revision:"ca9493a01077305edf41f66a350c3ef8"},{url:"assets/summerholiday.html-DVXYJukS.js",revision:"bddf87879fb2bbc9c40a3fa91c99c14e"},{url:"assets/winterholiady.html-DEIVmAS4.js",revision:"08edbc3a776f8359ed073dde97572645"},{url:"assets/yh_group_rule.html-BOSKzx-Y.js",revision:"ac3083b5c9c52959c964984e724e0c47"},{url:"assets/yh_true_name_internet.html-D2R-2g-v.js",revision:"236271bcf62be4f2ef69a8f1d5ca184d"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"2dc2befa9fa2d487e3c914c964a1a52b"},{url:"article/index.html",revision:"79632f2514b5935da15affea8034e625"},{url:"articles/article/2024/07/202407280.html",revision:"9b2e21f3dc0419a60887fc910477e986"},{url:"articles/article/2024/07/index.html",revision:"eb26a3de8da4221dcf208fa1efb326e6"},{url:"articles/article/2024/08/202408190.html",revision:"8e2c04ecbd4f525bf53876030a7528a4"},{url:"articles/article/2024/08/index.html",revision:"061e93e05883741478c40f08a290d932"},{url:"articles/article/2024/10/202410120.html",revision:"6ae17eb36e6abdd90678662fd736cebb"},{url:"articles/article/2024/10/202410260.html",revision:"57ec64d2b0b38f6ae5f0d119982ced9a"},{url:"articles/article/2024/10/index.html",revision:"61e337ef6b8c154b51143d362e9e5156"},{url:"articles/article/2024/index.html",revision:"832612ae32d7c6b23e820ce609c0a8bb"},{url:"articles/article/index.html",revision:"d4a8d70a55613c8286d2f8b519ea1a40"},{url:"articles/index.html",revision:"2f00a7775b5dbb108c249e4ac38a5ed1"},{url:"articles/novel/file.html",revision:"1585bbd5640164e3192ab951e8734a06"},{url:"articles/novel/file/index.html",revision:"6d004753d42bb7356331ecb88a9dc6c2"},{url:"articles/novel/file/my_first_novel.html",revision:"85a57ed325675c0d84fa89110d8d7f61"},{url:"articles/novel/index.html",revision:"adab7bb4fbd149319935bbc6158952c2"},{url:"blog/index.html",revision:"d37dc81b37c149407b0eb40fced46948"},{url:"blog/music_updata_log/11to20.html",revision:"9735218f60dc3d7b5fcfc5181356a98b"},{url:"blog/music_updata_log/1to10.html",revision:"fdd950d92eb05d540cb20c4747bf2d69"},{url:"blog/music_updata_log/index.html",revision:"145b49c1c4742b27916683904dca0ba0"},{url:"blog/music_updata_log/introduction.html",revision:"8705da8872ee0d724a14915dae35a585"},{url:"blog/photo/2024/202402.html",revision:"df7db849d37b387a00211201a3bac395"},{url:"blog/photo/2024/202408.html",revision:"c398fe1f117876d7d5b02b21c36f313f"},{url:"blog/photo/2024/index.html",revision:"a2dd233ef83174ed5e72142935e1dc83"},{url:"blog/photo/2025/index.html",revision:"0169169c404ef33deccdd98df470d70e"},{url:"blog/photo/index.html",revision:"066e48174e9f7e3f09cb101ed1f66496"},{url:"blog/photo/intro.html",revision:"c9e2adc9a8f169987b40ba91bf5bf626"},{url:"blog/the_second_high_school/first_grade/down_term/1_week.html",revision:"14d0a16e0cbc0fe501f97969261fa091"},{url:"blog/the_second_high_school/first_grade/down_term/10_week.html",revision:"6f4b0bd71b9f5a6736a26ac705ec8c9e"},{url:"blog/the_second_high_school/first_grade/down_term/11_week.html",revision:"738d1823454d6ef1ab7c46a1d0487596"},{url:"blog/the_second_high_school/first_grade/down_term/12_week.html",revision:"3fba842c7b876c1f1641f3b26bdb28a8"},{url:"blog/the_second_high_school/first_grade/down_term/13_week.html",revision:"ca9d83a6f98f455d3901668499ec926e"},{url:"blog/the_second_high_school/first_grade/down_term/14_week.html",revision:"b06a8824552bceda5709f5d604fa3956"},{url:"blog/the_second_high_school/first_grade/down_term/15_week.html",revision:"4fc41e050b69cb21e70d836dfcc959f4"},{url:"blog/the_second_high_school/first_grade/down_term/16_week.html",revision:"ec85ed69ccb6407a1195a307941934b0"},{url:"blog/the_second_high_school/first_grade/down_term/17_week.html",revision:"12eea4cb8ecddb94b457eea45ef568b3"},{url:"blog/the_second_high_school/first_grade/down_term/18_week.html",revision:"1bc8ebf9da158d37892436faf0d8e8fd"},{url:"blog/the_second_high_school/first_grade/down_term/19_week.html",revision:"0295075119c9798f4f74796b370df6ea"},{url:"blog/the_second_high_school/first_grade/down_term/2_week.html",revision:"6f83bafbdd11ccb5e88e50e4582bc25b"},{url:"blog/the_second_high_school/first_grade/down_term/20_week.html",revision:"6d8ed791cc26cc34000f8dc093ce8d10"},{url:"blog/the_second_high_school/first_grade/down_term/3_week.html",revision:"d746dd135acf48799ebed12933fa8596"},{url:"blog/the_second_high_school/first_grade/down_term/4_week.html",revision:"d91df47780efe552deb16f91c068fd91"},{url:"blog/the_second_high_school/first_grade/down_term/5_week.html",revision:"bf495014db06b76619a014921c945058"},{url:"blog/the_second_high_school/first_grade/down_term/6_week.html",revision:"4d7f0bd075d9a79b3de43b8bb51e18c6"},{url:"blog/the_second_high_school/first_grade/down_term/7_week.html",revision:"f8beec71ce0bd271ab5575aff31fe518"},{url:"blog/the_second_high_school/first_grade/down_term/8_week.html",revision:"d2827e86ae20f19e3358f5acdd10389b"},{url:"blog/the_second_high_school/first_grade/down_term/9_week.html",revision:"2e3589a77a5dc0a79b2ccb96782fe334"},{url:"blog/the_second_high_school/first_grade/down_term/index.html",revision:"1dfe0a0d4a2cd1227d8f9ed8c92ce747"},{url:"blog/the_second_high_school/first_grade/index.html",revision:"9dd1a512068465a4ee606419069077e8"},{url:"blog/the_second_high_school/first_grade/summerholiday.html",revision:"55a37be2b7cf5cdc1a682fe46e985052"},{url:"blog/the_second_high_school/first_grade/winterholiady.html",revision:"94a8742dbe115edea88740f7f24afb0d"},{url:"blog/the_second_high_school/index.html",revision:"2a5057fbbd54bdc6fcbcfa07e0384709"},{url:"blog/the_second_high_school/introduction.html",revision:"621dca21c66857296e48bdca8d20f032"},{url:"blog/the_second_high_school/second_grade/index.html",revision:"f72a7d45cafd7c819f850154dd298dd4"},{url:"blog/the_second_high_school/second_grade/up_term/1_week.html",revision:"563f25681bb73bba040c3731a1e8b34b"},{url:"blog/the_second_high_school/second_grade/up_term/10_week.html",revision:"0c09140af9eb8f683992b384db152379"},{url:"blog/the_second_high_school/second_grade/up_term/2_week.html",revision:"59cd4ffa86b8745fcb3369cfb0e4b51e"},{url:"blog/the_second_high_school/second_grade/up_term/3_week.html",revision:"77d3c721c2a7fca66d6b308adf13fca3"},{url:"blog/the_second_high_school/second_grade/up_term/4_week.html",revision:"7cf46bd481df82dd8300dfaffe8fcb0c"},{url:"blog/the_second_high_school/second_grade/up_term/5_week.html",revision:"a74ac251618152e8d91cbfd32bbd2c20"},{url:"blog/the_second_high_school/second_grade/up_term/6_week.html",revision:"ba5d402fa92abc7091ff6c28e453a589"},{url:"blog/the_second_high_school/second_grade/up_term/7_week.html",revision:"84eef2ddff49c898a4463b3faf6bfe36"},{url:"blog/the_second_high_school/second_grade/up_term/8_week.html",revision:"d9b3108fd186774f5f4b42115987ff98"},{url:"blog/the_second_high_school/second_grade/up_term/9_week.html",revision:"5991c219517a7033f3bf4b544c6b4a6b"},{url:"blog/the_second_high_school/second_grade/up_term/index.html",revision:"dd16c7166c53f406c4f68d2a4df53191"},{url:"blog/the_second_high_school/special/index.html",revision:"3f114d849568a807ef5072056d90ce20"},{url:"blog/the_second_high_school/special/special_1.html",revision:"271029ae519a73c3834b87a5da32f1e8"},{url:"blog/yh/events/2024/20240718.html",revision:"62cc6f23ebf6083db2cbc8f5c0418b83"},{url:"blog/yh/events/2024/20240719.html",revision:"8ad0cc9cd954a5d3da522d5eda30f18c"},{url:"blog/yh/events/2024/20240720.html",revision:"25184f110949b24d6f511a0bfe1685af"},{url:"blog/yh/events/2024/20240721.html",revision:"da7da0e6190d8b31fc84bec862f1af34"},{url:"blog/yh/events/2024/20240724.html",revision:"dda3653f0e712d04abb4357c7042ce58"},{url:"blog/yh/events/2024/20240802.html",revision:"f2ea3d22d7653d20a20f145c19f720aa"},{url:"blog/yh/events/2024/20240803.html",revision:"a86210ded9d88f613f5521899604f4c2"},{url:"blog/yh/events/2024/20240820.html",revision:"549c59c20c8226f620d8482f713a804d"},{url:"blog/yh/events/2024/20240824.html",revision:"8d1dbc16560df11cc72869d0d3b52686"},{url:"blog/yh/events/2024/20240827.html",revision:"42767716d98b6ba9a92816fd20cd855f"},{url:"blog/yh/events/2024/20240921.html",revision:"0a1c31de35eb3be45ba67da7ca3763e1"},{url:"blog/yh/events/2024/20241004.html",revision:"7663fac4fa05b8c8da2cc1b04f655832"},{url:"blog/yh/events/2024/index.html",revision:"2997f1a13d6e593c1f1026f454a331a0"},{url:"blog/yh/events/index.html",revision:"6cc5e23044accebfd41f86efb7d30181"},{url:"blog/yh/index.html",revision:"f8613d6c455b8c9cdab179c80e60d618"},{url:"blog/yh/update_log/Android/2024.html",revision:"d627e9ca58a18b85874f7d2c73bfb727"},{url:"blog/yh/update_log/Android/index.html",revision:"f6fa3e9816dd07836f9f9e1b2d353436"},{url:"blog/yh/update_log/index.html",revision:"c296610d7647938e59c751f65a08c2b0"},{url:"blog/yh/update_log/Windows/index.html",revision:"fb94120addbd5b94f05c00f17b8ec3e0"},{url:"blog/yh/yh_true_name_internet.html",revision:"62afb4c5ab927de5e92f9d343d870802"},{url:"category/index.html",revision:"e88b591a85fbb4715e09163f923e2618"},{url:"guide/app_share/index.html",revision:"24586dca0b2928ce7396ea2a766b1852"},{url:"guide/index.html",revision:"07a7058a9e4cf19a66211a234e63b665"},{url:"guide/my_project/index.html",revision:"1e12866bdb6ed190faf124b0d42abd94"},{url:"guide/my_project/merge.html",revision:"9da5ecdd213400d511437b1a68259b1a"},{url:"guide/someguide/1-DDNS-GO.html",revision:"d47732a5afcf02381b934db7ee67d23c"},{url:"guide/someguide/2.html",revision:"adccdcdda239d9abdcdc4c2ea2a7c5d8"},{url:"guide/someguide/index.html",revision:"80dcdab1db96e71e431a9e426d09431d"},{url:"index.html",revision:"7303af59a417dddbcacee7e408361710"},{url:"others/about_me.html",revision:"73bde1189e03c1484475388524cf8d5f"},{url:"others/copyright.html",revision:"d751b4c2c8ea8d2cd9ce3076d7a4ae7b"},{url:"others/Disclaimer.html",revision:"5aa14716dbd0e1335712d2e576c0a27f"},{url:"others/index.html",revision:"d691ed9a3d92eb2fd23308435223fc19"},{url:"others/links.html",revision:"f470dd37e38ac35cb66bacf7f9c26db0"},{url:"others/notice/index.html",revision:"fc9779c1392f0a8db4e0732129a39ac1"},{url:"others/privacy.html",revision:"6ecf33e9e19f3b66ad97f219d151ccb6"},{url:"others/rules/index.html",revision:"c132a55e8405a935a05a31aada16a86f"},{url:"others/rules/yh_group_rule.html",revision:"b89755b1a1faee282fd01937cec8a314"},{url:"star/index.html",revision:"f6b46046b07b70024b10a4add21f200e"},{url:"tag/index.html",revision:"3473aaa1c3f8e591e84cd801fb5ef081"},{url:"timeline/index.html",revision:"3e5fd6f574dedcc74a56f4730fadb46a"}],{}),e.cleanupOutdatedCaches()}));
