# news-image-20261122-entry

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/mrfinch21/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/mrfinch21/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A program that writes one image to `/output/entry.png`: a newspaper-style
front page summing up the world news of Sunday 22 November 2026.

## The image

Six stories, verified from multiple news sources on the day:

1. **COP31 climate deal collapses** — talks fail in Antalya as the final
   draft drops any mention of fossil fuels; the EU rejects it.
2. **Iran says two supertankers hit mines** — near the Strait of Hormuz.
3. **Ukraine: drone strike** — a Russian drone hits an apartment block
   in Dymer, Kyiv region; 14 missing.
4. **Mexico captures cartel boss** — FBI most-wanted "El Chapo Isidro"
   seized in Sinaloa; 11 dead.
5. **Indonesia factory fire** — a candy factory burns in Cikande;
   3 dead, 36 missing.
6. **ICJ rules on the Rohingya** — the court finds Myanmar committed
   genocide against the Rohingya.

The image is original artwork made for this entry (no copied news photos).

## How it works

`main.ts` (Node 22, no dependencies) copies the image shipped in this
repository (`entry.png`, 1024×1024 PNG, under 1 MiB) to
`/output/entry.png`. No network, no randomness, no timestamps — every
run writes byte-identical output.

## Run it

```sh
node main.ts
# → writes /output/entry.png
```

## License

MIT — see LICENSE.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yppeq605&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
