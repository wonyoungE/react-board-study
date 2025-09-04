import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../config/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

// 파일을 업로드하고 다운로드 URL을 반환하는 비동기 함수
export const uploadProfileImg = (file, setProgress, setIsUploading) => {
  if (!file) {
    // 파일이 없는 경우 아무것도 안함
    return;
  }

  // 문서
  // https://firebase.google.com/docs/storage/web/upload-files?hl=ko&_gl=1*16t9elv*_up*MQ..&gclid=Cj0KCQjw_L_FBhDmARIsAItqgt7RiucAfl1kvdbIs8QUUBp8Gyhn_jnQliFba_D2CcPBbgFA1kTcZ0AaAprGEALw_wcB&gclsrc=aw.ds&gbraid=0AAAAADpUDOg9tRUOOk62okBfbUQ-vDcIS

  // 파일 저장 경로 만들기
  // file.name.split('.').pop() -> 파일 확장자만 떼오기
  const storageRef = ref(
    storage,
    `/profileImgs/${uuidv4()}.${file.name.split(".").pop()}`
  );

  const uploadTask = uploadBytesResumable(storageRef, file);

  // Promise를 반환하는 새로운 Promise 생성
  return new Promise((resolve, reject) => {
    // 업로드 상태 변화를 감지하는 이벤트 리스너 등록
    uploadTask.on(
      "state_changed",
      // 진행 상태 리스너: 업로드 진행률을 계산할 수 있게함
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progressPercent + "% done");
        setProgress(progressPercent);
      },
      (error) => {
        alert("파일 업로드 실패");
        setIsUploading(false);
        reject(error);
      },
      // 완료 핸들러
      async () => {
        try {
          // 업로드 성공했을 때
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          setIsUploading(false);
          reject(error);
        }
      }
    );
  });

  // try {
  //   await uploadBytes(storageRef, file);
  //   console.log("파일 업로드 성공");

  //   const downloadURL = await getDownloadURL(storageRef);

  //   return downloadURL;
  // } catch (error) {
  //   alert("파일 업로드 실패");
  //   return;
  // }
};
