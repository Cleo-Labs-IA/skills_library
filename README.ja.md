# Compliance Product Guidance

[![npm](https://img.shields.io/npm/v/@cleo-labs/skills-mcp?label=%40cleo-labs%2Fskills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@cleo-labs/skills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![MCP server](https://img.shields.io/badge/MCP-server-blue)](./mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/skills-45-blue)](./skills)
![GitHub stars](https://img.shields.io/github/stars/Cleo-Labs-IA/skills_library?style=social)
[![Cleo Labs](https://img.shields.io/badge/built%20by-Cleo%20Labs-0008CF)](https://cleolabs.co)

物理製品のためのAIコンプライアンス・コパイロット。REACH、FDA、CE、通関、その他24の規制を、Claude Code / Cursor / Codex の中で扱えます。

## これは何？

物理製品を国境を越えて販売するということは、49カ国に散らばる25,000以上の規制を渡り歩くことを意味します。聞いたこともない物質禁止、四半期ごとに変わるラベル要件、関税率を12%動かす関税分類、一夜にして出品を削除するマーケットプレイスのルール。多くの小規模ブランドはこれを高い授業料で学びます — 通関の現場で、あるいはAmazonに出品を取り下げられた後で。

Compliance Product Guidance は、**プロダクション品質の40スキル + 2つのMCPサーバー**で、AIエージェントにたった一つの問いに答える方法を教えます。「この製品をこの市場で売るために、実際に何をすればいいのか？」

ヒーロー・スキルは `product-compliance` です。原材料リスト（あるいはBOM、処方）を貼り付け、対象市場を選ぶと、次の処理が走ります：

```
原材料  →  CAS番号解決  →  13規制データベース  →
市場ごと・物質ごとの判定  →  リスク売上高の算出
```

出力例：

```
Retinol 0.4%   EU: 不可 (Annex III 顔用製品0.3%キャップ、2025年11月発効) 年間リスク売上: 約 €180k
Retinol 0.4%   米国: 可 (連邦キャップなし; この用量ではCA Prop 65警告不要)
Retinol 0.4%   英国: 不可 (UK Cosmetics Reg は EU Annex III に追随)
Retinol 0.4%   日本: 要確認 (医薬部外品の閾値 — MHLWレビューが必要)
```

同じパターンが、電子機器のBOM（RoHS、REACH SVHC、CE/FCC、電池規則）、食品レシピ（アレルゲン、ノベルフード、FDA FSMA）、テキスタイル（PFAS、繊維表示、OEKO-TEX）、または下記の18カテゴリーいずれにも適用されます。

## インストール

```bash
# MCPサーバーとして（最速）
npx -y @cleo-labs/skills-mcp@latest

# Claude Code スキルとして（ファイルベース）
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

npmパッケージは **Claude Desktop、Cursor、Continue、Zed、その他あらゆるMCP対応クライアント** のためのワンライン・インストールです。スキルはネイティブMCPリソース（`skill://<名前>`）、パラメータ化プロンプト、3つの構造化ツール（`list_skills`, `find_skill`, `read_skill`）として現れます。

クライアントの設定にこれを追加してください：

```json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "npx",
      "args": ["-y", "@cleo-labs/skills-mcp@latest"]
    }
  }
}
```

**Claude Code** では、`git clone` 版がスキルを `~/.claude/skills/comply` に配置し、物質・ラベル・通関・市場・リコールに関する質問で自動的に発火します — 手動呼び出しは不要です。

## 40のスキル

### コア・コンプライアンス・エンジン (6)

実際の製品に触れるスキル群。

| スキル | 役割 |
|--------|------|
| `product-compliance` | **ヒーロー・スキル。** 13DBを横断する物質チェック、市場別判定、リスク売上算出。 |
| `substance-screening` | 原料・材料のディープ・スクリーニング: INCI→CAS、濃度マージン、管轄別判定。 |
| `labeling-compliance` | 国別ラベル: INCI、アレルゲン、警告、CE/UKCAマーク、多言語ルール。 |
| `testing-certification` | 製品×市場ごとの試験・認証要件 (CPSR, CE, FCC, UL, EN 71, HACCP)。ラボ選定、コスト、期間。 |
| `claims-substantiation` | マーケティング表示の検証: EU 655/2013、FDA医薬品-化粧品境界、FTC、グリーンクレーム。 |
| `market-entry-checklist` | ステップ・バイ・ステップ: 分類 → 規制 → 物質 → ラベル → 認証 → 通関 → 届出。 |

### マルチ市場インテリジェンス & アクション (13)

「問題がある」から「出荷した」へ運ぶスキル群。

| スキル | 役割 |
|--------|------|
| `regulatory-intelligence` | シグナル監視: 物質禁止、ラベル変更、リコール、施行日。 |
| `multi-jurisdiction-scan` | 全対象市場の並列スキャン。市場ごとに 赤/橙/黄/緑。管轄ごとに1エージェント。 |
| `customs-and-trade` | HSコード、関税、ランデッドコスト、デュアルユース、制裁。 |
| `compliance-audit-sprint` | ローンチ前スプリント: 特定 → マッピング → チェック → 検証 → コスト見積。並列エージェントを派遣。 |
| `compliance-remediation` | 市場参入を阻む不適合の解消: 再処方、再ラベル、試験、認証。 |
| `evidence-blitz` | 監査・認証・マーケットプレイス掲載のためのエビデンス並列収集。 |
| `responsible-person` | EU RP、UK RP、US Agent、EAEU AR、中国NMPAホルダーの設定。委任状、費用、義務。 |
| `packaging-compliance` | EU加盟国ごとのEPR、PPWR移行、SUP、プラスチック税、米国州EPR。 |
| `recall-response` | 重大度評価、当局通報 (EU 10日、米国 24時間、UK 3日)、クローズアウト。 |
| `product-safety-incident` | CPSC 24時間、EU Safety Gate 10日、リスクマトリクス、根本原因、消費者通知。 |
| `import-export-docs` | コマーシャル・インボイス、パッキングリスト、EUR.1/REX/USMCA、危険物申告、Incoterms 2020。 |
| `marketplace-compliance` | プラットフォーム×カテゴリーごとの必要書類: Amazon EU GPSR+EPR, Walmart, Shopify, Etsy, TikTok Shop。 |
| `regulatory-calendar` | 届出更新、認証期限、施行予定 (GPSR, CRA, MoCRA GMP, EUDR, ESPR)。 |

### 18の製品カテゴリー

カテゴリーごとの深い規制プレイブック：

`cosmetics-compliance` · `food-compliance` · `electronics-compliance` · `textile-compliance` · `toy-compliance` · `alcohol-spirits-compliance` · `supplement-compliance` · `jewelry-compliance` · `medical-device-compliance` · `pet-product-compliance` · `automotive-aftermarket-compliance` · `agricultural-compliance` · `tobacco-vape-compliance` · `sporting-goods-compliance` · `baby-children-products-compliance` · `household-chemicals-compliance` · `candle-fragrance-compliance` · `sustainability-compliance`

各カテゴリーはEU、米国、英国、カナダ、日本、韓国、中国、ASEANにわたる完全な規制スタックをカバーします — 概要ではなく、実際の条文、料金体系、届出ポータル、移行日付まで。

### リファレンス & 統合 (3)

`compliance-frameworks-ref` (規制リファレンス・インデックス) · `compliance-mcp-tools` (Cleo Legal API + Cleo Insight 統合パターン) · `compliance-reporting` (製品×市場マトリクス、エクスポート可能)。

## MCPの堀

多くのスキル・ライブラリは静的な知識です — 出荷した日に古くなる。これは2つのMCPサーバーで生きたデータに接続されています：

- **Cleo Legal API** — 通関分類、物質ルックアップ、関税計算、ランデッドコスト、制裁スクリーニング。`product-compliance`、`customs-and-trade`、`substance-screening` のデータ背骨。
- **Cleo Insight** — **49カ国・25,000以上の規制** にわたる生きた規制シグナル。`regulatory-intelligence`、`multi-jurisdiction-scan`、`regulatory-calendar` のフィード。

**スキルはスタンドアロンで動作します** — MCPなしでは、同じプロンプト構造でWeb検索とファイルベースのエビデンスにフォールバックします。MCPを有効にすると、同じプロンプトがベストエフォートのルックアップではなく最新データを返します。

## デフォルトでマルチエージェント

Tier 3 のアクション・スキルは `superpowers:dispatching-parallel-agents` 経由で並列エージェントを派遣します：

- `compliance-audit-sprint` — 対象市場ごとに1エージェント
- `multi-jurisdiction-scan` — 管轄クラスタごとに1エージェント
- `evidence-blitz` — 書類カテゴリーごとに1エージェント

規制コンサルタントが3週間かかっていたマルチ市場ローンチ監査が、約12分で完了します。

## こんな人向け

- 物理製品を立ち上げるインディー・ファウンダーや小規模プロダクトチーム（1–10名）
- 1市場から3、5、10市場へ拡大するD2Cブランド
- 出品停止と戦うマーケットプレイス・セラー (Amazon GPSR、EPR、MoCRA)
- REACH、CLP、FDA MoCRA、Prop 65、GPSR、CRA、EUDR、CE/UKCA/FCC、EN 71、その他ロングテールを扱うオペレーター
- 数日ではなく数分でファースト・パスを終わらせたい規制コンサルタント

## こんな人向けではない

あなたのスペシャリストを置き換えるつもりはありません。**残り20%の難しい部分にスペシャリストが集中できるよう、私たちが80%まで連れて行きます。**

- **CE認証機関** の監査は置き換えません（クラスIIa以上の医療機器、カテゴリーIII PPE等）
- **化粧品安全性評価者** によるCPSR署名は置き換えません
- 実際の通関手続きにおける **登録通関業者** は置き換えません
- 訴訟、執行抗弁、製造物責任における **法律顧問** は置き換えません
- 法的助言は提供しません。出荷判断の前には必ず公式ソースに照らして検証してください。

## なぜ作ったか

私たちは [Cleo Labs](https://cleolabs.co) の共同創業者、アナエル（CEO）とナオミ（CDO）です。コンプライアンスの仕事を始めたのは、同じ場面が繰り返されるのを見てきたからです。小さなブランドが14ヶ月かけて美しい製品を作り、最初のコンテナをロッテルダムやフェリックストウに送り、REACHドジエの不備や前四半期にキャップされた附属書III物質で税関に止められる。EU国境で止まった40フィート・コンテナは、誰かが製品に触れるまでに €15–40k の保管料・滞船料・手直し費用がかかります。

それを防ぐ知識は存在します。ただ、ファウンダーがいる場所にないだけです — €800/時間のコンサル資料と4,000ページの規制PDFに閉じ込められています。だから私たちはそれをファウンダーがいる場所、つまり彼ら自身のAIエージェントの中に置きました。それがこのリポジトリです。

## 例

[EXAMPLES.md](./EXAMPLES.md) に完全なウォークスルー（EU+UKでの顔用クリーム、US+EUのBluetoothスピーカー、日本へのチョコレート、玩具安全、Amazon EU エビデンス・パック）があります。

## コントリビューション

PR歓迎 — 特に新しいカテゴリー・プレイブック、管轄アップデート、物質限度値の修正。[CONTRIBUTING.md](./CONTRIBUTING.md) と [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) から始めてください。セキュリティ問題: [SECURITY.md](./SECURITY.md)。

## ライセンス

MIT。[LICENSE](./LICENSE) を参照。

## 免責事項

> **これはコンプライアンス・ガイダンスであり、法的助言ではありません。**
>
> スキルは公開されている規制に基づく出発点を提供します。資格のある規制コンサルタント、認証機関、安全性評価者、通関業者、法律顧問の代わりにはなりません。
>
> 規制データ（物質限度値、施行日、料金、分類ルール）は常に変化します。事業判断の前には、必ず公式ソース（EUR-Lex、FDA、gov.uk、MHLW等）で重要情報を検証してください。Cleo Labs は本スキルに基づいてなされた判断について責任を負いません。

---

**他の言語で読む:** [English](./README.md) · [Français](./README.fr.md) · [Español](./README.es.md) · [Deutsch](./README.de.md) · [日本語](./README.ja.md) · [简体中文](./README.zh.md)

[Cleo Labs](https://cleolabs.co) が構築。MARIA エンジン搭載 — 49カ国、25,000規制、ライブ。
