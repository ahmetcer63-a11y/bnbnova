import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Flame, Lock, Rocket, Wallet, Globe2, Users, Coins } from "lucide-react";

const CONTRACT_ADDRESS = "0x5d38ae8adD314489c4d4feF48e2A2568737E2c24";
const TELEGRAM_LINK = "https://t.me/BnovaOfficial";
const TWITTER_LINK = "PASTE_X_LINK_HERE";
const PANCAKESWAP_LINK = "https://pancakeswap.finance/swap?outputCurrency=0x5d38ae8adD314489c4d4feF48e2A2568737E2c24";
const BSCSCAN_LINK = "https://bscscan.com/token/0x5d38ae8adD314489c4d4feF48e2A2568737E2c24";

const tokenomics = [
  { label: "Burned", value: "10%", amount: "100M BNBNOVA", icon: Flame },
  { label: "Marketing", value: "15%", amount: "150M BNBNOVA", icon: Rocket },
  { label: "Ecosystem", value: "20%", amount: "200M BNBNOVA", icon: Globe2 },
  { label: "Team", value: "7%", amount: "70M BNBNOVA", icon: Users },
  { label: "Reserve", value: "20%", amount: "200M BNBNOVA", icon: Wallet },
  { label: "LP Locked", value: "5%", amount: "49M BNBNOVA", icon: Lock },
  { label: "Growth Fund", value: "23%", amount: "230M+ BNBNOVA", icon: Coins },
];

const roadmap = [
  { phase: "Phase 1", title: "Launch Foundation", items: ["Token launch", "100M burn", "LP lock", "Telegram community"] },
  { phase: "Phase 2", title: "Community Growth", items: ["TikTok campaigns", "X marketing", "Holder growth", "DexScreener update"] },
  { phase: "Phase 3", title: "Market Expansion", items: ["CoinGecko preparation", "CoinMarketCap preparation", "Partnerships", "CEX conversations"] },
  { phase: "Phase 4", title: "Ecosystem Utility", items: ["Staking plans", "Community rewards", "Utility integrations", "Long-term expansion"] },
];

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-yellow-500/20 bg-black/40 p-5 shadow-lg shadow-yellow-500/5 backdrop-blur">
      <Icon className="mb-3 h-7 w-7 text-yellow-400" />
      <div className="text-sm text-zinc-400">{title}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

export default function BNBNovaLandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,180,30,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,180,30,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-700 font-black text-black shadow-lg shadow-yellow-500/30">B</div>
            <div>
              <div className="text-lg font-black tracking-wide">BNBNBNOVA</div>
              <div className="text-xs text-zinc-400">BNB Chain Token</div>
            </div>
          </div>
          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#tokenomics" className="hover:text-yellow-300">Tokenomics</a>
            <a href="#roadmap" className="hover:text-yellow-300">Roadmap</a>
            <a href="#community" className="hover:text-yellow-300">Community</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 md:grid-cols-2 md:pb-28 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200">
              🔥 100M Burned • 🔒 LP Locked • ⚡ 0% Tax
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              The Next Wave on <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">BNB Chain</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              BNBNBNOVA is a community-driven DeFi token built for long-term growth, transparent tokenomics, and strong community expansion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={PANCAKESWAP_LINK} className="rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-700 px-6 py-3 font-bold text-black shadow-xl shadow-yellow-500/20 hover:scale-105 transition">Buy on PancakeSwap</a>
              <a href={TELEGRAM_LINK} className="rounded-2xl border border-yellow-500/30 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition">Join Telegram</a>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-400">
              Contract Address
              <div className="mt-2 break-all font-mono text-yellow-300">{CONTRACT_ADDRESS}</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex items-center justify-center">
            <div className="relative h-80 w-80 rounded-full border border-yellow-400/30 bg-gradient-to-br from-yellow-300/20 to-black p-6 shadow-2xl shadow-yellow-500/20 md:h-96 md:w-96">
              <div className="absolute inset-8 rounded-full border border-yellow-400/20" />
              <div className="absolute inset-16 rounded-full border border-yellow-400/20" />
              <div className="flex h-full w-full items-center justify-center rounded-full bg-black/70 text-center">
                <div>
                  <div className="text-7xl font-black text-yellow-400">B</div>
                  <div className="mt-2 text-2xl font-black tracking-[0.3em]">NOVA</div>
                  <div className="mt-3 text-sm text-zinc-400">Built on BNB Chain</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard icon={Flame} title="Burned Forever" value="100M" />
          <StatCard icon={Lock} title="Liquidity Locked" value="49M LP" />
          <StatCard icon={ShieldCheck} title="Buy / Sell Tax" value="0%" />
          <StatCard icon={Users} title="Community" value="Growing" />
        </div>
      </section>

      <section id="tokenomics" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black md:text-5xl">Tokenomics</h2>
          <p className="mt-4 text-zinc-400">Clean, transparent, and built for long-term growth.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {tokenomics.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6 shadow-lg shadow-yellow-500/5">
                <Icon className="mb-4 h-8 w-8 text-yellow-400" />
                <div className="text-4xl font-black text-white">{item.value}</div>
                <div className="mt-2 text-lg font-bold text-yellow-300">{item.label}</div>
                <div className="mt-1 text-sm text-zinc-400">{item.amount}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black md:text-5xl">Roadmap</h2>
          <p className="mt-4 text-zinc-400">From launch to ecosystem expansion.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r) => (
            <div key={r.phase} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-bold text-yellow-400">{r.phase}</div>
              <div className="mt-2 text-xl font-black">{r.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {r.items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="community" className="mx-auto max-w-7xl px-6 py-16 pb-24">
        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-white/[0.03] p-8 text-center md:p-12">
          <h2 className="text-4xl font-black md:text-5xl">Join the BNBNBNOVA Community</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">Follow the journey, join the community, and stay updated as BNBNBNOVA grows across the BNB Chain ecosystem.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={TELEGRAM_LINK} className="rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black hover:scale-105 transition">Telegram</a>
            <a href={TWITTER_LINK} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition">X / Twitter</a>
            <a href={BSCSCAN_LINK} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition">BscScan</a>
          </div>
        </div>
      </section>
    </main>
  );
}
