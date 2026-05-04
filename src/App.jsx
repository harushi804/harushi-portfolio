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
    points: ["Webデータ取得", "統計分析", "バックテスト", "Win/Mac対応", "ライセンス認証"],
  },
];

const services = [
  ["表", "GAS・スプレッドシート自動化", "転記、集計、検索、管理表、専用UI、通知、帳票作成など、日々の手作業を削減します。"],
  ["AI", "AI活用・API連携", "OpenAI / Gemini / 外部APIを活用し、文章生成、分類、要約、案件判定、提案文作成を仕組み化します。"],
  ["予", "予約・顧客管理の自動化", "予約データ、顧客リスト、Googleカレンダー、連絡先などの同期・更新・重複防止に対応します。"],
  ["Py", "Pythonツール・業務アプリ開発", "Windows / Mac向けのPythonツール、データ分析、検証アプリ、クラウド常時稼働などを構築します。"],
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
          <div className="grid gap-4 md:grid-cols-3">
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
                    <div className="mt-5 flex flex-wrap gap-2">
                      {work.points.map((point) => <span key={point} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">{point}</span>)}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
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
