// 필요한 Firebase SDK를 임포트
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWoNvLsqbVzfDMpoubR1e7t6Ny4Xxk0JY",
    authDomain: "webhotplace-1cce1.firebaseapp.com",
    projectId: "webhotplace-1cce1",
    storageBucket: "webhotplace-1cce1.appspot.com",
    messagingSenderId: "331407528116",
    appId: "1:331407528116:web:b4f6a50ec1587b9c4707e1",
    measurementId: "G-N5Y9J96L8M"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// 파일이 선택되면 즉시 업로드
$('#imageInput').on('change', function() {
    var file = this.files[0];

    var storageRef = ref(storage, file.name);
    var uploadTask = uploadBytesResumable(storageRef, file);
});