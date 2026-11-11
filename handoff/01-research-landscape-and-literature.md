# Handoff 1: Quantum computing research landscape, resources, funding and literature

Prepared 11 Nov 2026. Covers everything researched before the learning-path discussion.

## How to read this document

- **Verified** means I read it on the cited page (or the search result stated it).
- **[Preprint]** means arXiv only, not confirmed peer-reviewed. The arXiv feed did not list a journal reference for most 2026 items, which does not prove they are unpublished.
- **[Unverified]** means it came from a secondary source or search snippet only.
- **[My estimate]** means it is my own calculation or inference, not sourced.
- Abstracts were read, not full texts, except where stated.
- Google Scholar was blocked, Semantic Scholar and OpenAlex were rate-limited. The arXiv API worked. This is a broad sweep, not a systematic review.

## 0. Researcher profile and constraints (as stated by the user)

| Item | Value |
|---|---|
| Laptop | RTX 4070 (8 GB VRAM), i9 13th-gen HX, **32 GB RAM** (corrected from an earlier "3 GB" typo) |
| Kaggle | 2x T4, **30 hours per month** (the user's figure; third-party sources said ~30 h per week and floating, so check the account page) |
| Paid compute | About $100 per month |
| IBM access | Open Plan |
| Level | Learning basics. Runs 3-qubit Grover in Qiskit on WSL2 |
| Ranking approach | Find the literature first, then match it against constraints |

## 1. Current state of the field

### Fault tolerance and error correction (verified unless noted)

- **Google Quantum AI.** Below-threshold surface-code memory on Willow: logical error falls by a factor of 2.14 +/- 0.02 per distance step, 0.143% error per cycle at distance 7, real-time decoder latency 63 us at distance 5 ([arXiv 2408.13687](https://arxiv.org/pdf/2408.13687), *Nature* 2024). The authors note an unexplained error floor near 1e-10. In Oct 2026 Google reported magic-state cultivation on Willow with roughly 40x lower error ([eWeek](https://www.eweek.com/news/google-willow-quantum-magic-state-errors/), Science, 15 Oct 2026; secondary source).
- **Quantinuum.** Reported 99.9995% logical fidelity on Helios with a color code on 19 Oct 2026 ([Quantum Insider](https://thequantuminsider.com/2026/10/19/quantinuum-reports-a-10x-reduction-in-logical-error-rate-on-helios/)). One outlet says this is a per-round figure, so it is not directly comparable to Google's metric.
- **IBM.** Roadmap lists Nighthawk (120 qubits, 7,500 gates by end of 2026), Kookaburra (first module storing and processing encoded information, 2026), Starling (fault tolerant, 2029), Blue Jay (about 2033) ([IBM roadmap](https://ibm.com/roadmaps/quantum/2026), [Live Science](https://www.livescience.com/technology/computing/ibm-unveils-two-new-quantum-processors-including-one-that-offers-a-blueprint-for-fault-tolerant-quantum-computing-by-2029)). IBM's qLDPC (bivariate bicycle) memory was published in *Nature* 2024 (confirmed via IBM's blog; the paper was not retrieved). Relay-BP decoder: [arXiv 2506.01779](https://arxiv.org/pdf/2506.01779). FPGA follow-up: [arXiv 2510.21600](https://arxiv.org/pdf/2510.21600), 24 ns per iteration on the gross [[144,12,12]] code.
- **Cryptography.** [Gidney, RSA-2048 with under a million noisy qubits](https://arxiv.org/abs/2505.15917) (2025), about 897,864 qubits in under a week. Later claims, not independently verified: [cat qubits, 22,593 qubits](https://arxiv.org/abs/2610.37839), [10,000 reconfigurable atoms](https://arxiv.org/abs/2603.28627), [ECC for cryptocurrencies](https://arxiv.org/abs/2603.28846).

### Quantum advantage claims

- Google Quantum Echoes, *Nature*, 22 Oct 2025: claimed 13,000x over classical for an OTOC task on Willow ([Google research blog](https://research.google/blog/a-verifiable-quantum-advantage/)). Figure is from Google and trade coverage.
- IBM and partners posted three advantage preprints on 27-28 Jul 2026 ([PostQuantum](https://postquantum.com/industry-news/ibm-three-quantum-advantage-papers/)). None is peer-reviewed. IBM's [advantage tracker](https://www.ibm.com/quantum/blog/quantum-advantage-tracker) lists entries as candidates, and classical methods already beat one BlueQubit peaked-circuit entry.
- Older debate: [Kim et al., *Nature* 618, 500 (2023)](https://www.nature.com/articles/s41586-023-06096-3.pdf), then classical rebuttals [Begusic et al., *Sci. Adv.* 10, eadk4321](https://arxiv.org/abs/2308.05077v3) and [Tindall et al., *PRX Quantum* 5, 010308](https://arxiv.org/abs/2306.14887v1).

## 2. Trends and opportunities (from the literature sweep)

1. Neural and ML decoders for error correction (very active).
2. qLDPC codes, magic states, fault-tolerant architecture (crowded, theory heavy).
3. Pauli propagation and classical simulation as the counterweight to advantage claims (rising).
4. Error mitigation, including hybrid classical-quantum schemes.
5. Variational algorithms with classical surrogates and barren-plateau analysis.
6. Quantum machine learning benchmarking (saturated with applied comparisons).
7. Sample-based quantum diagonalization (SQD) for chemistry (12 preprints in 3 weeks).
8. Cryptographic resource estimation.
9. Quantum software and compiler testing.

## 3. Literature map by theme

### 3.1 Neural decoders for QEC

| Paper | Status | Notes |
|---|---|---|
| [Lange et al., Modular Neural Decoder](https://arxiv.org/abs/2610.03869), Oct 2026 | Preprint | Pretrained in simulation, fine-tuned to hardware. Beats MWPM at distances 3 and 5 on an IBM Nighthawk-generation device, approaches AlphaQubit on Google data. States models are trainable on single-GPU academic resources. Abstract has no numbers or code link. |
| [Bonilla Ataides et al., Neural Decoders for Universal Quantum Algorithms](https://arxiv.org/abs/2509.11370), Sep 2025 | APS DOI 10.1103/vjn1-mbxl listed | Attention decoder trained on random circuits, applied to unseen algorithms. No numbers in abstract. |
| [Senior et al., scalable real-time neural decoder](https://arxiv.org/pdf/2512.07737), Dec 2025 | Preprint | AlphaQubit follow-up for surface and color codes. |
| [Bausch et al., AlphaQubit](https://blog.google/technology/google-deepmind/alphaqubit-quantum-error-correction/), *Nature*, Nov 2024 | Peer-reviewed | About 6% fewer errors than tensor networks, about 30% fewer than correlated matching (Google blog figures). Too slow for real time. |
| [Varbanov et al., *Phys. Rev. Research* 7, 013029](https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.7.013029), 2025 | Peer-reviewed | About 25% lower logical error than MWPM on experimental transmon data. |
| [Higgott & Gidney, Sparse Blossom](https://arxiv.org/abs/2303.15933), *Quantum* 9, 1600 (2025) | Peer-reviewed | The classical baseline (PyMatching 2). Distance-17 in under 1 us per round on one core. |
| [Gidney, Stim](https://arxiv.org/pdf/2103.02202), *Quantum* 5, 497 (2021) | Peer-reviewed | Standard stabilizer simulator. |
| 2026 titles not read: [2605.17156](https://arxiv.org/abs/2605.17156), [2510.11593](https://arxiv.org/abs/2510.11593), [2608.27682](https://arxiv.org/abs/2608.27682), [2607.28422](https://arxiv.org/abs/2607.28422), [2605.12046](https://arxiv.org/abs/2605.12046) | Preprint | Sparse Mamba, qubit-centric Transformer, logical neural BP, QAdapt, "Rethink the role of neural decoders". |

### 3.2 qLDPC and fault-tolerant architecture (all preprints, titles read)

[Neural triage decoding of ultra-high-rate qLDPC codes](https://arxiv.org/abs/2610.40490), [RL-scheduled qLDPC decoders](https://arxiv.org/abs/2611.04179), [alternating weighted sparsification](https://arxiv.org/abs/2610.35735), [BP-informed Tesseract decoding](https://arxiv.org/abs/2611.03128), [color-code magic state synthesis on a superconducting processor](https://arxiv.org/abs/2611.00404), [Magna magic-state factory simulation](https://arxiv.org/abs/2610.22315).

### 3.3 Classical simulation and Pauli propagation

| Paper | Status |
|---|---|
| [Angrisani et al., *PRL* 135, 170602 (2025)](https://arxiv.org/abs/2409.01706) | Peer-reviewed (noiseless circuits) |
| [Pauli Propagation: a computational framework](https://arxiv.org/abs/2505.21606v1) (review, PauliPropagation.jl) | Preprint |
| [Shrikhande et al.](https://arxiv.org/abs/2511.21651) (strongly correlated systems), DOI 10.1103/kq3v-whcq | Listed DOI |
| [Eddins et al., noise-canceling observables](https://arxiv.org/abs/2606.20441), Jun 2026 | Preprint. Hybrid mitigation, 56-qubit hardware run, lower sampling overhead and truncation error than Pauli propagation alone. No code link stated. |
| [Kemper et al.](https://arxiv.org/abs/2607.24924), [Majumder et al.](https://arxiv.org/abs/2603.14485), [Miller et al. Majorana propagation](https://arxiv.org/abs/2503.18939) | Preprints |

### 3.4 Error mitigation

- Foundations: [Mitiq, *Quantum* (2022)](https://quantum-journal.org/papers/q-2022-08-11-774/); [Cai et al., *Rev. Mod. Phys.* 95, 045005 (2023)](https://arxiv.org/abs/2210.00921v1); [sparse Pauli-Lindblad PEC](https://www.nature.com/articles/s41567-023-02042-2) (journal attribution disagrees across listings, verify).
- Hardware scale: [MoSAIC](https://arxiv.org/abs/2603.26063) preprint on 156-qubit Heron (figures from a news summary, unverified).
- Recent preprints: [single unmodified error-corrected circuit](https://arxiv.org/abs/2610.06792), [information dynamics](https://arxiv.org/abs/2609.31934), [classically augmented ZNE](https://arxiv.org/abs/2607.25746), [QESEM water PES](https://arxiv.org/abs/2609.07284).
- [Scavino Alfaro, decision-aware validation of ZNE in QAOA](https://arxiv.org/abs/2610.33386), Oct 2026. Verified from the abstract: simulation only, 4-6 qubits, 120x120 grids, ZNE can halve MSE yet slightly raise decision regret. Code and data on Zenodo, DOI 10.5281/zenodo.23607395.

### 3.5 Variational algorithms

[Larocca et al., *Nat. Rev. Phys.* 7, 174 (2025)](https://arxiv.org/abs/2405.00781); [Cerezo et al., *Nat. Commun.* 16, 7907 (2025)](https://arxiv.org/abs/2312.09121v3) (barren-plateau-free models may be classically simulable, listed as open); [Monaco et al., classical pre-training via Pauli propagation, 64 qubits on ibm_berlin](https://arxiv.org/abs/2610.32571) (preprint, verified from abstract); [review of VQAs](https://arxiv.org/abs/2604.07909), Apr 2026.

### 3.6 Quantum machine learning

[Bowles et al., Better than classical?](https://arxiv.org/abs/2403.07059) (classical usually wins on small tasks; peer-review status not checked). [Matched but Not Better](https://arxiv.org/abs/2611.05442), Nov 2026 (verified from abstract: six clinical datasets, neither quantum model beat tuned classical models; entangling kernel no better than product-state kernel; finite shots were the main practical cost). Dequantization: [Tang](https://arxiv.org/pdf/1811.00414v3.pdf), [Chia et al., *J. ACM* (2022)](https://par.nsf.gov/servlets/purl/10483039).

### 3.7 Chemistry (SQD) and software

SQD preprints: [70-qubit organotin hydroxides](https://arxiv.org/abs/2611.13755), [SQD via DMRG](https://arxiv.org/abs/2611.05975), [broken-symmetry references](https://arxiv.org/abs/2611.04496), [variable geometries](https://arxiv.org/abs/2610.38701). Compiler and software testing: [retromorphic testing](https://arxiv.org/abs/2610.11195), [pass-order effects](https://arxiv.org/abs/2609.29406), [transpiler regression testing](https://arxiv.org/abs/2609.35834), [hybrid program equivalence checking](https://arxiv.org/abs/2609.36065), [Qiskit review](https://arxiv.org/abs/2508.12245).

## 4. Gaps inferred from abstracts (my reading, not author statements)

1. Decoders: only distance 3 and 5 tested in one paper, cross-hardware comparison to AlphaQubit, no numbers in abstracts. A matched, open comparison against PyMatching on shared Stim data looks missing.
2. Pauli propagation: no obvious shared benchmark set for when truncation fails.
3. Mitigation: judging by decision quality (regret), not only estimation error, is explored only for QAOA at 4-6 qubits.
4. QML: both benchmark papers call for stricter reporting standards.
5. Resource estimation: [one preprint argues standard estimators misrepresent real error rates](https://arxiv.org/abs/2610.10490).

## 5. Compute resources by workload

| Workload | Needs |
|---|---|
| Learning, prototyping (up to about 20 qubits) | Laptop, Qiskit, local simulator |
| Exact statevector | Memory is 2^n x 16 bytes at double precision [my calculation]. 30 qubits is about 16 GiB, so 28-29 qubits is a realistic ceiling at 32 GB RAM, or about 28 on the 8 GB GPU |
| Approximate simulation (MPS, tensor network, Clifford) | 64-512 GB RAM for larger cases; fits 32 GB for modest ones |
| QEC studies (Stim, PyMatching, small neural decoders) | CPU for sampling, GPU for training |
| Hardware experiments | QPU seconds; 10 minutes per 28 days on Open Plan |

Software facts (verified):
- Qiskit Aer GPU is **Linux only**, x86_64 ([Aer docs](https://qiskit.org/ecosystem/aer/getting_started.html), [PyPI](https://pypi.org/project/qiskit-aer-gpu)). The user is on WSL2, which is Linux, but I found no official WSL wheel; only a [community build guide](https://zenn.dev/converghub/articles/73007f5e24f5fe).
- Enable with `AerSimulator(method='statevector', device='GPU')` ([Aer how-to](https://qiskit.github.io/qiskit-aer/howtos/running_gpu.html)).
- Kaggle T4x2 is two 16 GB GPUs.

## 6. IBM access (verified from IBM's blog and pages)

- Open Plan: free, up to **10 minutes of QPU runtime per 28-day window** (not per calendar month). Queue time does not count.
- One-time promotion from 16 Mar 2026: use 20 minutes within any 12 months on a non-trial account, opt in, get **180 minutes over 12 months**. No end date was stated; confirm it is still available ([IBM blog](https://www.ibm.com/quantum/blog/open-plan-updates)).
- `ibm_kingston` (Heron r2) is open to Open Plan users.
- Pay-as-you-go rate of $96 per minute is from a third-party article, unverified ([IBM pricing](https://www.ibm.com/quantum/pricing)).
- 10 minutes (600 s) allows on the order of 100-300 small jobs [my estimate]. Large mitigated utility-scale runs can use minutes each.

## 7. Grants and credits

| Program | Eligibility | Individuals? | Status |
|---|---|---|---|
| [IBM Quantum Credits](https://www.ibm.com/quantum/quantum-credits) | Utility-scale research (typically above ~30 qubits), faculty or research lead at an eligible institution, must need more than Open Plan | Only via an institution | Rolling, no deadline, amount not stated; plan on about 3-10 QPU hours to show progress |
| [Unitary Foundation microgrant](https://www.startupgrantsindia.com/unitary-foundation-microgrant) | Reported open to anyone, no affiliation | Yes (unverified) | Reported about $4,000, rolling; confirm at unitary.foundation or info@unitary.foundation |
| [Google Academic Research Awards](https://thequantuminsider.com/2026/07/10/google-seeks-university-proposals-for-early-fault-tolerant-quantum-computing/) | Professors at degree-granting institutions | No | Up to $100k; 2026 round ran 26 Jun-7 Aug, closed |
| Microsoft QuaPP | Faculty, measurement-based QC | No | Up to 5 x $200k; 2026 cycle underway |
| [Qolab/IQCC Martinis grants](https://thequantuminsider.com/2026/04/10/qolab-iqcc-launch-john-martinis-grants-for-superconducting-qubit-research/) | Individual researchers or educators, superconducting qubits | Yes | 2026 window closed 15 Jun |
| [BlueQubit Quantum Flywheel](https://www.hpcwire.com/off-the-wire/bluequbit-launches-quantum-flywheel-program-with-ibm-aws-and-nvidia/) | Research teams | Teams | $150k pool; Sept 2026 window likely closed (unverified) |
| [qBraid / Quantum Rings](https://quantumcomputingreport.com/quantum-rings-open-quantum-product-now-available-on-the-qbraid-platform/) | Any user | Yes | $50 free QPU credit (unverified) |
| AWS Braket free tier | Any user | Yes | Simulator hours only, not QPU (unverified) |

NSF, NSERC and other national programs typically go through institutions; not verified. Sign-up routes: IBM Quantum Platform account registration; IBM Credits by online form; Google, Microsoft, NSF via an institution's research office.

## 8. Publication venues

- [Quantum](https://quantum-journal.org/payment/) (overlay journal), [PRX Quantum](https://journals.aps.org/authors/apcs), [npj Quantum Information](https://www.nature.com/npjqi/about/), *Physical Review Research* (published the Varbanov decoder paper).
- Fees conflict across sources and were deliberately set aside at the user's request. Check each journal before submitting. arXiv preprints cost nothing and are standard.

## 9. Matching the literature to the user's constraints

| # | Direction | Compute need | Fit |
|---|---|---|---|
| 1 | Matched, open benchmark of neural vs MWPM decoders (distance 3-7) | Stim sampling on CPU, small models on 4070 or Kaggle | Strong. Crowded. No QPU needed |
| 2 | Pauli-propagation limits and benchmarks | CPU and RAM only (Julia package); IBM minutes to validate one or two cases | Strong. Competes with large groups, so pick a narrow question |
| 3 | Decision-regret evaluation of mitigation, extended toward hardware | Laptop simulation, Open Plan to validate | Strong but small |
| 4 | QML benchmarking with proper statistics | Small simulator | Fits, low novelty unless methodological |
| 5 | Cryptographic resource-estimation methodology | CPU | Fits, hard to enter |
| 6 | Compiler and transpiler testing | CPU | Fits |
| 7 | qLDPC decoding | CPU or GPU | Fits technically, crowded, theory heavy |
| 8 | SQD chemistry | Large QPU runs plus HPC post-processing | Poor fit; one 50-70-qubit job could use the 10 minutes |

Recommendation: spend two months on foundations and Stim/PyMatching, then pick direction 1 (best use of GPU and Kaggle hours, forgiving for a beginner) or direction 2 (closest to the live IBM-hardware debate, uses QPU minutes meaningfully). Spend the $100 only if a training run exceeds the Kaggle hours.

## 10. Open items and caveats

- Peer-review status of nearly all 2026 preprints is unknown.
- Unknown whether Lange et al. and Bonilla Ataides et al. release code, or whether the IBM hardware data they used is public.
- Full texts were not read; no Google Scholar citation counts were obtained.
- Not retrieved: the 2024 IBM *Nature* qLDPC paper itself.
- Journal fees were conflicting and intentionally excluded.
- The 180-minute IBM promotion should be re-checked for availability.
- Unverified items in sections 1, 6 and 7 are flagged inline.
