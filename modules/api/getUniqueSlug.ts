export const getUniqueSlug = async (
  Collection: any,
  text: string,
  collectionId: string
): Promise<string> => {
  try {
    let count = 0;
    let finalCandidate = "";

    while (finalCandidate === "") {
      const candidate = text
        .toLowerCase()
        .replace(/[\?\&\%]/g, "") // remove special characters
        .replace(/[-/\s]+/g, "-"); // replace spaces with hyphens

      const candidateWithCount = `${candidate}${count > 0 ? `-${count}` : ""}`;

      const existing = await Collection.findOne({
        [collectionId]: candidateWithCount,
      }).lean();

      if (!existing) {
        finalCandidate = candidateWithCount;
      } else {
        count += 1;
      }
    }

    return finalCandidate;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
