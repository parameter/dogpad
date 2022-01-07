import axios from "axios";
import redis from "./lib/redis";

const list = [
  "0x557639f4b6623BBE0eabbB900aB3DE4934f16e51",
  "0x714c0c8208C16Eb52F427A6252fc91f80851a351",
  "0x28DC07e43A9290ea614F511D5DfA9353117c19aa",
  "0x50Bc79CB7eb1E01CBF8F44d580311fFdAF94dDbA",
  "0x50917365FBea588DD0576F41E396cDB3300e621f",
  "0x60680821ddf99327e94d7482c7bae04f60f9aaf4",
  "0x06ee070398aB930d5d5Af5f8CA044D570066a406",
  "0x699E6Ed7f9670c87C5B88D4acbd34F227D838F8d",
  "0x123f4C6664787D86bB3dB6f2554177dae648C85f",
  "0x25fc82dc1d95cE54Cc074Af5d4c11E915dBa6939",
  "0x349eefc9601ffcfa4c7d57fc2b49f801d5638970",
  "0x60926A236FC183b2ee637aF418B317fF398e19c6",
  "0x672fb3Bb59C768a8EBfc38063002F673d9B53C40",
  "0x5A4aD4F431952f2fE410C861494571b576A2Fc0d",
  "0x17fdbDd31247E3677967Aec2C47F52bEE8b7aA1e",
  "0xF3D3A730f70918cee6eed834AE531683Fed5db05",
  "0xb19667b9d829B26f85320A2AF24ABF2B7EeB59f1",
  "0xb805Ed53fB006cCEA941A2E1991Ede90735dAEe7",
  "0x25000760263EBF9a17622CC8b24b591493c42802",
  "0x59a10d0eB9C44B9a049D76Cf7a8e138C9f261c55",
  "0xb0146c9667ed8f69539e37aad277c9c940224a48",
  "0xb84FEaC37289dFdA4f8aeA894EcF303d7C33Ec3d",
  "0x461Cbc54a4436fC931aa513c2E109d1Fe434fad4",
  "0xB22836746c7f239c4f059918cD11e440B54083d8",
  "0xfa348cd0ea3e39ab7d328a2e4851e86982989f1d",
  "0x3a75ee7e8250bddf117f7f39c48aea9ce4b5db9d",
  "0x367a68Ab9fC443CC4E79713B961809CBEeFD7d83",
  "0xC35b9e04ee93B098fA62Fad30B6f8761C12a9014",
  "0x306c431A00eFb4882d3E248dFf8f5aaFD3F71CF2",
  "0xb0fB743cdD3b06Fd29a2309C990190b427A992dE",
  "0xc18ee5f94b02480caafb1a3353880313648a7cb4",
  "0xd1e373b3Ed85D55E3227F124EA1c5927d47223d9",
  "0xe71bb685f5972470e4de6b235b7cd6e6b4cd94e7",
  "0xABe68030d4B74a74171419A621613791936b9ac9",
  "0x62622c19f1eEFBC17eAdfb25B3b8CF3565861032",
  "0xf1b71027037B1e5D105F4B983D5e657777F4E31D",
  "0x79d15EB235080b5D8D6BA2B8838C89AF75B61ffC",
  "0x53dCD9b305AA2316D2F22b09087103B5D60E37Ae",
  "0xf1dc87A5ffBD0DEE5989e6863B731423C25DB594",
  "0x0ed52aC981E6976c41B5B16D47d4A5ba4349Af46",
  "0xCAefF1764f6722A4b6e06cE09E80eD3B2dC7dD3C",
  "0x0e7C04774611d904d291D525b2Bd60146F0711C7",
  "0x87DcfEec3A6199a369cDB63C0dD3f890eF3D6d0B",
  "0xB2bc72ef35Ab2BF4A51cF35B693c7967311fAD8A",
  "0xF222e3828BC8b3facD3581b6ea9ea1F5Fd2796e4",
  "0x9740323429441c0D47aAA76cE37aA8D92d525aaA",
  "0xc933faa45acb56d8d8441152a978c01af049ae02",
  "0x6E7D4329127d50226ED380483d0d92829b0B5B9B",
  "0x4f884761D2ad1637dE42b3F6F7a819a452a22BBf",
  "0xC11F695C19F703806736E14fD0DdCBef8d884878",
  "0xe3316505f95b9c244F6814Eb10eE2f57384c2eDF",
  "0x81D1B6220d8bFa7e4ee58291835d90dc4A23eA57",
  "0x1ba4F81C49f9E162EA641d2565dEAFFFE41C4F3D",
  "0x08DEc3Db7A05E0C3AAaA97e0F09e4236094A74Ee",
  "0x6ba453a75d92d8fa4df739306237c93d2f979b36",
  "0xEb073AD3F2A5B5497d6e42505e3efA5f7347a343",
  "0xDDC21406A2DAffe27c7B48e9C7CF973e0579fE0a",
  "0x6ba83a00632043803a0c84bd4501f1696360a9d2",
  "0x133a42e5Cb2E5206608d614572dE0a857fAeeA3B",
  "0x554d8D2e116D2b3e9d37d269aAa0709A8497E490",
  "0x1f9d9707923Da515B3532FA1e7B519e0AB6f6388",
  "0x4d16f54B2c846BF1a4e78f3180BC565F69Ae58Aa",
  "0x5d5EE3A6aE761a807C131e64Da6b64a5aEAAc6Fe",
  "0x81F6d057E125210678A609C2adD28922ecc90341",
  "0x1282e62244A7dB1A00d387637A88f2e674Fd6d94",
  "0x2A65aaB75764008bb090fa67F886D2cCE8064676",
  "0xB562F601D84900bdBf21C1a96c20f8eecbD3471d",
  "0xA9F9F607840A72D79799bAf6646d6545cdD53d81",
  "0xC62Ea7EA7a5ADa79283d14472beC13C3F126701e",
  "0xe517b50103c94A2beddd6949753BF37032cf8cD8",
  "0x5cd9a45cedd9bc542a5e7dce9346b59be279f788",
  "0x8cb61D8Ea39E6904F5076c7724a89559B27Dc37a",
  "0x30bcf10b02283cc99beeb839db027dca31efb7af",
  "0xa424e123f64d0871284f9a5eec2e767aa7676c4e",
  "0xe0b43073cE1C85623D7D02e7eCa91F1D482Da9f6",
  "0x6d0e90adF3f39fa1E281aDd001Bc1166472cD8d9",
  "0x41B221f46bC41243b12a181C42849ADa9a4177bb",
  "0x7aa717d582582b23bbffc798afade0328ab3261a",
  "0xF90493f135aF57e62B366bC73b628B3B77fd439c",
  "0xCeCc67b46A96A1Eb53607ebFe9BE3e18D4F8a2a2",
  "0xE98602343FA4cc2Bb6176bC79663e1d0A3fd2fcA",
  "0xA3Bc40CC4AF300E13613E221a4E9483a44A5ea07",
  "0x95d466c2d470a6b3aaa061a68d3588d46e77e82a",
  "0x9e0e342EA1AAd51F889533D3b2033E701D6de06c",
  "0x9d4e7a358E07EfeAdDdb66d6dA11688439481D75",
  "0x2B71426F2B43AB13bFb86FcB9753FbdA7E530A93",
  "0xD8A3f3EfFEa15fD793c5719782E679E2BF073cc5",
  "0xbAF6619D94b088ea1570027aAd4AAfb165C38b72",
  "0x6dBd438efee7Db527123b9f42dAbC4145F53c8Cf",
  "0x0d63a562784edfa6e0af3f034d6fce3f801c0574",
  "0x4ae0c8fb54230358c0114993ee633bb2f2fda047",
  "0x9c8cf9c7dea6cf3d95570bd706a8fed99116eff0",
  "0x49526cdc67C65a2dfeD5eAd566b5fA83E0a62109",
  "0x035AB2B210865fF9e73Dd678B653fD1eeC1C601A",
  "0x0E31947AeaAd410D76C6AC909e9F73f1F63CD810",
  "0x38FF43Ab82EF0C426Ec18fc5Db857Fea5B4DC018",
  "0x69a2e8f83bf35599227cb558c72d8487f2b5556d",
  "0x9DAFE97fA20075016a420CF031f10f2b3Fe81a92",
  "0xca7A54D01Aa8fd7A9701cEEd9a686Ea098AA3150",
  "0x1515d302D35E14c218fe1155eF24Dc99e1EFf121",
  "0xf9e0037523fe1117cadd6c91ce6f71639d20b31d",
  "0x2DcC3Dff53EE593a31E4FC15f93F040e3Eaf680D",
  "0xc307c955f903e7E5077A6c39831F19764523e0B3",
  "0xfdcAE391852e12DdD5d0d2714CA2fd5421268205",
  "0x6f9d44C588096E83Ba4B7663916B2f1b70bc7718",
  "0x1945a3f7bDf81Cb7859d1994276817bFC0e2876b",
  "0x17f595efcaba20163f56905e23578bddda97c95d",
  "0x35cd4744bfbec5DF2A5070E3E6218eDC947b44F8",
  "0xCD66a996beCa28Da681dEb7C14d621c4e75385fA",
  "0x465a9E6Fd3D544882e1F0BEcFB79C26A4A5eC145",
  "0xB50d8CFDbB28E422E45E5e248Cf996CA56e3149D",
  "0xd3a6DBE12059c9a402A1b934E6b9e6E3fA335F36",
  "0x25AFaf24EFb5D87CA7dE105baDcB40c2A9C9eb46",
  "0x1cADf8b5Eec38aB3632664Ee10976922820DeE18",
  "0xc005da9ef3b857d4b58a50847b13fe89aa0b68af",
  "0x78B1445Eb249EDc7a162a8647fe2072eCEEE60Ca",
  "0xB40bc25C83BBB0e90C752F661BA83f9CF50FF798",
  "0xa48b14a77679916c5cdd94f5bd3977b448f17cb0",
  "0xe7759f1C383A923ce77D8381b0C9100fb57FbF76",
  "0xde44077dA47040239A819e1094C880F5f5f2c5B7",
  "0xa23e43e5a7fd44cc2895442cd5f2ae95ffdeb87d",
  "0x6c5B77282a660b81c0dAea502B4Ff17107a0F946",
  "0x6e1730339949fadeee7bcdcf493ab1fd27859006",
  "0x1E997E47CF3D92034436C83DA68a701dEe881D7B",
  "0xC374dA112349704d2c84B57345D11B3Eba3b09FE",
  "0xb2c0e87436118186b01a77b9be894202289eb894",
  "0x54068cdD1e4A05641674Dd2713284bC89e5FaEA3",
  "0x73819504534d6174cb0a6887bee2f09a4e5cd03e",
  "0x69Bf5390BADdAD9f8187D1fce826F93dB786c91c",
  "0x1677236b46fB9b8F3f9e35cC726edd6886FF7640",
  "0xbD8D92A867267b86cf7aF888d414DC8503E30f5A",
  "0xd77D9Fb8dc5cB683AAA24F012Df0c54C7483d5a3",
  "0x594BbDB378134556C41638e01dF23F1B6a6c5D0D",
  "0xcbc305cd0e1d80a8e08a2bb3a3249a53360a23e7",
  "0x1D1E9Dfa122aa7a02c9E44D2BDB0318B1D086D07",
  "0x963C672d535954C0Ea2D26a2E9c004F8EbD7edfB",
  "0x127e82E73A9bB9e01ea12e9aBeD5c3232EB0617A",
  "0x07b41f4f0Cd63e4CC05718cB7f4096cC39A6aA17",
  "0xFF1EC9589108058fFF5f87814475744fCf15C539",
  "0x0981B7A7708359b7B3ec469DFE1eA10e35201CD6",
  "0x969a3454ec5DC48D11802bEb77218A7A8744a9dF",
  "0x5BD9F8507205448518Db8FfBBfC4782fD01b4acF",
  "0xf3574e58d8a45816168922c419afadb2dad16c2d",
  "0xc2E340d2B593e1CCcd314BFF711707a8Cd63c7E1",
  "0x597bed1d837194983bAAEb387f2939565E578f38",
  "0xf5886fbbfff34ae2f65789f7d3d076cfe95575de",
  "0x172cE12a8e290110C725EC55859151aF189c3f9F",
  "0x1dc42f4797fad62d3e688a0d8f6435c6fc636542",
  "0x251FA5412A0d1089446e2F5713f0FF4940b7012c",
  "0xa55dB915E6D154299CF9668e36de557925aeD184",
  "0x7e5AF24D79DA4fea12f5e8A56FA80523AE122849",
  "0x612dAD6d8c781EC6B2Ef15F27c404cF289d0C5D5",
  "0x06e5767cfefe6f5d049970e57ed25f5297396bef",
  "0x7323a3067243018A0870EaB1762bF5cDe5328CA6",
  "0xc7eF978f11bc19a4fD1164FAbe3CEb372C972101",
  "0xfe6491c3999265d91ed8697e32cc4808d33cdb43",
  "0x05cd96863125bb369702d393a49eb9a0fc4372fe",
  "0xaF1a26c9ccD041583C7ee9168336bfF3a2d54E5e",
  "0xee38bc4231676b3513b317199ec8f5a03ad8e15d",
  "0x19Fd01258D6aa38931698ce55391616fc0525F45",
  "0x66B637C71D121D3D4D57FCaa97fA6C62415289Fb",
  "0xC7CF73cBE3f7889e0248C2ECbE045B1622129BC2",
  "0xF99132f741605Eb7fD80e1CC845717338bcE6919",
  "0x62c50E7E0884e138F6124dC70121656E68AF27A8",
  "0xC6de3Cd7360b0080AED0092076b8F153D63bF743",
  "0xC7Fb3DA8AB548ad4E0e6d9139912d3F2c7eb159b",
  "0x34537Da4A0Fb59BAb319Ae8b14b26937D719cAF5",
  "0x91c831Df05fEdbad366d057AFE2DaD702B8F1B3F",
  "0xcF70a2f9578814915c4C63A4d263E7a0216e859B",
  "0xa0da9E313CBDaF27f351d40749C2c3E7d944377c",
  "0xB478240FF4b8E26428eE64e271D71173d18bedbd",
  "0xeaf50052C641F3FBE5eB1A83ca760BbFC5E46B4B",
  "0x3a47Da237eDa6ac424a11dF440B7bFc6e51e92df",
  "0xd579F5fA0019977D7C39CEBecaa74AF0FD98c724",
  "0x09234DB68996a6fF5E74339306D4a5B995FF07c9",
  "0x95092276c80317f3317f738a8a5e90bff0d71105",
  "0xc0d619ec2d87b97c04df8f08c7499c4c7f5ad0f1",
  "0xf9A215fE2F4DC1dF2037b6539037724A7Cf88D84",
  "0xc41f3FF85E94e0c6814a03851be3fA074F369E6D",
  "0x78B081081C38C5cF63D9DDe72a8E298a07044AD4",
  "0xf94059eEaE73df87b6497fC194b78d76F754a682",
  "0x12c3f35336dc8baaa0e2657982a1f951edd63794",
  "0x5f111524607C844576f8Df8863738fF257Bd82f8",
  "0x9F543DC24a2f27DB708C9C9780a6B16Deaa73eC1",
  "0xDe58FB97eeC98B7Ab066b1585C3fd9f934EB80cF",
  "0x7d0E6C87043f45AeeBf6eDEEd7E73223a41F9AFa",
  "0xda4Ce4e16cA57bCBfBebBBa20040a504ecA601E6",
  "0xCdbBb418e19Ed31aCaa22131Ff8498f11E7c85a5",
  "0x242440362cF0c485befc5EF8B85f7caFFB8736C3",
  "0xf4b665e2B5acB0452Ac454e8806d9be01e6395e8",
  "0x5e7f6d48c6783bde44b41d4f98a29e8fa1621f62",
  "0xa63e53cd008573d4f2f640Cc29Bcb3F6c59807B8",
  "0x6DC6c143678cf5C18e3fd28F5e99913F96b0E193",
  "0x1899f8b8075917684d4c5ecbee613a6ac8bdab32",
  "0xDcb255Ca5A02B9e02Bf4C37F305A4723A801449a",
  "0x5fc4a32e1485Cb5bcAB0cAA47Aa1A3e7780B7240",
  "0x1365bDA8a2Dd33C771888e278b920B5C57e0eeCa",
  "0x116FC0C6fC6EEf7b037C629ec8849e97327E6dB7",
  "0x8840BF7376BFd0EF6E4F9Df43244fd8cdF92da92",
  "0x4FB8c16984c6a23385cBb666FCC139Ed67Bb9c87",
  "0x7958cae37a8f40c09c0bb8f5a98b7493295d6263",
  "0xddf424ca58a72c915f16ea8b506e7cc6091a0a98",
  "0x9A17DBF55e145062D3574D2766d2D6608D31c1Ab",
  "0xE802cEB819739b9E42F4faEd9f240C37452BC379",
  "0x3ef7b776a7E2fdd9602675FE33367dA0A514CB5a",
  "0xfb330a047ef05e0c82fbcfb9ccf35e395aa74f84",
  "0x60B5ae558C124B3DeC5480847503dF0c135084dF",
  "0x947f6c231f1eb92b84c5c2442462028521e3df0d",
  "0x50b52a6d8f7e3038b60efbc373facde37c341ab3",
  "0x1849Eab1449b5505aEafe6C1c0aD17AF9127898A",
  "0x1cCb966fFB43d65Bd5079eC5542343c66e1C33E5",
  "0x0Fbd240ad5b61826ec7F6CbABf99B26b1B27ce04",
  "0x9A325803E834e332d18FE457B521d4c777a49b87",
  "0xf114E852BD25352830Fb61786A8681933392661D",
  "0x97547BE1600EDF333659E705C91735814c442286",
  "0x707912C07136289dD5d2fD1Cc70108920d6ba744",
  "0xF5a5f5a0eDAe0C424F6D73F69E2ad808729Bf7cc",
  "0xfce206D5892f8cB3b99B29A507F40CDF4c3F7374",
  "0x19ecfc1106ac8e0c9f0a79da50f099d15c29bce1",
  "0xA25FC0409EAED60e624D198f963d27aff4682776",
  "0x87c455491f01279d429581ab175c451e891d1adf",
  "0x93D78C22DFD5EB4872D6fb618aca8253dcFB11FC",
  "0xa1f6db6697ddfdcc0c1e599627c5da6c095ee90c",
  "0xBbB57836646ED07CB5b98da118A3d6B0cb97741E",
  "0x99BDBF05EFA6e189b9Be6e3A8333920943D83987",
  "0x4918463210E82Ad56529bf4BF6c55abcCe1213BB",
  "0xefF89A8b7153b25029523B795bCeFAc5A26b3889",
  "0x1cBBdD35F9A21fc4648BD61992D8aEcD64eB4396",
  "0x6c43319023261118535ad758b2abbaf79c1896bc",
  "0xd0F7789A8F4582b0fb5B3E74d8eF969Fe8DB070B",
  "0x1BC31bEbFC53410E454789766A94188F8f154ee4",
  "0x49B938C1F63Dae6ee9f5b6A4Fe720d27d3F8adF1",
  "0xfd4F8229e9DC6F573eeFd01b8E80d15F51c96cfe",
  "0x35C54D3c3f0a263aE6302C06c6c9D1849F0319C6",
  "0xc3ccd5c91b9e8467f498c313817b536e32003263",
  "0x2b88720210ce644e86946ecf104750eea638a60b",
  "0x45d2dF32bCa3b31830Fcfbd8321a307fbB8d5118",
  "0xECbb3820FeaD8257184D337D772ec885D7c7Ac9B",
  "0x31D33eF04847F8097ad97290B3f3CF340cf7Cdf1",
  "0xADDE96bd80Ce65C17c450B01e31A4d1b98E9D2fd",
  "0x7AF1354e28D91392aaC5bE8Bf6DD7ca1939dFF5A",
  "0x63306baf08668dd959e712767b549a42dd82e361",
  "0x3057A5252AefBd0562f6D6BDf5Aea5fd5455463D",
  "0x02087E651131558A61B14EbdB1dc5B58aB6191eE",
  "0x8c2dbaD3720b39B94bd4F9689113842E50d2e4fD",
  "0xd351aC6B69b206aad278Cc8DE0771B8d0F13477F",
  "0xc72A8277F4B3554BD4A9F8B6CF15744Ac6E623d3",
  "0x5fF64C1970Be029e7B37f9F57fbd533357853622",
  "0xee5de2448c49dbc03c8d89fb5cd83b13c3202962",
  "0x0BF86FD50C948F5Ec0468e2901f06CAA8e946DB4",
  "0x349EbE36ae5bb38A5B5DA4834faCc3A43B13090F",
  "0x2917320880c382a669f348f5e5825196d7ce7093",
  "0x710964EdaA19CD7a1Dd0dd8ecbd122A1C900CC36",
  "0x43fac9a92c8312c4503046e680e6b577dd2b064b",
  "0xd7db63cf600a6770ddd854c4b815db17ad60b83d",
  "0x662B42e279fD72D4C6F9F90112Da288F34cd9126",
  "0x6ABD9a5c1FE4D16132bd36fEFF4B746446E9F42d",
  "0xf1b672832ed3b2080620849ef1c4e98b93d31327",
  "0xFE881523Ca39A0c3538AFa00F8dE0866012C97Cd",
  "0xd1a363E840667eC9Abe17D7a39da0c50cb90D9bD",
  "0x87B708d4Ffd0677ECd01AF53D1aC8c1a5fD3FBD1",
  "0xb0Aac3b98aF81b785dF3543b1C79957127F9E446",
  "0x5fc58685f5b9773a0d976f90ea4fb0d969791522",
  "0xa894e5226a89677cf10F36134569edf085D98387",
  "0xC7215aa66bEA51BC6d416190e6961B863900143f",
  "0x2CF51C61acFF2E1542Cb0745e7A78Cc5BB5473b7",
  "0x836CFBF5E84EDDCf496DC461E8256b16Ca2D6221",
  "0xb74cd0dA000C77cb9Ad7B3ae7B77AdC13B306731",
  "0x6e2009985F1E398fd2c3825db7ce832F464D5460",
  "0x60A67dEc7DA916a3c29346409D7b69a1D5921c76",
  "0x1C35e17dCBD110480C677B9cEFb69594152a5188",
  "0xE002793C71210472d6F17eb533075346358cD20b",
  "0x0dF2d128A28D7Da52165393900Ba97606ad40c78",
  "0xC4040BBc60f57891C087b0884811a3bB9a1Cd22F",
  "0x7b19FcfBb3AdB24030F8B9FBb93EB33B66F6B2d0",
  "0xbbB42ced913Db3E09f2A36D24356c73566Ef072F",
  "0x5e17CeaaE69261FF4161F728EEC5bef2E457D0B4",
  "0x5F225CC0804C75A8AB811c5bD5461a2038800e04",
  "0x60ae4dd8ff288c421831a1816cc45bb86ddbb61f",
  "0x191B2D35836dd2cda869AEE25DA5995E6E89be39",
  "0xccd6e2951bfc245d592108bad3c2aed0fb6333db",
  "0xB24a07A3B69050b9c1D5CeC74a43BEF9F1f0b4C8",
  "0x4f6dc17c3b4f6c830354fb30196d49e8f3c77b65",
  "0x2862fc6835e1fc27425d1282e50d2f335b715ca6",
  "0x9dD2933924Ae6Fe0F1813Fe5ce199155394Aa748",
  "0x82460dc6a42cBa167fe86fc1ff907e04328766db",
  "0xD880724bfb9A06Fb3e1F2547300933fB2681c294",
  "0xCdD50F11e707B071c4D02A5c7F0021b10B66EbEd",
  "0x0616CCcEae161e8Dce52Dc35759285bf7aA95c97",
  "0x8d2a1252Fd945d5167e46Fe156D0DBBaD1f497Af",
  "0x403b5a2187F8350953B46a1df411Db8E2f1bEBDe",
  "0x2B2cdD9133AA5BD280436070d2b58Ef09Cdc83C3",
  "0x953ab267500d444c3cd668f7ad47981e4ff47a7a",
  "0x64b5D49Bf29679F863b3D08002558c39e4336Ea3",
  "0x6f3465D9Ffb81bC42ED64f9d9C283aAeCe56B90D",
  "0xdD3EC5B72B146ECda15cfE59dEC745dF7CD4b202",
  "0x78a1124dEF2ce7E3a075E947B86D6dbb2f4Cb62f",
  "0x25b60c4A684a045b12F3E921C2dB1c6fe1c81B89",
  "0x7F3608c9e59f1a2589c13688E10cE3AE14bceE16",
  "0x153a4f9899e3d972d1783AF86c1edfe42E41ea9B",
  "0x8396F67063DAe6BE2A540FB3490A3A494d95a24e",
  "0xeE645e318a1cF5681E67Ec75e8509532Cc09f0Fc",
  "0x7a6E79E9039036c63C9bc7eEd7A2dECC565Bb66A",
  "0x65849258813830FCBc0f5DaCf62e6Ca4547713ee",
  "0x6f4bcccc88529eca56803c08c4740e139c28df0d",
  "0x4dc3a5f4f9b9c546d68cd8264b755503e1824a53",
  "0x7a76d2abf30ea20e087042186f4d1171b22c9ef2",
  "0xcB8Ec2c8f93263B87C97dc3eD5fa0b6808b134bE",
  "0x2d0c982b63f370506ff75249d33810df88a03f18",
  "0x7DA9FDE444d9B0c4AcC6C260f6fd73d65ffF691b",
  "0xE66E4d29e05f7b0e495cb95E5e22d940C8dbDFdf",
  "0x9fb2E26BE2d53a7E900Ad0F2391e9ACf06041EBF",
  "0x33e17C04f223c118E5f7cCbf70049163481d3096",
  "0xD1c038EfFE0C27e81295448865Ff946F77E5cEB1",
  "0xa8ea01f86814f53920c30c0ed4ea19667488a15a",
  "0xEBfffb48A69A1B6Ad78B1aD54e0bc2A1F6bd7D3f",
  "0x848aa556eBCC22607056188c6F7588A8d44368DC",
  "0x2aaa1559DF9FB5af428388A5cd37A2D72FD33ACd",
  "0x7bf294c4d870A748006618C51852fe984e9eE8f1",
  "0x4B6a4625ce577b502E17F69d330a1d015cbFa9ff",
  "0x801694a6d493E3a884B0141Ba50A0512873A21D6",
  "0xD78E49E32A13fEe788A31e326fFA276e73c048e2",
  "0xFB9244a4aab56A566eb142427C6CEDa8c62e92Df",
  "0xCe83B4527dd4E6386c6Ee8348dFCc95892c2379F",
  "0x66616c2490C650882C2ecBfd10CbE90120Da15D7",
  "0x22fBB5AF2d28Ad76681fD307c524aDB8e523f7a0",
  "0xc031D83c85B655696eC5e7254C11E59EF289Ee4c",
  "0x9d5FABdE1e30e18A2622A14e41Cf75420141Df3F",
  "0x457445abd4aB604e03126D9a78eB8Ae651ADF57F",
  "0xF076aAFe47c5A1E035b174545b68F03f06030c53",
  "0xd75175D8BC713E9a9085a393F4a267c3Afd93671",
  "0x58975536EeC570D29ABDD2Bf161e206F74145636",
  "0xA55FB1cA12FA54a85268D1A846d257632bDdb0DE",
  "0xF52D8597Ec71c4c731c03765E13422df45CeB207",
  "0x6994a2fa2dbfc7bfd126d1272baf0306b0b6b4d0",
  "0x63e2F39EdbCD8Fd057b379341002BfCC4B8d89E8",
  "0x8337dc56119E323180e0E08650b09a5f2bB87328",
  "0x53b2E6958C10dC16dE1513F3AB933662B772358D",
  "0xe954dCdaBEf4B08bE7b9DFF2151D12dE35c8ab02",
  "0xB9E54b49C4e118933591d8816B41b2E10e83Cf57",
  "0xA137E88Ae8299882864d685a71806b36f826ff8A",
  "0x6F533e94c5b1ec4e0cC1A244e91cABf626d36BF2",
  "0xfD533a21af5048CAB7752f32629cFed7d4bDD3D9",
  "0x013D1d97B9661E4a06FE734b37FCBE0e8450D379",
  "0x7640F884967BF69B2c4F6840C2F30F2017450f43",
  "0x560C4e7c2948483659b94C40a2A0A079912e3D39",
  "0xd236069E5102A69bFB3e34d34Db6aC7Ac0e4Dc3F",
  "0xFEc284C5045AF90f3502AfE3C6bA05bF2a2d1c4B",
  "0xF3D2e7642004Ff76946728bE6835f2CD5E95C315",
  "0x3432125827A0f593161ffed14aC786f3758D2121",
  "0x09e9C348eD59dDa5F707144c4510C61b43b60B31",
  "0x2213FBbc97461e34BBEaA8C762f2Cdc0C2A35511",
  "0x9308904441E5965F31d60af728a74B36eeEC5748",
  "0x445ad3c2c30e0C265202fF4780473C9F2877B46C",
  "0x16c178da3E3414e5458bB49E911c5432c9114486",
  "0x0b3734085ea9f36ed86a6403c5fa42f1f64e1263",
  "0x2d86514b681e259630e06ADd053098BdD9D05B2E",
  "0xDfc38B266ae07605b526a6229207cA8C3E604d83",
  "0x79fd91778B3D1597d1eB12c97aFaFd3CB37a2AF2",
  "0x0ef9aDBeF3730BA4CF917b0194f018F420ae7a09",
  "0x2b21DD3a627DE2362fa65724151C79f0b3f96F19",
  "0x0De72a78e2A67E9ad2d4721127fe773c601e1B37",
  "0xe160251A34B3FFAb764d24BF757e4D2f537Be1Fe",
  "0xb6EAa53Ca60C77D06482bf547bD0d189E2C2eb39",
  "0x5D397a2eaC21BB81Bad14f4aD044955E44D861Fe",
  "0x5EA1E0F519D7a9b34342864F4E1BCdcecbe65cd2",
  "0xFA447a14f161c67b625f101D5322E667454258F0",
  "0x6760eA1a3B6c86276839880513d3d1EF2e576A0b",
  "0x1bf8379fd80ecb6992887f6c30d996c35c014233",
  "0x8fcea469F20f0474fA552642218FcDF051eaCcDf",
  "0xafDB3592B08ADb400dFdDE29e9101e9C0289B196",
  "0x106e621c5DC470A86C36B1A3a487cBCdaF12Bd4c",
  "0x913ec9dd141711c27fdb3ae0c2577a06e2165005",
  "0x4D05613299ff413f078E88Cdef166a04082351bf",
  "0xf7F4C374E582ed4AcDfec860C16fb49C9DAe6aE2",
  "0xA5B1d3CF9A895C66931A84089c9Ae72e97D00714",
  "0xBa12C7Ad58a0Ff5946d260B1d02e1549F3259f4d",
  "0xEeAA371Be12B0a097fe750b62fE5ce4b5C25999C",
  "0x542c238ff2179c5f2e1f9d5570e72551dfcf70ae",
  "0x948d7b63323D990b412102B9266f8b51c424E34A",
  "0xA008d1C67b3D99487c37BAFacC3910fe08601667",
  "0x73cbb474084b079675f250d41b6023ef8f6e4d79",
  "0x4E19646B2744021690F7Da584117b083Dc73a412",
  "0x0Cd66dDe4d86a12D2226c373f7AD681bC09a76f6",
  "0xc245561Ff6C1b1F5263DE279249E0BD074573094",
  "0x74FA5736f1A43b076a3cdE71C6cFe21F13F47369",
  "0x856c9a9ef9ac89f965197022dda233cbbd0cac67",
  "0x02b73F383fF737B52B3223d84559bd2B58D22104",
  "0x3153392C63aB7385C999EF71Ca3d42b58EE38394",
  "0xCECE9EB4A533Cc99064Cf75C8E5CeB76F22242F1",
  "0x5d11A8D1d339d6411295d1e99BF400f9015BDbFc",
  "0x4F1f850CdDFeF134BBa344aaD6BC783667D226d9",
  "0xa6a71e4523910611fC571AE1F8D33e48711Abfba",
  "0x7Ba7586C0e22449cb80B3cC8daB3Acd6ce358D24",
  "0x98eAdE4CE1cCCe89E0ca15eb79fCed4bC0D8b264",
  "0x3d6F587ba83CFb3745af43032D5B8BBB66f04Db0",
  "0xFC68dB8917ce1B2CeF8dEB1dF1B74Ee7219D4c64",
  "0x0E671EFD0B96cb4319FA435A8C3326a43951dD36",
  "0x3F8403A92064F9b2b9A1e232D316b0e4F85F729e",
  "0xc9f48aaca7d74b2cd2b539b92ef398da92fcda70",
  "0xF19790373017DCD2D7e59c7ADaB53f773424812C",
  "0xc7d20B00a273B7F3cCF833276814533F5F43099F",
  "0x3a9c2d4fe8d124df5e033e99a41e3ca93f17e228",
  "0x88Ae22f380bA7d880dE50CCf6A6071e39Ba8d0b5",
  "0x11128ACC6094d0613Ce10E5Dc27B8f07AF1BF243",
  "0xd61cc1039E62cfd5eF00E76dF1b6102d528BeA13",
  "0x243406cffca954acea7d6ede5e93e14c165dd2fd",
  "0x84aeb832aE7ff6B07ce65Fed329ecCc7663A6480",
  "0x82896928bce63eac6493687dbf44dbb01b87bc3d",
  "0xf2199dd7e7398c69fc563a8f74f70103ab6c1b32",
  "0x417584508837B95623d23526541fDDeD884575da",
  "0x16c0072f63822473e891b5de56c1e8b6399f90aa",
  "0x302EAAA3E904f4C01C1AD85C3C2d2871072b6153",
  "0x91A958FE5BC68d4b577f7a96077cb6C5d25Bd256",
  "0xA10aF1841FAae3fa3881C08A2c4d0a21D103Ce9d",
  "0xFd26E88ECba9Dba83adD7FF01AA1bB835b92a16D",
  "0x8C2eeDdFE04610Efd5e14295F047B943B6d74e0d",
  "0xe518bb7498d376d0e8421c6a7ba53b9a46b301c4",
  "0x00f91b1ed9C366339274ab2B10779c48240FbA35",
  "0x45d11aC7a736d9DeD65b08C099f80f7c2500A613",
  "0x824C39A1C493c000612d58F39566371B61C29AA6",
  "0xca1a9ea48b4cd0a1ca0d60306e5703e624c4f7ec",
  "0x62577A6f9f8326fEEB66B3BbC933EA447c2a4c34",
  "0x01e89317af07674fE6CF69B5F7A9897b369986Cb",
  "0xD5930fD88b6a6012Fa370ECd73743aC69102Aef8",
  "0x8AEB458ACA4416dfD2DFfFf6174f1CAA4280E01B",
  "0x393077d138FE34e19f0e119Ed15d35F9a0e9752c",
  "0x9511d7bF69c22FEe40Fc743296C27D0FD70aE7a9",
  "0xE3D47a55bAD21A9c2B7D184E420A7aB64B746feA",
  "0x1f504d4983842efb20614ed7643bef27be914cce",
  "0x1dc9863bc3f53af0bab915342d67cb7e89f449c1",
  "0xA4E89762F12A5d3efBd116f0de038e7111F13a7c",
  "0x4289480e4db1DF37569CF8c52BbC308c22a496e4",
  "0x68eC7cd34DD6CB4Dfb01D98e84DDF4bEf0325230",
  "0x23a556D77eE09aE7a2c79099c6EC31785258C4Ce",
  "0x27D12F4BD420C15a27Ef724E64894Fe4F0B4391A",
  "0x478018B5fb000b8789aD5e3341412Bda80FCF35d",
  "0xd31154d15b05af96decf51e2798e93d5ee10f74b",
  "0x0602f1C1bCae46a1443186f2edA2336609CE2940",
  "0x7f165814CDa211b0575eEE8d41b5C38cd0e089ED",
  "0xe63ef8dd0018d0edc87c928c194100f83de9ca49",
  "0x58c60405021ab47a3f39e25b8dcfec247bd968e3",
  "0x17eC0a175D5B3F23fb1cCE63EE3B7EC645214a24",
  "0x926B463B9289b83153F9D3BDa98DAE53Fc34eb7a",
  "0xaC1564fdf7AeAAEaDc1e931FD465f8dB3a8936fc",
  "0xebe49057839ccada3d1c641c49e684571249a8ad",
  "0x4991938B7bDfb6133a1A2a2Cc6d2b365E7383e6C",
  "0x4a133EdA0eAcE5Ce4Dbd54bDa2d55896c6bD54F8",
  "0xfb6a1e12fb32d224fa261f44188e9a392c8e8d70",
  "0xc3fEE87ae4Bd1D472D2708b96852bC515c83F064",
  "0xfde75a42bfc5c26430407225542730453c316ade",
  "0xBc68753C1AaC9db65961D0BA14D23adB6614A442",
  "0x0EC6Bd95c6Ac6ae0f4204aa146059f0644bCDa3e",
  "0x30675A69E2903583c3f8b33DBFE82CE66933ed9C",
  "0xDd8E0F2280218A46563F5723101FC9D8C8Cd9e6a",
  "0xF735b778e2a3a091dDc4bf79e77e5d044BE451B3",
  "0xe6150D07b982Aa6688130B9d748e7a65eC6b4dd9",
  "0xb8f9cfF85110Cc8caEBb57E39F840C750f2feBA9",
  "0xB6bd20e9b957fEb9EDAa1A74FF58b15f749Dfff4",
  "0xB9A01C7884c3d5097690E9101bDCF16fa2530D4b",
  "0xeE6fCD7c9E458689351b5C75975C0d8524390DC6",
  "0xd07eeec23c00e3266e43ce97ab05ff7f92d46552",
  "0x3A10EEd20EB08AEceb357aDB7C0c29BDc3D0a857",
  "0x7A0a7fBfc8ABAc1E5548E8a606f6C3bc643dAdDE",
  "0xC9A7BA78D88f81E9a1f879f9c2926Cd5539b2Bf1",
  "0x77C295a3DEeB8D15B8f9bf82476cB2E912203025",
  "0x7C91e35794B96260eF259E07323F1760c6f34d62",
  "0x69F46F3469d395141EE600144fa61BdF20bDc019",
  "0x789f8aba4bbeb3ee9c4f57d6c9420298641eb21a",
  "0xd8786521b598a1ee0a8efa598414b69cb19c2902",
  "0x7Dc6caA0De4320D0888acE095D4A1eEb54b54a7C",
  "0x373c5bF158F2DdB6d8EE660AEB5c187eE612f5F1",
  "0x56a58E1115EAF13383e3aCd9466eb2Ebb8b89184",
  "0xA98C24925606F960C744A37487FBC18974AbF9E8",
  "0x51Cd420c7b317315FE65536704bd958E8163Aa11",
  "0xbad8b53ec932d7d9d31383f6fcdbbe3f1abab89c",
  "0x8B87D1b521a8fBAFf48CeDF6290Dc9ADBAe7A425",
  "0x2e15D62B199477F32fF905cEdA7878c8f7C9B243",
  "0x31B14fe5f400c97c1770Baa8743ae97d75A9cB5c",
  "0xfB8132c1D236cF8BD6A736983fB0e06FD5A773eA",
  "0x1796a6aD07336c0293E1D0F6Aa79219a626B1053",
  "0x970cE66c404C55585A63052c8f976B69E2C8D509",
  "0x451af08a93c76de4314ef207277579a73b91f0d7",
  "0xd769EDf1637145C601E8A8Da3E38719Cf015D8d2",
  "0x24Bcf084D93C43Fbf6046001C8c51525eba4989b",
  "0x96b569CE4cDDedF0Bbe2993694be724f22D68e41",
  "0x5f1185161b116f5640ccd61862f1f2e0e31c5635",
  "0x65fc5dE96132d69fC821a9bc103B49fd4FFd50E3",
  "0x5beebd64606f09dee95c4eac89415baf48796593",
  "0x354Eebe98AA167B404D5229Ddbc971C5D5A9C139",
  "0x488f886fbf56eB354fAd25A9f8db3bcF93Af608E",
  "0x1673abcaf26B7C9B30f39006b0027d486f17D276",
  "0xD2833eAf93770079C241F491ef13E0BfE65e50f5",
  "0x134d64c85BDF22aec2C1aBcbC2A231a4253C6A14",
  "0x2B5A904bB12B39b1527412A0b2C0121C3b35ea7A",
  "0x87c632E1097ed29825a2dA4985B086c108a57b4B",
  "0x505A13C329E34C4C56E9Ee3f0fcb95856143EC56",
  "0x853640D99131C734073a6cC6091C30a15BF650f2",
  "0xc220a25ff39461351e22ca0a27c4fe26c24f1efd",
  "0x242256cc49314Ad7B3DaF0bFFe6C636567A18dB8",
];

const statuses = list.reduce(async (acc, addr) => {
  const status = await getStatus(addr);
  return { ...acc, [addr]: status };
}, {});

console.log("Valid:", Object.values(statuses).filter((v) => v).length);
console.log("Invalid:", Object.values(statuses).filter((v) => !v).length);

async function getStatus(addr) {
  let value;
  try {
    const stored = await redis.get(addr);
    value = JSON.parse(stored);
    if (!value) {
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }

  return value?.status === "valid";
}