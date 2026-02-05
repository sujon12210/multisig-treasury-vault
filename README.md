# Multi-Signature Treasury Vault

This repository contains a high-quality, flat-structured MultiSig wallet. It is designed to prevent single points of failure by requiring multiple authorized owners to sign off on any transaction before it can be executed on-chain.

## Features
- **M-of-N Thresholds**: Configure the vault to require a specific number of approvals (e.g., 3 out of 5 owners).
- **Proposal Queue**: Anyone can propose a transaction, but only owners can approve it.
- **Security**: Protection against re-entrancy and unauthorized access using battle-tested modifiers.
- **Flat Layout**: No nested folders; all logic is available at the root for easy auditing and deployment.

## Logical Flow
The vault operates on a confirmation threshold $M$. For a transaction $T$ to be executed:
$$\sum_{i=1}^{n} \text{approval}_i \geq M$$

Where:
- $n$ is the total number of owners.
- $\text{approval}_i \in \{0, 1\}$ represents the signature of owner $i$.
- $M$ is the required threshold.



## License
MIT
