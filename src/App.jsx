import React from "react";
import { motion } from "framer-motion";

const crowdworksUrl = "https://crowdworks.jp/public/employees/1287978";
const lancersUrl = "https://www.lancers.jp/profile/harushi804";
const profileImage = "/images/11_transparent.png";
const headerImage = "/images/Lancers_Header_Design_Template.png";

const Icon = ({ label, className = "" }) => (
  <span
    aria-hidden="true"
    className={[
      "inline-flex items-center justify-center rounded-xl font-bold leading-none",
      className,
    ].join(" ")}
  >
    {label}
  </span>
);

const works = [
  {
    title: "業務統合管理・高速検索システム",
    category: "Google Apps Script / Spreadsheet",
    image: "/images/総合検索カバー画像.png",
    text: "複数スプレッドシート上のデータを一元管理し、高速検索・入力ミス防止・権限管理・自動通知まで実装。現場の検索業務時間を80%以上削減。",
    points: ["一元管理", "高速検索UI", "入力ミス防止", "権限管理", "自動通知"],
  },
  {
    title: "AI自動化：記事生成〜WP・SNS同時投稿",
    category: "AI / API / WordPress",
    image: "/images/コラムカバー画像.png",
    text: "Gemini API、Claude Code、画像生成、WordPress API、SNS連携を組み合わせ、販促コンテンツの制作から公開までを無人化。",
    points: ["記事生成", "画像生成", "WordPress投稿", "SNS同時投稿", "24時間自動運用"],
  },
  {
    title: "Google / iCloud / 顧客リスト自動同期",
    category: "予約管理 / CRM / API連携",
    image: "/images/予約管理カバー画像.png",
    text: "予約システム、Googleカレンダー、iCloud連絡先、顧客リストを連携。二重登録・転記ミス・ダブルブッキングを防止。",
    points: ["リアルタイム同期", "転記作業ゼロ", "二重予約防止", "顧客情報一元管理"],
  },
  {
    title: "時系列データ分析・自動検証アプリ",
    category: "Python / Pandas / GUI",
    image: "/images/ASTATカバー画像.png",
    text: "Webデータ取得、Pandasによる指標計算、バックテスト、統計分析、レポート出力までを自動化したデスクトップアプリ。",
    points: ["Webデータ取得", "統計分析", "バックテスト", "Win/Mac対応", "購入者認証"],
  },
  {
    title: "ストアカ講座運営の自動化ツール「SAツール」",
    category: "Python / Googleシート / Googleカレンダー / Gmail",
    image: "/images/SAツール画面.png",
    text: "ストアカの先生向けに販売中の自社製品。Googleシートに書いた設定どおりに、日程の一括追加・削除、予約のカレンダー登録と定型返信、お知らせ配信、受講日時を基準にしたステップ配信までを行います。予約通知メールを検知しての自動処理や、カレンダーの予定と重なる空き枠の自動削除（ダブルブッキング防止）にも対応。",
    points: ["日程の一括追加・削除", "予約処理の自動化", "ステップ配信", "ダブルブッキング防止", "Win/Mac対応"],
  },
  {
    title: "7つのSNSへの予約自動投稿ツール「AutoPoster」",
    category: "Python / Googleシート / SNS連携",
    image: "/images/AutoPoster画面.png",
    text: "販売中の自社製品。ひとつのGoogleシートから、Facebook（グループ・ページ）、Instagram、X、Threads、LinkedIn、TikTok、YouTubeへ、予約した時刻に順番に投稿します。シートごとのアカウント切り替え、投稿間隔の指定、承認待ちの多いFacebookグループの自動スキップなど、毎日の告知を仕組みにする機能を備えています。",
    points: ["7つのSNSに対応", "予約投稿", "スリープ中も実行", "複数シート運用", "Win/Mac対応"],
  },
  {
    title: "SNS投稿の素材をAIで作るツール「CMツール」",
    category: "Python / 生成AI（Gemini・ChatGPT・Claude）",
    image: "/images/CMツール画面.png",
    text: "販売中の自社製品。商品の資料や販売ページを読み込み、切り口を変えた投稿文を1回に30本まで作成。X・Threads・Facebook・Instagram向けに文を作り分け、見出し入りの画像と、字幕・読み上げ付きの縦動画まで作ります。効果の約束や資料にない数字など「言い過ぎ」を自動で知らせ、AutoPosterと連携して予約投稿まで流せます。",
    points: ["投稿文の量産", "SNSごとの作り分け", "画像・縦動画の生成", "言い過ぎチェック", "AutoPoster連携"],
  },
  {
    title: "AIエージェントの「役員組織」で事業を運営",
    category: "Claude Code / AIエージェント / 業務設計",
    image: "/images/book_aiboard4.jpg",
    text: "代表（人）が方針を決めて決裁し、AIの「社長室」が仕事を振り分け、事業ごとのAI役員（経営企画・ソフトウェア・メディア・コンテンツ・清掃・技術・監査）が分担する体制を自社で構築・運用。会社の決まり、役員会、決裁ログを文書にし、公開・お金・削除は人が決める前提で回しています。この仕組みは著書にもまとめています。",
    points: ["AI役員の分担", "役員会・決裁ログ", "定時タスクで自動実行", "人が決裁する安全設計"],
  },
  {
    title: "製品販売サイト「インフォマニュアル」",
    category: "Web制作 / 販売ページ / マニュアル公開",
    image: "/images/インフォマニュアル画面.png",
    link: "https://info-manual.com/",
    text: "自社製品（ASTAT225・AutoPoster・CMツール・SAツール・一冊工房）の販売ページと公開マニュアル、受託開発・研修・本づくりの案内をまとめたサイトを制作・運営。決済、特定商取引法の表記、アクセス解析まで含めて自分で整えています。",
    points: ["製品ハブ", "販売ページ5製品", "公開マニュアル", "決済・アクセス解析"],
  },
];

