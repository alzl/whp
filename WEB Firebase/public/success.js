// import { storage } from './firebase.js';
// import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// 사용자가 업로드한 이미지를 불러오기

// 이미지 드래그 방지

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('img').forEach(img => {
        img.ondragstart = function() { return false; };
    });
});



// URL에서 쿼리 파라미터를 추출
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('imageUrl');

// 이미지 URL을 img 태그에 설정
if (imageUrl) {
    document.getElementById('uploadedImage').src = imageUrl;
} else {
    alert("잘못된 접근입니다.");
    window.location.href = "index.html";
}



// // 이미지 파일 이름
// const imageName = "N서울타워.jpg"; // 가져오고 싶은 이미지 파일의 이름으로 변경

// // 이미지를 디스플레이할 div
// const resultImageContainer = document.getElementById('resultImageContainer');

// // 이미지 다운로드 URL 생성
// getDownloadURL(ref(storage, 'images_database/' + imageName)).then(function(url) {
//     // 이미지 엘리먼트 생성
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = "Result Image";
//     img.id = "resultImage";

//     // 이미지를 디스플레이할 div에 추가
//     resultImageContainer.appendChild(img);
// }).catch(function(error) {
//     // 이미지 다운로드 중 에러 처리
//     console.error("Error downloading image:", error);
// });