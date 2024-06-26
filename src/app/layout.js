import Link from "next/link";

export const metadata = {
  title: "Next.js",
  description: "Next.js를 이용한 포트폴리오 사이트 입니다.",
  keywords: ["포트폴리오", "넥스트", "개발"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body >{children}</body>
    </html>
  );
}