const books = [
  ["AIに手順書を渡せば、事務は自動にできる", "何から始めればいいかわからない人のための自動化入門", "/images/book_automation2.jpg", "https://www.amazon.co.jp/dp/B0HMH42R13"],
  ["SNSの投稿は、まとめて作って予約すれば続く", "小さな店のための自動投稿入門", "/images/book_autopost3.jpg", "https://www.amazon.co.jp/dp/B0HMLRN3QC"],
  ["AIを役員にすれば、事業の全体が見渡せる", "一人社長のための、会社の決まり・役員会・決裁ログの作り方", "/images/book_aiboard4.jpg", "https://www.amazon.co.jp/dp/B0HMST7VSW"],
  ["AIの質問に答えれば、仕事の経験は本になる", "企画から出版まで、自分の仕事を電子書籍にする手順", "/images/book_ebook5.jpg", "https://www.amazon.co.jp/dp/B0HMW35FZ7"],
];

const services = [
  ["表", "GAS・スプレッドシート自動化", "転記、集計、検索、管理表、専用UI、通知、帳票作成など、日々の手作業を削減します。"],
  ["AI", "AI活用・API連携", "OpenAI / Gemini / 外部APIを活用し、文章生成、分類、要約、案件判定、提案文作成を仕組み化します。"],
  ["予", "予約・顧客管理の自動化", "予約データ、顧客リスト、Googleカレンダー、連絡先などの同期・更新・重複防止に対応します。"],
  ["Py", "Pythonツール・業務アプリ開発", "Windows / Mac向けのPythonツール、データ分析、検証アプリ、クラウド常時稼働などを構築します。"],
  ["研", "AI活用の研修・講師", "生成AIの仕事での使い方、手順書をAIに渡して事務を自動にする進め方、GAS入門など、対象・人数・時間に合わせて内容を組みます。"],
  ["本", "電子書籍（Kindle本）づくり", "取材から構成・原稿・表紙・EPUB・KDP登録の準備まで、AIと一緒に仕事のノウハウを1冊の本にします。"],
];

const strengths = [
  "自社業務で毎日使う前提の、実用重視の設計",
  "現場の人が迷わず使えるシンプルなUI",
  "作って終わりではなく、運用・改善まで見据えた構築",
  "防衛大学校卒・航空自衛隊32年で培った正確性と完遂力",
];

