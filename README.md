# 크롬 개발자 도구 확장 프로그램

이 프로젝트는 크롬 개발자 도구에 새로운 패널을 추가하는 확장 프로그램입니다.

## 기능

- 개발자 도구에 새로운 패널 추가
- 패널에서 메시지 입력 및 웹 페이지로 전송
- 웹 페이지에서 메시지 수신 및 표시

## 개발 환경 설정

1. 저장소 클론:
   ```
   git clone [저장소 URL]
   cd [프로젝트 디렉토리]
   ```

2. 의존성 설치:
   ```
   npm install
   ```

3. 개발 서버 실행:
   ```
   npm run dev
   ```

4. 크롬 확장 프로그램 로드:
   - 크롬 브라우저에서 `chrome://extensions/` 접속
   - 개발자 모드 활성화
   - "압축해제된 확장 프로그램을 로드합니다" 클릭
   - 프로젝트의 `dist` 폴더 선택

## 프로젝트 구조

- `src/content.js`: 웹 페이지에 주입되는 스크립트
- `src/background.js`: 백그라운드 스크립트
- `src/panel/Panel.jsx`: 개발자 도구 패널 UI
- `src/devtools/index.js`: 개발자 도구 패널 생성
- `src/panel/index.html`: 패널 HTML
- `src/devtools/index.html`: 개발자 도구 HTML

## 사용 방법

1. 크롬 개발자 도구 열기 (F12 또는 Ctrl+Shift+I)
2. "My Extension" 탭 선택
3. 메시지 입력 후 "Send to Page" 버튼 클릭
4. 웹 페이지 우측 상단에 메시지 표시 확인

## 개발 참고사항

- HMR(Hot Module Replacement)이 지원됩니다. 코드 변경 시 자동으로 새로고침됩니다.
- React를 사용하여 패널 UI를 구현했습니다.
- 메시지 전송은 크롬 확장 프로그램 API를 통해 이루어집니다.

## 라이선스

[라이선스 정보 추가]
