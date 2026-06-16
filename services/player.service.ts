export class PlayerService {
  async getProfile(wallet: string) {
    return {
      wallet,
      level: 15,
      xp: 12000,
      rank: "Wizard"
    };
  }
}