const stats = [
  ["30万円", "法人GASシステム構築", "複数スプレッドシートを一元管理する専用UIを構築。検索・転記作業の削減、人的ミス防止を実現。"],
  ["完全自動化", "自社AI自動投稿システム", "記事生成、画像生成、WordPress投稿、SNS同時投稿までをAPI連携で自動化。"],
  ["リアルタイム同期", "予約・顧客データ連携", "予約システム、Googleカレンダー、iCloud連絡先、顧客リストを連携。"],
  ["165人", "ストアカ講座の受講者", "ストアカで講座を151回開催し、レビュー65件（2026年10月時点）。分かりやすく教える経験を、導入後の説明・引き継ぎにも活かします。"],
];

const careerCards = [
  ["経", "事業経営 × ITエンジニア", "/images/退職後経歴.png", "ハウスクリーニング事業を自ら経営し、現場課題をITで解決。経営者目線で、現場の負担を実際に減らす仕組みを構築します。"],
  ["航", "航空自衛隊での指揮官・操縦員経験", "/images/現役時経歴.png", "防衛大学校卒業後、航空自衛隊で群司令・部隊運用・戦闘機操縦員などを経験。正確性、危機管理、完遂力を開発にも活かします。"],
];

function runPortfolioDataTests() {
  const errors = [];

  if (!crowdworksUrl.startsWith("https://crowdworks.jp/")) {
    errors.push("クラウドワークスURLが不正です");
  }
  if (!lancersUrl.startsWith("https://www.lancers.jp/")) {
    errors.push("ランサーズURLが不正です");
  }
  if (works.length < 4) {
    errors.push("制作実績は4件以上必要です");
  }
  if (services.length < 4) {
    errors.push("対応領域は4件以上必要です");
  }
  works.forEach((work, index) => {
    if (!work.title || !work.image || !work.text || !Array.isArray(work.points)) {
      errors.push(`制作実績${index + 1}の必須項目が不足しています`);
    }
  });

  return errors;
}

const portfolioDataTestErrors = runPortfolioDataTests();

function Button({ href, children, primary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",
        primary
          ? "bg-slate-950 text-white shadow-lg shadow-slate-950/20 hover:-translate-y-0.5 hover:bg-slate-800"
          : "border border-slate-200 bg-white text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-slate-300",
      ].join(" ")}
    >
      {children}
      <span aria-hidden="true" className="text-base">↗</span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

