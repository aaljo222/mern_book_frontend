// src/utils/baseURL.js
const getBaseUrl = () => {
  // 예) 로컬: http://localhost:5000
  //     프로덕션: https://<당신의-백엔드>.vercel.app
  const origin =
    import.meta.env.VITE_API_ORIGIN ||
    (import.meta.env.DEV
      ? "http://localhost:5000"
      : "https://mern-stack-book-store-umber.vercel.app");

  return origin.replace(/\/$/, ""); // 끝 슬래시 제거
};

export default getBaseUrl;
