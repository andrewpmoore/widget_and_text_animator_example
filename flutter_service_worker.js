'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "84720c6b918bddf7f926396e4e22f479",
".git/config": "5e52d75d78db594565dc66cbed3e5ede",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4d3c214e248eb2e27dd761c3e32e31fa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "22e3f57c61303926eae20250919e023c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53ac702503d06312c88b381dd8d5a1b1",
".git/logs/refs/heads/main": "687c0540ae167d21e93cab9b7ea65df8",
".git/logs/refs/remotes/origin/main": "9d3c627fd122d6af2f1c0732f69b133f",
".git/objects/01/3644d007461fa3527e263578548140a133a75d": "0d33fe0f2a0968fd7e2fbb7b94895040",
".git/objects/01/5408d60c333e78381dca1a4ce783d7a0afa3b0": "d449be56130614b273e02b5d165adb83",
".git/objects/01/97b8e62fb2e4d37d4a3777f3d40a74afd2b831": "b5ed2e6140972f071f31e0b74f2e6e1e",
".git/objects/02/67a0b770a10a24bfa60571c9c665afd039ac6b": "c43a916a695ae4639b9384b7266a1f54",
".git/objects/02/c4fbb5595f8eeb473498d9b82f46e60e76a449": "87bee7a383299a42b08431f68123bb96",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/d85a080b32c8a9b94f6dd55c01a204b0b915c2": "a4f224e0e9269b9d057c452a49977c7d",
".git/objects/12/07e76f83cb4de14d95e3d05a73eea33e8ec2e6": "ca3b7d95053d1479c0b34fc51dcbeaba",
".git/objects/12/2af5128a2d15740d4ff1dde800c21a18d7beb6": "8303dc96e3ef543096854fe6396ef21b",
".git/objects/14/b970716ccd391b64eb931d06340e15d88e64e2": "17bb0af6ea5bca8ad38bda9ad4ce02e5",
".git/objects/16/f675dc65bf900adf6b43395d02d397827bb59c": "9c3e8017c3a428edca7116c80de18ebb",
".git/objects/19/bf90e84dd85bf671558ccf1409dd2ab7103920": "b96114cc054ea431cac412f69f819d65",
".git/objects/1d/e06a0e45002dfd41db16bed8991688ef9dfa08": "55582eef045b97ad2aec181b4cca970e",
".git/objects/1e/412ffd348a52e2adfc1c3591b0db70cd43369f": "8c0abae21867433889821eadbc868648",
".git/objects/20/88e17958ba4a09fff9783f74c3ab5ffa772c6b": "688b35280275f9265d57b6d63da191dc",
".git/objects/24/90fa756c96ab1cc8c7710a8b8d23440cc4a0e5": "aad3870c67f4f871748599fbc5ce7221",
".git/objects/24/93446f01493d6ca5413375f6643d2cf4ae57e6": "e3511c9f153b9a6cbc639c5c05d993f5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/769ead00a0e6f5ee2ce0fd3909bdf9184d18dc": "11a18a558d43b54ae75b4ddbfff7ccc8",
".git/objects/25/9a24e4d2e66db04470a6b8362a89452328583e": "75f1f45d1ee5168ec257dd78db6b156e",
".git/objects/26/6b68faa9e13892f8c5227480bc3f412f60fd9c": "4de1dc1df67a6269e89a0e39be4a41b3",
".git/objects/26/ef69dc7624b7212d04ec1495a9aab73591227d": "5034df6c524d86652e066c0b753ca945",
".git/objects/27/39dc5196c749ea320fd978be4953792abce27d": "60db0c6c7fb3af1ce049abc15465c5df",
".git/objects/27/54d8863ce39838d4438954da34516a04cdccfd": "5c37f0082afe9188c8fd693cabbe22ad",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/c030fb550cdbaa515639fb1c16050c78b8b594": "274692762a0998c6a9fc183a1f81f0f9",
".git/objects/32/44b56a84441b0fa6560a5fec3bee08a97a2d7e": "9b7c19b33f3c26d2eabdcc08dd3c84b2",
".git/objects/32/cdb972cc3dcb65009366e374a79fd40ee25a46": "74108f2ad3ab760e5ff14d567d7e3cd5",
".git/objects/38/36d31f72087219a3d0498c17021955be69b7c8": "6faac39a78b7198a6b68164db5dcbac3",
".git/objects/38/d251438d4b7354fac5045874439f28133a1ad5": "a110f5b87df6c5dd565bc2f92001ef4b",
".git/objects/39/189641424fb48ec93434612d3fda18b15815bf": "3312cc333aaf25534ab2851b1fbdc30b",
".git/objects/39/e8cac48ec802c6907d236d4e63de2ceeba4a71": "c3c64711b6e5af5130ff5f57dfc8ea94",
".git/objects/3a/d73a95523eb4e71f44f03630bcb3ca1e49c8ea": "6372ef5d73f404589a9477d7ec6df37c",
".git/objects/3b/4aa6b7c5fc222c539111656eb20efc2ecba30b": "c902eb32baa824f38c95e939c5c4c779",
".git/objects/3d/c0fe28398944b1a1419acfce7e9ec10fe886ba": "a58e21f289f20531379c138dcd2fbc38",
".git/objects/42/ceb1df786507365859a888fb4ee920117383a1": "493addf7217a4d986b3971e34ed42f38",
".git/objects/44/ae1bba506f06aa05a00e6deca2ef832baeb504": "2ddc9ebc7e1241a2f81ab93b9370a666",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/cfde92cdb520ba5bedc0af72168c4dbc4831d3": "03c28da5b72dd7020972d9652fc0d678",
".git/objects/4a/e75353e2a124e9f8c233699980a0b48c0ff89f": "b8e40e77d7a78a9a739440a29520b461",
".git/objects/4c/b64fb7f8d1bc71a49e1922bb76f1d3b46cc94f": "9edd5fb71263e9655217d70c86849d68",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/0486fc93b3261a1046feb954e77ad970ebd010": "1849f2f85610f58f4a156cbe4db593b0",
".git/objects/56/6d51f7af4b5ff11c26d453b691841e7e1b760a": "c050a399c567fbb0aa21fcab6ca42d1b",
".git/objects/59/10dbdd082e2bdea77825ce002021e11e69ac97": "fece8954652d875fb2ec022b5d440e56",
".git/objects/5c/0367f435359fe3654765bc7c122193134379b2": "d786baa31ed9fbc070c0e6c990e65922",
".git/objects/5e/8fda5c4d89bb097256faa9f799aae7075d4e16": "84e30ec61d693ed71d1d42eeca60bcbd",
".git/objects/61/689bbdf28447a8e5fb703a7f2125fc17c57d8a": "52086c40e94b02b14fb0e03a48ebe2d6",
".git/objects/63/ff211c334530738d10b8e0064f69de25b49f83": "aa051fd3c0230c570ebd5efa866fe0e0",
".git/objects/65/719b14f689377648edf1ea44f67f016887e7c4": "277c18445d772c528a577cd28fee7303",
".git/objects/67/62292c7d7e6d8c2b13e2abd386849b3bf5317e": "c83b9967ed10e9627719d5ee53a9cb93",
".git/objects/69/710af989d4b7c174afd9c711345973c87b5336": "23a5e527f6645494e7fe62b393324576",
".git/objects/69/804c57ac0c93dc5b27332ddf8ae852e67f1e6b": "32184126b47f0d11eaab4116bd6450e7",
".git/objects/6b/dc1795adde909fa07ed0b7ca3b007b2c163644": "b7cc66167d051097dbe446496df2efcc",
".git/objects/6d/3a226595e47e4806a9f8b02ae53ecf5d09ee3a": "4b1736640e49644546eaca88e49131da",
".git/objects/6d/d273ad257c4821127d392cf372d0dbf525ae00": "5ebb2afed2b945077f54440a2d7b0e2b",
".git/objects/74/a5d2158e13ab6c9a595b4343fb89730d3a7226": "a37444c1425c5627e283170994d92731",
".git/objects/75/d2343717f0d07efd04dbb825e5dda4a11c5a7a": "60cef9769ebf1e5398aafacd17ed2db7",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/eb8e569832e770f1a6ebee29a9f62ecaef1020": "49d404ede1f9040bc99a7558b728cc9f",
".git/objects/78/4936042eb1c51218bd153335b84a2115402b48": "7ac2b5cca31035cdf0c702e5e223dda4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/63823e76f112cfc72358593b3d40e35d735c78": "d1ff5d6a3dc0bfa4fdb3e4e49fc5dcd4",
".git/objects/7f/1fb1d3df9976c1f50c0039e287fb7295d71dd5": "9a59d0608105aa696cc4e4f9cae380bf",
".git/objects/7f/5e4009f446c005c3c0150c729551862e77e1d0": "585702a3f9fbfa428627705bdb3150db",
".git/objects/82/0c3007fe6afed47fb00cc267d57332e7a3dbc1": "d14a24b2c78dfa1a976274468efaef5c",
".git/objects/82/4cdbfb720bbd47bff23e0a7c8e8de95c65dcfe": "11a1f8e7564f7ebf26f7957fc291e426",
".git/objects/84/e65730f3cf92db99f609a05fa238bd7749a6e8": "ba01328480d00810d02f2f2cc8acb8e6",
".git/objects/88/222a4c01cbf830b747a593f9e418535378a689": "9dbe3e3aee7b93cde5de542ea590578b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/09d971b12bf348bc6ac85e132a036df4832925": "8f7f6e248396e1240031356139278234",
".git/objects/8e/5ceddc16d880ebb4150d70bc0c7808f51835aa": "07554e51755899af078cc45e31975ca5",
".git/objects/8f/00530ff099047b55a6aca850bd3c71319c647b": "dd4d9276eedc7a75596c471f1ca0d150",
".git/objects/90/f3312ee36e9164da6042b275e1df006cbe32c7": "2aac0e2b851ea7791ace5f3f9c7f97d0",
".git/objects/95/0e7c49bb555648e679d996ce5c9b021b886f24": "a82ffb141c91a77b0996dd63175260bd",
".git/objects/99/67c3d9a8de59e08af5e24cdd642cbaefa1f12e": "d1331b4919c818527d047eeedf490781",
".git/objects/9b/186288e75e10347bf6fe1f72eb3a1322a9b83d": "0d1f33da22703f4bd1973f2bf2b4e8f6",
".git/objects/9c/7060115c961342c6293a0df1a614a3eb715ddf": "b35a777874a6b5c8b397a39bd021cc10",
".git/objects/9f/4276fd594d63c934cd228d248f08c91f386903": "73fc6a3ec9a06c4b597b846cc84dc286",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/a6f81d2d8ea22b0ad6cfa16de8a43a866b146f": "7be9977dc3d4a83e44f8a0915096e800",
".git/objects/a2/e69884f8a4250c72a91e1dd1b9860fd67440d4": "150f92b5ee2998932b61fb759f6ea9ad",
".git/objects/a3/06dc665eece8a7004ba87211992d50be704a7d": "6ccc21845a14f90560a12ead5921fd8b",
".git/objects/a5/a5eea2e1d905cb3cffdec91b1bdc2ef11bcc41": "b48dba235980d55273bb09a0bf13def7",
".git/objects/a7/a97a7c170dd27161021211fbde0d98b6e27186": "ec3003a30b5e927c41a254943537198c",
".git/objects/a8/9359a5ee33d3d9341a2a52fac6972ce3784bc1": "70a68b0909201b53ef99fb20e088b015",
".git/objects/a8/caeb6e228a8b2eaa608e5e2eee8b6625601601": "75bd0c9c6bcb3cde068b59318446da62",
".git/objects/a8/dcc610a0e9699b2b388ea00c744dc83c2f0e48": "631067dc6dc60519d683b9ca2ed8dccb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c8425d53e064032459d9e8ec55c14cbf6bfdfe": "62b5848393599418f19988c9d4b3a2db",
".git/objects/ac/602287e32b5d78cfa29bddd17dc4b357165913": "050d04da428a5f4a80b689ab311407d0",
".git/objects/ad/d1a39092872426a116c83f0cc77b76917c45c3": "e07a43f7242e70e827bfce30a94ce490",
".git/objects/b2/202863aa9b03ae0954eacea0c2c2d5e05cf61a": "36d5caf1fccddeba387ccb93e1745183",
".git/objects/b3/806141d50eca786bcf25656bba53abd1ba2328": "6efe6a96a2099188254b0f8ddd06a6be",
".git/objects/b4/9dec7909da5f027206f0aba15007b7ea4fc38c": "a6cba891b87201ef65f7dbd745ec3c30",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b433c96365a34cccbc6d75ef066f57f912b2cc": "c7d9815c125894a3b9bf826e177517bd",
".git/objects/bb/5c4efef1dc178a4e9571bc39f8d11848afcb30": "8df34faabee4348b19106c349822dda6",
".git/objects/bd/d0fc88f1a28285b4d74f3989f0c4fbd616bcfd": "99b42a46df36e50dedfe93e62b614eaa",
".git/objects/be/a3675410fd88115f62b7886d4102f64ad1d264": "624ecc3eb17ecdc631ccbcdfe6f10a4d",
".git/objects/be/d100604bf7a18620203f8b70a6eeee3865b1ad": "5d7b905f86889fb651179e6c9c413a43",
".git/objects/bf/79c0f64a839ea4efae7d42cad700c0028aaf09": "7ba0829811901742f59c175173791e1c",
".git/objects/c0/8f8ef6489706f797d46519db40b095b38756b3": "cbd8f37ff5d9d9dc6c6cfb65a25484c2",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/bb3ce07bcbc9b877def180feb711694cecc41c": "ff5c3d57847b5eee3d6c0af72fe52484",
".git/objects/c9/a5c5c59f6a6d9693dd0a49ea008bce9b9a2f62": "4e12ed4c259e6eba7b0002deb830cdad",
".git/objects/d1/72eea93339b95843e640a32d75a3bf4bf41c11": "fe38773c27dedcde53cd3f6809ee7918",
".git/objects/d6/096c52eddc5988b882bd29090e33b14cb9c20e": "5882e580efbde27daf367385ee7b90c1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/2593627fa8cce1e229c64673c277278241138d": "bc856db11a2ab8e23754a7bc4ac048f9",
".git/objects/db/4d5960c8440bf59878e145df4f3bb24a41bef0": "40630bdfd470a650ababe224601a20ee",
".git/objects/dc/7590ca7b2798103c4d58ed731528fc9ec70557": "cee44dead68c9ffe9e1d72fc0c119a07",
".git/objects/dc/9f501dd219fe75dc697aa9ea21ddaca019e527": "9a4c20196b5fc7f8a8993fd077ce2704",
".git/objects/e0/c64dc19e6c70c9dd79837dbbac23e05cb7e54f": "c0ea2fa32cb882966ba67f4a7a12a687",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/aa44d60b2bbaae125faa8e5322acbdd987ec22": "dcb86bd6c8791f45a2a4ed405c7f5859",
".git/objects/e8/faca53364c92f79d71242e7b95bf70a0dbe816": "c417d17c9b642ffc0167f0181b715aae",
".git/objects/e9/917dbc549484ea3856a6155ddef8362a5d9342": "3b4a5f1b34032e4a90ec4220c1d1ab1f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/bbabfe7a48279d27fe601babfc9c835081c393": "e7a71ecb07b1ec87387c6d571dd3e2a8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0c39568bbc54d4d8bded67c2a4d92b9ea46b16": "a461ba78196ab625be6bbee411d42f81",
".git/objects/f1/12dc04a95971cd1a556ac7fff90a7eee07a4a6": "721d7ed29a1a87d6907d55f6be093aff",
".git/objects/f1/613d311be606d291399d54a9224ab5a96f070a": "da625a317488f18a231dd9950e224573",
".git/objects/fb/4f590f382414ced08888304faa615e6052c316": "c72f6408ffe3e666aaca0b57fee690fd",
".git/objects/fc/4f3f8f61fd218cdfa22e7df0e6476f508b7827": "60bc7915e3d4d6cdd7630ac3c8543b3e",
".git/ORIG_HEAD": "4a2fd79073f72802b363a88985eca6eb",
".git/refs/heads/main": "1f8fea6997833c2fd4c15b607d77ed3e",
".git/refs/remotes/origin/main": "1f8fea6997833c2fd4c15b607d77ed3e",
"assets/AssetManifest.json": "94b6a5f9b68e8753cf4561932bba6e0a",
"assets/assets/cloud1.png": "d8e968f55cdcad41ff64ac41d846f830",
"assets/assets/cloud2.png": "f65d8cc4624e3b2db90755fd527285b7",
"assets/assets/cloud3.png": "ad066cc0e93ba9fc2c8a5562f93b6444",
"assets/assets/sun.png": "5334d97940ef4395ed9d7ecbfbf9efef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "5a1c985907c41e595d35050fdcf42588",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"gifs/bounce.gif": "8f0a6f9a3d41ae500972fae853333fe5",
"gifs/breath.gif": "aeec22800ba025e460f44ee832926ce5",
"gifs/custom.gif": "6476d79dca854cba73e2b2d58f1157bd",
"gifs/dangle.gif": "156982fd10f0d3bc54c3abb3cc97ecc2",
"gifs/fidget.gif": "ff1192e1a1b6f9c4e0de88fc233f5aad",
"gifs/intro1.gif": "c0a2a574401620eb10b25ad22c8b21d4",
"gifs/intro2.gif": "024509e88170835d57fef556b62c25f2",
"gifs/intro3.gif": "2c461246ae340ce1b154fb7bf2e002a4",
"gifs/keys.gif": "3e5df5c0b5392451ea5a577721951e78",
"gifs/pulse.gif": "ccab4bc92f960f782d87a18617da17ac",
"gifs/rest.gif": "b954c82fb78a9790e5bee1e46a71db8c",
"gifs/rotate.gif": "5c96f2d66d2f76d1c3f4b6f5a2a9c695",
"gifs/size.gif": "16f07dcada58065884c2aaac645cb722",
"gifs/slide.gif": "5d4e31cb5578158308a03c2231158385",
"gifs/swing.gif": "b8e1cf8756f30b6642f608f1c232c2ea",
"gifs/text_sample.gif": "3b51f256c9359ce35c147f58d9d00f43",
"gifs/text_sequence.gif": "66d815e2766bd5501c76dfcf28888c8f",
"gifs/vibrate.gif": "c69032979c3988d72d336073c5cc1a19",
"gifs/wave.gif": "02dad4127d211c3f783bed72dbe59f1f",
"gifs/wave_text.gif": "6709e8b1336801258867a8e64a8ff39a",
"gifs/widget_sequence.gif": "25cef8d3d8c2b10ec35de5cffd9cc9c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e52d8c3e032bc1b4dc66d53c277810f",
"/": "2e52d8c3e032bc1b4dc66d53c277810f",
"main.dart.js": "0fa9550e1ce6c948499fd29d184e5483",
"manifest.json": "cd6037434b08d3372d9f8522881f2744",
"README.md": "bf28ac8d673edbdaaf9da87fdbae19a2",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"_config.yml": "72a4878cd37b3f2b976c0b8a8a35dd94"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
