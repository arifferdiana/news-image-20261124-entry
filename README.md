[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/arifferdiana/news-image-20261124-entry/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/arifferdiana/news-image-20261124-entry/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# The Daily Globe — 24 November 2026

My entry for make.fun's ["Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124) bounty ($100, top 50 share).

A front-page newspaper summing up Tuesday 24 November 2026's world news in one 1024×1024 image: "THE DAILY GLOBE", with a world map marking the day's five flashpoints and five stories — Nvidia's CEO reinstated as the stock jumps 31%, U.S.-Iran tensions spiking as a carrier deploys, Trump securing Japan and Indonesia trade deals, Russia pounding Kyiv as the UK sends Storm Shadows, and COP31 stalling in Türkiye over fossil fuels.

## How it works

The program copies `entry.png` to `/output/entry.png`. The image is drawn deterministically by `draw.py` (PIL, no network) — a cream-paper front page with a navy world-map hero and five story boxes — and the program ships the exact bytes the judge sees. Two runs write identical bytes.

Node 22, standard library only. Outside the grader, `MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
