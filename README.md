# :zap: PortFolio 프로젝트 소개
:octocat: 바로가기 https://light9639-portfolio.netlify.app/

![화면 캡처 2022-08-22](https://raw.githubusercontent.com/light9639/PortFolio/master/src/img/light9639.github.io_PortFolio_.png)
![화면 캡처 2022-08-27](https://raw.githubusercontent.com/light9639/PortFolio/master/src/img/light9639.github.io_PortFolio_Dark.png)

:sparkles: 포트폴리오 소개 사이트입니다. :sparkles:

## :rocket: 시작하는 법
미리보기를 원하신다면 다운로드 후 yarn을 설치하고
```bash
yarn vite
# or
yarn dev
```
를 누르고 http://127.0.0.1:5173/ 로 접속하면 미리보기 화면을 띄울 수 있습니다.
## :calendar: 개발인원 및 기간
- 1인 개발 2022.07.25 ~ 2022.07.29(5일 소요)
## :dart: 개발 목적
- 기업제출용 포트폴리오 소개 사이트가 필요하여 만들게 되었습니다.
## :black_nib: 구현기능
- 홈페이지 About Me 버튼을 클릭하시면 소개 페이지로 이동합니다.
- 홈페이지 프로젝트 보러가기 버튼을 클릭하시면 작성된 포트폴리오을 간략하게 보실수 있습니다.
- 우측 상단의 이미지를 클릭하면 Github 페이지로 이동할 수 있습니다.
- Lottie.js를 사용하여 애프터 이펙트로 만들어진 이미지를 Json 파일로 다운받은 뒤 사용하였습니다.
## :hammer_and_wrench: 적용 기술
### :zap: React
- Nav 아이콘을 클릭하면 `DarkMode`가 실행되도록 구현하였습니다.
- data.ts에 링크와 내용을 작성한 뒤 프로젝트 항목에 대입하였습니다.
- Component로 페이지를 분리시켰으며, `Nav`, `Footer`로 분리하여 작성하였습니다.
- react-router-dom의 `Link`, `Route`를 사용하여 작성된 `Component`를 불러올 수 있습니다.

### :zap: TypeScript
- 타입스크립트를 이용하여 타입을 지정함으로써 오류의 가능성을 줄였습니다.

### :zap: TailWind CSS
- 테일윈드 CSS를 이용하여 반응형 웹이 가능한 사이트를 디자인하였습니다.

### :zap: Vite
- WebPack을 사용하는 대신 Vite라는 2세대 번들링 툴을 사용하여 서버에서 작동하는 JS의 크기를 줄이고 속도를 높였습니다.

## :tada: Netlify를 이용한 배포

- 정적 사이트을 쉽게 배포할 수 있는 [Netlify Platform](https://www.netlify.com/)을 이용하여 React-Vite 포트폴리오를 배포하였습니다.

- 더 자세한 내용을 보고 싶으시다면 [Netlify deployment documentation](https://docs.netlify.com/) 페이지를 참고하세요.