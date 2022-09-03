import {
  useAddress,
  useEditionDrop,
  useToken,
  useVote,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Login from "../components/Login";
//import Proposal from "../components/Proposal";
//import styles from "../styles/Home.module.css";
import { AddressZero } from "@ethersproject/constants";

export default function Home() {
  const address = useAddress();
  const editionDrop = useEditionDrop(
    "0xa86E78DdC8eB463C58f3Fb6102a2cE69E8d24004"
  );
  // const token = useToken("0x6eefd78C9C73505AA71A13FeE31D9718775c9086");
  // const vote = useVote("0x31c5840b31A1F97745bDCbB1E46954b686828E0F");

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  // const [proposals, setProposals] = useState([]);
  // const [isVoting, setIsVoting] = useState(false);
  //  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (!address) {
      return;
    }

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
        } else {
          setHasClaimedNFT(false);
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get nft balance", error);
      }
    };
    checkBalance();
  }, [address, editionDrop]);

  /*useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }

    const getAllProposals = async () => {
      try {
        const proposals = await vote.getAll();
        setProposals(proposals);
      } catch (error) {
        console.error("failed to get proposals", error);
      }
    };
    getAllProposals();
  }, [hasClaimedNFT, vote]);*/

  /*useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }

    if (!proposals.length) {
      return;
    }

    const checkIfUserHasVoted = async () => {
      try {
        const hasVoted = await vote.hasVoted(proposals[0].proposalId, address);
        setHasVoted(hasVoted);
      } catch (error) {
        console.error("Failed to check if wallet has voted", error);
      }
    };
    checkIfUserHasVoted();
  }, [hasClaimedNFT, proposals, address, vote]);*/

  const mintNft = async () => {
    setIsClaiming(true);
    try {
      await editionDrop.claim("0", 1);
      setHasClaimedNFT(true);
      console.log("🌊 Successfully Minted the NFT!");
    } catch (error) {
      console.error("failed to claim", error);
    } finally {
      setIsClaiming(false);
    }
  };

  /*const handleFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVoting(true);

    const votes = proposals.map((proposal) => {
      const voteResult = {
        proposalId: proposal.proposalId,
        vote: 2,
      };
      proposal.votes.forEach((vote) => {
        const elem = document.getElementById(
          proposal.proposalId + "-" + vote.type
        );

        if (elem.checked) {
          voteResult.vote = vote.type;
          return;
        }
      });
      return voteResult;
    });

    try {
      const delegation = await token.getDelegationOf(address);
      if (delegation === AddressZero) {
        await token.delegateTo(address);
      }
      try {
        await Promise.all(
          votes.map(async ({ proposalId, vote: _vote }) => {
            const proposal = await vote.get(proposalId);
            if (proposal.state === 1) {
              return vote.vote(proposalId, _vote);
            }
            return;
          })
        );
        try {
          await Promise.all(
            votes.map(async ({ proposalId }) => {
              const proposal = await vote.get(proposalId);

              if (proposal.state === 4) {
                return vote.execute(proposalId);
              }
            })
          );
          setHasVoted(true);
        } catch (err) {
          console.error("failed to execute votes", err);
        }
      } catch (err) {
        console.error("failed to vote", err);
      }
    } catch (err) {
      console.error("failed to delegate tokens", err);
    } finally {
      setIsVoting(false);
    }
  };*/

  if (!address) {
    return (
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <Login />
      </div>
    );
  }

  if (hasClaimedNFT) {
    return (
      <div className="bg-black h-screen text-white ">
         <div className="text-4xl font-bold justify-center flex flex-row items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 p-7">
          Congratulations! You have already claimed the NFT
        </span>
        💳
      </div>
      </div>
    );
  }

  return (
    <div className="bg-black h-screen text-white ">
      <div className="text-4xl font-bold justify-center flex flex-row items-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 p-7">
          Mint your free Invest DAO Membership NFT{" "}
        </span>
        💳
      </div>
      <div className="flex flex-row justify-center p-48">
        <button
          disabled={isClaiming}
          onClick={() => mintNft()}
          className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-5 text-xl font-bold rounded-full items-center px-10"
        >
          {isClaiming ? "Minting..." : "Mint your NFT"}
        </button>
      </div>
    </div>
  );
}
