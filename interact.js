/**
 * Script for submitting and confirming transactions 
 * in the MultiSigVault environment.
 */

async function proposeTransfer(vaultContract, recipient, amount) {
    console.log(`Proposing transfer of ${amount} ETH to ${recipient}...`);
    const tx = await vaultContract.submitTransaction(recipient, ethers.utils.parseEther(amount), "0x");
    console.log("Transaction submitted. Waiting for confirmations.");
}

async function signProposal(vaultContract, txIndex) {
    console.log(`Confirming transaction index: ${txIndex}`);
    await vaultContract.confirmTransaction(txIndex);
    console.log("Confirmation recorded.");
}

module.exports = { proposeTransfer, signProposal };
