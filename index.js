const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

const leaves = ['0x42AcD393442A1021f01C796A23901F3852e89Ff3', '0xd701BEb9dE4fcf64Ff2B5D1F08Bd99341761F26b', '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5', '0xEcCc3eD8664A993fEeA60111D39F173bc6Db3ed7', '0xc3b100Cd5Da45Fff4891c20365f5a0E456Bc49Cb', '0x201d7d3aA7aD8828c88F9617cc44D94DeA1D5213', '0x39D55F57531a8d7b33Ab60E20E8D284F06F389A6'].map(x => SHA256(x));

const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString('hex');
const leaf = SHA256('0x42AcD393442A1021f01C796A23901F3852e89Ff3');
const proof = tree.getProof(leaf);

console.log(tree.verify(proof, leaf, root));
