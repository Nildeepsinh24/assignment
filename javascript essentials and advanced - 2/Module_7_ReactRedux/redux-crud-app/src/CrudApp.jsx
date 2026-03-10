import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct, deleteProduct, setSearchQuery } from './app/productSlice';
import { logout } from './app/authSlice';

export default function CrudApp() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { items, searchQuery } = useSelector(state => state.products);

    // Local state for the modal form (Create/Update)
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', price: '', category: '' });

    // Filter items based on the Redux search query string
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOpenModal = (product = null) => {
        if (product) {
            setEditingId(product.id);
            setFormData({ name: product.name, price: product.price, category: product.category });
        } else {
            setEditingId(null);
            setFormData({ name: '', price: '', category: '' });
        }
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            dispatch(updateProduct({ id: editingId, ...formData, price: Number(formData.price) }));
        } else {
            dispatch(addProduct({ ...formData, price: Number(formData.price) }));
        }
        setShowModal(false);
    };

    return (
        <div className="container mt-5">

            {/* Header & Logout */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h2>Product Management</h2>
                <div>
                    <span className="me-3">Welcome, <strong className="d-none d-sm-inline">{user}</strong>!</span>
                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(logout())}>Logout</button>
                </div>
            </div>

            {/* Top Bar: Search and Create */}
            <div className="d-flex justify-content-between mb-3 align-items-end flex-wrap gap-3">
                <div style={{ width: '100%', maxWidth: '300px' }}>
                    <label className="form-label fw-bold">Search products: {searchQuery}</label>
                    <input
                        className="form-control"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                    />
                </div>
                <button className="btn btn-primary w-sm-auto w-100 mt-2 mt-sm-0" onClick={() => handleOpenModal()}>+ Create Product</button>
            </div>

            {/* Product Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.length > 0 ? filteredItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td style={{ minWidth: '180px' }}>
                                    {/* 
                      These buttons fulfill the requirement to Read (view via table),
                      Update (Edit), and Delete via Redux state.
                    */}
                                    <button className="btn btn-info btn-sm text-white me-1 mb-1" onClick={() => console.log("Read details for", item.id)}>Read</button>
                                    <button className="btn btn-warning btn-sm text-white me-1 mb-1" onClick={() => handleOpenModal(item)}>Edit</button>
                                    <button className="btn btn-danger btn-sm mb-1" onClick={() => dispatch(deleteProduct(item.id))}>Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="4" className="text-center">No products found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Basic Custom Modal for Create/Update */}
            {showModal && (
                <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editingId ? 'Edit Product' : 'Create Product'}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form id="crudForm" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label>Name</label>
                                        <input className="form-control" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Price</label>
                                        <input type="number" className="form-control" required value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label>Category</label>
                                        <input className="form-control" required value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="submit" form="crudForm" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
