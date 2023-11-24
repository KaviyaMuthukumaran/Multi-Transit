import { create } from 'zustand';

// Create a Zustand store
const useCardStore = create((set) => ({
    cardDetails: [
        { cardName: 'transit 1', serialNo: 'kkdldodi29kks', balance: 10, expiryDate: '01/3/2030' },
        { cardName: 'transit 2', serialNo: 'kkdldodi29kks', balance: 4, expiryDate: '01/3/2030' },
        { cardName: 'transit 3', serialNo: 'kkdldodi29kks', balance: 7, expiryDate: '01/3/2030' },
    ],

    // Function to add a new card
    addCard: (newCard) => set((state) => ({ cardDetails: [...state.cardDetails, newCard] })),

    // Function to update a card
    updateCard: (updatedCard) =>
        set((state) => ({
            cardDetails: state.cardDetails.map((card) =>
                card.serialNo === updatedCard.serialNo ? updatedCard : card
            ),
        })),
}));

export default useCardStore;
