class MovimentRemove {
    constructor(FinanceRepository) {
      this.financeRepository = FinanceRepository;
    }
  
    async execute(data) {
      const { idMoviment, user_id } = data;
      try {
        const moviment = await this.financeRepository.movimentRemove(
          idMoviment,
          user_id,
        );
        if (!moviment.value)
          return 'Este movimento não existe ou não pertence a você';
        return moviment;
      } catch (err) {
        return null;
      }
    }
  }
  module.exports = MovimentRemove;