export async function forgeCard(
  cardOne: string,
  cardTwo: string
) {
  return {
    success: true,
    forgedCard: crypto.randomUUID()
  };
}
