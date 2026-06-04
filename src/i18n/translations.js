// All website text in 6 languages.
// To edit wording, change it here. Service order matches the icons in src/data.js.
//
// Language codes:
//   en = English, ko = 한국어, zh = 中文, vi = Tiếng Việt, ru = Русский, bn = বাংলা

export const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ko', label: '한국어', short: '한' },
  { code: 'zh', label: '中文', short: '中' },
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'bn', label: 'বাংলা', short: 'বাং' },
]

export const translations = {
  /* ============================== ENGLISH ============================== */
  en: {
    nav: { about: 'About', services: 'Services', products: 'Products', blog: 'Blog', founders: 'Founders', contact: 'Contact', cta: 'Get in touch' },
    hero: {
      badge: 'Based in Seoul · Built for Korea',
      title: 'Connecting people to Korea.',
      subtitle:
        'We build smart software and guide newcomers through Korean life — from passing the KIIP & TOPIK exams to choosing the right visa.',
      exploreBtn: 'Explore our services',
      talkBtn: 'Talk to us',
      cards: [
        { title: 'KIIP & TOPIK', text: 'Pass your Korean exams' },
        { title: 'Visa Guidance', text: 'Know exactly what to apply for' },
        { title: 'Custom Software', text: 'Medical, review apps & more' },
      ],
    },
    about: {
      eyebrow: 'Who we are',
      title: 'A bridge between newcomers and Korea',
      lead:
        'KR Connect Technologies is a Korea-based startup that combines technology with real human guidance. We help foreigners settle into life in Korea, and we build dependable software for the people and businesses around us.',
      text:
        'Whether you are preparing for the KIIP or TOPIK exams, unsure which visa fits your situation, or a company looking for a reliable software partner — we are here to make it simpler. Everything we do is built around one idea: connecting people to the opportunities Korea has to offer.',
      stats: [
        { value: '6+', label: 'Services & products' },
        { value: '2', label: 'Founders, one vision' },
        { value: '100%', label: 'Focused on Korea' },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Our services & products',
      intro:
        'From education and software to consultancy, we cover the full journey of living, working, and building in Korea.',
      items: [
        { title: 'KIIP & TOPIK Prep', text: 'Study tools, mock tests, and guidance to help newcomers pass Korea’s KIIP and TOPIK exams with confidence.' },
        { title: 'Medical Software', text: 'Custom healthcare and clinic management software designed for reliability, privacy, and ease of use.' },
        { title: 'Restaurant Review App', text: 'A community-driven platform to discover, rate, and review restaurants across Korea.' },
        { title: 'Software Development', text: 'We take on custom software projects for other companies — web, mobile, and backend systems, built to spec.' },
        { title: 'Visa Consultancy', text: 'Personalized guidance for foreigners on which visa to apply for, the documents required, and the full process.' },
        { title: 'Business & IT Consulting', text: 'Advice and support for individuals and companies settling into life and business in Korea.' },
      ],
    },
    founders: {
      eyebrow: 'The people',
      title: 'Meet the founders',
      intro: 'KR Connect Technologies is led by two co-founders who share equal ownership and a single mission.',
      roles: ['Co-Founder & Owner', 'Co-Founder & Owner'],
      bios: [
        'Co-founder of KR Connect Technologies, leading software development and product vision.',
        'Co-founder of KR Connect Technologies, leading consultancy services and client relations.',
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Let’s talk',
      intro: 'Have a question about visas, exams, or a software project? Reach out and we’ll get back to you.',
      emailLabel: 'Email', phoneLabel: 'Phone', locationLabel: 'Location',
      nameField: 'Name', emailField: 'Email', messageField: 'Message',
      namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com', messagePlaceholder: 'How can we help?',
      sendBtn: 'Send message',
    },
    footer: { tagline: 'Connecting people to Korea.', rights: 'All rights reserved.' },
    products: {
      eyebrow: 'Our apps',
      title: 'Products you can download today',
      intro: 'We build mobile apps that make life in Korea easier — with more on the way.',
      comingSoon: 'Coming soon',
      descriptions: {
        'kiip-academy': 'Study for Korea’s KIIP exam with lessons, practice questions, and mock tests — right from your phone.',
        'topik-academy': 'Boost your TOPIK score with vocabulary, grammar, and full practice tests, anytime, anywhere.',
      },
    },
  },

  /* ============================== KOREAN ============================== */
  ko: {
    nav: { about: '회사 소개', services: '서비스', products: '제품', blog: '블로그', founders: '창업자', contact: '문의하기', cta: '연락하기' },
    hero: {
      badge: '서울 기반 · 한국을 위한 서비스',
      title: '사람과 한국을 잇습니다.',
      subtitle:
        '스마트한 소프트웨어를 개발하고, KIIP·TOPIK 시험 합격부터 알맞은 비자 선택까지 한국 생활의 시작을 돕습니다.',
      exploreBtn: '서비스 살펴보기',
      talkBtn: '문의하기',
      cards: [
        { title: 'KIIP & TOPIK', text: '한국어 시험 합격' },
        { title: '비자 안내', text: '필요한 비자를 정확히 안내' },
        { title: '맞춤형 소프트웨어', text: '의료·리뷰 앱 등' },
      ],
    },
    about: {
      eyebrow: '회사 소개',
      title: '새로운 사람과 한국을 잇는 다리',
      lead:
        'KR Connect Technologies는 기술과 사람의 도움을 결합한 한국 기반 스타트업입니다. 외국인의 한국 정착을 돕고, 주변 사람과 기업을 위한 믿을 수 있는 소프트웨어를 만듭니다.',
      text:
        'KIIP나 TOPIK 시험을 준비하든, 어떤 비자가 맞는지 고민하든, 믿을 만한 소프트웨어 파트너를 찾는 기업이든 — 저희가 더 쉽게 만들어 드립니다. 저희의 모든 활동은 하나의 생각에서 출발합니다: 사람을 한국의 기회와 잇는 것.',
      stats: [
        { value: '6+', label: '서비스 및 제품' },
        { value: '2', label: '두 창업자, 하나의 비전' },
        { value: '100%', label: '한국에 집중' },
      ],
    },
    services: {
      eyebrow: '우리가 하는 일',
      title: '서비스 및 제품',
      intro: '교육과 소프트웨어부터 컨설팅까지, 한국에서 살고 일하고 성장하는 모든 여정을 함께합니다.',
      items: [
        { title: 'KIIP & TOPIK 대비', text: '학습 도구, 모의고사, 안내로 한국의 KIIP·TOPIK 시험 합격을 돕습니다.' },
        { title: '의료 소프트웨어', text: '안정성, 개인정보 보호, 사용 편의성을 갖춘 맞춤형 의료·클리닉 관리 소프트웨어.' },
        { title: '맛집 리뷰 앱', text: '한국 전역의 식당을 발견하고 평가하고 리뷰하는 커뮤니티 기반 플랫폼.' },
        { title: '소프트웨어 개발', text: '다른 기업을 위한 맞춤형 소프트웨어 — 웹, 모바일, 백엔드 시스템을 요구에 맞게 개발합니다.' },
        { title: '비자 컨설팅', text: '어떤 비자를 신청해야 하는지, 필요한 서류와 전체 절차를 외국인에게 맞춤 안내합니다.' },
        { title: '비즈니스·IT 컨설팅', text: '한국에서의 생활과 사업 정착을 위한 개인 및 기업 대상 조언과 지원.' },
      ],
    },
    founders: {
      eyebrow: '함께하는 사람들',
      title: '창업자 소개',
      intro: 'KR Connect Technologies는 동등한 지분과 하나의 사명을 공유하는 두 공동 창업자가 이끕니다.',
      roles: ['공동 창업자 · 대표', '공동 창업자 · 대표'],
      bios: [
        'KR Connect Technologies 공동 창업자로 소프트웨어 개발과 제품 비전을 이끕니다.',
        'KR Connect Technologies 공동 창업자로 컨설팅 서비스와 고객 관계를 이끕니다.',
      ],
    },
    contact: {
      eyebrow: '문의하기',
      title: '이야기 나눠요',
      intro: '비자, 시험, 소프트웨어 프로젝트에 대해 궁금하신가요? 연락 주시면 답변드리겠습니다.',
      emailLabel: '이메일', phoneLabel: '전화', locationLabel: '위치',
      nameField: '이름', emailField: '이메일', messageField: '메시지',
      namePlaceholder: '성함', emailPlaceholder: 'you@example.com', messagePlaceholder: '무엇을 도와드릴까요?',
      sendBtn: '메시지 보내기',
    },
    footer: { tagline: '사람과 한국을 잇습니다.', rights: '모든 권리 보유.' },
    products: {
      eyebrow: '우리 앱',
      title: '지금 다운로드할 수 있는 제품',
      intro: '한국 생활을 더 쉽게 만드는 모바일 앱을 만듭니다 — 더 많은 앱이 곧 출시됩니다.',
      comingSoon: '출시 예정',
      descriptions: {
        'kiip-academy': '강의, 연습 문제, 모의고사로 한국의 KIIP 시험을 휴대폰에서 바로 준비하세요.',
        'topik-academy': '어휘, 문법, 실전 모의고사로 언제 어디서나 TOPIK 점수를 올리세요.',
      },
    },
  },

  /* ============================== CHINESE ============================== */
  zh: {
    nav: { about: '关于我们', services: '服务', products: '产品', blog: '博客', founders: '创始人', contact: '联系我们', cta: '联系我们' },
    hero: {
      badge: '立足首尔 · 服务韩国',
      title: '连接人与韩国。',
      subtitle:
        '我们开发智能软件，并指导初来者适应韩国生活——从通过 KIIP 和 TOPIK 考试到选择合适的签证。',
      exploreBtn: '了解我们的服务',
      talkBtn: '联系我们',
      cards: [
        { title: 'KIIP 与 TOPIK', text: '通过韩语考试' },
        { title: '签证指导', text: '准确了解该申请哪种签证' },
        { title: '定制软件', text: '医疗、点评应用等' },
      ],
    },
    about: {
      eyebrow: '我们是谁',
      title: '连接初来者与韩国的桥梁',
      lead:
        'KR Connect Technologies 是一家立足韩国的初创公司，将技术与真人指导相结合。我们帮助外国人融入韩国生活，并为身边的人和企业打造可靠的软件。',
      text:
        '无论您是在备考 KIIP 或 TOPIK、不确定哪种签证适合自己，还是一家寻找可靠软件合作伙伴的公司——我们都能让一切变得更简单。我们所做的一切都围绕一个理念：把人与韩国的机遇连接起来。',
      stats: [
        { value: '6+', label: '服务与产品' },
        { value: '2', label: '两位创始人，一个愿景' },
        { value: '100%', label: '专注韩国' },
      ],
    },
    services: {
      eyebrow: '我们做什么',
      title: '我们的服务与产品',
      intro: '从教育、软件到咨询，我们覆盖在韩国生活、工作与创业的全程。',
      items: [
        { title: 'KIIP 与 TOPIK 备考', text: '学习工具、模拟考试和指导，帮助初来者自信通过韩国的 KIIP 和 TOPIK 考试。' },
        { title: '医疗软件', text: '注重可靠性、隐私和易用性的定制医疗与诊所管理软件。' },
        { title: '餐厅点评应用', text: '以社区为驱动的平台，发现、评分并点评韩国各地的餐厅。' },
        { title: '软件开发', text: '为其他公司承接定制软件项目——按需开发网页、移动端和后端系统。' },
        { title: '签证咨询', text: '为外国人提供个性化指导：该申请哪种签证、所需材料以及完整流程。' },
        { title: '商业与 IT 咨询', text: '为在韩国安家立业的个人和企业提供建议与支持。' },
      ],
    },
    founders: {
      eyebrow: '团队',
      title: '认识创始人',
      intro: 'KR Connect Technologies 由两位联合创始人共同领导，他们平分股权，怀抱同一使命。',
      roles: ['联合创始人兼所有者', '联合创始人兼所有者'],
      bios: [
        'KR Connect Technologies 联合创始人，负责软件开发与产品愿景。',
        'KR Connect Technologies 联合创始人，负责咨询服务与客户关系。',
      ],
    },
    contact: {
      eyebrow: '联系我们',
      title: '聊一聊',
      intro: '对签证、考试或软件项目有疑问？联系我们，我们会尽快回复。',
      emailLabel: '邮箱', phoneLabel: '电话', locationLabel: '地址',
      nameField: '姓名', emailField: '邮箱', messageField: '留言',
      namePlaceholder: '您的姓名', emailPlaceholder: 'you@example.com', messagePlaceholder: '我们能帮您什么？',
      sendBtn: '发送信息',
    },
    footer: { tagline: '连接人与韩国。', rights: '版权所有。' },
    products: {
      eyebrow: '我们的应用',
      title: '现在即可下载的产品',
      intro: '我们打造让韩国生活更轻松的移动应用——更多产品即将推出。',
      comingSoon: '即将推出',
      descriptions: {
        'kiip-academy': '通过课程、练习题和模拟考试，在手机上备考韩国的 KIIP 考试。',
        'topik-academy': '用词汇、语法和完整模拟考试，随时随地提升你的 TOPIK 成绩。',
      },
    },
  },

  /* ============================== VIETNAMESE ============================== */
  vi: {
    nav: { about: 'Giới thiệu', services: 'Dịch vụ', products: 'Sản phẩm', blog: 'Blog', founders: 'Nhà sáng lập', contact: 'Liên hệ', cta: 'Liên hệ' },
    hero: {
      badge: 'Trụ sở tại Seoul · Dành cho Hàn Quốc',
      title: 'Kết nối con người với Hàn Quốc.',
      subtitle:
        'Chúng tôi xây dựng phần mềm thông minh và đồng hành cùng người mới đến với cuộc sống tại Hàn Quốc — từ vượt qua kỳ thi KIIP & TOPIK đến chọn đúng loại visa.',
      exploreBtn: 'Khám phá dịch vụ',
      talkBtn: 'Liên hệ với chúng tôi',
      cards: [
        { title: 'KIIP & TOPIK', text: 'Vượt qua kỳ thi tiếng Hàn' },
        { title: 'Tư vấn visa', text: 'Biết chính xác nên xin loại nào' },
        { title: 'Phần mềm theo yêu cầu', text: 'Y tế, ứng dụng đánh giá và hơn thế' },
      ],
    },
    about: {
      eyebrow: 'Chúng tôi là ai',
      title: 'Cầu nối giữa người mới đến và Hàn Quốc',
      lead:
        'KR Connect Technologies là một startup có trụ sở tại Hàn Quốc, kết hợp công nghệ với sự hướng dẫn của con người. Chúng tôi giúp người nước ngoài hòa nhập cuộc sống tại Hàn Quốc và xây dựng phần mềm đáng tin cậy cho mọi người và doanh nghiệp xung quanh.',
      text:
        'Dù bạn đang ôn thi KIIP hay TOPIK, chưa rõ loại visa nào phù hợp, hay là một công ty đang tìm đối tác phần mềm đáng tin cậy — chúng tôi sẽ giúp mọi việc đơn giản hơn. Mọi điều chúng tôi làm đều xoay quanh một ý tưởng: kết nối con người với những cơ hội mà Hàn Quốc mang lại.',
      stats: [
        { value: '6+', label: 'Dịch vụ & sản phẩm' },
        { value: '2', label: 'Hai nhà sáng lập, một tầm nhìn' },
        { value: '100%', label: 'Tập trung vào Hàn Quốc' },
      ],
    },
    services: {
      eyebrow: 'Chúng tôi làm gì',
      title: 'Dịch vụ & sản phẩm của chúng tôi',
      intro: 'Từ giáo dục, phần mềm đến tư vấn, chúng tôi đồng hành trọn hành trình sống, làm việc và phát triển tại Hàn Quốc.',
      items: [
        { title: 'Luyện thi KIIP & TOPIK', text: 'Công cụ học tập, đề thi thử và hướng dẫn giúp người mới đến tự tin vượt qua kỳ thi KIIP và TOPIK của Hàn Quốc.' },
        { title: 'Phần mềm y tế', text: 'Phần mềm quản lý y tế và phòng khám theo yêu cầu, chú trọng độ tin cậy, bảo mật và dễ sử dụng.' },
        { title: 'Ứng dụng đánh giá nhà hàng', text: 'Nền tảng cộng đồng để khám phá, chấm điểm và đánh giá nhà hàng trên khắp Hàn Quốc.' },
        { title: 'Phát triển phần mềm', text: 'Chúng tôi nhận các dự án phần mềm theo yêu cầu cho công ty khác — web, di động và hệ thống backend, đúng yêu cầu.' },
        { title: 'Tư vấn visa', text: 'Hướng dẫn riêng cho người nước ngoài về loại visa nên xin, giấy tờ cần thiết và toàn bộ quy trình.' },
        { title: 'Tư vấn kinh doanh & CNTT', text: 'Lời khuyên và hỗ trợ cho cá nhân và doanh nghiệp ổn định cuộc sống, kinh doanh tại Hàn Quốc.' },
      ],
    },
    founders: {
      eyebrow: 'Con người',
      title: 'Gặp gỡ nhà sáng lập',
      intro: 'KR Connect Technologies được dẫn dắt bởi hai nhà đồng sáng lập sở hữu cổ phần ngang nhau và chung một sứ mệnh.',
      roles: ['Đồng sáng lập & Chủ sở hữu', 'Đồng sáng lập & Chủ sở hữu'],
      bios: [
        'Đồng sáng lập KR Connect Technologies, dẫn dắt phát triển phần mềm và tầm nhìn sản phẩm.',
        'Đồng sáng lập KR Connect Technologies, phụ trách dịch vụ tư vấn và quan hệ khách hàng.',
      ],
    },
    contact: {
      eyebrow: 'Liên hệ',
      title: 'Cùng trò chuyện',
      intro: 'Có câu hỏi về visa, kỳ thi hay dự án phần mềm? Hãy liên hệ, chúng tôi sẽ phản hồi sớm.',
      emailLabel: 'Email', phoneLabel: 'Điện thoại', locationLabel: 'Địa điểm',
      nameField: 'Họ tên', emailField: 'Email', messageField: 'Tin nhắn',
      namePlaceholder: 'Tên của bạn', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Chúng tôi có thể giúp gì?',
      sendBtn: 'Gửi tin nhắn',
    },
    footer: { tagline: 'Kết nối con người với Hàn Quốc.', rights: 'Bảo lưu mọi quyền.' },
    products: {
      eyebrow: 'Ứng dụng của chúng tôi',
      title: 'Sản phẩm bạn có thể tải ngay hôm nay',
      intro: 'Chúng tôi xây dựng các ứng dụng di động giúp cuộc sống ở Hàn Quốc dễ dàng hơn — và còn nhiều hơn nữa sắp ra mắt.',
      comingSoon: 'Sắp ra mắt',
      descriptions: {
        'kiip-academy': 'Ôn thi KIIP của Hàn Quốc với bài học, câu hỏi luyện tập và đề thi thử — ngay trên điện thoại.',
        'topik-academy': 'Nâng điểm TOPIK với từ vựng, ngữ pháp và đề thi thử đầy đủ, mọi lúc mọi nơi.',
      },
    },
  },

  /* ============================== RUSSIAN ============================== */
  ru: {
    nav: { about: 'О нас', services: 'Услуги', products: 'Продукты', blog: 'Блог', founders: 'Основатели', contact: 'Контакты', cta: 'Связаться' },
    hero: {
      badge: 'Базируемся в Сеуле · Создано для Кореи',
      title: 'Соединяем людей с Кореей.',
      subtitle:
        'Мы создаём умное программное обеспечение и помогаем новоприбывшим освоиться в Корее — от сдачи экзаменов KIIP и TOPIK до выбора подходящей визы.',
      exploreBtn: 'Наши услуги',
      talkBtn: 'Связаться с нами',
      cards: [
        { title: 'KIIP и TOPIK', text: 'Сдайте корейские экзамены' },
        { title: 'Помощь с визой', text: 'Точно знайте, что оформлять' },
        { title: 'Софт под заказ', text: 'Медицина, приложения отзывов и др.' },
      ],
    },
    about: {
      eyebrow: 'Кто мы',
      title: 'Мост между новоприбывшими и Кореей',
      lead:
        'KR Connect Technologies — стартап из Кореи, который сочетает технологии с живой поддержкой. Мы помогаем иностранцам обустроиться в Корее и создаём надёжное программное обеспечение для людей и компаний вокруг нас.',
      text:
        'Готовитесь ли вы к экзаменам KIIP или TOPIK, не уверены, какая виза вам подходит, или ищете надёжного партнёра по разработке — мы сделаем всё проще. В основе всего, что мы делаем, одна идея: соединять людей с возможностями, которые даёт Корея.',
      stats: [
        { value: '6+', label: 'Услуг и продуктов' },
        { value: '2', label: 'Два основателя, одна цель' },
        { value: '100%', label: 'Фокус на Корее' },
      ],
    },
    services: {
      eyebrow: 'Чем мы занимаемся',
      title: 'Наши услуги и продукты',
      intro: 'От образования и софта до консалтинга — мы сопровождаем весь путь жизни, работы и развития в Корее.',
      items: [
        { title: 'Подготовка к KIIP и TOPIK', text: 'Учебные инструменты, пробные тесты и поддержка, чтобы уверенно сдать корейские экзамены KIIP и TOPIK.' },
        { title: 'Медицинское ПО', text: 'Программное обеспечение для клиник и здравоохранения под заказ — надёжное, безопасное и удобное.' },
        { title: 'Приложение отзывов о ресторанах', text: 'Платформа сообщества для поиска, оценки и отзывов о ресторанах по всей Корее.' },
        { title: 'Разработка ПО', text: 'Берёмся за проекты под заказ для других компаний — веб, мобайл и бэкенд по техническому заданию.' },
        { title: 'Визовый консалтинг', text: 'Индивидуальная помощь иностранцам: какую визу оформлять, какие нужны документы и весь процесс.' },
        { title: 'Бизнес- и ИТ-консалтинг', text: 'Советы и поддержка для людей и компаний, обустраивающихся в жизни и бизнесе в Корее.' },
      ],
    },
    founders: {
      eyebrow: 'Команда',
      title: 'Основатели',
      intro: 'KR Connect Technologies ведут два сооснователя с равными долями и общей миссией.',
      roles: ['Сооснователь и владелец', 'Сооснователь и владелец'],
      bios: [
        'Сооснователь KR Connect Technologies, отвечает за разработку ПО и продуктовое видение.',
        'Сооснователь KR Connect Technologies, отвечает за консалтинг и работу с клиентами.',
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Давайте поговорим',
      intro: 'Есть вопрос о визах, экзаменах или проекте по разработке? Напишите нам, и мы ответим.',
      emailLabel: 'Эл. почта', phoneLabel: 'Телефон', locationLabel: 'Местоположение',
      nameField: 'Имя', emailField: 'Эл. почта', messageField: 'Сообщение',
      namePlaceholder: 'Ваше имя', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Чем мы можем помочь?',
      sendBtn: 'Отправить',
    },
    footer: { tagline: 'Соединяем людей с Кореей.', rights: 'Все права защищены.' },
    products: {
      eyebrow: 'Наши приложения',
      title: 'Продукты, которые можно скачать уже сегодня',
      intro: 'Мы создаём мобильные приложения, которые упрощают жизнь в Корее — и впереди ещё больше.',
      comingSoon: 'Скоро',
      descriptions: {
        'kiip-academy': 'Готовьтесь к корейскому экзамену KIIP с уроками, практическими заданиями и пробными тестами — прямо в телефоне.',
        'topik-academy': 'Повышайте балл TOPIK с помощью лексики, грамматики и полноценных пробных тестов в любое время и в любом месте.',
      },
    },
  },

  /* ============================== BANGLA ============================== */
  bn: {
    nav: { about: 'পরিচিতি', services: 'সেবাসমূহ', products: 'পণ্যসমূহ', blog: 'ব্লগ', founders: 'প্রতিষ্ঠাতাগণ', contact: 'যোগাযোগ', cta: 'যোগাযোগ করুন' },
    hero: {
      badge: 'সিউলভিত্তিক · কোরিয়ার জন্য তৈরি',
      title: 'মানুষকে কোরিয়ার সাথে যুক্ত করি।',
      subtitle:
        'আমরা স্মার্ট সফটওয়্যার তৈরি করি এবং নতুনদের কোরিয়ার জীবনে পথ দেখাই — KIIP ও TOPIK পরীক্ষায় উত্তীর্ণ হওয়া থেকে সঠিক ভিসা বেছে নেওয়া পর্যন্ত।',
      exploreBtn: 'আমাদের সেবা দেখুন',
      talkBtn: 'আমাদের সাথে কথা বলুন',
      cards: [
        { title: 'KIIP ও TOPIK', text: 'কোরিয়ান পরীক্ষায় উত্তীর্ণ হোন' },
        { title: 'ভিসা সহায়তা', text: 'কোন ভিসা দরকার, জানুন স্পষ্টভাবে' },
        { title: 'কাস্টম সফটওয়্যার', text: 'মেডিকেল, রিভিউ অ্যাপ ও আরও' },
      ],
    },
    about: {
      eyebrow: 'আমরা কারা',
      title: 'নতুনদের ও কোরিয়ার মধ্যে এক সেতু',
      lead:
        'KR Connect Technologies কোরিয়াভিত্তিক একটি স্টার্টআপ, যা প্রযুক্তির সাথে প্রকৃত মানবিক সহায়তাকে যুক্ত করে। আমরা বিদেশিদের কোরিয়ায় থিতু হতে সাহায্য করি এবং আশেপাশের মানুষ ও প্রতিষ্ঠানের জন্য নির্ভরযোগ্য সফটওয়্যার তৈরি করি।',
      text:
        'আপনি KIIP বা TOPIK পরীক্ষার প্রস্তুতি নিচ্ছেন, কোন ভিসা আপনার জন্য উপযুক্ত তা নিয়ে অনিশ্চিত, কিংবা একটি নির্ভরযোগ্য সফটওয়্যার পার্টনার খুঁজছেন — আমরা সবকিছু সহজ করে দিই। আমাদের প্রতিটি কাজের মূলে একটি ভাবনা: মানুষকে কোরিয়ার সুযোগের সাথে যুক্ত করা।',
      stats: [
        { value: '6+', label: 'সেবা ও পণ্য' },
        { value: '2', label: 'দুই প্রতিষ্ঠাতা, এক স্বপ্ন' },
        { value: '100%', label: 'কোরিয়ায় নিবদ্ধ' },
      ],
    },
    services: {
      eyebrow: 'আমরা যা করি',
      title: 'আমাদের সেবা ও পণ্য',
      intro: 'শিক্ষা ও সফটওয়্যার থেকে শুরু করে পরামর্শ — কোরিয়ায় বসবাস, কাজ ও গড়ে ওঠার পুরো যাত্রায় আমরা পাশে আছি।',
      items: [
        { title: 'KIIP ও TOPIK প্রস্তুতি', text: 'অধ্যয়নের টুল, মক টেস্ট ও দিকনির্দেশনা — যা নতুনদের কোরিয়ার KIIP ও TOPIK পরীক্ষায় আত্মবিশ্বাসের সাথে উত্তীর্ণ হতে সাহায্য করে।' },
        { title: 'মেডিকেল সফটওয়্যার', text: 'নির্ভরযোগ্যতা, গোপনীয়তা ও সহজ ব্যবহারের কথা মাথায় রেখে তৈরি কাস্টম স্বাস্থ্যসেবা ও ক্লিনিক ব্যবস্থাপনা সফটওয়্যার।' },
        { title: 'রেস্টুরেন্ট রিভিউ অ্যাপ', text: 'কোরিয়াজুড়ে রেস্টুরেন্ট আবিষ্কার, রেটিং ও রিভিউ করার একটি কমিউনিটিভিত্তিক প্ল্যাটফর্ম।' },
        { title: 'সফটওয়্যার ডেভেলপমেন্ট', text: 'অন্য কোম্পানির জন্য কাস্টম সফটওয়্যার প্রকল্প — চাহিদা অনুযায়ী ওয়েব, মোবাইল ও ব্যাকএন্ড সিস্টেম তৈরি করি।' },
        { title: 'ভিসা পরামর্শ', text: 'কোন ভিসার জন্য আবেদন করবেন, কী কী কাগজপত্র লাগবে এবং পুরো প্রক্রিয়া নিয়ে বিদেশিদের জন্য ব্যক্তিগত দিকনির্দেশনা।' },
        { title: 'ব্যবসা ও আইটি পরামর্শ', text: 'কোরিয়ায় জীবন ও ব্যবসায় থিতু হতে চাওয়া ব্যক্তি ও প্রতিষ্ঠানের জন্য পরামর্শ ও সহায়তা।' },
      ],
    },
    founders: {
      eyebrow: 'আমাদের মানুষ',
      title: 'প্রতিষ্ঠাতাদের সাথে পরিচিত হোন',
      intro: 'KR Connect Technologies পরিচালনা করেন দুই সহ-প্রতিষ্ঠাতা, যাঁরা সমান মালিকানা ও একটি অভিন্ন লক্ষ্য ভাগ করে নেন।',
      roles: ['সহ-প্রতিষ্ঠাতা ও মালিক', 'সহ-প্রতিষ্ঠাতা ও মালিক'],
      bios: [
        'KR Connect Technologies-এর সহ-প্রতিষ্ঠাতা, সফটওয়্যার ডেভেলপমেন্ট ও পণ্য পরিকল্পনায় নেতৃত্ব দেন।',
        'KR Connect Technologies-এর সহ-প্রতিষ্ঠাতা, পরামর্শ সেবা ও গ্রাহক সম্পর্কে নেতৃত্ব দেন।',
      ],
    },
    contact: {
      eyebrow: 'যোগাযোগ',
      title: 'চলুন কথা বলি',
      intro: 'ভিসা, পরীক্ষা বা সফটওয়্যার প্রকল্প নিয়ে কোনো প্রশ্ন আছে? যোগাযোগ করুন, আমরা উত্তর দেব।',
      emailLabel: 'ইমেইল', phoneLabel: 'ফোন', locationLabel: 'অবস্থান',
      nameField: 'নাম', emailField: 'ইমেইল', messageField: 'বার্তা',
      namePlaceholder: 'আপনার নাম', emailPlaceholder: 'you@example.com', messagePlaceholder: 'আমরা কীভাবে সাহায্য করতে পারি?',
      sendBtn: 'বার্তা পাঠান',
    },
    footer: { tagline: 'মানুষকে কোরিয়ার সাথে যুক্ত করি।', rights: 'সর্বস্বত্ব সংরক্ষিত।' },
    products: {
      eyebrow: 'আমাদের অ্যাপ',
      title: 'এখনই ডাউনলোড করার মতো পণ্য',
      intro: 'আমরা এমন মোবাইল অ্যাপ তৈরি করি যা কোরিয়ার জীবন সহজ করে — আরও অনেক কিছু আসছে।',
      comingSoon: 'শীঘ্রই আসছে',
      descriptions: {
        'kiip-academy': 'পাঠ, অনুশীলন প্রশ্ন ও মক টেস্ট দিয়ে কোরিয়ার KIIP পরীক্ষার প্রস্তুতি নিন — সরাসরি আপনার ফোনে।',
        'topik-academy': 'শব্দভাণ্ডার, ব্যাকরণ ও পূর্ণ মক টেস্ট দিয়ে যেকোনো সময়, যেকোনো জায়গায় আপনার TOPIK স্কোর বাড়ান।',
      },
    },
  },
}
