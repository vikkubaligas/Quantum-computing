# Handoff 2: Learning path for quantum computing (beginner to research-ready)

Prepared 11 Nov 2026.

## Starting point

- Set up WSL2, installed Qiskit, runs basic algorithms.
- Has run a 3-qubit **Grover's search** and found the answer: set the logic (oracle), create superposition, entangle related qubits, measure.
- Note: Grover's speedup comes from amplitude amplification (interference that boosts the right answer). With 3 qubits there are only 8 options, so it demonstrates the method but has no practical advantage.
- Hardware and quotas: RTX 4070 (8 GB), 32 GB RAM, Kaggle 2x T4 at 30 hours per month, about $100 per month, IBM Open Plan (10 QPU minutes per 28 days; see Handoff 1 for the 180-minute promotion).
- Goal: build a solid foundation, then pursue one of the research directions in Handoff 1 (decoders or Pauli propagation first).

## Qiskit version warning (verified from IBM pages)

- `backend.run` is deprecated, and IBM said it would stop working server-side from October 2024 ([announcement](https://quantum.cloud.ibm.com/announcements/product-updates/2024-04-15-backend-run-deprecation)).
- IBM's [migration guide](https://quantum.cloud.ibm.com/docs/migration-guides/qiskit-runtime) uses the V2 primitives (`SamplerV2`, `EstimatorV2`).
- Qiskit 2.0 removed the V1 primitives. `qiskit-ibm-runtime` 0.45.1 (12 Feb 2026) requires Qiskit 2.0.0 or later ([release notes](https://quantum.cloud.ibm.com/docs/api/qiskit-ibm-runtime/release-notes)).
- Practical rule: run `pip show qiskit`, prefer material from 2025 onward, and translate any tutorial using `execute(...)` or `backend.run(...)` into primitives. Record the Qiskit version at the top of every notebook.

## Resources

Verified from the pages checked:
- [IBM Quantum Learning](https://quantum.cloud.ibm.com/learning/en): features *Basics of Quantum Information* (John Watrous) and *Use a quantum computer today* (Olivia Lanes). Learning paths: Introduction to quantum, Optimization, Data science, Physics and chemistry, Quantum algorithm development, QISE. Classroom modules include superposition, uncertainty, teleportation and quantum key distribution. The page gave no levels or time estimates; the full course list is at `/learning/en/courses`.
- Qiskit Textbook: open source, pairs theory with runnable code, per [this roundup](https://quantumzeitgeist.com/10-free-resources-for-quantum-computing). That roundup is an opinion article, so treat its rankings as such.

From my own knowledge, not verified in this session:
- Linear algebra is the real prerequisite: vectors, matrices, tensor products, eigenvalues. Fix this first if shaky.
- Nielsen and Chuang, *Quantum Computation and Quantum Information*, as the standard reference.
- John Preskill's Caltech lecture notes for a second, advanced pass.

## The path

Week ranges are suggestions [my estimate], not sourced.

### Stage 1: Core concepts (weeks 1-4)

Learn: single-qubit gates (X, Z, H, S, T, rotations) and the Bloch sphere; measurement and shots; multi-qubit states; entanglement (Bell and GHZ); phase and interference.

Build: Bell and GHZ states and a chart of measured counts against ideal probabilities.

Check yourself: you can explain why H then Z then H flips a qubit, and why measuring one half of a Bell pair fixes the other.

### Stage 2: Classic algorithms (weeks 5-10)

Implement each from scratch, then compare with Qiskit's version:
1. Deutsch-Jozsa and Bernstein-Vazirani.
2. Quantum Fourier Transform.
3. Phase estimation.
4. Grover with 4-6 qubits, plotting success probability against the number of iterations (it rises and then falls, which shows why iteration count matters).
5. Teleportation.

Build: the Grover iteration plot and a one-page explanation of each algorithm in your own words.

### Stage 3: Noise and real hardware (weeks 8-12)

Learn: run the same circuit on an ideal simulator, a noisy simulator and real hardware; understand transpilation (circuit rewritten to the chip's gates and connectivity); see why depth degrades results.

Use QPU minutes deliberately: simulate first, run on hardware only to answer a specific question. If you reach 20 minutes of use, check IBM's 180-minute promotion (Handoff 1, section 6).

Build: a short report comparing Bell, GHZ and Grover across ideal, noisy and hardware runs.

### Stage 4: Research tooling (weeks 12-20)

- **Stim** and **PyMatching**: repetition code first, then surface code.
- **Mitiq**: zero-noise extrapolation and other mitigation.
- Concepts only at first: tensor networks and Pauli propagation.

Build: a Stim repetition-code memory experiment where the logical error rate falls as you add qubits. This single plot is the core idea of error correction and the entry point to research directions 1 and 2 in Handoff 1.

## Habits

1. Predict the output before running a circuit.
2. Check small circuits against an exact statevector.
3. One notebook per concept, in Git, Qiskit version noted.
4. Treat QPU minutes as scarce; simulate everything first.
5. GPU Aer needs Linux. WSL2 is Linux, but no official WSL wheel was found; a community build guide exists (see Handoff 1, section 5). Kaggle runs Linux already.

## After the path

Pick research direction 1 (matched open benchmark of neural vs MWPM decoders) or 2 (Pauli-propagation limits and benchmarks) from Handoff 1, then pull full texts of the five or six most relevant papers and draft a first-month reproduction plan.

## Open items

- IBM Learning course durations and levels were not available on the page fetched.
- Textbook recommendations beyond the Qiskit Textbook are from my knowledge, not verified here.
- Week estimates are mine.
- The user has not yet shared their Grover code; reviewing it would calibrate where Stage 1 and 2 should start.
