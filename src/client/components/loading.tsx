import React from 'react';

export default function Loading({ showLoading = false }) {
  if (showLoading) {
    return (
      <div className="ats-loader">
        <div className="ats-loader__sprite"></div>
        <p>Loading...</p>
      </div>
    );
  }
  return null;
}
