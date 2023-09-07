let a1 = localStorage.getItem('a1')
let a2 = localStorage.getItem('a2')
let a3 = localStorage.getItem('a3')
let a4 = localStorage.getItem('a4')
let a5 = localStorage.getItem('a5')
let count = 0
let section1 = document.querySelector("#section1")

/* 원본

if((a1 === 'm' || 'w') && (a2 === 'm170' || 'm170179' || 'm180' || 'w160' || 'w160169' || 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('ew')
}

*/

if((a1 === 'm') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('우유베개 스탠다드핏')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">우유베개 스탠다드핏</div><img src="image/icon/001.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'w') && (a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('우유베개 이지핏')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">우유베개 이지핏</div><img src="image/icon/002.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('우유베개 플러스')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">우유베개 플러스</div><img src="image/icon/003.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='강력한목지지')) {
    console.log('솔래빗 알파베개')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">슬래빗 알파베개</div><img src="image/icon/004.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='적당하거나약간강함' || a5 ==='약한목지지' || a5 ==='적당하거나약간약함')) {
    console.log('센스맘 숨쉬는베개')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">센스맘 숨쉬는베개</div><img src="image/icon/005.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='약한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('노르딕슬립 미디엄로우')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">노르딕슬립 미디엄로우</div><img src="image/icon/006.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='깅한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('씨가드 닥터필로')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">씨가드 닥터필로</div><img src="image/icon/007.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('몽제 에어네트')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">몽제 에어네트</div><img src="image/icon/008.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('몽제 에르고')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">몽제 에르고</div><img src="image/icon/009.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='약한목지지' || a5 ==='적당하거나약간약함')) {
    console.log('홍성돈 숙면베개')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">홍성돈 숙면베개</div><img src="image/icon/010.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'w') && (a2 === 'w160' || 'w160169') && (a3 ==='적당히낮은베개' || a2 === a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && (  a5 ==='강력한목지지' || a5 ==='적당하거나약간강함'|| a5 ==='적당하거나약간약함')) {
    console.log('템퍼 오리지널 XS')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 오리지널 XS</div><img src="image/icon/011.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('템퍼 오리지널 S')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 오리지널 S</div><img src="image/icon/012.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm') && (a2 === 'm170179' || 'm180') && (a3 === '높은베개' || a2 === a3 === '적당히높은베개' || a2 === a3 ==='적당히낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('템퍼 오리지널 M')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 오리지널 M</div><img src="image/icon/013.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170179' || a2 === 'm180' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('템퍼 밀레니엄 XS')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 밀레니엄 XS</div><img src="image/icon/014.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170179' || a2 === 'm180' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('템퍼 밀리니엄 S')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 밀레니엄 S</div><img src="image/icon/015.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm') && (a2 === 'm170179' || 'm180') && (a3 === '높은베개' || a2 === a3 === '적당히높은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
    console.log('템퍼 밀리니엄 M')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 밀레니엄 M</div><img src="image/icon/016.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
    console.log('가누다 블루라벨 피아노')
    count++
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">가누다 블루라벨 피아노</div><img src="image/icon/017.png" alt="" class="contentImg"><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}
if(count === 0) {
    $("#section1").append('<div class="section1BoxContent"><div class="contentTitle2">조건에 맞는 결과값이 없습니다. 조건을 다시 설정해 보세요.</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
}



// if((a1 === 'm') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('우유베개 스탠다드핏')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">우유베개 스탠다드핏</div><img src="image/icon/001.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#딱딱하거나 적당히 탄탄한 베개 </br>#딱딱한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'w') && (a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('우유베개 이지핏')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">우유베개 이지핏</div><img src="image/icon/002.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#딱딱하거나 적당히 탄탄한 베개 </br>#적당히 부드럽거나 푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
//     console.log('우유베개 플러스')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">우유베개 플러스</div><img src="image/icon/003.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#딱딱하거나 적당히 탄탄한 베개 </br>#적당히 부드럽거나 푹신한 베개</br>#강하거나 적당한 목지지</br>#강하거나 적당한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='강력한목지지')) {
//     console.log('솔래빗 알파베개')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">슬래빗 알파베개</div><img src="image/icon/004.png" alt="" class="contentImg"><div class="contentExplain">#낮은 베개</br># 적당히 낮은 베개</br>#딱딱한 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#강한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='적당하거나약간강함' || a5 ==='약한목지지' || a5 ==='적당하거나약간약함')) {
//     console.log('센스맘 숨쉬는베개')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">센스맘 숨쉬는베개</div><img src="image/icon/005.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#적당하거나 약한 목지지</br>#약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='약한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('노르딕슬립 미디엄로우')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">노르딕슬립 미디엄로우</div><img src="image/icon/006.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#적당하거나 약한 목지지</br>#약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='깅한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('씨가드 닥터필로')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">씨가드 닥터필로</div><img src="image/icon/007.png" alt="" class="contentImg"><div class="contentExplain">#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#딱딱한 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '딱딱한베개' || a4 === '적당히딱딱하거나탄탄함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('몽제 에어네트')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">몽제 에어네트</div><img src="image/icon/008.png" alt="" class="contentImg"><div class="contentExplain">#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
//     console.log('몽제 에르고')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">몽제 에르고</div><img src="image/icon/009.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='약한목지지' || a5 ==='적당하거나약간약함')) {
//     console.log('홍성돈 숙면베개')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">홍성돈 숙면베개</div><img src="image/icon/010.png" alt="" class="contentImg"><div class="contentExplain">#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'w') && (a2 === 'w160' || 'w160169') && (a3 ==='적당히낮은베개' || a2 === a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && (  a5 ==='강력한목지지' || a5 ==='적당하거나약간강함'|| a5 ==='적당하거나약간약함')) {
//     console.log('템퍼 오리지널 XS')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 오리지널 XS</div><img src="image/icon/011.png" alt="" class="contentImg"><div class="contentExplain">#적당히 낮은 베개</br>#낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('템퍼 오리지널 S')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 오리지널 S</div><img src="image/icon/012.png" alt="" class="contentImg"><div class="contentExplain">#적당히 낮은 베개</br>#낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm') && (a2 === 'm170179' || 'm180') && (a3 === '높은베개' || a2 === a3 === '적당히높은베개' || a2 === a3 ==='적당히낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
//     console.log('템퍼 오리지널 M')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 오리지널 M</div><img src="image/icon/013.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170179' || a2 === 'm180' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개' || a3 ==='낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
//     console.log('템퍼 밀레니엄 XS')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 밀레니엄 XS</div><img src="image/icon/014.png" alt="" class="contentImg"><div class="contentExplain">#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170179' || a2 === 'm180' || a2 === 'w170') && (a3 === '높은베개' || a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
//     console.log('템퍼 밀리니엄 S')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 밀레니엄 S</div><img src="image/icon/015.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm') && (a2 === 'm170179' || 'm180') && (a3 === '높은베개' || a2 === a3 === '적당히높은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함' || a4 ==='푹신한 베개') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함' || a5 ==='적당하거나약간약함')) {
//     console.log('템퍼 밀리니엄 M')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">템퍼 밀레니엄 M</div><img src="image/icon/016.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if((a1 === 'm' || a1 ==='w') && (a2 === 'm170' || a2 === 'm170179' || a2 === 'm180' || a2 === 'w160' || a2 === 'w160169' || a2 === 'w170') && (a3 === '적당히높은베개' || a3 ==='적당히낮은베개') && ( a4 === '적당히딱딱하거나탄탄함' || a4 === '적당히부드럽거나푹신함') && ( a5 ==='강력한목지지' || a5 ==='적당하거나약간강함')) {
//     console.log('가누다 블루라벨 피아노')
//     count++
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle">가누다 블루라벨 피아노</div><img src="image/icon/017.png" alt="" class="contentImg"><div class="contentExplain">#높은 베개</br>#높거나 적당히 높은 베개</br>#적당히 낮은 베개</br>#낮은 베개</br>#딱딱하거나 적당히 탄탄한 베개</br>#적당히 부드럽거나 푹신한 베개</br>#강한 목지지</br>#강하거나 적당한 목지지</br>#적당하거나 약한 목지지</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }
// if(count === 0) {
//     $("#section1").append('<div class="section1BoxContent"><div class="contentTitle2">조건에 맞는 결과값이 없습니다. 조건을 다시 설정해 보세요.</div><a href="https://bit.ly/3UXJAYY" target="_blank">대여하러 가기</a></div>')
// }

