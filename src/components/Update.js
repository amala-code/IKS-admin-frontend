import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// Member Edit Dialog Component
const MemberEditDialog = ({ memberId, isOpen, onClose, onUpdateSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [member, setMember] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    year_of_joining: '',
    amount_paid_total: '',
    amount_paid_registration: '',
    amount_paid_subscription: '',
    member_true: false,
    amount_subscription: false
  });

  // Fetch member data when dialog opens
  useEffect(() => {
    if (isOpen && memberId) {
      fetchMember(memberId);
    }
  }, [isOpen, memberId]);

  const fetchMember = async (id) => {
    setFetching(true);
    setError('');
    
    try {
      // Fetch member by ID
      const response = await axios.get(`https://new-admin-backend.vercel.app/member/${id}`);
      const memberData = response.data;
      
      setMember(memberData);

      setEditForm({
        name: memberData.name || '',
        email: memberData.email || '',
        phone: memberData.phone || '',
        address: memberData.address || '',
        amount_paid_total: memberData.amount_paid_total || '',
        amount_paid_registration: memberData.amount_paid_registration || '',
        amount_paid_subscription: memberData.amount_paid_subscription || '',
        member_true: memberData.member_true || false,
        amount_subscription: memberData.amount_subscription || false
      });

      console.log(editForm)
    } catch (err) {
      console.error('Error fetching member:', err);
      setError('Failed to fetch member data');
    } finally {
      setFetching(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitold = async () => {
    setLoading(true);
    setError('');

    try {
      // Create update payload with only changed fields
      const updatePayload = {};
      Object.keys(editForm).forEach(key => {
        if (editForm[key] !== member[key] && editForm[key] !== '') {
          if (key === 'year_of_joining') {
            updatePayload[key] = Number(editForm[key]);
          } else {
            updatePayload[key] = editForm[key];
          }
        }
      });

      if (Object.keys(updatePayload).length === 0) {
        setError('No changes detected');
        return;
      }

      // This would be your API call
      // const response = await axios.put(`https://new-admin-backend.vercel.app/member/update/${memberId}`, updatePayload);
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful update
      if (onUpdateSuccess) {
        onUpdateSuccess({ ...member, ...updatePayload });
      }
      onClose();
    } catch (err) {
      setError('Failed to update member');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
  
    try {
      // Create update payload with only changed fields
      const updatePayload = {};
      Object.keys(editForm).forEach(key => {
        if (editForm[key] !== member[key] && editForm[key] !== '') {
          if (key === 'year_of_joining' ) {
            updatePayload[key] = Number(editForm[key]);
          } else {
            updatePayload[key] = editForm[key];
          }
        }
      });
  
      if (Object.keys(updatePayload).length === 0) {
        setError('No changes detected');
        setLoading(false);
        return;
      }
  
      // Make the actual API call
      const response = await axios.put(`https://new-admin-backend.vercel.app/member/update/${memberId}`, updatePayload);
      
      if (response.data.message === "Member updated successfully") {
        if (onUpdateSuccess) {
          onUpdateSuccess({ ...member, ...updatePayload });
        }
        onClose();
        window.location.reload();


      }
    } catch (err) {
      console.error('Error updating member:', err);
      setError(err.response?.data?.detail || 'Failed to update member');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }}
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflowY: 'auto',
        zIndex: 1000
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>
            Edit Member: {member?.name || 'Loading...'}
          </h3>
          <button 
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
            onClick={onClose}
            title="Close"
          >
            X
          </button>
        </div>
        
        {error && (
          <div style={{
            backgroundColor: '#fee2e2',
            color: '#991b1b',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        {fetching ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>Loading member data...</div>
        ) : (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Name</label>
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Email</label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={editForm.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Address</label>
              <textarea
                name="address"
                value={editForm.address}
                onChange={handleInputChange}
                rows="3"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px'
                }}
              />
            </div>


            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Membership Amount</label>
              <input
                              type="text"

                name="amount_paid_registration"
                value={editForm.amount_paid_registration}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>Subscription Amount</label>
              <input
                              type="text"

                name="amount_paid_subscription"
                value={editForm.amount_paid_subscription}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  name="member_true"
                  checked={editForm.member_true}
                  onChange={handleInputChange}
                />
                Active Member
              </label>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  name="amount_subscription"
                  checked={editForm.amount_subscription}
                  onChange={handleInputChange}
                />
                Subscription Active
              </label>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              gap: '12px',
              marginTop: '24px'
            }}>
              <button 
                onClick={onClose}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: loading ? '#94a3b8' : '#3b82f6',
                  color: 'white',
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};



export default MemberEditDialog;