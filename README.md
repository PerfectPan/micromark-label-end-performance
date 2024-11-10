# micromark-label-end-performance

## Requirement
node >= v20
pnpm


## Install
```
pnpm i
```

## Run benchmark
```
cd packages/benchmark
pnpm benchmark.mjs
```

## Benchmark Environment

- Chip: Apple M1 Max
- RAM: 64GB
- OS: 14.1.2

## Result

### Use benchmark.js
![](./assets/benchmark.js.png)

### Original Profile
![](./assets/original-profile.png)

### Optimize Profile
![](./assets/optimize-profile.png)
