import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";
//import image from "../assets/image.jpg"

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "Invest DAO", // Name of NFT Collection for DAO
      description: "A DAO for all retail investors", // Description
      image: "https://tokeny.pl/wp-content/uploads/2021/05/WallStreetBets.jpg", // PFP for NFT collection
      primary_sale_recipient: "0x8e0104386c1412DbB4BCdD229CB89C502c603aeE",
    });
    const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const metadata = await editionDrop.metadata.get();
    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
