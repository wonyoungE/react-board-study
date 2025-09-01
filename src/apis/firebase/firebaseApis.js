import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { v4 as uuidv4 } from "uuid";

// 파일을 업로드하고 다운로드 URL을 반환하는 비동기 함수
export const uploadProfileImg = async (file) => {
  if (!file) {
    // 파일이 없는 경우 아무것도 안함
    return;
  }

  // 파일 저장 경로 만들기
  // file.name.split('.').pop() -> 파일 확장자만 떼오기
  const storageRef = ref(
    storage,
    `/profileImgs/${uuidv4()}.${file.name.split(".").pop()}`
  );

  try {
    // 문서
    // https://firebase.google.com/docs/storage/web/upload-files?hl=ko&_gl=1*16t9elv*_up*MQ..&gclid=Cj0KCQjw_L_FBhDmARIsAItqgt7RiucAfl1kvdbIs8QUUBp8Gyhn_jnQliFba_D2CcPBbgFA1kTcZ0AaAprGEALw_wcB&gclsrc=aw.ds&gbraid=0AAAAADpUDOg9tRUOOk62okBfbUQ-vDcIS
    await uploadBytes(storageRef, file);
    console.log("파일 업로드 성공");

    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    alert("파일 업로드 실패");
    return;
  }
};
