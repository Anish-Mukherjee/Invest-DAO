import sdk from "./initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0xa86E78DdC8eB463C58f3Fb6102a2cE69E8d24004");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Invest DAO", // Name of NFT Collection for DAO
        description: "A DAO for all retail investors", // Description
        image: "https://tokeny.pl/wp-content/uploads/2021/05/WallStreetBets.jpg", // Image for NFT
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
