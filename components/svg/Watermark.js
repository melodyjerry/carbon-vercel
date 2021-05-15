import React from 'react'

export default function Watermark({ light }) {
  return (
    <svg
      className="watermark"
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="23"
      viewBox="0 0 55 23"
    >
      <g fill="none" fillRule="evenodd" transform="translate(0 .5)">
        <g fillRule="nonzero">
          <g fill={light ? '9e9e9e' : '#616161'} opacity=".598" transform="translate(1 1)">
            <path d="M47.34094 12.3042565L47.34094 7.22952023C47.34094 6.50297602 47.5303932 5.9055571 47.9132761 5.44668873 48.3054745 4.9766561 48.8535146 4.74052482 49.5369485 4.74052482 50.1396656 4.74052482 50.5911663 4.91831481 50.8677327 5.28412438 51.1283974 5.62890107 51.2547121 6.097364 51.2547121 6.68422795L51.2547121 12.3042565 53.00162 12.3042565 53.00162 6.52591729C53.00162 5.52036619 52.776058 4.74383957 52.3318147 4.18893698 51.9001889 3.64979503 51.2194293 3.37729412 50.2673588 3.37729412 49.6663072 3.37729412 49.1694081 3.50125861 48.7721489 3.74607185 48.3703725 3.9936688 48.0436564 4.34436241 47.7905366 4.80193246L47.34094 5.61467775 47.34094 3.59717004 45.5940321 3.59717004 45.5940321 12.3042565 47.34094 12.3042565zM48.5191991 3.34272779C48.9972773 3.04810941 49.5814905 2.90236214 50.2673588 2.90236214 51.3558099 2.90236214 52.1764342 3.2308494 52.7070999 3.89370182 53.225148 4.5407936 53.4807245 5.42064901 53.4807245 6.52591729L53.4807245 12.7791884 50.7756076 12.7791884 50.7756076 6.68422795C50.7756076 6.19222867 50.6758451 5.82223981 50.4843488 5.568951 50.3087542 5.33669509 50.0008676 5.21545681 49.5369485 5.21545681 48.9914319 5.21545681 48.5800934 5.39268813 48.2824564 5.74939309 47.9755038 6.11726231 47.8200445 6.6074854 47.8200445 7.22952023L47.8200445 12.7791884 45.1149276 12.7791884 45.1149276 3.12223806 47.8200445 3.12223806 47.8200445 3.93207973C48.0256758 3.69985458 48.2588073 3.50319574 48.5191991 3.34272779zM35.9183434 7.95071325C35.9183434 8.64800651 36.0103993 9.27721215 36.1936661 9.83893225 36.375694 10.396855 36.6377063 10.876936 36.9796536 11.2809087 37.3180921 11.6807362 37.7329912 11.9869341 38.2268618 12.2010191 38.7227425 12.4159756 39.2930412 12.5241324 39.939518 12.5241324 40.5859948 12.5241324 41.1562936 12.4159756 41.6521743 12.2010191 42.1460448 11.9869341 42.5609439 11.6807362 42.8993824 11.2809087 43.2411011 10.877206 43.5015491 10.3974796 43.680697 9.83993674 43.8612858 9.27790929 43.9519973 8.64835414 43.9519973 7.95071325 43.9519973 7.25298508 43.8612629 6.62185895 43.6805926 6.05676648 43.5014988 5.49660511 43.2412336 5.01721547 42.8999049 4.6167354 42.56141 4.2195803 42.1463286 3.91461545 41.6521743 3.70040735 41.1562936 3.48545091 40.5859948 3.37729412 39.939518 3.37729412 39.2930412 3.37729412 38.7227425 3.48545091 38.2268618 3.70040735 37.7327074 3.91461545 37.317626 4.2195803 36.9791311 4.6167354 36.6375733 5.01748427 36.3757451 5.49722789 36.1937733 6.05776737 36.0104229 6.62255357 35.9183434 7.25333162 35.9183434 7.95071325zM35.4392389 7.95071325C35.4392389 7.20570163 35.5384554 6.52603231 35.7377028 5.91227769 35.9383288 5.29427634 36.2300997 4.7596692 36.6131589 4.31022693 36.9992811 3.85719089 37.4740161 3.50839788 38.0349041 3.26526178 38.5940658 3.02287402 39.2295117 2.90236214 39.939518 2.90236214 40.6495243 2.90236214 41.2849702 3.02287402 41.8441319 3.26526178 42.40502 3.50839788 42.8797549 3.85719089 43.2658771 4.31022693 43.6491654 4.759938 43.9396009 5.29489912 44.137308 5.91327857 44.3334385 6.52672693 44.4311017 7.20604817 44.4311017 7.95071325 44.4311017 8.6954656 44.3334156 9.37342617 44.1372036 9.98407616 43.9395506 10.5992107 43.6492979 11.1338351 43.2663996 11.5861869 42.880221 12.042414 42.4053038 12.3929056 41.8441319 12.6361647 41.2849702 12.8785525 40.6495243 12.9990644 39.939518 12.9990644 39.2295117 12.9990644 38.5940658 12.8785525 38.0349041 12.6361647 37.4737322 12.3929056 36.998815 12.042414 36.6126365 11.5861869 36.2299667 11.1341051 35.9383799 10.5998353 35.73781 9.98508065 35.538479 9.37412331 35.4392389 8.69581323 35.4392389 7.95071325zM37.7609003 9.2787638L37.7609003 6.61386766C37.7609003 5.99448051 37.9744619 5.50123004 38.4007689 5.15491688 38.8136549 4.81950642 39.3298097 4.65257446 39.939518 4.65257446 40.5483711 4.65257446 41.0637762 4.81599552 41.4764648 5.14467215 41.9044489 5.48553055 42.1181357 5.98247386 42.1181357 6.61386766L42.1181357 9.2787638C42.1181357 9.91585363 41.9046462 10.4157389 41.4764648 10.7567543 41.0637762 11.085431 40.5483711 11.248852 39.939518 11.248852 39.3293845 11.248852 38.8128607 11.080163 38.3998836 10.7413894 37.9742052 10.3921967 37.7609003 9.89784028 37.7609003 9.2787638zM38.2400048 9.2787638C38.2400048 9.76200411 38.3947998 10.1207578 38.7053323 10.3754939 39.0285661 10.6406492 39.4366397 10.7739201 39.939518 10.7739201 40.4436767 10.7739201 40.8528691 10.6441762 41.1763913 10.3865141 41.4844209 10.1411908 41.6390313 9.77917108 41.6390313 9.2787638L41.6390313 6.61386766C41.6390313 6.11949112 41.4846181 5.76039274 41.1763913 5.51491242 40.8528691 5.25725034 40.4436767 5.12750644 39.939518 5.12750644 39.4362146 5.12750644 39.0277719 5.25960274 38.704447 5.52225777 38.3945431 5.7740101 38.2400048 6.13093802 38.2400048 6.61386766L38.2400048 9.2787638zM28.0408082 12.3042565L28.0408082 10.4629837 28.4843505 11.1771241C28.7482771 11.6020681 29.0826011 11.9321088 29.4891202 12.1701598 29.8910713 12.4055359 30.3707403 12.5241324 30.9324456 12.5241324 31.4956758 12.5241324 31.9827643 12.4077318 32.397558 12.1764423 32.8171029 11.9425034 33.1632985 11.6249128 33.4381912 11.2214766 33.717306 10.811844 33.9248847 10.3307477 34.0603998 9.77687906 34.1977961 9.21532192 34.2666867 8.60668568 34.2666867 7.95071325 34.2666867 7.30633543 34.1977736 6.69892339 34.060208 6.12815499 33.9246926 5.56589293 33.7172551 5.08234508 33.4386143 4.67617127 33.1637004 4.27543017 32.8173657 3.95906958 32.397558 3.72498424 31.9827643 3.49369467 31.4956758 3.37729412 30.9324456 3.37729412 30.3650372 3.37729412 29.8841138 3.4958714 29.4853692 3.73091616 29.08153 3.968964 28.7484224 4.2991244 28.4843505 4.72430237L28.0408082 5.4384428 28.0408082.527702207 26.2939003.527702207 26.2939003 12.3042565 28.0408082 12.3042565zM28.5199127 12.7791884L25.8147958 12.7791884 25.8147958.0527702207 28.5199127.0527702207 28.5199127 3.89711478C28.7333519 3.67164533 28.9736478 3.4800006 29.2404967 3.32270333 29.7170894 3.04177003 30.2824973 2.90236214 30.9324456 2.90236214 31.5749781 2.90236214 32.1429161 3.03808345 32.6324445 3.31104518 33.1169589 3.58121114 33.5184177 3.94792491 33.8347913 4.40910172 34.147438 4.86484582 34.3776627 5.40151204 34.5261971 6.0177908 34.6726814 6.62556322 34.7457911 7.26996557 34.7457911 7.95071325 34.7457911 8.64331987 34.672659 9.28942966 34.5260053 9.88882318 34.3774705 10.4959052 34.1473871 11.0291597 33.8352145 11.4873083 33.5188196 11.9516535 33.1172217 12.3200688 32.6324445 12.5903813 32.1429161 12.863343 31.5749781 12.9990644 30.9324456 12.9990644 30.2883881 12.9990644 29.7246242 12.8596757 29.245441 12.5790737 28.9763893 12.4215214 28.7344388 12.2294699 28.5199127 12.003446L28.5199127 12.7791884zM28.0408082 8.63672612L28.0408082 7.26470038C28.0408082 6.49563586 28.2170781 5.87002748 28.5753562 5.39439704 28.9492559 4.8980282 29.540253 4.65257446 30.3237703 4.65257446 30.9677788 4.65257446 31.4857018 4.83161522 31.8641296 5.19423544 32.2436444 5.55789714 32.4328251 6.04802012 32.4328251 6.6490478L32.4328251 9.24358365C32.4328251 9.84472394 32.2420753 10.3362923 31.8598235 10.7027537 31.4787718 11.0680646 30.9622338 11.248852 30.3237703 11.248852 29.540253 11.248852 28.9492559 11.0033983 28.5753562 10.5070295 28.2170781 10.031399 28.0408082 9.40579063 28.0408082 8.63672612zM28.5199127 8.63672612C28.5199127 9.31005484 28.6682664 9.83658475 28.9592452 10.2228722 29.2346023 10.5884213 29.6812413 10.7739201 30.3237703 10.7739201 30.844694 10.7739201 31.2411598 10.6351577 31.5267558 10.3613594 31.8111516 10.0887116 31.9537207 9.72130661 31.9537207 9.24358365L31.9537207 6.6490478C31.9537207 6.17121225 31.812481 5.80529355 31.531145 5.53570943 31.2487221 5.26508383 30.8507429 5.12750644 30.3237703 5.12750644 29.6812413 5.12750644 29.2346023 5.31300519 28.9592452 5.67855426 28.6682664 6.06484174 28.5199127 6.59137165 28.5199127 7.26470038L28.5199127 8.63672612zM21.8075559 12.3042565L21.8075559 4.88124541 24.650939 4.88124541 24.650939 3.59717004 20.060648 3.59717004 20.060648 12.3042565 21.8075559 12.3042565zM22.2866604 12.7791884L19.5815435 12.7791884 19.5815435 3.12223806 25.1300434 3.12223806 25.1300434 5.3561774 22.2866604 5.3561774 22.2866604 12.7791884zM12.2491436 5.0326917C12.5781504 4.77801442 12.9981592 4.65257446 13.5008899 4.65257446 13.9945398 4.65257446 14.3971223 4.7764303 14.6990991 5.02980534 15.0145423 5.29447942 15.1664813 5.70836947 15.1664813 6.25327115L15.1664813 7.06952897 14.947155 7.0879517 12.4359632 7.29887758C11.5284852 7.38181859 10.8469956 7.67219367 10.3801151 8.16589119 9.91168914 8.66122292 9.67970854 9.24515611 9.67970854 9.92959652 9.67970854 10.3216087 9.74498074 10.6719211 9.87452759 10.982119 10.0041832 11.2925773 10.1872705 11.5616966 10.4247517 11.7912244 10.6635559 12.0220308 10.9405873 12.2016851 11.2573579 12.3309228 11.5724728 12.459485 11.9226723 12.5241324 12.3096254 12.5241324 12.9654846 12.5241324 13.4849456 12.3884112 13.8733011 12.1221459 14.2719573 11.8488181 14.5922742 11.4787389 14.8355063 11.0085668L14.9022963 10.8794605 15.3635937 10.8794605 15.3809844 12.3042565 18.4089913 12.3042565 18.4089913 11.0289761 16.8786078 11.0289761 16.8786078 6.2884513C16.8786078 5.32213018 16.5896354 4.60616636 16.0150241 4.12094591 15.4301027 3.62701924 14.6243028 3.37729412 13.5878435 3.37729412 13.0646385 3.37729412 12.5824986 3.44035448 12.1409287 3.56596964 11.7046033 3.69009287 11.3312585 3.86932767 11.0194116 4.10317477 10.7111414 4.33433972 10.4643698 4.62285633 10.2777252 4.97075838 10.1258484 5.25385406 10.0322997 5.57824095 9.99793507 5.94544486L11.7453603 5.94544486C11.7933828 5.56400178 11.9614403 5.25539676 12.2491436 5.0326917zM14.1458359 12.5127521C13.6704479 12.8386889 13.0566248 12.9990644 12.3096254 12.9990644 11.8618197 12.9990644 11.4497335 12.9229926 11.075013 12.7701122 10.7019482 12.6179073 10.3732088 12.4047205 10.0902887 12.1312757 9.80604569 11.8565521 9.58625195 11.5334782 9.4318577 11.1637836 9.27735468 10.7938286 9.20060406 10.3819121 9.20060406 9.92959652 9.20060406 9.12473659 9.4787462 8.42460725 10.030581 7.84107574 10.5839613 7.25591003 11.3748714 6.91891209 12.3937438 6.82579648L14.6873768 6.63313833 14.6873768 6.25327115C14.6873768 5.83657733 14.5842544 5.55566642 14.3895673 5.39231324 14.1814137 5.21766101 13.8883742 5.12750644 13.5008899 5.12750644 13.0992985 5.12750644 12.7831074 5.2219402 12.5440145 5.40701695 12.3211503 5.57953143 12.2100586 5.83063319 12.2100586 6.18291085L12.2100586 6.42037685 9.49941961 6.42037685 9.50500389 6.17749993C9.51741653 5.63763842 9.63347435 5.16015397 9.85471936 4.74775726 10.0738604 4.33928236 10.3661957 3.99749431 10.7303702 3.72440796 11.0909678 3.45400376 11.5175883 3.24919246 12.0087726 3.10946328 12.4947126 2.97122601 13.0212244 2.90236214 13.5878435 2.90236214 14.7310322 2.90236214 15.6468965 3.18619725 16.3257072 3.75940704 17.014828 4.34132305 17.3577122 5.19086013 17.3577122 6.2884513L17.3577122 10.5540441 18.8880958 10.5540441 18.8880958 12.7791884 14.9076418 12.7791884 14.895719 11.8023782C14.6807035 12.0804333 14.430648 12.3174785 14.1458359 12.5127521zM11.5135701 10.1846526L11.5136 9.38934604C11.5212418 8.91012049 11.776509 8.60741106 12.2360424 8.55852119L15.1664813 8.29784095 15.1664813 8.91816729C15.1664813 9.55091269 14.9853627 10.0972546 14.6229979 10.548105 14.2489522 11.0134886 13.7316638 11.248852 13.0922079 11.248852 12.6599545 11.248852 12.2987015 11.1714938 12.010354 11.0121022 11.6858317 10.8327139 11.5135701 10.5470474 11.5135701 10.1846526zM12.2830353 9.03114482C12.0775467 9.05302314 11.9965967 9.14901806 11.9926746 9.39309928L11.9926746 10.1846526C11.9926746 10.3734161 12.0696774 10.5011123 12.2436916 10.5973032 12.4538807 10.7134907 12.7360779 10.7739201 13.0922079 10.7739201 13.5889515 10.7739201 13.9672763 10.6017842 14.2482844 10.252157 14.5409734 9.88799654 14.6873768 9.44637255 14.6873768 8.91816729L14.6873768 8.81729704 12.2830353 9.03114482zM7.58726044 5.06456272C7.38558667 4.67563022 7.1239082 4.35828655 6.80133153 4.11021015 6.47448633 3.85885105 6.10877215 3.67458033 5.70269673 3.55683765 5.2900455 3.43718828 4.85763561 3.37729412 4.40477628 3.37729412 3.81155624 3.37729412 3.28277336 3.48205745 2.81633474 3.6905208 2.35055786 3.89868839 1.9519542 4.19799301 1.61846723 4.5901499 1.28311545 4.98449966 1.02414649 5.46679738.84204876 6.03888756.65847719 6.61560807.566204237 7.27033698.566204237 8.00348347.566204237 8.69090223.650101256 9.31319965.817151821 9.87078575.982021295 10.4210917 1.22912946 10.8905938 1.55831058 11.2813338 1.8862119 11.6705548 2.28819627 11.9744723 2.76649453 12.1943728 3.24338358 12.4136253 3.80331357 12.5241324 4.44825308 12.5241324 4.92218438 12.5241324 5.3653549 12.4575193 5.7786457 12.3246361 6.18795682 12.1930324 6.55263609 11.9963073 6.87418554 11.7339325 7.19316204 11.4736572 7.45213416 11.149285 7.65188346 10.7588582 7.81956343 10.4311136 7.93690464 10.0493523 8.00304555 9.6129752L6.25694526 9.6129752C6.16490331 10.1689617 5.9721079 10.577437 5.66806334 10.8321587 5.33413308 11.1119179 4.88671138 11.248852 4.33521339 11.248852 3.77371622 11.248852 3.30553703 11.0645074 2.94600577 10.6974876 2.58643382 10.3304263 2.40876113 9.82956962 2.40876113 9.20840351L2.40876113 6.68422795C2.40876113 6.01193288 2.59762185 5.49582849 2.98418637 5.15284976 3.35877761 4.8204943 3.80702292 4.65257446 4.31782267 4.65257446 4.82065579 4.65257446 5.24762756 4.78263455 5.5903413 5.04514037 5.90796776 5.28843028 6.10451798 5.68258423 6.1896427 6.218091L7.93631482 6.218091C7.8739519 5.77671747 7.75727514 5.39243996 7.58726044 5.06456272zM.0870997591 8.00348347C.0870997591 7.22387606.186122834 6.52125121.385149058 5.89597734.585649125 5.26607316.874482423 4.72815681 1.25215381 4.28404221 1.63168999 3.83773473 2.08812161 3.49500809 2.61941777 3.25755826 3.15005218 3.02040418 3.74585808 2.90236214 4.40477628 2.90236214 4.9026145 2.90236214 5.38030995 2.96852891 5.83719915 3.1010052 6.30066418 3.23538816 6.72042308 3.44689014 7.09500717 3.73496266 7.47385979 4.02631787 7.78027255 4.39791186 8.013369 4.84744373 8.24572768 5.29555279 8.38847172 5.82494732 8.44325607 6.43448319L8.46649332 6.69302299 5.76141413 6.69302299 5.74022661 6.47871903C5.68811579 5.9516373 5.53588178 5.60361953 5.29740252 5.4209534 5.04303182 5.22611502 4.71931161 5.12750644 4.31782267 5.12750644 3.92430036 5.12750644 3.58997101 5.25275155 3.30371151 5.50673482 3.02942529 5.75009481 2.88786561 6.13693849 2.88786561 6.68422795L2.88786561 9.20840351C2.88786561 9.71300773 3.02322278 10.0945776 3.28971995 10.3666255 3.5562578 10.6387149 3.89963752 10.7739201 4.33521339 10.7739201 4.78078844 10.7739201 5.11883982 10.6704589 5.35880625 10.4694204 5.59144233 10.2745231 5.74683841 9.90394227 5.8101644 9.3488258L5.83420983 9.13804321 8.53891566 9.13804321 8.51257514 9.39913931C8.45179715 10.0015914 8.30782332 10.5267681 8.0791764 10.9736777 7.84995242 11.4217153 7.54952857 11.7980073 7.17866965 12.1006171 6.81038369 12.4011275 6.3924883 12.6265599 5.92646204 12.7763989 5.46441546 12.9249583 4.97139482 12.9990644 4.44825308 12.9990644 3.7367095 12.9990644 3.10828538 12.8750394 2.56491365 12.625221 2.02295113 12.3760505 1.56410337 12.0291418 1.1905754 11.5857618.818327234 11.1439009.540820533 10.616642.357873831 10.0059974.17710822 9.40263281.0870997591 8.7350044.0870997591 8.00348347z" />
          </g>
          <g fill={light ? '#080808' : '#F7F7F7'}>
            <path d="M47.34094 12.3042565L47.34094 7.22952023C47.34094 6.50297602 47.5303932 5.9055571 47.9132761 5.44668873 48.3054745 4.9766561 48.8535146 4.74052482 49.5369485 4.74052482 50.1396656 4.74052482 50.5911663 4.91831481 50.8677327 5.28412438 51.1283974 5.62890107 51.2547121 6.097364 51.2547121 6.68422795L51.2547121 12.3042565 53.00162 12.3042565 53.00162 6.52591729C53.00162 5.52036619 52.776058 4.74383957 52.3318147 4.18893698 51.9001889 3.64979503 51.2194293 3.37729412 50.2673588 3.37729412 49.6663072 3.37729412 49.1694081 3.50125861 48.7721489 3.74607185 48.3703725 3.9936688 48.0436564 4.34436241 47.7905366 4.80193246L47.34094 5.61467775 47.34094 3.59717004 45.5940321 3.59717004 45.5940321 12.3042565 47.34094 12.3042565zM48.5191991 3.34272779C48.9972773 3.04810941 49.5814905 2.90236214 50.2673588 2.90236214 51.3558099 2.90236214 52.1764342 3.2308494 52.7070999 3.89370182 53.225148 4.5407936 53.4807245 5.42064901 53.4807245 6.52591729L53.4807245 12.7791884 50.7756076 12.7791884 50.7756076 6.68422795C50.7756076 6.19222867 50.6758451 5.82223981 50.4843488 5.568951 50.3087542 5.33669509 50.0008676 5.21545681 49.5369485 5.21545681 48.9914319 5.21545681 48.5800934 5.39268813 48.2824564 5.74939309 47.9755038 6.11726231 47.8200445 6.6074854 47.8200445 7.22952023L47.8200445 12.7791884 45.1149276 12.7791884 45.1149276 3.12223806 47.8200445 3.12223806 47.8200445 3.93207973C48.0256758 3.69985458 48.2588073 3.50319574 48.5191991 3.34272779zM35.9183434 7.95071325C35.9183434 8.64800651 36.0103993 9.27721215 36.1936661 9.83893225 36.375694 10.396855 36.6377063 10.876936 36.9796536 11.2809087 37.3180921 11.6807362 37.7329912 11.9869341 38.2268618 12.2010191 38.7227425 12.4159756 39.2930412 12.5241324 39.939518 12.5241324 40.5859948 12.5241324 41.1562936 12.4159756 41.6521743 12.2010191 42.1460448 11.9869341 42.5609439 11.6807362 42.8993824 11.2809087 43.2411011 10.877206 43.5015491 10.3974796 43.680697 9.83993674 43.8612858 9.27790929 43.9519973 8.64835414 43.9519973 7.95071325 43.9519973 7.25298508 43.8612629 6.62185895 43.6805926 6.05676648 43.5014988 5.49660511 43.2412336 5.01721547 42.8999049 4.6167354 42.56141 4.2195803 42.1463286 3.91461545 41.6521743 3.70040735 41.1562936 3.48545091 40.5859948 3.37729412 39.939518 3.37729412 39.2930412 3.37729412 38.7227425 3.48545091 38.2268618 3.70040735 37.7327074 3.91461545 37.317626 4.2195803 36.9791311 4.6167354 36.6375733 5.01748427 36.3757451 5.49722789 36.1937733 6.05776737 36.0104229 6.62255357 35.9183434 7.25333162 35.9183434 7.95071325zM35.4392389 7.95071325C35.4392389 7.20570163 35.5384554 6.52603231 35.7377028 5.91227769 35.9383288 5.29427634 36.2300997 4.7596692 36.6131589 4.31022693 36.9992811 3.85719089 37.4740161 3.50839788 38.0349041 3.26526178 38.5940658 3.02287402 39.2295117 2.90236214 39.939518 2.90236214 40.6495243 2.90236214 41.2849702 3.02287402 41.8441319 3.26526178 42.40502 3.50839788 42.8797549 3.85719089 43.2658771 4.31022693 43.6491654 4.759938 43.9396009 5.29489912 44.137308 5.91327857 44.3334385 6.52672693 44.4311017 7.20604817 44.4311017 7.95071325 44.4311017 8.6954656 44.3334156 9.37342617 44.1372036 9.98407616 43.9395506 10.5992107 43.6492979 11.1338351 43.2663996 11.5861869 42.880221 12.042414 42.4053038 12.3929056 41.8441319 12.6361647 41.2849702 12.8785525 40.6495243 12.9990644 39.939518 12.9990644 39.2295117 12.9990644 38.5940658 12.8785525 38.0349041 12.6361647 37.4737322 12.3929056 36.998815 12.042414 36.6126365 11.5861869 36.2299667 11.1341051 35.9383799 10.5998353 35.73781 9.98508065 35.538479 9.37412331 35.4392389 8.69581323 35.4392389 7.95071325zM37.7609003 9.2787638L37.7609003 6.61386766C37.7609003 5.99448051 37.9744619 5.50123004 38.4007689 5.15491688 38.8136549 4.81950642 39.3298097 4.65257446 39.939518 4.65257446 40.5483711 4.65257446 41.0637762 4.81599552 41.4764648 5.14467215 41.9044489 5.48553055 42.1181357 5.98247386 42.1181357 6.61386766L42.1181357 9.2787638C42.1181357 9.91585363 41.9046462 10.4157389 41.4764648 10.7567543 41.0637762 11.085431 40.5483711 11.248852 39.939518 11.248852 39.3293845 11.248852 38.8128607 11.080163 38.3998836 10.7413894 37.9742052 10.3921967 37.7609003 9.89784028 37.7609003 9.2787638zM38.2400048 9.2787638C38.2400048 9.76200411 38.3947998 10.1207578 38.7053323 10.3754939 39.0285661 10.6406492 39.4366397 10.7739201 39.939518 10.7739201 40.4436767 10.7739201 40.8528691 10.6441762 41.1763913 10.3865141 41.4844209 10.1411908 41.6390313 9.77917108 41.6390313 9.2787638L41.6390313 6.61386766C41.6390313 6.11949112 41.4846181 5.76039274 41.1763913 5.51491242 40.8528691 5.25725034 40.4436767 5.12750644 39.939518 5.12750644 39.4362146 5.12750644 39.0277719 5.25960274 38.704447 5.52225777 38.3945431 5.7740101 38.2400048 6.13093802 38.2400048 6.61386766L38.2400048 9.2787638zM28.0408082 12.3042565L28.0408082 10.4629837 28.4843505 11.1771241C28.7482771 11.6020681 29.0826011 11.9321088 29.4891202 12.1701598 29.8910713 12.4055359 30.3707403 12.5241324 30.9324456 12.5241324 31.4956758 12.5241324 31.9827643 12.4077318 32.397558 12.1764423 32.8171029 11.9425034 33.1632985 11.6249128 33.4381912 11.2214766 33.717306 10.811844 33.9248847 10.3307477 34.0603998 9.77687906 34.1977961 9.21532192 34.2666867 8.60668568 34.2666867 7.95071325 34.2666867 7.30633543 34.1977736 6.69892339 34.060208 6.12815499 33.9246926 5.56589293 33.7172551 5.08234508 33.4386143 4.67617127 33.1637004 4.27543017 32.8173657 3.95906958 32.397558 3.72498424 31.9827643 3.49369467 31.4956758 3.37729412 30.9324456 3.37729412 30.3650372 3.37729412 29.8841138 3.4958714 29.4853692 3.73091616 29.08153 3.968964 28.7484224 4.2991244 28.4843505 4.72430237L28.0408082 5.4384428 28.0408082.527702207 26.2939003.527702207 26.2939003 12.3042565 28.0408082 12.3042565zM28.5199127 12.7791884L25.8147958 12.7791884 25.8147958.0527702207 28.5199127.0527702207 28.5199127 3.89711478C28.7333519 3.67164533 28.9736478 3.4800006 29.2404967 3.32270333 29.7170894 3.04177003 30.2824973 2.90236214 30.9324456 2.90236214 31.5749781 2.90236214 32.1429161 3.03808345 32.6324445 3.31104518 33.1169589 3.58121114 33.5184177 3.94792491 33.8347913 4.40910172 34.147438 4.86484582 34.3776627 5.40151204 34.5261971 6.0177908 34.6726814 6.62556322 34.7457911 7.26996557 34.7457911 7.95071325 34.7457911 8.64331987 34.672659 9.28942966 34.5260053 9.88882318 34.3774705 10.4959052 34.1473871 11.0291597 33.8352145 11.4873083 33.5188196 11.9516535 33.1172217 12.3200688 32.6324445 12.5903813 32.1429161 12.863343 31.5749781 12.9990644 30.9324456 12.9990644 30.2883881 12.9990644 29.7246242 12.8596757 29.245441 12.5790737 28.9763893 12.4215214 28.7344388 12.2294699 28.5199127 12.003446L28.5199127 12.7791884zM28.0408082 8.63672612L28.0408082 7.26470038C28.0408082 6.49563586 28.2170781 5.87002748 28.5753562 5.39439704 28.9492559 4.8980282 29.540253 4.65257446 30.3237703 4.65257446 30.9677788 4.65257446 31.4857018 4.83161522 31.8641296 5.19423544 32.2436444 5.55789714 32.4328251 6.04802012 32.4328251 6.6490478L32.4328251 9.24358365C32.4328251 9.84472394 32.2420753 10.3362923 31.8598235 10.7027537 31.4787718 11.0680646 30.9622338 11.248852 30.3237703 11.248852 29.540253 11.248852 28.9492559 11.0033983 28.5753562 10.5070295 28.2170781 10.031399 28.0408082 9.40579063 28.0408082 8.63672612zM28.5199127 8.63672612C28.5199127 9.31005484 28.6682664 9.83658475 28.9592452 10.2228722 29.2346023 10.5884213 29.6812413 10.7739201 30.3237703 10.7739201 30.844694 10.7739201 31.2411598 10.6351577 31.5267558 10.3613594 31.8111516 10.0887116 31.9537207 9.72130661 31.9537207 9.24358365L31.9537207 6.6490478C31.9537207 6.17121225 31.812481 5.80529355 31.531145 5.53570943 31.2487221 5.26508383 30.8507429 5.12750644 30.3237703 5.12750644 29.6812413 5.12750644 29.2346023 5.31300519 28.9592452 5.67855426 28.6682664 6.06484174 28.5199127 6.59137165 28.5199127 7.26470038L28.5199127 8.63672612zM21.8075559 12.3042565L21.8075559 4.88124541 24.650939 4.88124541 24.650939 3.59717004 20.060648 3.59717004 20.060648 12.3042565 21.8075559 12.3042565zM22.2866604 12.7791884L19.5815435 12.7791884 19.5815435 3.12223806 25.1300434 3.12223806 25.1300434 5.3561774 22.2866604 5.3561774 22.2866604 12.7791884zM12.2491436 5.0326917C12.5781504 4.77801442 12.9981592 4.65257446 13.5008899 4.65257446 13.9945398 4.65257446 14.3971223 4.7764303 14.6990991 5.02980534 15.0145423 5.29447942 15.1664813 5.70836947 15.1664813 6.25327115L15.1664813 7.06952897 14.947155 7.0879517 12.4359632 7.29887758C11.5284852 7.38181859 10.8469956 7.67219367 10.3801151 8.16589119 9.91168914 8.66122292 9.67970854 9.24515611 9.67970854 9.92959652 9.67970854 10.3216087 9.74498074 10.6719211 9.87452759 10.982119 10.0041832 11.2925773 10.1872705 11.5616966 10.4247517 11.7912244 10.6635559 12.0220308 10.9405873 12.2016851 11.2573579 12.3309228 11.5724728 12.459485 11.9226723 12.5241324 12.3096254 12.5241324 12.9654846 12.5241324 13.4849456 12.3884112 13.8733011 12.1221459 14.2719573 11.8488181 14.5922742 11.4787389 14.8355063 11.0085668L14.9022963 10.8794605 15.3635937 10.8794605 15.3809844 12.3042565 18.4089913 12.3042565 18.4089913 11.0289761 16.8786078 11.0289761 16.8786078 6.2884513C16.8786078 5.32213018 16.5896354 4.60616636 16.0150241 4.12094591 15.4301027 3.62701924 14.6243028 3.37729412 13.5878435 3.37729412 13.0646385 3.37729412 12.5824986 3.44035448 12.1409287 3.56596964 11.7046033 3.69009287 11.3312585 3.86932767 11.0194116 4.10317477 10.7111414 4.33433972 10.4643698 4.62285633 10.2777252 4.97075838 10.1258484 5.25385406 10.0322997 5.57824095 9.99793507 5.94544486L11.7453603 5.94544486C11.7933828 5.56400178 11.9614403 5.25539676 12.2491436 5.0326917zM14.1458359 12.5127521C13.6704479 12.8386889 13.0566248 12.9990644 12.3096254 12.9990644 11.8618197 12.9990644 11.4497335 12.9229926 11.075013 12.7701122 10.7019482 12.6179073 10.3732088 12.4047205 10.0902887 12.1312757 9.80604569 11.8565521 9.58625195 11.5334782 9.4318577 11.1637836 9.27735468 10.7938286 9.20060406 10.3819121 9.20060406 9.92959652 9.20060406 9.12473659 9.4787462 8.42460725 10.030581 7.84107574 10.5839613 7.25591003 11.3748714 6.91891209 12.3937438 6.82579648L14.6873768 6.63313833 14.6873768 6.25327115C14.6873768 5.83657733 14.5842544 5.55566642 14.3895673 5.39231324 14.1814137 5.21766101 13.8883742 5.12750644 13.5008899 5.12750644 13.0992985 5.12750644 12.7831074 5.2219402 12.5440145 5.40701695 12.3211503 5.57953143 12.2100586 5.83063319 12.2100586 6.18291085L12.2100586 6.42037685 9.49941961 6.42037685 9.50500389 6.17749993C9.51741653 5.63763842 9.63347435 5.16015397 9.85471936 4.74775726 10.0738604 4.33928236 10.3661957 3.99749431 10.7303702 3.72440796 11.0909678 3.45400376 11.5175883 3.24919246 12.0087726 3.10946328 12.4947126 2.97122601 13.0212244 2.90236214 13.5878435 2.90236214 14.7310322 2.90236214 15.6468965 3.18619725 16.3257072 3.75940704 17.014828 4.34132305 17.3577122 5.19086013 17.3577122 6.2884513L17.3577122 10.5540441 18.8880958 10.5540441 18.8880958 12.7791884 14.9076418 12.7791884 14.895719 11.8023782C14.6807035 12.0804333 14.430648 12.3174785 14.1458359 12.5127521zM11.5135701 10.1846526L11.5136 9.38934604C11.5212418 8.91012049 11.776509 8.60741106 12.2360424 8.55852119L15.1664813 8.29784095 15.1664813 8.91816729C15.1664813 9.55091269 14.9853627 10.0972546 14.6229979 10.548105 14.2489522 11.0134886 13.7316638 11.248852 13.0922079 11.248852 12.6599545 11.248852 12.2987015 11.1714938 12.010354 11.0121022 11.6858317 10.8327139 11.5135701 10.5470474 11.5135701 10.1846526zM12.2830353 9.03114482C12.0775467 9.05302314 11.9965967 9.14901806 11.9926746 9.39309928L11.9926746 10.1846526C11.9926746 10.3734161 12.0696774 10.5011123 12.2436916 10.5973032 12.4538807 10.7134907 12.7360779 10.7739201 13.0922079 10.7739201 13.5889515 10.7739201 13.9672763 10.6017842 14.2482844 10.252157 14.5409734 9.88799654 14.6873768 9.44637255 14.6873768 8.91816729L14.6873768 8.81729704 12.2830353 9.03114482zM7.58726044 5.06456272C7.38558667 4.67563022 7.1239082 4.35828655 6.80133153 4.11021015 6.47448633 3.85885105 6.10877215 3.67458033 5.70269673 3.55683765 5.2900455 3.43718828 4.85763561 3.37729412 4.40477628 3.37729412 3.81155624 3.37729412 3.28277336 3.48205745 2.81633474 3.6905208 2.35055786 3.89868839 1.9519542 4.19799301 1.61846723 4.5901499 1.28311545 4.98449966 1.02414649 5.46679738.84204876 6.03888756.65847719 6.61560807.566204237 7.27033698.566204237 8.00348347.566204237 8.69090223.650101256 9.31319965.817151821 9.87078575.982021295 10.4210917 1.22912946 10.8905938 1.55831058 11.2813338 1.8862119 11.6705548 2.28819627 11.9744723 2.76649453 12.1943728 3.24338358 12.4136253 3.80331357 12.5241324 4.44825308 12.5241324 4.92218438 12.5241324 5.3653549 12.4575193 5.7786457 12.3246361 6.18795682 12.1930324 6.55263609 11.9963073 6.87418554 11.7339325 7.19316204 11.4736572 7.45213416 11.149285 7.65188346 10.7588582 7.81956343 10.4311136 7.93690464 10.0493523 8.00304555 9.6129752L6.25694526 9.6129752C6.16490331 10.1689617 5.9721079 10.577437 5.66806334 10.8321587 5.33413308 11.1119179 4.88671138 11.248852 4.33521339 11.248852 3.77371622 11.248852 3.30553703 11.0645074 2.94600577 10.6974876 2.58643382 10.3304263 2.40876113 9.82956962 2.40876113 9.20840351L2.40876113 6.68422795C2.40876113 6.01193288 2.59762185 5.49582849 2.98418637 5.15284976 3.35877761 4.8204943 3.80702292 4.65257446 4.31782267 4.65257446 4.82065579 4.65257446 5.24762756 4.78263455 5.5903413 5.04514037 5.90796776 5.28843028 6.10451798 5.68258423 6.1896427 6.218091L7.93631482 6.218091C7.8739519 5.77671747 7.75727514 5.39243996 7.58726044 5.06456272zM.0870997591 8.00348347C.0870997591 7.22387606.186122834 6.52125121.385149058 5.89597734.585649125 5.26607316.874482423 4.72815681 1.25215381 4.28404221 1.63168999 3.83773473 2.08812161 3.49500809 2.61941777 3.25755826 3.15005218 3.02040418 3.74585808 2.90236214 4.40477628 2.90236214 4.9026145 2.90236214 5.38030995 2.96852891 5.83719915 3.1010052 6.30066418 3.23538816 6.72042308 3.44689014 7.09500717 3.73496266 7.47385979 4.02631787 7.78027255 4.39791186 8.013369 4.84744373 8.24572768 5.29555279 8.38847172 5.82494732 8.44325607 6.43448319L8.46649332 6.69302299 5.76141413 6.69302299 5.74022661 6.47871903C5.68811579 5.9516373 5.53588178 5.60361953 5.29740252 5.4209534 5.04303182 5.22611502 4.71931161 5.12750644 4.31782267 5.12750644 3.92430036 5.12750644 3.58997101 5.25275155 3.30371151 5.50673482 3.02942529 5.75009481 2.88786561 6.13693849 2.88786561 6.68422795L2.88786561 9.20840351C2.88786561 9.71300773 3.02322278 10.0945776 3.28971995 10.3666255 3.5562578 10.6387149 3.89963752 10.7739201 4.33521339 10.7739201 4.78078844 10.7739201 5.11883982 10.6704589 5.35880625 10.4694204 5.59144233 10.2745231 5.74683841 9.90394227 5.8101644 9.3488258L5.83420983 9.13804321 8.53891566 9.13804321 8.51257514 9.39913931C8.45179715 10.0015914 8.30782332 10.5267681 8.0791764 10.9736777 7.84995242 11.4217153 7.54952857 11.7980073 7.17866965 12.1006171 6.81038369 12.4011275 6.3924883 12.6265599 5.92646204 12.7763989 5.46441546 12.9249583 4.97139482 12.9990644 4.44825308 12.9990644 3.7367095 12.9990644 3.10828538 12.8750394 2.56491365 12.625221 2.02295113 12.3760505 1.56410337 12.0291418 1.1905754 11.5857618.818327234 11.1439009.540820533 10.616642.357873831 10.0059974.17710822 9.40263281.0870997591 8.7350044.0870997591 8.00348347z" />
          </g>
        </g>
        <path
          fill={light ? '#000' : '#fff'}
          d="M10.2714844,19.7207031 L9.76171875,19.7207031 C9.6796875,19.4072266 9.40136719,19.1523438 8.94726562,19.1523438 C8.37890625,19.1523438 8.02148438,19.6064453 8.02148438,20.3212891 C8.02148438,21.0507812 8.38476562,21.5136719 8.94726562,21.5136719 C9.37207031,21.5136719 9.66796875,21.3173828 9.76171875,20.9599609 L10.2714844,20.9599609 C10.1806641,21.5400391 9.70898438,21.9677734 8.95019531,21.9677734 C8.06542969,21.9677734 7.5,21.3261719 7.5,20.3212891 C7.5,19.3369141 8.0625,18.6982422 8.94726562,18.6982422 C9.71484375,18.6982422 10.1835938,19.1582031 10.2714844,19.7207031 Z M11.876463,21.5253906 C12.3950177,21.5253906 12.7788068,21.1855469 12.7788068,20.734375 L12.7788068,20.4443359 L11.9291974,20.5 C11.4487286,20.5322266 11.2377911,20.6992188 11.2377911,21.015625 C11.2377911,21.3378906 11.5102521,21.5253906 11.876463,21.5253906 Z M11.782713,21.9677734 C11.1704083,21.9677734 10.7163068,21.6044922 10.7163068,21.0273438 C10.7163068,20.4619141 11.1323224,20.1367188 11.8676739,20.0927734 L12.7788068,20.0371094 L12.7788068,19.75 C12.7788068,19.3603516 12.5356427,19.1464844 12.063963,19.1464844 C11.6860333,19.1464844 11.4223614,19.2900391 11.3520489,19.5390625 L10.8422833,19.5390625 C10.9096661,19.0322266 11.407713,18.6982422 12.0815411,18.6982422 C12.8520489,18.6982422 13.282713,19.09375 13.282713,19.75 L13.282713,21.9121094 L12.8022443,21.9121094 L12.8022443,21.4462891 L12.7553693,21.4462891 C12.5502911,21.7832031 12.204588,21.9677734 11.782713,21.9677734 Z M14.1025354,21.9121094 L14.1025354,18.7539062 L14.5830041,18.7539062 L14.5830041,19.2226562 L14.6298791,19.2226562 C14.7236291,18.9150391 15.0869104,18.6982422 15.5058557,18.6982422 C15.587887,18.6982422 15.6933557,18.7041016 15.7578088,18.7128906 L15.7578088,19.2167969 C15.7167932,19.2050781 15.5351526,19.1875 15.4355432,19.1875 C14.9550745,19.1875 14.6064416,19.5097656 14.6064416,19.9550781 L14.6064416,21.9121094 L14.1025354,21.9121094 Z M17.8022406,21.9677734 C17.3627875,21.9677734 16.9877875,21.7597656 16.7885687,21.4082031 L16.7416937,21.4082031 L16.7416937,21.9121094 L16.261225,21.9121094 L16.261225,17.5 L16.7651312,17.5 L16.7651312,19.2519531 L16.8120062,19.2519531 C16.9848578,18.9121094 17.3686468,18.6982422 17.8022406,18.6982422 C18.604975,18.6982422 19.1264593,19.3398438 19.1264593,20.3330078 C19.1264593,21.3203125 18.6020453,21.9677734 17.8022406,21.9677734 Z M17.6850531,19.1523438 C17.1108343,19.1523438 16.7534125,19.6035156 16.7534125,20.3330078 C16.7534125,21.0625 17.1108343,21.5136719 17.6850531,21.5136719 C18.2622015,21.5136719 18.604975,21.0712891 18.604975,20.3330078 C18.604975,19.5947266 18.2622015,19.1523438 17.6850531,19.1523438 Z M21.1035083,21.5136719 C21.7011645,21.5136719 22.0380786,21.0800781 22.0380786,20.3330078 C22.0380786,19.5830078 21.7011645,19.1523438 21.1035083,19.1523438 C20.505852,19.1523438 20.168938,19.5830078 20.168938,20.3330078 C20.168938,21.0800781 20.505852,21.5136719 21.1035083,21.5136719 Z M21.1035083,21.9677734 C20.2040942,21.9677734 19.6474536,21.3466797 19.6474536,20.3330078 C19.6474536,19.3164062 20.2040942,18.6982422 21.1035083,18.6982422 C22.0029224,18.6982422 22.559563,19.3164062 22.559563,20.3330078 C22.559563,21.3466797 22.0029224,21.9677734 21.1035083,21.9677734 Z M23.2387604,21.9121094 L23.2387604,18.7539062 L23.7192291,18.7539062 L23.7192291,19.2519531 L23.7661041,19.2519531 C23.9243072,18.9033203 24.2905182,18.6982422 24.7739166,18.6982422 C25.482901,18.6982422 25.8784088,19.1171875 25.8784088,19.8671875 L25.8784088,21.9121094 L25.3745026,21.9121094 L25.3745026,19.9902344 C25.3745026,19.421875 25.1342682,19.1523438 24.6303619,19.1523438 C24.076651,19.1523438 23.7426666,19.4892578 23.7426666,20.0429688 L23.7426666,21.9121094 L23.2387604,21.9121094 Z M27.1025281,21.9414062 C26.8945203,21.9414062 26.7216687,21.7685547 26.7216687,21.5605469 C26.7216687,21.3496094 26.8945203,21.1796875 27.1025281,21.1796875 C27.3134656,21.1796875 27.4833874,21.3496094 27.4833874,21.5605469 C27.4833874,21.7685547 27.3134656,21.9414062 27.1025281,21.9414062 Z M28.3559442,21.9121094 L28.3559442,18.7539062 L28.836413,18.7539062 L28.836413,19.2519531 L28.883288,19.2519531 C29.0414911,18.9033203 29.407702,18.6982422 29.8911005,18.6982422 C30.6000848,18.6982422 30.9955926,19.1171875 30.9955926,19.8671875 L30.9955926,21.9121094 L30.4916864,21.9121094 L30.4916864,19.9902344 C30.4916864,19.421875 30.251452,19.1523438 29.7475458,19.1523438 C29.1938348,19.1523438 28.8598505,19.4892578 28.8598505,20.0429688 L28.8598505,21.9121094 L28.3559442,21.9121094 Z M33.1015478,21.5136719 C33.6992041,21.5136719 34.0361181,21.0800781 34.0361181,20.3330078 C34.0361181,19.5830078 33.6992041,19.1523438 33.1015478,19.1523438 C32.5038916,19.1523438 32.1669775,19.5830078 32.1669775,20.3330078 C32.1669775,21.0800781 32.5038916,21.5136719 33.1015478,21.5136719 Z M33.1015478,21.9677734 C32.2021338,21.9677734 31.6454931,21.3466797 31.6454931,20.3330078 C31.6454931,19.3164062 32.2021338,18.6982422 33.1015478,18.6982422 C34.0009619,18.6982422 34.5576025,19.3164062 34.5576025,20.3330078 C34.5576025,21.3466797 34.0009619,21.9677734 33.1015478,21.9677734 Z M39.0922687,18.7539062 L38.207503,21.9121094 L37.6948077,21.9121094 L36.988753,19.46875 L36.941878,19.46875 L36.238753,21.9121094 L35.7289874,21.9121094 L34.8442218,18.7539062 L35.3539874,18.7539062 L35.9750812,21.2792969 L36.0219562,21.2792969 L36.7280108,18.7539062 L37.2114093,18.7539062 L37.917464,21.2792969 L37.964339,21.2792969 L38.5854327,18.7539062 L39.0922687,18.7539062 Z M39.630841,21.9414062 C39.4228332,21.9414062 39.2499817,21.7685547 39.2499817,21.5605469 C39.2499817,21.3496094 39.4228332,21.1796875 39.630841,21.1796875 C39.8417785,21.1796875 40.0117004,21.3496094 40.0117004,21.5605469 C40.0117004,21.7685547 39.8417785,21.9414062 39.630841,21.9414062 Z M40.811015,19.6181641 C40.811015,19.09375 41.3178509,18.6982422 41.9887494,18.6982422 C42.6508587,18.6982422 43.1108197,19.0263672 43.1782025,19.5449219 L42.6801556,19.5449219 C42.6127728,19.2929688 42.3666791,19.1259766 41.9858197,19.1259766 C41.6108197,19.1259766 41.3178509,19.3164062 41.3178509,19.5976562 C41.3178509,19.8144531 41.4936322,19.9492188 41.8657025,20.0400391 L42.3520306,20.1572266 C42.9467572,20.3007812 43.2338666,20.5585938 43.2338666,21.0126953 C43.2338666,21.578125 42.686015,21.9677734 41.9682416,21.9677734 C41.2651166,21.9677734 40.7817181,21.6308594 40.7260541,21.1064453 L41.2446087,21.1064453 C41.3295697,21.3730469 41.5815228,21.5429688 41.9858197,21.5429688 C42.4106244,21.5429688 42.7153119,21.3408203 42.7153119,21.0507812 C42.7153119,20.8339844 42.5512494,20.6875 42.2143353,20.6054688 L41.6723431,20.4736328 C41.0805462,20.3300781 40.811015,20.0751953 40.811015,19.6181641 Z M43.9423608,21.9121094 L43.9423608,17.5 L44.4462671,17.5 L44.4462671,19.2519531 L44.4931421,19.2519531 C44.6513452,18.9033203 45.0116968,18.6982422 45.4950952,18.6982422 C46.2128686,18.6982422 46.6142358,19.1259766 46.6142358,19.8671875 L46.6142358,21.9121094 L46.1103296,21.9121094 L46.1103296,19.9902344 C46.1103296,19.4306641 45.8642358,19.1523438 45.3515405,19.1523438 C44.7861108,19.1523438 44.4462671,19.5097656 44.4462671,20.0429688 L44.4462671,21.9121094 L43.9423608,21.9121094 Z"
        />
      </g>
    </svg>
  )
}