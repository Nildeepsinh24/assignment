import { createSlice } from '@reduxjs/toolkit';

// Initial dummy products to populate the table (matches screenshot loosely)
const initialState = {
    items: [
        { id: 1, name: 'Amanda Walker Shirt', price: 900, category: 'Fashion' },
        { id: 2, name: 'Abercrombie Mens Black Shirt', price: 975, category: 'Fashion' },
        { id: 3, name: 'Abercrombie Lake Arnold Shirt', price: 800, category: 'Fashion' },
        { id: 4, name: 'Denim Shirt', price: 500, category: 'Fashion' },
    ],
    searchQuery: ''
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // C: Create
        addProduct: (state, action) => {
            // action.payload is expecting a product object { name, price, category }
            const newId = state.items.length > 0 ? Math.max(...state.items.map(p => p.id)) + 1 : 1;
            state.items.push({ id: newId, ...action.payload });
        },
        // R: Read (Handled by useSelector in the component, with filter logic)
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        // U: Update
        updateProduct: (state, action) => {
            // action.payload expecting { id, name, price, category }
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        // D: Delete
        deleteProduct: (state, action) => {
            // action.payload expecting the id
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { addProduct, setSearchQuery, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
