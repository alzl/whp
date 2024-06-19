import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWoNvLsqbVzfDMpoubR1e7t6Ny4Xxk0JY",
    authDomain: "webhotplace-1cce1.firebaseapp.com",
    projectId: "webhotplace-1cce1",
    storageBucket: "webhotplace-1cce1.appspot.com",
    messagingSenderId: "331407528116",
    appId: "1:331407528116:web:b4f6a50ec1587b9c4707e1",
    measurementId: "G-N5Y9J96L8M"
};

// Firebase Storage 초기화
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// 파일이 선택되면 즉시 업로드
$('#imageInput').on('change', function() {
    var file = this.files[0];
    var storageRef = ref(storage, file.name);
    var uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
        function(snapshot) {
            // 진행 상황 처리
        }, 
        function(error) {
            // 업로드 실패 시 에러 문구 출력
            console.error("업로드에 실패했습니다.(", error, ")");
        }, 
        function() {
            // 업로드 완료 시 다운로드 URL을 획득.
            getDownloadURL(uploadTask.snapshot.ref).then(function(downloadURL) {
                // 다운로드 URL을 success.html 페이지로 전달
                window.location.href = `success.html?imageUrl=${encodeURIComponent(downloadURL)}`;
            });
        }
    );
});