export default function HarushiPortfolioOnePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(180deg,#ffffff,#f8fafc)] text-slate-900">
      {portfolioDataTestErrors.length > 0 && (
        <div className="border-b border-red-200 bg-red-50 px-5 py-3 text-sm text-red-700">
          データ確認エラー: {portfolioDataTestErrors.join(" / ")}
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <img src={profileImage} alt="坂本はるし" className="h-11 w-11 rounded-full border border-slate-200 object-contain" />
            <div>
              <p className="text-sm font-bold leading-none text-slate-950">坂本はるし</p>
              <p className="mt-1 text-xs text-slate-500">業務自動化・AI活用エンジニア</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-950">対応領域</a>
            <a href="#works" className="hover:text-slate-950">制作実績</a>
            <a href="#books" className="hover:text-slate-950">著書</a>
            <a href="#career" className="hover:text-slate-950">経歴</a>
            <a href="#contact" className="hover:text-slate-950">相談</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Icon label="✓" className="h-6 w-6 bg-blue-50 text-blue-700" />
              法人向け業務改善・自動化支援
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              実業の知見 × AIエージェントで
              <span className="block text-blue-700">現場の業務を自動化。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              ハウスクリーニング事業を自ら経営しながら、GAS・Python・API連携・生成AIを活用した業務自動化システムを10年以上開発・運用しています。作って終わりではなく、現場で安定して使い続けられる仕組みを設計します。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={crowdworksUrl} primary>クラウドワークスを見る</Button>
              <Button href={lancersUrl}>ランサーズを見る</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-slate-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/90 p-4 shadow-2xl shadow-slate-200/70">
              <img src={headerImage} alt="実業の知見×AIエージェントによる爆速開発" className="aspect-[3/1] w-full rounded-3xl border border-slate-200 object-contain" />
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[["GAS", "業務管理を自動化"], ["Python", "分析・検証を効率化"], ["AI", "提案・投稿・判定を支援"]].map(([label, text]) => (
                  <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="font-bold text-slate-950">{label}</p>
                    <p className="mt-1 text-sm text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-blue-700">{value}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle eyebrow="Services" title="対応できること" description="日々の転記・確認・集計・連絡・投稿など、時間を奪う作業を仕組みに置き換えます。" />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map(([iconLabel, title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                <Icon label={iconLabel} className="h-12 w-12 bg-blue-50 text-blue-700" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="works" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionTitle eyebrow="Works" title="制作実績・ポートフォリオ" description="実業で培った自動化・AI活用の成果物を、法人案件向けに整理しています。" />
            <div className="grid gap-8">
              {works.map((work, index) => (
                <motion.article key={work.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.05 }} className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-6">
                  <img src={work.image} alt={work.title} className="aspect-[16/9] w-full rounded-3xl border border-slate-200 object-contain" />
                  <div className="flex flex-col justify-center p-2 md:p-4">
                    <p className="mb-3 inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">{work.category}</p>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{work.title}</h3>
                    <p className="mt-4 leading-8 text-slate-600">{work.text}</p>
                    {work.link && <a href={work.link} target="_blank" rel="noreferrer" className="mt-3 w-fit text-sm font-semibold text-blue-700 hover:underline">{work.link.replace("https://", "").replace(/\/$/, "")} ↗</a>}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {work.points.map((point) => <span key={point} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">{point}</span>)}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="books" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle eyebrow="Books" title="著書（Kindle本）" description="坂本検の名前でKindle本を6冊出版。業務自動化・AI活用の4冊は、AIと一緒に原稿を作り、自分で点検して出版しました。" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {books.map(([title, subtitle, cover, url]) => (
              <a key={title} href={url} target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                <img src={cover} alt={title} className="aspect-[5/8] w-full rounded-2xl border border-slate-100 object-cover" />
                <h3 className="mt-4 font-bold leading-6 text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{subtitle}</p>
                <p className="mt-3 text-sm font-semibold text-blue-700 group-hover:underline">Amazonで見る ↗</p>
              </a>
            ))}
          </div>
        </section>

        <section id="career" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle eyebrow="Career" title="経歴と信頼性" description="現場で事業を運営する視点と、大規模組織で培った正確性・完遂力を組み合わせて支援します。" />
          <div className="grid gap-6 md:grid-cols-2">
            {careerCards.map(([iconLabel, title, image, text]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                <img src={image} alt={title} className="aspect-[16/10] w-full rounded-3xl border border-slate-200 object-contain" />
                <div className="mt-5 flex gap-4">
                  <Icon label={iconLabel} className="h-12 w-12 shrink-0 bg-blue-50 text-blue-700" />
                  <div><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-2 leading-8 text-slate-600">{text}</p></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <Icon label="時" className="h-12 w-12 bg-white/10 text-white" />
              <h2 className="mt-5 text-3xl font-bold">なぜ相談しやすいか</h2>
              <p className="mt-4 leading-8 text-slate-300">ITだけでなく、自社事業の現場で実際に使う仕組みを作ってきました。だからこそ、使いやすさ・運用の安定性・導入後の改善まで意識して提案できます。</p>
            </div>
            <div className="grid gap-3">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <Icon label="✓" className="mt-1 h-5 w-5 shrink-0 bg-white/10 text-white text-xs" />
                  <p className="leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">まずは「こんなことできますか？」から。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-slate-600">スプレッドシート管理、予約・顧客データ連携、AI活用、API連携、業務改善ツールの開発など、構想段階から相談できます。</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={crowdworksUrl} primary>✉ クラウドワークスで相談</Button><Button href={lancersUrl}>ランサーズで相談</Button></div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Harushi Sakamoto. Business Automation & AI Portfolio.</p>
          <p className="flex items-center gap-2">GAS / Python / API / AI / Workflow Automation <span aria-hidden="true">→</span></p>
        </div>
      </footer>
    </div>
  );
}
