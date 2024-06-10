// JavaScript


// 사용자로부터 이미지 파일 가져오기

function loadFile(input) {
    let file = input.files[0]; // 선택파일 가져오기

    if (!file) return; // 파일이 없으면 종료

    let newImage = document.createElement("img"); // 새 이미지 태그 생성

    // 이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);
    newImage.style.width = "100%";  // div에 꽉차게 설정
    newImage.style.height = "100%"; // 이미지를 꽉 차게 설정하기 위해 높이를 100%로 지정
    newImage.style.objectFit = "cover"; // div에 적합한 방식으로 이미지 채우기


    // 이미지 블러처리
    newImage.style.filter = "blur(5px)";


    // 이미지를 imageContainer div에 추가
    let container = document.getElementById('imageContainer');
    container.innerHTML = '';   // 기존 이미지 제거
    container.appendChild(newImage); // 이미지를 imageContainer div에 추가


    // 로딩 이미지 표시
    showLoadingImage();



    // 3초 후에 비교 결과 처리 (임시)
    setTimeout(function() {
        let comparisonResult = Math.random() >= 0.5; // 예시: 50% 확률로 성공 또는 실패
    
        if (comparisonResult) {
            window.location.href = "success.html"; // success.html로 리디렉션
        } else {
            // alert("사진 비교에 실패했습니다. \n다시 시도해주세요.");
            alert("장소를 찾지 못했습니다. 😢 \n다른 사진으로 시도해보세요. ")
            window.location.href = "index.html"; // index.html로 리디렉션
        }
    }, 3000); // 3초 후에 실행


    

}

// 사진을 누르면 이미지 파일을 가져올 수 있도록 설정
function openFileUploader() {
    document.getElementById('imageInput').click();
}




// 로딩 이미지 생성
function showLoadingImage() {
    let loadingImage = document.createElement("img");
    loadingImage.src = "https://i.ibb.co/P62v1v2/loading.gif"; // 로딩 이미지의 소스 설정
    loadingImage.classList.add("loadingImage"); // 클래스 추가

    
    // imageContainer 요소를 참조
    let container = document.getElementById('imageContainer');


    // 로딩 이미지를 imageContainer에 추가
    container.appendChild(loadingImage);


    // 일정 시간이 지난 후에 로딩 이미지를 숨김
    setTimeout(function() {
        container.removeChild(loadingImage); // 로딩 이미지 제거
    }, 3000); // 3초 후에 제거

    // 현재는 3초 후에 사라지도록 설정, 추후 수정
}






// 사용자 가이드라인을 자동으로 변경 

let currentSlide = 0; // 현재 슬라이드의 인덱스
const slides = document.querySelectorAll('.slide'); // 모든 슬라이드 요소 가져오기
const slideCount = slides.length; // 슬라이드의 개수
 
// 슬라이드를 보여주는 함수
function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none'); // 모든 슬라이드 숨김
    slides[n].style.display = 'block';  // 현재 슬라이드를 디스플레이
}
 
// 다음 슬라이드를 보여주는 함수
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;  // 다음 슬라이드 인덱스 계산
    showSlide(currentSlide); // 계산된 인덱스에 해당하는 슬라이드를 디스플레이
}
 
// 이전 슬라이드를 보여주는 함수
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;  // 이전 슬라이드 인덱스 계산
    showSlide(currentSlide);  // 계산된 인덱스에 해당하는 슬라이드를 디스플레이
}
 
// 페이지 로딩 시 첫 번째 슬라이드를 디스플레이
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // 3초 간격으로 다음 슬라이드 디스플레이
});


